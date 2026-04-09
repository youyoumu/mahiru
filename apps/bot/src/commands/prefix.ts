import type { Ctx } from "#/lib/ctx";

import { DbSvc } from "#/lib/db";
import { schema } from "@repo/db";
import {
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import { eq } from "drizzle-orm";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

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

  private async getGuildPrefixEntry(discord_guild_id: string) {
    return await this.ctx.dbSvc.db.query.prefixes.findFirst({
      where(fields, operators) {
        return operators.eq(fields.discord_guild_id, discord_guild_id);
      },
    });
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
      interaction?.reply("⚠️ Invalid arguments");
      if (message?.channel.isSendable()) message.channel.send(codeBlock("change <new-prefix>"));
      return;
    }

    if (prefix.length > 2) {
      interaction?.reply("The maximum prefix length is 2 characters.");
      if (message?.channel.isSendable())
        message.channel.send("The maximum prefix length is 2 characters.");
      return;
    }

    const guildPrefix = await this.getGuildPrefixEntry(discord_guild_id);

    if (guildPrefix) {
      await this.ctx.dbSvc.db
        .update(schema.prefixes)
        .set({ prefix: prefix })
        .where(eq(schema.prefixes.id, guildPrefix.id));
    } else {
      await this.ctx.dbSvc.db.insert(schema.prefixes).values({
        discord_guild_id: discord_guild_id,
        prefix: prefix,
      });
    }
    this.ctx.dbSvc.getPrefixStorage().set(discord_guild_id, prefix);

    interaction?.reply(inlineCode(prefix));
    if (message?.channel.isSendable()) message.channel.send(inlineCode(prefix));
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
    const prefix = (await this.getGuildPrefixEntry(discord_guild_id))?.prefix ?? DbSvc.globalPrefix;

    interaction?.reply(inlineCode(prefix));
    if (message?.channel.isSendable()) message.channel.send(inlineCode(prefix));
  }

  private handleHelp({
    interaction,
    message,
  }: {
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    const embed = new EmbedBuilder()
      .setTitle("Prefix Help")
      .setColor("#fef3c6")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/1366671964500000778/555dfb9cf6265ae505041deeaac95b05",
      )
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> prefix current",
        value: "Display the current bot prefix for this server.",
      })
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> prefix change",
        value: "Change the bot prefix for this server. The maximum prefix length is 2 characters.",
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
};
