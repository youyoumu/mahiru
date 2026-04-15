import type { LinkHandler } from "#/handler";
import type { Command } from "#/lib/command";
import type { Ctx } from "#/lib/ctx";
import type { Logger } from "pino";

import { ChatbotHandler } from "#/handler/chatbot";
import { parseCommand } from "#/lib/command";
import { Events, Message } from "discord.js";

const shortcut: Record<string, string> = {
  t: "tag",
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
    const messageSlice = message.content?.slice(0, 100);
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

    const prefix = await this.ctx.dbSvc.getGuildPrefix(message.guildId);
    const parsedCommand = parseCommand(prefix, message.content);
    if (!parsedCommand) return;

    const { commandName, args } = parsedCommand;
    const resolvedCommandName = shortcut[commandName] ?? commandName;
    const selectedCommand = this.commandsPair[resolvedCommandName];
    if (!selectedCommand) return;

    selectedCommand.execute(undefined, { message, args }).catch((err) => {
      this.log.error(err);
    });
  }
}
