import type { Ctx } from "#/lib/ctx";

import {
  ChatInputCommandInteraction,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

export const Help: CommandProto = class Help implements Command {
  static data = new SlashCommandBuilder().setName("help").setDescription("Explain all commands");
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction: ChatInputCommandInteraction) {
    return handleHelp({ ctx: this.ctx, interaction });
  }
  async prefixExecute({ message }: PrefixExecuteOpts) {
    return handleHelp({ ctx: this.ctx, message });
  }
};

async function handleHelp({
  ctx,
  interaction,
  message,
}: {
  ctx: Ctx;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}) {
  const discord_guild_id = message?.guildId ?? interaction?.guildId;
  const prefix = await ctx.dbSvc.getGuildPrefix(discord_guild_id);
  const embed = new EmbedBuilder()
    .setTitle("Help")
    .setColor("#fef3c6")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/1366671964500000778/555dfb9cf6265ae505041deeaac95b05",
    )
    .addFields({
      name: "<:azusarelaxed:1207544782952595508> help",
      value: "Show this message.",
    })
    .addFields({
      name: "<:azusarelaxed:1207544782952595508> ping",
      value: "Replies with Pong.",
    })
    .addFields({
      name: "<:azusarelaxed:1207544782952595508> login",
      value: "Get a link to log in to the Mahiru web app.",
    })
    .addFields({
      name: "<:azusarelaxed:1207544782952595508> meme",
      value: `Manage your meme collection. Use ${inlineCode("/meme help")} for details`,
    })
    .addFields({
      name: "<:azusarelaxed:1207544782952595508> prefix",
      value: `Manage the bot prefix for this server. Use ${inlineCode("/prefix help")} for details`,
    })
    .addFields({
      name: "\u200B",
      value: `Every slash command has its prefix counterpart. For example, ${inlineCode(prefix + "meme add")} is the same as ${inlineCode("/meme add")}.`,
    })
    .setFooter({
      text: "Mahiru",
    })
    .setTimestamp();

  interaction?.reply({ embeds: [embed] });
  if (message?.channel.isSendable())
    message.channel.send({
      embeds: [embed],
    });
}
