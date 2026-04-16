import { Help, Login, Ping, Prefix, Tag, Chatbot } from "#/commands";
import { env } from "#/env";
import { createLogger } from "#/lib/logger";
import { REST, Routes } from "discord.js";

export async function deployCommands() {
  const log = createLogger({ level: "trace" }).child({ name: "deploy-commands" });
  const validCommands = [Ping.data, Tag.data, Login.data, Prefix.data, Help.data, Chatbot.data].map(
    (data) => data.toJSON(),
  );

  const rest = new REST().setToken(env.DISCORD_TOKEN);

  try {
    log.info(`Started refreshing ${validCommands.length} application (/) commands.`);
    log.info(`DEV=${env.DEV}`);
    let data: unknown | undefined;
    if (!env.DEV) {
      data = await rest.put(Routes.applicationCommands(env.CLIENT_ID), {
        body: validCommands,
      });
    } else {
      if (env.DEV_GUILD_ID) {
        data = await rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.DEV_GUILD_ID), {
          body: validCommands,
        });
      } else {
        throw new Error("DEV_GUILD_ID is not set");
      }
    }

    if (Array.isArray(data)) {
      log.info(`Successfully reloaded ${data.length} application (/) commands.`);
    } else {
      log.info(`Successfully reloaded application (/) commands.`);
    }
  } catch (error) {
    log.error(error);
  }
}
