// Require the necessary discord.js classes
import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { env } from "./env";
import events from "./events";
import { hcWithType } from "@repo/backend/hc";
import { localhost } from "./utils/domain";

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

declare module "discord.js" {
  interface Client {
    hc: typeof hc;
  }
}

const hc = hcWithType(localhost);
client.hc = hc;

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

// events
client.once(events.ready.name, (client) => events.ready.execute(client));
client.on(events.interactionCreate.name, (interaction) =>
  events.interactionCreate.execute(interaction),
);
client.on(events.messageCreate.name, (message) =>
  events.messageCreate.execute(message),
);
