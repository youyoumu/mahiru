import type { Ctx } from "#/lib/ctx";

import { getLoginUrl } from "#/lib/url";
import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

export const Login: CommandProto = class Login implements Command {
  static data = new SlashCommandBuilder()
    .setName("login")
    .setDescription("Get a link to log in to the Mahiru web app.");
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction?: ChatInputCommandInteraction, commandCtx?: PrefixExecuteOpts) {
    const { message } = commandCtx ?? {};
    const discord_user_id = interaction?.user.id ?? message?.author.id;
    if (!discord_user_id) return;

    const res = await this.ctx.api.admin.auth.token.$post({ json: { discord_user_id } });
    if (res.ok) {
      const { one_time_token } = await res.json();
      const loginUrl = getLoginUrl(one_time_token);
      const messageContent = `Open the following link in your browser to login to the Mahiru web app:\n${loginUrl}`;
      await interaction?.reply({
        content: messageContent,
        flags: MessageFlags.Ephemeral,
      });
      await message?.author.send({ content: messageContent });
      await message?.reply("Please check your DMs");
    }
  }
};
