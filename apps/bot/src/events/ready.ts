import { Client, Events } from "discord.js";

export default {
  name: Events.ClientReady as const,
  execute(client: Client) {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
  },
};
