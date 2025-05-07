import commands from "#/commands";
import { Events, Message } from "discord.js";
const globalPrefix = "!";

const shortcut: Record<string, string> = {
  m: "meme",
  meme: "meme",
};

export default {
  name: Events.MessageCreate as const,
  async execute(message: Message) {
    if (message.author.bot) return;

    let args: string[] = [];
    if (message.guild) {
      let prefix: string | undefined;

      if (message.content.startsWith(globalPrefix)) {
        prefix = globalPrefix;
      } else {
        // const guildPrefix = await prefixes.get(message.guild.id);
        const guildPrefix = "!";
        if (message.content.startsWith(guildPrefix)) prefix = guildPrefix;
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
    const command = shortcut[args?.shift()?.toLowerCase() ?? ""];
    if (command) {
      commands[command]?.prefixExecute({
        message,
        args,
      });
    }
  },
};
