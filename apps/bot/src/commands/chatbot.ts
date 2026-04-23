import type { Ctx } from "#/lib/ctx";
import type { Logger } from "pino";

import { env } from "#/env";
import { extractTrailingParam } from "#/lib/command";
import { colors, discordEmojis, imageLinks } from "#/lib/constants";
import {
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  MessageFlags,
  SlashCommandBuilder,
} from "discord.js";
import { delay } from "es-toolkit";

import type { PrefixExecuteOpts } from "../lib/command";

import { generateClearToken, formatClearToken } from "../lib/chatbot";
import { Command } from "../lib/command";
import { openWebuiClient } from "../lib/openapi";
import { processSpintax } from "../lib/spintax";
import { prompts } from "../prompts";

const ACTION = {
  "set-behavior": "set-behavior",
  "reset-behavior": "reset-behavior",
  "set-personality": "set-personality",
  "reset-personality": "reset-personality",
  "preview-behavior": "preview-behavior",
  "preview-personality": "preview-personality",
  "show-behavior": "show-behavior",
  "show-personality": "show-personality",
  "show-model": "show-model",
  "set-model": "set-model",
  "reset-model": "reset-model",
  "set-reply-chance": "set-reply-chance",
  "reset-reply-chance": "reset-reply-chance",
  "show-reply-chance": "show-reply-chance",
  clear: "clear",
  help: "help",
  status: "status",
} as const;
type Action = keyof typeof ACTION;

const GROUPS = {
  behavior: "behavior",
  personality: "personality",
  model: "model",
  "reply-chance": "reply-chance",
  clear: "clear",
} as const;

const PARAMS = {
  behavior: "behavior",
  personality: "personality",
  model: "model",
  chance: "chance",
};

const crop = (text: string, limit = 900) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export interface ChatbotParams {
  discord_guild_id: string | undefined | null;
  behavior: string | undefined;
  personality: string | undefined;
  model: string | undefined;
  chance: number | undefined;
  action: Action | undefined;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}

function resolveAction(
  group: string | undefined,
  subcommand: string | undefined,
): Action | undefined {
  if (group === GROUPS.behavior) {
    switch (subcommand) {
      case "set":
        return "set-behavior";
      case "show":
        return "show-behavior";
      case "preview":
        return "preview-behavior";
    }
  }
  if (group === GROUPS.personality) {
    switch (subcommand) {
      case "set":
        return "set-personality";
      case "show":
        return "show-personality";
      case "preview":
        return "preview-personality";
    }
  }
  if (group === GROUPS.model) {
    switch (subcommand) {
      case "set":
        return "set-model";
      case "show":
        return "show-model";
    }
  }
  if (group === GROUPS["reply-chance"]) {
    switch (subcommand) {
      case "set":
        return "set-reply-chance";
      case "show":
        return "show-reply-chance";
    }
  }
  if (subcommand === "clear") return "clear";
  if (subcommand === "help") return "help";
  if (subcommand === "status") return "status";
  return undefined;
}

/**
 * Builds chatbot command parameters from either slash command interaction or prefix args.
 */
export function buildChatbotParams(opts: {
  interaction?: ChatInputCommandInteraction;
  message?: Message;
  args?: string[];
}): ChatbotParams {
  const { interaction, message, args } = opts;

  // Resolve group and subcommand from either slash command or prefix args
  const group =
    interaction?.options.getSubcommandGroup() ?? (args && args.length >= 2 ? args[0] : undefined);
  const subcommand =
    interaction?.options.getSubcommand() ?? (args && args.length >= 2 ? args[1] : args?.[0]);
  const action = resolveAction(group, subcommand);

  // Build param extraction based on action
  const extractParam = (): string | undefined => {
    const actionPatterns: Partial<Record<Action, string[]>> = {
      "set-behavior": ["behavior", "set"],
      "set-personality": ["personality", "set"],
      "set-model": ["model", "set"],
      "set-reply-chance": ["reply-chance", "set"],
    };
    const pattern = action ? actionPatterns[action] : undefined;
    return extractTrailingParam(message?.content, pattern);
  };

  const probStr = interaction?.options.getNumber(PARAMS.chance)?.toString() ?? extractParam();

  return {
    discord_guild_id: interaction?.guildId ?? message?.guildId ?? null,
    behavior: interaction?.options.getString(PARAMS.behavior) ?? extractParam(),
    personality: interaction?.options.getString(PARAMS.personality) ?? extractParam(),
    model: interaction?.options.getString(PARAMS.model) ?? extractParam(),
    chance: probStr !== undefined && probStr.trim() !== "" ? Number.parseFloat(probStr) : undefined,
    action,
    interaction,
    message,
  };
}

