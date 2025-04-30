import "dotenv/config";
import { REST, Routes } from "discord.js";
import { env } from "./env";
import commands from "./commands";

const validCommands = [];

for (const command of Object.values(commands)) {
  if ("data" in command && "execute" in command) {
    validCommands.push(command.data.toJSON());
  } else {
    console.log(
      "some command is missing a required 'data' or 'execute' property",
    );
  }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(env.DISCORD_TOKEN);

// and deploy your commands!
try {
  console.log(
    `Started refreshing ${validCommands.length} application (/) commands.`,
  );

  // The put method is used to fully refresh all commands in the guild with the current set
  const data = await rest.put(
    Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID),
    { body: validCommands },
  );

  // for all guilds
  // const data2 = (await rest.put(Routes.applicationCommands(env.CLIENT_ID), {
  //   body: commands,
  // })) as any[];

  if (Array.isArray(data)) {
    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`,
    );
  } else {
    console.log(`Successfully reloaded application (/) commands.`);
  }
} catch (error) {
  // And of course, make sure you catch and log any errors!
  console.error(error);
}
