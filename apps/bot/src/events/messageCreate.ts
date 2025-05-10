import commands from "#/commands";
import { handleLink } from "#/utils/handleLink";
import { getGuildPrefix, globalPrefix } from "#/utils/prefixStorage";
import { Events, Message } from "discord.js";

const shortcut: Record<string, string> = {
  m: "meme",
};

export default {
  name: Events.MessageCreate as const,
  async execute(message: Message) {
    if (message.author.bot) return;

    handleLink({ message, react: true, embed: false });

    let args: string[] = [];
    if (message.guild) {
      let prefix: string | undefined;

      const guildPrefix = await getGuildPrefix({
        discord_guild_id: message.guildId,
      });

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
