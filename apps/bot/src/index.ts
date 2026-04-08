import type { AppType } from "@repo/backend";

import { Client, GatewayIntentBits } from "discord.js";
import { hc } from "hono/client";

import { env } from "./env";
import events from "./events";

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
    hc: ReturnType<typeof hc<AppType>>;
  }
}

client.hc = hc<AppType>("");

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

// events
client.once(events.ready.name, (client) => events.ready.execute(client));
client.on(events.interactionCreate.name, (interaction) =>
  events.interactionCreate.execute(interaction),
);
client.on(events.messageCreate.name, (message) => events.messageCreate.execute(message));

client.on(events.messageReactionAdd.name, (reaction, user) =>
  events.messageReactionAdd.execute(reaction, user),
);
