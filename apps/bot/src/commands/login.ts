import type { Ctx } from "#/lib/ctx";

import { webUrl } from "#/utils/webUrl";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "./Command";

export const Login: CommandProto = class Login implements Command {
  static data = new SlashCommandBuilder()
    .setName("login")
    .setDescription("Get a link to log in to the Mahiru web app.");
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction: ChatInputCommandInteraction) {
    const discord_user_id = interaction.user.id;

    const res = await this.ctx.api.admin.auth.token.$post({
      json: { discord_user_id },
    });

    if (res.ok) {
      const { one_time_token } = await res.json();

      return await interaction.reply(getLoginUrl(one_time_token));
    }

    await interaction.reply("Something went wrong");
  }

  async prefixExecute({ message }: PrefixExecuteOpts) {
    const discord_user_id = message.author.id;

    const res = await this.ctx.api.admin.auth.token.$post({
      json: { discord_user_id },
    });

    if (res.ok) {
      const { one_time_token } = await res.json();
      await message.author.send({
        content: getLoginUrl(one_time_token),
      });
      await message.reply("Please check your DMs");
    }
  }
};

function getLoginUrl(token: string) {
  const url = new URL(webUrl);
  url.pathname = "/sign_in";
  url.searchParams.set("one_time_token", token);
  return url.toString();
}
