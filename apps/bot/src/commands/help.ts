import type { Ctx } from "#/lib/ctx";

import { colors, discordEmojis, imageLinks } from "#/lib/constants";
import {
  ChatInputCommandInteraction,
  EmbedBuilder,
  inlineCode,
  SlashCommandBuilder,
} from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

export const Help: CommandProto = class Help implements Command {
  static data = new SlashCommandBuilder().setName("help").setDescription("Explain all commands");
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction?: ChatInputCommandInteraction, commandCtx?: PrefixExecuteOpts) {
    const { message } = commandCtx ?? {};

    const discord_guild_id = message?.guildId ?? interaction?.guildId;
    const prefix = await this.ctx.dbSvc.getGuildPrefix(discord_guild_id);
    const embed = new EmbedBuilder({
      title: "Help",
      color: colors.pastelYellow,
      thumbnail: { url: imageLinks.avatar },
      fields: [
        {
          name: `${discordEmojis.azusarelaxed} help`,
          value: "Show this message.",
        },
        {
          name: `${discordEmojis.azusarelaxed} ping`,
          value: "Replies with Pong.",
        },
        {
          name: `${discordEmojis.azusarelaxed} login`,
          value: "Get a link to log in to the Mahiru web app.",
        },
        {
          name: `${discordEmojis.azusarelaxed} tag`,
          value: `Manage your tag collection. Use ${inlineCode("/tag help")} for details`,
        },
        {
          name: `${discordEmojis.azusarelaxed} prefix`,
          value: `Manage the bot prefix for this server. Use ${inlineCode("/prefix help")} for details`,
        },
        {
          name: "\u200B",
          value: `Every slash command has its prefix counterpart. For example, ${inlineCode(prefix + "tag")} is the same as ${inlineCode("/tag")}.`,
        },
      ],
      footer: {
        text: "Mahiru",
      },
    });

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }
};
