import type { Ctx } from "#/lib/ctx";
import type {
  ChatInputCommandInteraction,
  InteractionReplyOptions,
  Message,
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

import { MessagePayload } from "discord.js";

export interface PrefixExecuteOpts {
  message: Message;
  args: string[];
}

export interface Command {
  ctx: Ctx;
  execute(
    interaction?: ChatInputCommandInteraction,
    messageCtx?: PrefixExecuteOpts,
  ): Promise<unknown>;
}

export interface CommandProto {
  new (opts: { ctx: Ctx }): Command;
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
}

/**
 * Sends a reply to both slash command interaction and message context.
 * Useful for commands that support both interaction and prefix invocation.
 * @param interaction - The slash command interaction (optional)
 * @param message - The message context (optional)
 * @param content - The content to send (InteractionReplyOptions)
 */
export async function replyToSource(
  interaction: ChatInputCommandInteraction | undefined,
  message: Message | undefined,
  content: string | MessagePayload | InteractionReplyOptions,
): Promise<void> {
  interaction?.reply(content);
  if (message?.channel.isSendable()) {
    if (typeof content === "string") {
      message.channel.send(content);
    } else if (content instanceof MessagePayload) {
      message.channel.send(content);
    } else {
      const { embeds, files, components, content: textContent } = content;
      message.channel.send({ embeds, files, components, content: textContent });
    }
  }
}
