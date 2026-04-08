import type { AppType } from "@repo/backend";

import { Events, Client, GatewayIntentBits } from "discord.js";
import { hc } from "hono/client";

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

declare module "discord.js" {
  interface Client {
    api: ReturnType<typeof hc<AppType>>;
  }
}

client.api = hc<AppType>("");

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

// events
client.once(Events.ClientReady, (client) => events.ready(ctx, client));
client.on(Events.InteractionCreate, (interaction) => events.interactionCreate(ctx, interaction));
client.on(Events.MessageCreate, (message) => events.messageCreate(ctx, message));
client.on(Events.MessageReactionAdd, (reaction, user) =>
  events.messageReactionAdd(ctx, reaction, user),
);