export class Chatbot extends Command {
  static data = new SlashCommandBuilder()
    .setName("chatbot")
    .setDescription("Configure chatbot settings for this server")
    .addSubcommandGroup((group) =>
      group
        .setName(GROUPS.behavior)
        .setDescription("Manage chatbot behavior")
        .addSubcommand((sub) =>
          sub
            .setName("set")
            .setDescription("Set or reset the behavior prompt for the chatbot in this server.")
            .addStringOption((option) =>
              option
                .setName(PARAMS.behavior)
                .setDescription("The behavior prompt text. Leave empty to reset to default.")
                .setRequired(false),
            ),
        )
        .addSubcommand((sub) => sub.setName("show").setDescription("Show the raw behavior prompt."))
        .addSubcommand((sub) =>
          sub.setName("preview").setDescription("Preview the processed behavior prompt."),
        ),
    )
    .addSubcommandGroup((group) =>
      group
        .setName(GROUPS.personality)
        .setDescription("Manage chatbot personality")
        .addSubcommand((sub) =>
          sub
            .setName("set")
            .setDescription("Set or reset the personality prompt for the chatbot in this server.")
            .addStringOption((option) =>
              option
                .setName(PARAMS.personality)
                .setDescription("The personality prompt text. Leave empty to reset to default.")
                .setRequired(false),
            ),
        )
        .addSubcommand((sub) =>
          sub.setName("show").setDescription("Show the raw personality prompt."),
        )
        .addSubcommand((sub) =>
          sub.setName("preview").setDescription("Preview the processed personality prompt."),
        ),
    )
    .addSubcommandGroup((group) =>
      group
        .setName(GROUPS.model)
        .setDescription("Manage chatbot model")
        .addSubcommand((sub) =>
          sub
            .setName("set")
            .setDescription("Set the chatbot model. Leave empty to reset to default.")
            .addStringOption((option) =>
              option
                .setName(PARAMS.model)
                .setDescription("The model name to use. Leave empty to reset to default.")
                .setRequired(false),
            ),
        )
        .addSubcommand((sub) =>
          sub
            .setName("show")
            .setDescription("Show the current chatbot model and available models."),
        ),
    )
    .addSubcommandGroup((group) =>
      group
        .setName(GROUPS["reply-chance"])
        .setDescription("Manage chatbot reply chance")
        .addSubcommand((sub) =>
          sub
            .setName("set")
            .setDescription("Set the reply chance (0-100%). Leave empty to reset.")
            .addNumberOption((option) =>
              option
                .setName(PARAMS.chance)
                .setDescription("Chance as a percentage (0-100).")
                .setMinValue(0)
                .setMaxValue(100)
                .setRequired(false),
            ),
        )
        .addSubcommand((sub) =>
          sub.setName("show").setDescription("Show the current reply chance."),
        ),
    )
    .addSubcommand((sub) =>
      sub.setName("help").setDescription("Show help information for chatbot commands."),
    )
    .addSubcommand((sub) =>
      sub
        .setName("clear")
        .setDescription("Clear the chat history for the chatbot in this channel."),
    )
    .addSubcommand((sub) =>
      sub.setName("status").setDescription("Check if OpenWebUI is connected and responsive."),
    );

  constructor(opts: { ctx: Ctx; log: Logger }) {
    super(opts);
  }

