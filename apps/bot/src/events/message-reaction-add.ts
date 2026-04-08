import type { Ctx } from "#/lib/ctx";

import { env } from "#/env";
import { BOOK_EMOJI, embededMessageStorage, handleLink, LINK_EMOJI } from "#/utils/handle-link";
import { MessageReaction, User, type PartialMessageReaction, type PartialUser } from "discord.js";

export class MessageReactionAdd {
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) {
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

    if (reaction.emoji.name === LINK_EMOJI || reaction.emoji.name === BOOK_EMOJI) {
      if (embededMessageStorage.get(reaction.message.id)) return;
      const hasBotReaction = reaction.users.cache.has(env.CLIENT_ID);
      if (!hasBotReaction) return;

      handleLink({ message: reaction.message, react: false, embed: true });
    }
  }
}
