import type { Ctx } from "#/lib/ctx";

import { colors, discordEmojis, imageLinks } from "#/lib/constants";
import { zTagImport, zTagKey } from "#/lib/schema";
import { getTagsUrl } from "#/lib/url";
import {
  AttachmentBuilder,
  bold,
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import { uniqBy } from "es-toolkit";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

import { replyToSource } from "../lib/command";

const ACTION = {
  add: "add",
  drop: "drop",
  list: "list",
  remove: "remove",
  help: "help",
  import: "import",
  export: "export",
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
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION.import)
        .setDescription("Import tags from a JSON file.")
        .addAttachmentOption((option) =>
          option.setName("file").setDescription("JSON file containing tags").setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand.setName(ACTION.export).setDescription("Export your tags to a JSON file."),
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
    const getValue = () => {
      let value =
        interaction?.options.getString(PARAMS.value) ??
        message?.content.split(`${key} `).slice(1).join(`${key} `).trim();
      if (!value) {
        return message?.attachments?.first()?.url;
      }
    };
    const value = getValue();
    const discord_user_id = interaction?.user.id ?? message?.author.id;
    const discord_guild_id = interaction?.guildId ?? message?.guildId ?? "";
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
      case "import": {
        await this.handleImport({ discord_guild_id, discord_user_id, interaction, message });
        break;
      }
      case "export": {
        await this.handleExport({ discord_guild_id, discord_user_id, interaction, message });
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

    const result = zTagKey.safeParse(key);
    if (!result.success) {
      replyToSource(
        interaction,
        message,
        "⚠️ Invalid key. Keys must be 1-32 characters long and only contain letters, numbers, underscores, hyphens, and dots.",
      );
      return;
    }

    await this.ctx.dbSvc.addTag(key, value, discord_user_id, discord_guild_id);

    const embed = new EmbedBuilder({
      title: `Tag Added: ${key}`,
      description: value,
      color: colors.green,
    });

    replyToSource(interaction, message, { embeds: [embed] });
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

    const { userTag, guildTag } = await this.ctx.dbSvc.removeTag(
      key,
      discord_user_id,
      discord_guild_id,
    );
    if (userTag || guildTag) {
      const embed = new EmbedBuilder({
        title: `Tag Removed: ${key}`,
        description: userTag?.value ?? guildTag?.value ?? undefined,
        color: colors.red,
      });
      replyToSource(interaction, message, { embeds: [embed] });
      return;
    }

    const embed = new EmbedBuilder({
      title: "⚠️ Unknown Key",
      description: "The key you provided does not exist.",
      color: colors.red,
    });
    replyToSource(interaction, message, { embeds: [embed] });
  }

  private async handleImport({
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
    const attachment = interaction?.options.getAttachment("file") ?? message?.attachments.first();
    if (!attachment) {
      replyToSource(interaction, message, "⚠️ Please provide a JSON file.");
      return;
    }

    if (attachment.size > 4 * 1024 * 1024) {
      replyToSource(interaction, message, "⚠️ The file is too large. Max size is 4MB.");
      return;
    }

    try {
      const response = await fetch(attachment.url);
      if (!response.ok) throw new Error("Failed to download file.");

      const data = await response.json();
      const parsed = zTagImport.safeParse(data);
      if (!parsed.success) {
        replyToSource(
          interaction,
          message,
          "⚠️ Invalid JSON format. Please ensure it is an array of objects with 'key' and 'value'.",
        );
        return;
      }

      if (parsed.data.length > 1000) {
        replyToSource(interaction, message, "⚠️ Too many tags. Max is 1000.");
        return;
      }

      await this.ctx.dbSvc.addTags(parsed.data, discord_user_id, discord_guild_id);

      const embed = new EmbedBuilder({
        title: `Imported ${parsed.data.length} Tags`,
        color: colors.green,
      });

      replyToSource(interaction, message, { embeds: [embed] });
    } catch {
      replyToSource(interaction, message, "⚠️ An error occurred while importing tags.");
    }
  }

  private async handleExport({
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
    await interaction?.deferReply();

    const userTags = await this.ctx.dbSvc.getUserTags(discord_user_id);
    const guildTags = await this.ctx.dbSvc.getGuildTags(discord_guild_id);

    // Prioritize user tags over guild tags when keys collide
    const effectiveTags = uniqBy([...userTags, ...guildTags], (tag) => tag.key);

    if (effectiveTags.length === 0) {
      replyToSource(interaction, message, "⚠️ You don't have any tags to export.");
      return;
    }

    const exportData = effectiveTags.map((tag) => ({
      key: tag.key,
      value: tag.value,
    }));

    const buffer = Buffer.from(JSON.stringify(exportData, null, 2), "utf-8");
    const fileName = `tags-export.json`;
    const attachment = new AttachmentBuilder(buffer, {
      name: fileName,
    });

    replyToSource(interaction, message, {
      content: `Exported ${effectiveTags.length} tags.`,
      files: [attachment],
    });
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
        {
          name: `${discordEmojis.azusarelaxed} tag import`,
          value: "Import tags from a JSON file.",
        },
        {
          name: `${discordEmojis.azusarelaxed} tag export`,
          value: "Export your tags to a JSON file.",
        },
      ],
      footer: {
        text: "Mahiru",
      },
    });

    replyToSource(interaction, message, { embeds: [embed] });
  }
};
