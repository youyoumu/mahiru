import { Help, Login, Ping, Prefix, Tag, Chatbot } from "#/commands";
import { env } from "#/env";
import { createLogger } from "#/lib/logger";
import { REST, Routes } from "discord.js";

export async function deployCommands() {
  const log = createLogger({ level: "trace" }).child({ name: "deploy-commands" });
  const commands = [Ping.data, Tag.data, Login.data, Prefix.data, Help.data, Chatbot.data].map(
    (data) => data.toJSON(),
  );
  log.info(`Refreshing ${commands.length} application (/) commands.`);

  const rest = new REST().setToken(env.DISCORD_TOKEN);

  try {
    let data: unknown;
    if (!env.DEV) {
      log.info(`Updating for all guilds`);
      data = await rest.put(Routes.applicationCommands(env.CLIENT_ID), {
        body: commands,
      });
    } else {
      if (env.DEV_GUILD_ID) {
        await rest.put(Routes.applicationCommands(env.CLIENT_ID), {
          body: [],
        });
        log.info(`Updating for guild ${env.DEV_GUILD_ID}`);
        data = await rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.DEV_GUILD_ID), {
          body: commands,
        });
      } else {
        throw new Error("DEV_GUILD_ID is not set");
      }
    }

    if (Array.isArray(data)) {
      log.info(`Successfully reloaded ${data.length} application (/) commands.`);
    } else {
      throw new Error("Failed to reload application (/) commands.");
    }
  } catch (error) {
    log.error(error);
  }
}
