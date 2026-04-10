import type { LinkHandler } from "#/handler";
import type { Ctx } from "#/lib/ctx";
import type { Logger } from "pino";

import { env } from "#/env";
import { emojis } from "#/lib/constants";
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

    // When a reaction is received, check if the structure is partial
    if (reaction.partial) {
      // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
      try {
        await reaction.fetch();
      } catch (error) {
        console.error("Something went wrong when fetching the message:", error);
        // Return as `reaction.message.author` may be undefined/null
        return;
      }
    }

    if (reaction.emoji.name === emojis.link || reaction.emoji.name === emojis.book) {
      if (this.linkHandler.embededMessageStorage.get(reaction.message.id)) return;
      const hasBotReaction = reaction.users.cache.has(env.CLIENT_ID);
      if (!hasBotReaction) return;

      this.linkHandler.handle({ message: reaction.message, react: false, embed: true });
    }
  }
}
