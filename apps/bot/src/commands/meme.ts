import type { Ctx } from "#/lib/ctx";

import { getListUrl } from "#/lib/url";
import {
  bold,
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

const action = {
  add: "add",
  drop: "drop",
  list: "list",
  remove: "remove",
  help: "help",
} as const;

const param = {
  key: "key",
  value: "value",
};

export const Meme: CommandProto = class Meme implements Command {
  static data = new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Manage your meme collections")

    .addSubcommand((subCommand) =>
      subCommand
        .setName(action.add)
        .setDescription("Add a meme to your collection.")
        .addStringOption((option) =>
          option
            .setName(param.key)
            .setDescription("Key to retrieve the meme")
            .setMaxLength(32)
            .setRequired(true),
        )
        .addStringOption((option) =>
          option.setName(param.value).setDescription("Text or link").setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(action.drop)
        .setDescription("Drop a meme from your collection or the server's collection.")
        .addStringOption((option) =>
          option
            .setName(param.key)
            .setDescription("Key to retrieve the meme")
            .setMaxLength(32)
            .setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(action.list)
        .setDescription(
          "List all memes that can be drop, including those from both the user and server collections.",
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(action.remove)
        .setDescription("Remove a meme from your collection and/or the server's collection.")
        .addStringOption((option) =>
          option
            .setName(param.key)
            .setDescription("Key to retrieve the meme")
            .setMaxLength(32)
            .setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand.setName(action.help).setDescription("Explain meme command"),
    );
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction?: ChatInputCommandInteraction, commandCtx?: PrefixExecuteOpts) {
    const { message, args } = commandCtx ?? {};
    const selectedAction = (interaction?.options.getSubcommand() ?? args?.[0]) as
      | keyof typeof action
      | undefined;
    const key = interaction?.options.getString(param.key) ?? args?.[1];
    const value =
      interaction?.options.getString(param.value) ??
      message?.content.split(`${key} `).slice(1).join(`${key} `).trim();
    const discord_user_id = interaction?.user.id ?? message?.author.id;
    const discord_guild_id = interaction?.guildId ?? message?.guildId ?? null;
    if (!discord_user_id) return;

    switch (selectedAction) {
      case "add": {
        this.handleAdd({ discord_guild_id, discord_user_id, key, value, interaction, message });
        break;
      }
      case "drop": {
        this.handleDrop({ discord_guild_id, discord_user_id, key, interaction, message });
        break;
      }
      case "list": {
        this.handleList({ discord_guild_id, discord_user_id, interaction, message });
        break;
      }
      case "remove": {
        this.handleRemove({ discord_guild_id, discord_user_id, key, interaction, message });
        break;
      }
      case "help": {
        this.handleHelp({ interaction, message });
        break;
      }
      default: {
        const key = args?.[0];
        if (key) this.handleDrop({ discord_guild_id, discord_user_id, key, message });
      }
    }
  }

  private async handleDrop({
    discord_guild_id,
    discord_user_id,
    key,
    interaction,
    message,
  }: {
    discord_guild_id: string | undefined | null;
    discord_user_id: string;
    key: string | undefined;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    if (!key) {
      interaction?.reply("⚠️ Invalid arguments");
      if (message?.channel.isSendable()) message.channel.send(codeBlock("drop <key>"));
      return;
    }

    const meme = await this.ctx.dbSvc.getMeme(key, discord_user_id, discord_guild_id);
    if (meme) {
      interaction?.reply(meme.value);
      if (message?.channel.isSendable()) message?.channel.send(meme.value);
      return;
    }

    const unknownKeyMessage = "⚠️ Unknown Key";
    interaction?.reply(unknownKeyMessage);
    if (message?.channel.isSendable()) message?.channel.send(unknownKeyMessage);
  }

  private async handleAdd({
    discord_guild_id,
    discord_user_id,
    key,
    value,
    interaction,
    message,
  }: {
    discord_guild_id: string | undefined | null;
    discord_user_id: string;
    key: string | undefined;
    value: string | undefined;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    if (!key || !value) {
      interaction?.reply("⚠️ Invalid arguments");
      if (message?.channel.isSendable()) message.channel.send(codeBlock("add <key> <value>"));
      return;
    }

    if (key.length > 32) {
      interaction?.reply("The maximum key length is 32 characters.");
      if (message?.channel.isSendable())
        message.channel.send("The maximum key length is 32 characters.");
      return;
    }

    await this.ctx.dbSvc.addMeme(key, value, discord_user_id, discord_guild_id);

    interaction?.reply(bold(key) + "\n\n" + value);
    if (message?.channel.isSendable()) message.channel.send(bold(key) + "\n\n" + value);
  }

  private async handleList({
    discord_guild_id,
    discord_user_id,
    interaction,
    message,
  }: {
    discord_guild_id: string | undefined | null;
    discord_user_id: string;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    const allMemes = await this.ctx.dbSvc.getMemes(discord_user_id, discord_guild_id);
    const meme_ids = allMemes.map((meme) => meme.id);
    const res = await this.ctx.api.admin.memes.token.$post({ json: { meme_ids } });
    if (!res.ok) return;
    const token = (await res.json()).token;

    // inside a command, event listener, etc.
    const embed = new EmbedBuilder()
      .setDescription("Showing memes you can drop")
      .addFields({
        name: "\u200B",
        value: allMemes
          .map((meme, i) => `${bold((i + 1).toString())}. ${meme.key} - <@${meme.discord_user_id}>`)
          .join("\n"),
      })
      .addFields({
        name: "\u200B",
        value: `[Open in Browser](${getListUrl(token)})`,
      })
      .setFooter({
        text: `Page 1/1 (${allMemes.length} Total)`,
      });

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleRemove({
    discord_guild_id,
    discord_user_id,
    key,
    interaction,
    message,
  }: {
    discord_guild_id: string | undefined | null;
    discord_user_id: string;
    key: string | undefined;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    if (!key) {
      interaction?.reply("⚠️ Invalid arguments");
      if (message?.channel.isSendable()) message.channel.send(codeBlock("remove <key>"));
      return;
    }

    const removed = await this.ctx.dbSvc.removeMeme(key, discord_user_id, discord_guild_id);
    if (removed) {
      interaction?.reply(`${inlineCode(key)} has been deleted`);
      if (message?.channel.isSendable()) {
        message?.channel.send(`${inlineCode(key)} has been deleted`);
      }
      return;
    }

    interaction?.reply("⚠️ Unknown Key");
    if (message?.channel.isSendable()) message?.channel.send("⚠️ Unknown Key");
  }

  private async handleHelp({
    interaction,
    message,
  }: {
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    const discord_guild_id = message?.guildId ?? interaction?.guildId;
    const prefix = await this.ctx.dbSvc.getGuildPrefix(discord_guild_id);

    const embed = new EmbedBuilder()
      .setTitle("Meme Help")
      .setColor("#fef3c6")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/1366671964500000778/555dfb9cf6265ae505041deeaac95b05",
      )
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> meme add",
        value:
          "Add a meme to your collection. If the command is used in a server, the meme will be added to the server's collection. If the same key already exists in the user or server collection, the value will be overwritten.",
      })
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> meme drop",
        value: `Drop a meme from your collection or the server's collection. The user's meme will take priority. ${inlineCode(prefix + "m <key>")} can also be used as shortcut.`,
      })
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> meme list",
        value:
          "List all memes that can be drop, including those from both the user and server collections.",
      })
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> meme remove",
        value: "Remove a meme from your collection and/or the server's collection.",
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
