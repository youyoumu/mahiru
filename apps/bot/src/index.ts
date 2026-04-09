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

const log = createLogger({ level: "trace" }).child({ name: "main" });
const chatbotHandler = new handler.ChatbotHandler({ log: log.child({ name: "chatbot" }) });
const linkHandler = new handler.LinkHandler({ log: log.child({ name: "link" }) });

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

const dbSvc = new DbSvc();
const ctx = new Ctx({ api: hc<AppType>(env.BE_URL), dbSvc });
const commandsPair: Record<string, Command> = {
  [commands.Ping.data.name]: new commands.Ping({ ctx }),
  [commands.Meme.data.name]: new commands.Meme({ ctx }),
  [commands.Login.data.name]: new commands.Login({ ctx }),
  [commands.Prefix.data.name]: new commands.Prefix({ ctx }),
  [commands.Help.data.name]: new commands.Help({ ctx }),
};
const ready = new events.Ready({ ctx });
const interactionCreate = new events.InteractionCreate({ ctx, commandsPair });
const messageCreate = new events.MessageCreate({ ctx, commandsPair, chatbotHandler, linkHandler });
const messageReactionAdd = new events.MessageReactionAdd({ ctx, linkHandler });

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

// events
client.once(Events.ClientReady, (client) => ready.handler(client));
client.on(Events.InteractionCreate, (interaction) => interactionCreate.handler(interaction));
client.on(Events.MessageCreate, (message) => messageCreate.handler(message));
client.on(Events.MessageReactionAdd, (reaction, user) =>
  messageReactionAdd.handler(reaction, user),
);
