import { Events, Message } from "discord.js";
const globalPrefix = "!";

export default {
  name: Events.MessageCreate as const,
  async execute(message: Message) {
    if (message.author.bot) return;

    let args: string[] | undefined;
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

    console.log("DEBUG[330]: args=", args);
    // get the first space-delimited argument after the prefix as the command
    const command = args?.shift()?.toLowerCase();
    console.log("DEBUG[327]: command=", command);
  },
};