  async execute(interaction?: ChatInputCommandInteraction, commandCtx?: PrefixExecuteOpts) {
    const { message, args } = commandCtx ?? {};
    const params = buildChatbotParams({ interaction, message, args });

    switch (params.action) {
      case "set-behavior": {
        if (!params.behavior) {
          await this.handleResetBehavior(params);
        } else {
          await this.handleSetBehavior(params);
        }
        break;
      }
      case "set-personality": {
        if (!params.personality) {
          await this.handleResetPersonality(params);
        } else {
          await this.handleSetPersonality(params);
        }
        break;
      }
      case "show-model": {
        await this.handleShowModel(params);
        break;
      }
      case "set-model": {
        if (!params.model) {
          await this.handleResetModel(params);
        } else {
          await this.handleSetModel(params);
        }
        break;
      }
      case "set-reply-chance": {
        if (params.chance === undefined) {
          await this.handleResetReplyChance(params);
        } else {
          await this.handleSetReplyChance(params);
        }
        break;
      }
      case "show-reply-chance": {
        await this.handleShowReplyChance(params);
        break;
      }
      case "clear": {
        await this.handleClear(params);
        break;
      }
      case "help": {
        await this.handleHelp(params);
        break;
      }
      case "status": {
        await this.handleStatus(params);
        break;
      }
      case "preview-behavior": {
        await this.handlePreviewBehavior(params);
        break;
      }
      case "preview-personality": {
        await this.handlePreviewPersonality(params);
        break;
      }
      case "show-behavior": {
        await this.handleShowBehavior(params);
        break;
      }
      case "show-personality": {
        await this.handleShowPersonality(params);
        break;
      }
      default: {
        await this.handleHelp(params);
      }
    }
  }

  async handleButtonInteraction() {}

