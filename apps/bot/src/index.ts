import type { AppType } from "@repo/backend";

import { Events, Client, GatewayIntentBits } from "discord.js";
import { hc } from "hono/client";

import type { Command } from "./lib/command";

import * as commands from "./commands";
import { env } from "./env";
import * as events from "./events";
import * as handler from "./handler";
import { Ctx } from "./lib/ctx";
import { DbSvc } from "./lib/db";
import { createLogger } from "./lib/logger";
import { Unblock } from "./lib/unblock";
import { deployCommands } from "./utils/deploy-commands";

if (process.argv.includes("--deploy-commands")) {
  deployCommands();
  process.exit(0);
}

const log = createLogger({ level: "trace" }).child({ name: "main" });

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

const ctx = new Ctx({
  api: hc<AppType>(env.BE_URL),
  dbSvc: new DbSvc(log.child({ name: "db" })),
  unblock: new Unblock(),
});

const commandsPair: Record<string, Command> = {
  [commands.Ping.data.name]: new commands.Ping({ ctx }),
  [commands.Tag.data.name]: new commands.Tag({ ctx }),
  [commands.Login.data.name]: new commands.Login({ ctx }),
  [commands.Prefix.data.name]: new commands.Prefix({ ctx }),
  [commands.Help.data.name]: new commands.Help({ ctx }),
  [commands.Chatbot.data.name]: new commands.Chatbot({ ctx }),
};

const chatbotHandler = new handler.ChatbotHandler({
  ctx,
  log: log.child({ name: "chatbot" }),
});
const nhenHandler = new handler.NhenHandler({ ctx, log: log.child({ name: "nhen" }) });
const linkHandler = new handler.LinkHandler({ log: log.child({ name: "link" }), nhenHandler });

const ready = new events.Ready({
  ctx,
  log: log.child({ name: "ready" }),
});
const interactionCreate = new events.InteractionCreate({
  ctx,
  log: log.child({ name: "interaction-create" }),
  commandsPair,
  nhenHandler,
});
const messageCreate = new events.MessageCreate({
  ctx,
  log: log.child({ name: "message-create" }),
  commandsPair,
  chatbotHandler,
  linkHandler,
});
const messageReactionAdd = new events.MessageReactionAdd({
  ctx,
  log: log.child({ name: "message-reaction-add" }),
  linkHandler,
});

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

// events
client.once(Events.ClientReady, (client) => ready.handler(client));
client.on(Events.InteractionCreate, (interaction) => interactionCreate.handler(interaction));
client.on(Events.MessageCreate, (message) => messageCreate.handler(message));
client.on(Events.MessageReactionAdd, (reaction, user) =>
  messageReactionAdd.handler(reaction, user),
);
