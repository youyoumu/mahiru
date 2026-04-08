import type { Ctx } from "#/lib/ctx";
import type {
  ChatInputCommandInteraction,
  Message,
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

export interface PrefixExecuteOpts {
  message: Message;
  args: string[];
}

export interface Command {
  ctx: Ctx;
  execute(interaction: ChatInputCommandInteraction): unknown | Promise<unknown>;
  prefixExecute(opts: PrefixExecuteOpts): unknown | Promise<unknown>;
}

export interface CommandProto {
  new (opts: { ctx: Ctx }): Command;
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
}