  private async handleSetBehavior(params: ChatbotParams) {
    const { discord_guild_id, behavior, interaction, message } = params;
    if (!discord_guild_id) {
      this.reply(interaction, message, "⚠️ This command can only be used in a server.");
      return;
    }

    if (!behavior) {
      this.reply(interaction, message, "⚠️ Usage: `chatbot behavior set <prompt>`");
      return;
    }

    await this.ctx.dbSvc.setGuildChatbotBehavior(discord_guild_id, behavior);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder({
      title: "Chatbot Behavior Updated",
      description: "The chatbot behavior has been updated for this server.",
      fields: [
        {
          name: "New Behavior",
          value: inlineCode(crop(behavior)),
        },
      ],
      footer: {
        text: `Updated by ${username}`,
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleResetBehavior(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    if (!discord_guild_id) {
      this.reply(interaction, message, "⚠️ This command can only be used in a server.");
      return;
    }

    await this.ctx.dbSvc.resetGuildChatbotBehavior(discord_guild_id);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder({
      title: "Chatbot Behavior Reset",
      description: "The chatbot behavior has been reset to the default for this server.",
      footer: {
        text: `Reset by ${username}`,
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleSetPersonality(params: ChatbotParams) {
    const { discord_guild_id, personality, interaction, message } = params;
    if (!discord_guild_id) {
      this.reply(interaction, message, "⚠️ This command can only be used in a server.");
      return;
    }

    if (!personality) {
      this.reply(interaction, message, "⚠️ Usage: `chatbot personality set <prompt>`");
      return;
    }

    await this.ctx.dbSvc.setGuildChatbotPersonality(discord_guild_id, personality);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder({
      title: "Chatbot Personality Updated",
      description: "The chatbot personality has been updated for this server.",
      fields: [
        {
          name: "New Personality",
          value: inlineCode(crop(personality)),
        },
      ],
      footer: {
        text: `Updated by ${username}`,
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleResetPersonality(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    if (!discord_guild_id) {
      this.reply(interaction, message, "⚠️ This command can only be used in a server.");
      return;
    }

    await this.ctx.dbSvc.resetGuildChatbotPersonality(discord_guild_id);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder({
      title: "Chatbot Personality Reset",
      description: "The chatbot personality has been reset to the default for this server.",
      footer: {
        text: `Reset by ${username}`,
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handlePreviewBehavior(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    const customBehavior = await this.ctx.dbSvc.getGuildChatbotBehavior(discord_guild_id);
    const prompt = customBehavior
      ? processSpintax(customBehavior)
      : processSpintax(prompts.behavior);

    const embed = new EmbedBuilder({
      title: "Behavior Prompt Preview",
      description: "This is a preview of the processed behavior prompt.",
      fields: [
        {
          name: "Preview",
          value: codeBlock(crop(prompt)),
        },
      ],
      footer: {
        text: customBehavior ? "Custom behavior prompt" : "Default behavior prompt",
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handlePreviewPersonality(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    const customPersonality = await this.ctx.dbSvc.getGuildChatbotPersonality(discord_guild_id);
    const prompt = customPersonality
      ? processSpintax(customPersonality)
      : processSpintax(prompts.personality);

    const embed = new EmbedBuilder({
      title: "Personality Prompt Preview",
      description: "This is a preview of the processed personality prompt.",
      fields: [
        {
          name: "Preview",
          value: codeBlock(crop(prompt)),
        },
      ],
      footer: {
        text: customPersonality ? "Custom personality prompt" : "Default personality prompt",
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleShowBehavior(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    const customBehavior = await this.ctx.dbSvc.getGuildChatbotBehavior(discord_guild_id);
    const prompt = customBehavior ?? prompts.behavior;

    const embed = new EmbedBuilder({
      title: "Behavior Prompt",
      description: "This is the behavior prompt currently in use.",
      fields: [
        {
          name: "Raw Prompt",
          value: codeBlock(crop(prompt)),
        },
      ],
      footer: {
        text: customBehavior ? "Custom behavior prompt" : "Default behavior prompt",
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleShowPersonality(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    const customPersonality = await this.ctx.dbSvc.getGuildChatbotPersonality(discord_guild_id);
    const prompt = customPersonality ?? prompts.personality;

    const embed = new EmbedBuilder({
      title: "Personality Prompt",
      description: "This is the personality prompt currently in use.",
      fields: [
        {
          name: "Raw Prompt",
          value: codeBlock(crop(prompt)),
        },
      ],
      footer: {
        text: customPersonality ? "Custom personality prompt" : "Default personality prompt",
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleShowModel(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    const availableModels = env.CHATBOT_MODELS;
    const guildModel = await this.ctx.dbSvc.getGuildChatbotModel(discord_guild_id);
    const currentModel = guildModel ?? availableModels[0];

    const embed = new EmbedBuilder({
      title: "Chatbot Model",
      description: "Current model and available models.",
      fields: [
        {
          name: "Current Model",
          value: inlineCode(currentModel ?? ""),
          inline: true,
        },
        {
          name: "Available Models",
          value: availableModels
            .map((m) => (m === currentModel ? `⭐ ${inlineCode(m)} (current)` : inlineCode(m)))
            .join("\n"),
        },
      ],
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleSetModel(params: ChatbotParams) {
    const { discord_guild_id, model, interaction, message } = params;
    if (!discord_guild_id) {
      this.reply(interaction, message, "⚠️ This command can only be used in a server.");
      return;
    }

    if (!model) {
      this.reply(interaction, message, "⚠️ Usage: `chatbot model set <model>`");
      return;
    }

    const availableModels = env.CHATBOT_MODELS;
    if (!availableModels.includes(model)) {
      const embed = new EmbedBuilder({
        title: "Invalid Model",
        description: `The model \`${model}\` is not available.`,
        fields: [
          {
            name: "Available Models",
            value: availableModels.map((m) => inlineCode(m)).join(", "),
          },
        ],
        color: colors.red,
      });

      this.reply(interaction, message, { embeds: [embed] });
      return;
    }

    await this.ctx.dbSvc.setGuildChatbotModel(discord_guild_id, model);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder({
      title: "Chatbot Model Updated",
      description: "The chatbot model has been updated.",
      fields: [
        {
          name: "New Model",
          value: inlineCode(model),
        },
      ],
      footer: {
        text: `Updated by ${username}`,
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleResetModel(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    if (!discord_guild_id) {
      this.reply(interaction, message, "⚠️ This command can only be used in a server.");
      return;
    }

    await this.ctx.dbSvc.resetGuildChatbotModel(discord_guild_id);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder({
      title: "Chatbot Model Reset",
      description: "The chatbot model has been reset to the default for this server.",
      footer: {
        text: `Reset by ${username}`,
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleSetReplyChance(params: ChatbotParams) {
    const { discord_guild_id, chance, interaction, message } = params;
    if (!discord_guild_id) {
      this.reply(interaction, message, "⚠️ This command can only be used in a server.");
      return;
    }

    if (chance === undefined || Number.isNaN(chance) || chance < 0 || chance > 100) {
      this.reply(interaction, message, "⚠️ Usage: `chatbot reply-chance set <0-100>`");
      return;
    }

    await this.ctx.dbSvc.setGuildChatbotReplyChance(discord_guild_id, chance / 100);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder({
      title: "Reply Chance Updated",
      description: `The reply chance has been set to \`${chance}%\`.`,
      footer: {
        text: `Updated by ${username}`,
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleResetReplyChance(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    if (!discord_guild_id) {
      this.reply(interaction, message, "⚠️ This command can only be used in a server.");
      return;
    }

    await this.ctx.dbSvc.resetGuildChatbotReplyChance(discord_guild_id);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder({
      title: "Reply Chance Reset",
      description: "The reply chance has been reset to the default (0.2%).",
      footer: {
        text: `Reset by ${username}`,
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleShowReplyChance(params: ChatbotParams) {
    const { discord_guild_id, interaction, message } = params;
    const chance = await this.ctx.dbSvc.getGuildChatbotReplyChance(discord_guild_id);
    const displayProb = chance !== undefined ? chance * 100 : 0.2;

    const embed = new EmbedBuilder({
      title: "Reply Chance",
      description: `Current chance: \`${displayProb}%\``,
      footer: {
        text: chance !== undefined ? "Custom setting" : "Default setting",
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleClear(params: ChatbotParams) {
    const { interaction, message } = params;
    const clearToken = generateClearToken();
    const content = `Chat history cleared! I'll only remember messages sent after this point. ${formatClearToken(clearToken)}`;

    const channel = interaction?.channel ?? message?.channel;
    if (!channel?.isSendable()) return;
    await channel.send(content);
    if (interaction) {
      await interaction.deferReply({ flags: MessageFlags.Ephemeral });
      await interaction.deleteReply();
    }
  }

  private async handleHelp(params: ChatbotParams) {
    const { interaction, message } = params;
    const embed = new EmbedBuilder({
      title: "Chatbot Help",
      color: colors.pastelYellow,
      thumbnail: { url: imageLinks.avatar },
      description:
        "Configure the chatbot's behavior and personality for this server. " +
        "Prompts support [spintax syntax](https://github.com/youyoumu/mahiru/blob/main/apps/bot/docs/spintax.md) for random variations.",
      fields: [
        {
          name: `${discordEmojis.azusarelaxed} chatbot behavior set`,
          value:
            "Set or reset the behavior prompt. Provide a prompt to set, or leave empty to reset to default.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot behavior show`,
          value: "Show the raw behavior prompt.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot behavior preview`,
          value: "Preview the processed behavior prompt to see what the bot will actually use.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot personality set`,
          value:
            "Set or reset the personality prompt. Provide a prompt to set, or leave empty to reset to default.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot personality show`,
          value: "Show the raw personality prompt.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot personality preview`,
          value: "Preview the processed personality prompt to see what the bot will actually use.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot model set`,
          value: "Set the chatbot model. Leave empty to reset to default.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot model show`,
          value: "Show the current chatbot model and all available models.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot reply-chance set`,
          value:
            "Set the chance (0-100%) for the bot to reply without being mentioned in forced channels. Leave empty to reset.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot reply-chance show`,
          value: "Show the current reply chance.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot clear`,
          value:
            "Clear the chatbot's chat history for this channel. The bot will only remember messages after this point.",
        },
        {
          name: `${discordEmojis.azusarelaxed} chatbot status`,
          value: "Check if OpenWebUI is connected and responsive.",
        },
      ],
      footer: {
        text: "Mahiru",
      },
    });

    this.reply(interaction, message, { embeds: [embed] });
  }

  private async handleStatus(params: ChatbotParams) {
    const { interaction, message } = params;
    await interaction?.deferReply();
    const replyMessage = await message?.reply("Checking OpenWebUI status...");

    try {
      const res = await openWebuiClient.GET("/health");
      const embed = new EmbedBuilder({
        title: "OpenWebUI Status",
        description: res.response?.ok ? "✅ Connected" : "❌ Unavailable",
        color: res.response?.ok ? colors.green : colors.red,
      });
      await delay(1000);
      if (interaction) {
        await interaction.editReply({ embeds: [embed] });
      } else {
        await replyMessage?.edit({ embeds: [embed] });
      }
    } catch {
      const embed = new EmbedBuilder({
        title: "OpenWebUI Status",
        description: "❌ Connection failed",
        color: colors.red,
      });
      await delay(1000);
      if (interaction) {
        await interaction.editReply({ embeds: [embed] });
      } else {
        await replyMessage?.edit({ embeds: [embed] });
      }
    }
  }
}
