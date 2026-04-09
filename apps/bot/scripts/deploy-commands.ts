import { REST, Routes } from "discord.js";

import { Help, Login, Meme, Ping, Prefix } from "../src/commands";
import { env } from "../src/env";

export async function deployCommands() {
  const validCommands = [Ping.data, Meme.data, Login.data, Prefix.data, Help.data].map((data) =>
    data.toJSON(),
  );

  const isAllGuilds = process.argv.includes("--all-guilds");

  // Construct and prepare an instance of the REST module
  const rest = new REST().setToken(env.DISCORD_TOKEN);

  // and deploy your commands!
  try {
    console.log(`Started refreshing ${validCommands.length} application (/) commands.`);

    // The put method is used to fully refresh all commands in the guild with the current set
    console.log("DEBUG[374]: isAllGuilds=", isAllGuilds);
    const data = isAllGuilds
      ? await rest.put(Routes.applicationCommands(env.CLIENT_ID), {
          body: validCommands,
        })
      : await rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID), {
          body: validCommands,
        });

    if (Array.isArray(data)) {
      console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } else {
      console.log(`Successfully reloaded application (/) commands.`);
    }
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
}

deployCommands();
