import type { AppType } from "@repo/backend";

import { Events, Client, GatewayIntentBits } from "discord.js";
import { hc } from "hono/client";

import { createCommandsPair } from "./commands";
import { env } from "./env";
import { InteractionCreate, MessageCreate, MessageReactionAdd, Ready } from "./events";
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
const commandsPair = createCommandsPair(ctx);
const ready = new Ready({ ctx });
const interactionCreate = new InteractionCreate({ ctx, commandsPair });
const messageCreate = new MessageCreate({ ctx, commandsPair });
const messageReactionAdd = new MessageReactionAdd({ ctx });

declare module "discord.js" {
  interface Client {
    api: ReturnType<typeof hc<AppType>>;
  }
}

client.api = hc<AppType>("");

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

// events
client.once(Events.ClientReady, (client) => ready.execute(client));
client.on(Events.InteractionCreate, (interaction) => interactionCreate.execute(interaction));
client.on(Events.MessageCreate, (message) => messageCreate.execute(message));
client.on(Events.MessageReactionAdd, (reaction, user) =>
  messageReactionAdd.execute(reaction, user),
);
