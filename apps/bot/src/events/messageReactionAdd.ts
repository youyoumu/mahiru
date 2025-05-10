import {
  Events,
  MessageReaction,
  User,
  type PartialMessageReaction,
  type PartialUser,
} from "discord.js";

export default {
  name: Events.MessageReactionAdd as const,
  async execute(
    reaction: MessageReaction | PartialMessageReaction,
    user: User | PartialUser,
  ) {
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

    // Now the message has been cached and is fully available
    console.log(
      `${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`,
    );
  },
};
