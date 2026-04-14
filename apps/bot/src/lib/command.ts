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
 * Parses a message to extract the command name and arguments.
 * @param prefix - The command prefix to look for at the start of the content
 * @param content - The full message content
 * @returns An object with commandName and args, or null if parsing fails
 */
export function parseCommand(
  prefix: string,
  content: string,
): { commandName: string; args: string[] } | null {
  if (!content.startsWith(prefix)) return null;

  const contentAfterPrefix = content.slice(prefix.length).trim();
  if (!contentAfterPrefix) return null;

  const parts = contentAfterPrefix.split(/\s+/);
  const commandName = parts.shift()?.toLowerCase();
  if (!commandName) return null;

  return { commandName, args: parts };
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
