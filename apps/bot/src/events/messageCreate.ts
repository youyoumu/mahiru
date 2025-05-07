import commands from "#/commands";
import { getPrefixStorage, globalPrefix } from "#/utils/prefixStorage";
import db from "@repo/db";
import { Events, Message } from "discord.js";

const shortcut: Record<string, string> = {
  m: "meme",
};

export default {
  name: Events.MessageCreate as const,
  async execute(message: Message) {
    if (message.author.bot) return;

    let args: string[] = [];
    if (message.guild) {
      let prefix: string | undefined;

      const guildPrefix = await getGuildPrefix({ message });

      if (guildPrefix && message.content.startsWith(guildPrefix)) {
        prefix = guildPrefix;
      }

      // if we found a prefix, setup args; otherwise, this isn't a command
      if (!prefix) return;
      args = message.content.slice(prefix.length).trim().split(/\s+/);
    } else {
      // handle DMs
      const slice = message.content.startsWith(globalPrefix)
        ? globalPrefix.length
        : 0;
      args = message.content.slice(slice).split(/\s+/);
    }

    // get the first space-delimited argument after the prefix as the command
    const command = args?.shift()?.toLowerCase();
    const commandShortcut = shortcut[command ?? ""];
    if (command) {
      commands[commandShortcut ?? command]?.prefixExecute({
        message,
        args,
      });
    }
  },
};

async function getGuildPrefix({
  message,
}: {
  message: Message;
}): Promise<string | undefined> {
  const discord_guild_id = message.guild?.id;

  const prefixFromStorage = getPrefixStorage().get(discord_guild_id);
  if (prefixFromStorage) return prefixFromStorage;

  const prefix =
    (
      await db.query.prefixes.findFirst({
        where(fields, operators) {
          return operators.eq(fields.discord_guild_id, discord_guild_id ?? "");
        },
      })
    )?.prefix ?? globalPrefix;

  if (prefix && discord_guild_id) {
    getPrefixStorage().set(discord_guild_id, prefix);
    return prefix;
  }
}
