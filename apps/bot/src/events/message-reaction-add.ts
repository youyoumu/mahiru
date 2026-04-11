import type { LinkHandler } from "#/handler";
import type { Ctx } from "#/lib/ctx";
import type { Logger } from "pino";

import { env } from "#/env";
import { MessageReaction, User, type PartialMessageReaction, type PartialUser } from "discord.js";

export class MessageReactionAdd {
  ctx: Ctx;
  log: Logger;
  linkHandler: LinkHandler;

  constructor(opts: { ctx: Ctx; log: Logger; linkHandler: LinkHandler }) {
    this.ctx = opts.ctx;
    this.log = opts.log;
    this.linkHandler = opts.linkHandler;
  }

  async handler(reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) {
    const messageSlice = reaction.message.content?.slice(0, 30);
    const guildName = reaction.message.guild?.name;
    const guildPreview = guildName ? `[${guildName}] ` : "";
    this.log.trace(`${guildPreview}${user.username} (${reaction.emoji.name}): ${messageSlice}`);
    if (user.id === env.CLIENT_ID || user.id !== reaction.message.author?.id) return;

    this.linkHandler.handleMessageReactionAdd(reaction)?.catch((err) => {
      this.log.error(err);
    });
  }
}
