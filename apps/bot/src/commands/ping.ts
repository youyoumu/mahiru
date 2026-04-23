import type { Ctx } from "#/lib/ctx";
import type { Logger } from "pino";

import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import type { PrefixExecuteOpts } from "../lib/command";

import { Command } from "../lib/command";

export class Ping extends Command {
  static data = new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!");

  constructor(opts: { ctx: Ctx; log: Logger }) {
    super(opts);
  }

  async execute(interaction?: ChatInputCommandInteraction, messageCtx?: PrefixExecuteOpts) {
    const { message } = messageCtx ?? {};
    this.reply(interaction, message, "Pong!");
  }

  async handleButtonInteraction() {}
}
