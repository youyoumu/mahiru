import type { Ctx } from "#/lib/ctx";

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

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

import { replyToSource } from "../lib/command";

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

export const Prefix: CommandProto = class Prefix implements Command {
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
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
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
        this.handleChange({ discord_guild_id, prefix: newPrefix, interaction, message });
        break;
      }
      case "current": {
        this.handleCurrent({ discord_guild_id, interaction, message });
        break;
      }
      case "help": {
        this.handleHelp({ interaction, message });
        break;
      }
      default: {
        this.handleCurrent({ discord_guild_id, interaction, message });
      }
    }
  }

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
      replyToSource(interaction, message, "⚠️ Invalid arguments");
      replyToSource(interaction, message, codeBlock("change <new-prefix>"));
      return;
    }

    if (prefix.length > 2) {
      replyToSource(interaction, message, "The maximum prefix length is 2 characters.");
      return;
    }

    await this.ctx.dbSvc.changeGuildPrefix(discord_guild_id, prefix);

    replyToSource(interaction, message, inlineCode(prefix));
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

    replyToSource(interaction, message, inlineCode(prefix));
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

    replyToSource(interaction, message, { embeds: [embed] });
  }
};
