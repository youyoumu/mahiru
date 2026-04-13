import { createLogger } from "#/lib/logger";
import { REST, Routes } from "discord.js";

import { Help, Login, Ping, Prefix, Tag, Chatbot } from "../src/commands";
import { env } from "../src/env";

export async function deployCommands() {
  const log = createLogger({ level: "trace" }).child({ name: "deploy-commands" });
  const validCommands = [Ping.data, Tag.data, Login.data, Prefix.data, Help.data, Chatbot.data].map(
    (data) => data.toJSON(),
  );

  const isAllGuilds = process.argv.includes("--all-guilds");
  const rest = new REST().setToken(env.DISCORD_TOKEN);

  try {
    log.info(`Started refreshing ${validCommands.length} application (/) commands.`);
    log.info(`isAllGuilds=${isAllGuilds}`);
    const data = isAllGuilds
      ? await rest.put(Routes.applicationCommands(env.CLIENT_ID), {
          body: validCommands,
        })
      : await rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID), {
          body: validCommands,
        });

    if (Array.isArray(data)) {
      log.info(`Successfully reloaded ${data.length} application (/) commands.`);
    } else {
      log.info(`Successfully reloaded application (/) commands.`);
    }
  } catch (error) {
    log.error(error);
  }
}

deployCommands();
