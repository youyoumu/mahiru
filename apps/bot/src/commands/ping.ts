import type { Ctx } from "#/lib/ctx";

import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";
import { replyToSource } from "../lib/command";

export const Ping: CommandProto = class Ping implements Command {
  static data = new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!");
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction?: ChatInputCommandInteraction, messageCtx?: PrefixExecuteOpts) {
    const { message } = messageCtx ?? {};
    replyToSource(interaction, message, "Pong!");
  }
};
