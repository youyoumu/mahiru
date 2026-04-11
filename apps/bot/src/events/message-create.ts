import type { LinkHandler } from "#/handler";
import type { Command } from "#/lib/command";
import type { Ctx } from "#/lib/ctx";
import type { Logger } from "pino";

import { ChatbotHandler } from "#/handler/chatbot";
import { DbSvc } from "#/lib/db";
import { Events, Message } from "discord.js";

const shortcut: Record<string, string> = {
  t: "tags",
};

export class MessageCreate {
  ctx: Ctx;
  log: Logger;
  commandsPair: Record<string, Command>;
  chatbotHandler: ChatbotHandler;
  linkHandler: LinkHandler;

  constructor(opts: {
    ctx: Ctx;
    log: Logger;
    commandsPair: Record<string, Command>;
    chatbotHandler: ChatbotHandler;
    linkHandler: LinkHandler;
  }) {
    this.ctx = opts.ctx;
    this.log = opts.log;
    this.commandsPair = opts.commandsPair;
    this.chatbotHandler = opts.chatbotHandler;
    this.linkHandler = opts.linkHandler;
  }

  async handler(message: Message) {
    const messageSlice = message.content?.slice(0, 30);
    const guildName = message.guild?.name;
    const guildPreview = guildName ? `[${guildName}] ` : "";
    this.log.trace(`${guildPreview}${message.author.username}: ${messageSlice}`);
    if (message.author.bot) return;

    this.linkHandler.handle(Events.MessageCreate, message).catch((err) => {
      this.log.error(err);
    });
    this.chatbotHandler.handle({ message }).catch((err) => {
      this.log.error(err);
    });

    let args: string[] = [];
    if (message.guild) {
      let prefix: string | undefined;
      const guildPrefix = await this.ctx.dbSvc.getGuildPrefix(message.guildId);
      if (guildPrefix && message.content.startsWith(guildPrefix)) {
        prefix = guildPrefix;
      }
      // if we found a prefix, setup args; otherwise, this isn't a command
      if (!prefix) return;
      args = message.content.slice(prefix.length).trim().split(/\s+/);
    } else {
      // handle DMs
      const slice = message.content.startsWith(DbSvc.globalPrefix) ? DbSvc.globalPrefix.length : 0;
      args = message.content.slice(slice).split(/\s+/);
    }

    // get the first space-delimited argument after the prefix as the command
    const command = args?.shift()?.toLowerCase();
    const commandShortcut = shortcut[command ?? ""];
    if (command) {
      const selectedCommand = this.commandsPair[commandShortcut ?? command];
      if (!selectedCommand) return;
      selectedCommand.execute(undefined, { message, args }).catch((err) => {
        this.log.error(err);
      });
    }
  }
}
