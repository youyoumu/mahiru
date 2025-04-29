// Require the necessary discord.js classes
import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { env } from "./env";
import events from "./events";

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

client.once(events.ready.name, (client) => events.ready.execute(client));

client.on(events.interactionCreate.name, (interaction) =>
  events.interactionCreate.execute(interaction),
);
