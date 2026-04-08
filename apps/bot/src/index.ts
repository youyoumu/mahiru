import type { AppType } from "@repo/backend";

import { Events, Client, GatewayIntentBits } from "discord.js";
import { hc } from "hono/client";

import type { Command } from "./commands/Command";

import * as commands from "./commands";
import { env } from "./env";
import * as events from "./events";
import { Ctx } from "./lib/ctx";

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

const ctx = new Ctx({ api: hc<AppType>("") });
const commandsPair: Record<string, Command> = {
  [commands.Ping.data.name]: new commands.Ping({ ctx }),
  [commands.Meme.data.name]: new commands.Meme({ ctx }),
  [commands.Login.data.name]: new commands.Login({ ctx }),
  [commands.Prefix.data.name]: new commands.Prefix({ ctx }),
  [commands.Help.data.name]: new commands.Help({ ctx }),
};
const ready = new events.Ready({ ctx });
const interactionCreate = new events.InteractionCreate({ ctx, commandsPair });
const messageCreate = new events.MessageCreate({ ctx, commandsPair });
const messageReactionAdd = new events.MessageReactionAdd({ ctx });

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

// events
client.once(Events.ClientReady, (client) => ready.execute(client));
client.on(Events.InteractionCreate, (interaction) => interactionCreate.execute(interaction));
client.on(Events.MessageCreate, (message) => messageCreate.execute(message));
client.on(Events.MessageReactionAdd, (reaction, user) =>
  messageReactionAdd.execute(reaction, user),
);
