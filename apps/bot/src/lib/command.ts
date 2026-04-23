import type { Ctx } from "#/lib/ctx";
import type {
  AttachmentBuilder,
  ButtonInteraction,
  ChatInputCommandInteraction,
  EmbedBuilder,
  Message,
} from "discord.js";
import type { Logger } from "pino";

export interface PrefixExecuteOpts {
  message: Message;
  args: string[];
}

export abstract class Command {
  ctx: Ctx;
  log: Logger;

  constructor(opts: { ctx: Ctx; log: Logger }) {
    this.ctx = opts.ctx;
    this.log = opts.log;
  }

  abstract execute(
    interaction?: ChatInputCommandInteraction,
    messageCtx?: PrefixExecuteOpts,
  ): Promise<unknown>;

  abstract handleButtonInteraction(interaction: ButtonInteraction): Promise<unknown>;

  /**
   * Sends a reply to both slash command interaction and message context.
   * Useful for commands that support both interaction and prefix invocation.
   * @param interaction - The slash command interaction (optional)
   * @param message - The message context (optional)
   * @param content - The content to send (InteractionReplyOptions)
   */
  reply(
    interaction: ChatInputCommandInteraction | undefined,
    message: Message | undefined,
    content:
      | string
      | {
          content?: string;
          embeds?: EmbedBuilder[];
          files?: AttachmentBuilder[];
        },
  ) {
    const reply = async () => {
      if (interaction?.deferred || interaction?.replied) {
        await interaction.editReply(content);
      } else {
        await interaction?.reply(content);
      }
      if (message?.channel.isSendable()) {
        await message.channel.send(content);
      }
    };
    reply().catch((e) => {
      this.log.error(e);
    });
  }
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
