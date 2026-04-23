import type { Ctx } from "#/lib/ctx";
import type { Logger } from "pino";

import { colors, discordEmojis, imageLinks } from "#/lib/constants";
import { DbSvc } from "#/lib/db";
import {
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";

import type { PrefixExecuteOpts } from "../lib/command";

import { Command } from "../lib/command";

const action = {
  current: "current",
  change: "change",
  help: "help",
} as const;

const param = {
  key: "key",
  value: "value",
  ["new-prefix"]: "new-prefix",
};

export class Prefix extends Command {
  static data = new SlashCommandBuilder()
    .setName("prefix")
    .setDescription("Manage discord prefix for this server")

    .addSubcommand((subCommand) =>
      subCommand
        .setName(action.change)
        .setDescription("Change the bot prefix for this server")
        .addStringOption((option) =>
          option
            .setName(param["new-prefix"])
            .setDescription("New prefix")
            .setMaxLength(2)
            .setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand.setName(action.current).setDescription("Show current bot prefix for this server"),
    )

    .addSubcommand((subCommand) =>
      subCommand.setName(action.help).setDescription("Explain prefix command"),
    );

  constructor(opts: { ctx: Ctx; log: Logger }) {
    super(opts);
  }

  async execute(interaction?: ChatInputCommandInteraction, messageCtx?: PrefixExecuteOpts) {
    const { message, args } = messageCtx ?? {};
    const selectedAction = (interaction?.options.getSubcommand() ??
      args?.[0]) as keyof typeof action;
    const newPrefix = interaction?.options.getString(param["new-prefix"]) ?? args?.[1];
    const discord_guild_id = interaction?.guildId ?? message?.guildId;
    if (!discord_guild_id) return;

    switch (selectedAction) {
      case "change": {
        await this.handleChange({ discord_guild_id, prefix: newPrefix, interaction, message });
        break;
      }
      case "current": {
        await this.handleCurrent({ discord_guild_id, interaction, message });
        break;
      }
      case "help": {
        this.handleHelp({ interaction, message });
        break;
      }
      default: {
        await this.handleCurrent({ discord_guild_id, interaction, message });
      }
    }
  }

  async handleButtonInteraction() {}

  private async handleChange({
    discord_guild_id,
    prefix,
    interaction,
    message,
  }: {
    discord_guild_id: string;
    prefix: string | undefined;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    if (!prefix) {
      this.reply(interaction, message, "⚠️ Invalid arguments");
      this.reply(interaction, message, codeBlock("change <new-prefix>"));
      return;
    }

    if (prefix.length > 2) {
      this.reply(interaction, message, "The maximum prefix length is 2 characters.");
      return;
    }

    await this.ctx.dbSvc.changeGuildPrefix(discord_guild_id, prefix);

    this.reply(interaction, message, inlineCode(prefix));
  }

  private async handleCurrent({
    discord_guild_id,
    interaction,
    message,
  }: {
    discord_guild_id: string;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    const prefix =
      (await this.ctx.dbSvc.getGuildPrefixEntry(discord_guild_id))?.prefix ?? DbSvc.globalPrefix;

    this.reply(interaction, message, inlineCode(prefix));
  }

  private handleHelp({
    interaction,
    message,
  }: {
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    const embed = new EmbedBuilder({
      title: "Prefix Help",
      color: colors.pastelYellow,
      thumbnail: { url: imageLinks.avatar },
      fields: [
        {
          name: `${discordEmojis.azusarelaxed} prefix current`,
          value: "Display the current bot prefix for this server.",
        },
        {
          name: `${discordEmojis.azusarelaxed} prefix change`,
          value:
            "Change the bot prefix for this server. The maximum prefix length is 2 characters.",
        },
      ],
      footer: {
        text: "Mahiru",
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }
}
