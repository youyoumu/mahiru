import type { Command } from "#/lib/command";
import type { Ctx } from "#/lib/ctx";

import { handleChatbot } from "#/feature/chatbot";
import { handleLink } from "#/utils/handle-link";
import { getGuildPrefix, globalPrefix } from "#/utils/prefix-storage";
import { Message } from "discord.js";

const shortcut: Record<string, string> = {
  m: "meme",
};

export class MessageCreate {
  ctx: Ctx;
  commandsPair: Record<string, Command>;

  constructor(opts: { ctx: Ctx; commandsPair: Record<string, Command> }) {
    this.ctx = opts.ctx;
    this.commandsPair = opts.commandsPair;
  }

  async execute(message: Message) {
    console.log("Message:", message.member?.id, message.guildId, message.content);
    if (message.author.bot) return;

    handleLink({ message, react: true, embed: false });
    handleChatbot({ message });

    let args: string[] = [];
    if (message.guild) {
      let prefix: string | undefined;

      const guildPrefix = await getGuildPrefix({
        db: this.ctx.db,
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
      const slice = message.content.startsWith(globalPrefix) ? globalPrefix.length : 0;
      args = message.content.slice(slice).split(/\s+/);
    }

    // get the first space-delimited argument after the prefix as the command
    const command = args?.shift()?.toLowerCase();
    const commandShortcut = shortcut[command ?? ""];
    if (command) {
      const selectedCommand = this.commandsPair[commandShortcut ?? command];
      if (!selectedCommand) return;
      await selectedCommand.prefixExecute({
        message,
        args,
      });
    }
  }
}
