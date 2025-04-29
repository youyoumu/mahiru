import { REST, Routes } from "discord.js";
import ping from "./commands/utility/ping";
import { env } from "./env";

const commands = [];

const allCommands = [ping];
for (const command of allCommands) {
  if ("data" in command && "execute" in command) {
    commands.push(command.data.toJSON());
  } else {
    console.log(
      "some command is missing a required 'data' or 'execute' property",
    );
  }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(env.DISCORD_TOKEN);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`,
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = (await rest.put(
      Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID),
      { body: commands },
    )) as any[];

    // for all guilds
    // const data2 = (await rest.put(Routes.applicationCommands(env.CLIENT_ID), {
    //   body: commands,
    // })) as any[];

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`,
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
