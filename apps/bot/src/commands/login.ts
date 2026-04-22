import type { Ctx } from "#/lib/ctx";

import { colors } from "#/lib/constants";
import { getLoginUrl } from "#/lib/url";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  ChatInputCommandInteraction,
  EmbedBuilder,
  MessageFlags,
  SlashCommandBuilder,
} from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

export const Login: CommandProto = class Login implements Command {
  static data = new SlashCommandBuilder()
    .setName("login")
    .setDescription("Get a link to log in to the Mahiru web app.");
  ctx: Ctx;
  loginMessages = new Set<string>();

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction?: ChatInputCommandInteraction, commandCtx?: PrefixExecuteOpts) {
    const { message } = commandCtx ?? {};

    if (message) {
      const embed = new EmbedBuilder({
        title: "Login to Mahiru",
        description: "Click the button below to get your one-time login link.",
        color: colors.pastelYellow,
      });
      const button = new ButtonBuilder({
        customId: Login.data.name,
        label: "Login",
        style: ButtonStyle.Secondary,
        emoji: "🔑",
      });
      const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);
      const messageResult = await message.reply({ embeds: [embed], components: [row] });
      this.loginMessages.add(messageResult.id);
    }

    if (interaction) {
      await this.sendLoginLink(interaction);
    }
  }

  async handleButtonInteraction(interaction: ButtonInteraction) {
    const message = interaction.message;
    if (this.loginMessages.has(message.id)) {
      await this.sendLoginLink(interaction);
    }
  }

  async sendLoginLink(interaction: ButtonInteraction | ChatInputCommandInteraction) {
    const discord_user_id = interaction?.user.id;
    if (!discord_user_id) return;
    const res = await this.ctx.api.admin.auth.token.$post({ json: { discord_user_id } });
    if (!res.ok) return;
    const { one_time_token } = await res.json();
    const loginUrl = getLoginUrl(one_time_token);
    const messageContent = `Open the following link in your browser to login to the Mahiru web app:\n${loginUrl}`;
    await interaction?.reply({
      content: messageContent,
      flags: MessageFlags.Ephemeral,
    });
  }
};
