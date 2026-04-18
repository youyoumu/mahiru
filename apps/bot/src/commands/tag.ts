import type { Ctx } from "#/lib/ctx";

import { colors, discordEmojis, imageLinks } from "#/lib/constants";
import { getTagsUrl } from "#/lib/url";
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

import { replyToSource } from "../lib/command";

const ACTION = {
  add: "add",
  drop: "drop",
  list: "list",
  remove: "remove",
  help: "help",
} as const;
type Action = keyof typeof ACTION;

const PARAMS = {
  key: "key",
  value: "value",
};

export const Tag: CommandProto = class Tag implements Command {
  static data = new SlashCommandBuilder()
    .setName("tag")
    .setDescription("Manage your tag collections")

    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION.add)
        .setDescription("Add a tag to your collection.")
        .addStringOption((option) =>
          option
            .setName(PARAMS.key)
            .setDescription("Key to retrieve the tag")
            .setMaxLength(32)
            .setRequired(true),
        )
        .addStringOption((option) =>
          option.setName(PARAMS.value).setDescription("Text or link").setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION.drop)
        .setDescription("Drop a tag from your collection or the server's collection.")
        .addStringOption((option) =>
          option
            .setName(PARAMS.key)
            .setDescription("Key to retrieve the tag")
            .setMaxLength(32)
            .setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION.list)
        .setDescription(
          "List all tags that can be dropped, including those from both the user and server collections.",
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION.remove)
        .setDescription("Remove a tag from your collection and/or the server's collection.")
        .addStringOption((option) =>
          option
            .setName(PARAMS.key)
            .setDescription("Key to retrieve the tag")
            .setMaxLength(32)
            .setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand.setName(ACTION.help).setDescription("Explain tag command"),
    );
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction?: ChatInputCommandInteraction, commandCtx?: PrefixExecuteOpts) {
    const { message, args } = commandCtx ?? {};
    const selectedAction = (interaction?.options.getSubcommand() ?? args?.[0]) as
      | Action
      | undefined;
    const key = interaction?.options.getString(PARAMS.key) ?? args?.[1];
    const value =
      interaction?.options.getString(PARAMS.value) ??
      message?.content.split(`${key} `).slice(1).join(`${key} `).trim();
    const discord_user_id = interaction?.user.id ?? message?.author.id;
    const discord_guild_id = interaction?.guildId ?? message?.guildId ?? null;
    if (!discord_user_id) return;

    switch (selectedAction) {
      case "add": {
        await this.handleAdd({
          discord_guild_id,
          discord_user_id,
          key,
          value,
          interaction,
          message,
        });
        break;
      }
      case "drop": {
        await this.handleDrop({ discord_guild_id, discord_user_id, key, interaction, message });
        break;
      }
      case "list": {
        await this.handleList({ discord_guild_id, discord_user_id, interaction, message });
        break;
      }
      case "remove": {
        await this.handleRemove({ discord_guild_id, discord_user_id, key, interaction, message });
        break;
      }
      case "help": {
        await this.handleHelp({ interaction, message });
        break;
      }
      default: {
        const key = args?.[0];
        if (key) {
          await this.handleDrop({ discord_guild_id, discord_user_id, key, message });
        } else {
          await this.handleHelp({ interaction, message });
        }
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
      replyToSource(interaction, message, "⚠️ Invalid arguments");
      replyToSource(interaction, message, codeBlock("drop <key>"));
      return;
    }

    const tag = await this.ctx.dbSvc.getTag(key, discord_user_id, discord_guild_id);
    if (tag) {
      replyToSource(interaction, message, tag.value);
      return;
    }

    replyToSource(interaction, message, "⚠️ Unknown Key");
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
      replyToSource(interaction, message, "⚠️ Invalid arguments");
      replyToSource(interaction, message, codeBlock("add <key> <value>"));
      return;
    }

    if (key.length > 32) {
      replyToSource(interaction, message, "The maximum key length is 32 characters.");
      return;
    }

    await this.ctx.dbSvc.addTag(key, value, discord_user_id, discord_guild_id);

    replyToSource(interaction, message, bold(key) + "\n\n" + value);
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
    const allTags = await this.ctx.dbSvc.getTags(discord_user_id, discord_guild_id);
    const tag_ids = allTags.map((tag) => tag.id);
    const res = await this.ctx.api.admin.tags.token.$post({ json: { tag_ids } });
    if (!res.ok) return;
    const token = (await res.json()).token;

    const embed = new EmbedBuilder({
      description: "Showing tags you can drop",
      fields: [
        {
          name: "\u200B",
          value: allTags
            .map((tag, i) => `${bold((i + 1).toString())}. ${tag.key} - <@${tag.discord_user_id}>`)
            .join("\n"),
        },
        {
          name: "\u200B",
          value: `[Open in Browser](${getTagsUrl(token)})`,
        },
      ],
      footer: {
        text: `Page 1/1 (${allTags.length} Total)`,
      },
    });

    replyToSource(interaction, message, { embeds: [embed] });
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
      replyToSource(interaction, message, "⚠️ Invalid arguments");
      replyToSource(interaction, message, codeBlock("remove <key>"));
      return;
    }

    const removed = await this.ctx.dbSvc.removeTag(key, discord_user_id, discord_guild_id);
    if (removed) {
      replyToSource(interaction, message, `${inlineCode(key)} has been deleted`);
      return;
    }

    replyToSource(interaction, message, "⚠️ Unknown Key");
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

    const embed = new EmbedBuilder({
      title: "Tag Help",
      color: colors.pastelYellow,
      thumbnail: { url: imageLinks.avatar },
      fields: [
        {
          name: `${discordEmojis.azusarelaxed} tag add`,
          value:
            "Add a tag to your collection. If the command is used in a server, the tag will be added to the server's collection. If the same key already exists in the user or server collection, the value will be overwritten.",
        },
        {
          name: `${discordEmojis.azusarelaxed} tag drop`,
          value: `Drop a tag from your collection or the server's collection. The user's tag will take priority. ${inlineCode(prefix + "t <key>")} can also be used as shortcut.`,
        },
        {
          name: `${discordEmojis.azusarelaxed} tag list`,
          value:
            "List all tags that can be dropped, including those from both the user and server collections.",
        },
        {
          name: `${discordEmojis.azusarelaxed} tag remove`,
          value: "Remove a tag from your collection and/or the server's collection.",
        },
      ],
      footer: {
        text: "Mahiru",
      },
    });

    replyToSource(interaction, message, { embeds: [embed] });
  }
};
