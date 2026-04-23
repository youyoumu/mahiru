import type { Ctx } from "#/lib/ctx";
import type {
  ButtonInteraction,
  ChatInputCommandInteraction,
  InteractionEditReplyOptions,
  InteractionReplyOptions,
  Message,
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

import { MessagePayload } from "discord.js";

import { createLogger } from "./logger";

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
  handleButtonInteraction?(interaction: ButtonInteraction): Promise<unknown>;
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
 * Extracts the trailing parameter from content after skipping known command words.
 * @param content - The full message content (e.g. "!chatbot behavior set hello world")
 * @param commandPattern - The known command words to skip (e.g. ["behavior", "set"])
 * @returns The trailing parameter text, or undefined if content doesn't match
 */
export function extractTrailingParam(
  content: string | undefined,
  commandPattern: string[] | undefined,
): string | undefined {
  if (!content) return undefined;
  if (!commandPattern) return undefined;
  const escaped = commandPattern.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`^.*?${escaped.map((w) => `${w}\\s+`).join("")}(.*)$`, "s");
  const match = content.match(regex);
  return match?.[1];
}

//TODO: use from param or instance
const log = createLogger().child({ name: "reply-to-source" });

/**
 * Sends a reply to both slash command interaction and message context.
 * Useful for commands that support both interaction and prefix invocation.
 * @param interaction - The slash command interaction (optional)
 * @param message - The message context (optional)
 * @param content - The content to send (InteractionReplyOptions)
 */
export function replyToSource(
  interaction: ChatInputCommandInteraction | undefined,
  message: Message | undefined,
  content: string | MessagePayload | InteractionReplyOptions,
) {
  const reply = async () => {
    if (interaction?.deferred || interaction?.replied) {
      await interaction.editReply(content as InteractionEditReplyOptions);
    } else {
      await interaction?.reply(content);
    }
    if (message?.channel.isSendable()) {
      if (typeof content === "string") {
        await message.channel.send(content);
      } else if (content instanceof MessagePayload) {
        await message.channel.send(content);
      } else {
        const { embeds, files, components, content: textContent } = content;
        await message.channel.send({ embeds, files, components, content: textContent });
      }
    }
  };
  reply().catch((e) => {
    log.error(e);
  });
}
