import type { Ctx } from "#/lib/ctx";

import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "./Command";

export const Ping: CommandProto = class Ping implements Command {
  static data = new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!");
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply("Pong!");
  }

  async prefixExecute({ message }: PrefixExecuteOpts) {
    if (message.channel.isSendable()) message.channel.send("Pong!");
  }
};
