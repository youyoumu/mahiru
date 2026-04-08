import type { AppType } from "@repo/backend";

import { Events, Client, GatewayIntentBits } from "discord.js";
import { hc } from "hono/client";

import { env } from "./env";
import * as events from "./events";

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

declare module "discord.js" {
  interface Client {
    api: ReturnType<typeof hc<AppType>>;
  }
}

client.api = hc<AppType>("");

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

// events
client.once(Events.ClientReady, events.ready);
client.on(Events.InteractionCreate, events.interactionCreate);
client.on(Events.MessageCreate, events.messageCreate);
client.on(Events.MessageReactionAdd, events.messageReactionAdd);
