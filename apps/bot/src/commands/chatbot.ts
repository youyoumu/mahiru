import type { Ctx } from "#/lib/ctx";

import { env } from "#/env";
import { colors, imageLinks } from "#/lib/constants";
import {
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

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
  help: "help",
} as const;
type Action = keyof typeof ACTION;

const GROUPS = {
  behavior: "behavior",
  personality: "personality",
  model: "model",
} as const;
type Group = keyof typeof GROUPS;

const PARAMS = {
  behavior: "behavior",
  personality: "personality",
  model: "model",
};

type Params = {
  discord_user_id: string | undefined;
  discord_guild_id: string | undefined | null;
  behavior: string | undefined;
  personality: string | undefined;
  model: string | undefined;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
};

function resolveAction(group: string | undefined, subcommand: string): Action | undefined {
  if (group === GROUPS.behavior) {
    switch (subcommand) {
      case "set":
        return "set-behavior";
      case "reset":
        return "reset-behavior";
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
      case "reset":
        return "reset-personality";
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
      case "reset":
        return "reset-model";
      case "show":
        return "show-model";
    }
  }
  if (subcommand === "help") return "help";
  return undefined;
}

export const Chatbot: CommandProto = class Chatbot implements Command {
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
            .setDescription("Set a custom behavior prompt for the chatbot in this server.")
            .addStringOption((option) =>
              option
                .setName(PARAMS.behavior)
                .setDescription("The behavior prompt text to use for the chatbot.")
                .setRequired(true),
            ),
        )
        .addSubcommand((sub) =>
          sub.setName("reset").setDescription("Reset the chatbot behavior to the default behavior prompt."),
        )
        .addSubcommand((sub) =>
          sub.setName("show").setDescription("Show the raw behavior prompt."),
        )
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
            .setDescription("Set a custom personality prompt for the chatbot in this server.")
            .addStringOption((option) =>
              option
                .setName(PARAMS.personality)
                .setDescription("The personality prompt text to use for the chatbot.")
                .setRequired(true),
            ),
        )
        .addSubcommand((sub) =>
          sub.setName("reset").setDescription("Reset the chatbot personality to the default personality prompt."),
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
            .setDescription("Set the chatbot model.")
            .addStringOption((option) =>
              option.setName(PARAMS.model).setDescription("The model name to use.").setRequired(true),
            ),
        )
        .addSubcommand((sub) =>
          sub.setName("reset").setDescription("Reset the chatbot model to the default."),
        )
        .addSubcommand((sub) =>
          sub.setName("show").setDescription("Show the current chatbot model and available models."),
        ),
    )
    .addSubcommand((sub) =>
      sub.setName("help").setDescription("Show help information for chatbot commands."),
    );
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction?: ChatInputCommandInteraction, commandCtx?: PrefixExecuteOpts) {
    const { message, args } = commandCtx ?? {};

    // Resolve group and subcommand from either slash command or prefix args
    const group =
      interaction?.options.getSubcommandGroup() ??
      (args && args.length >= 2 ? args[0] : undefined);
    const subcommand =
      interaction?.options.getSubcommand() ??
      (args && args.length >= 2 ? args[1] : args?.[0]);
    const selectedAction = resolveAction(group, subcommand as string);

    // Build param extraction based on action
    const action = selectedAction;
    const extractParam = (): string | undefined => {
      if (!args || args.length < 2) return undefined;
      // !chatbot behavior set hello world → args = ["behavior", "set", "hello", "world"]
      // group + subcmd = first 2 elements, rest is param
      const paramStart = 2;
      return args.length > paramStart ? args.slice(paramStart).join(" ") : undefined;
    };

    const params = {
      discord_user_id: interaction?.user.id ?? message?.author.id,
      discord_guild_id: interaction?.guildId ?? message?.guildId ?? null,
      behavior:
        interaction?.options.getString(PARAMS.behavior) ??
        (action === "set-behavior" ? extractParam() : undefined),
      personality:
        interaction?.options.getString(PARAMS.personality) ??
        (action === "set-personality" ? extractParam() : undefined),
      model:
        interaction?.options.getString(PARAMS.model) ??
        (action === "set-model" ? extractParam() : undefined),
      interaction,
      message,
    };
    if (!params.discord_user_id) return;

    switch (selectedAction) {
      case "set-behavior": {
        this.handleSetBehavior(params);
        break;
      }
      case "reset-behavior": {
        this.handleResetBehavior(params);
        break;
      }
      case "set-personality": {
        this.handleSetPersonality(params);
        break;
      }
      case "reset-personality": {
        this.handleResetPersonality(params);
        break;
      }
      case "show-model": {
        this.handleShowModel(params);
        break;
      }
      case "set-model": {
        this.handleSetModel(params);
        break;
      }
      case "reset-model": {
        this.handleResetModel(params);
        break;
      }
      case "help": {
        this.handleHelp(params);
        break;
      }
      case "preview-behavior": {
        this.handlePreviewBehavior(params);
        break;
      }
      case "preview-personality": {
        this.handlePreviewPersonality(params);
        break;
      }
      case "show-behavior": {
        this.handleShowBehavior(params);
        break;
      }
      case "show-personality": {
        this.handleShowPersonality(params);
        break;
      }
      default: {
        this.handleHelp(params);
      }
    }
  }

  private async handleSetBehavior(params: Params) {
    const { discord_guild_id, behavior, interaction, message } = params;
    if (!discord_guild_id) {
      interaction?.reply("⚠️ This command can only be used in a server.");
      if (message?.channel.isSendable())
        message.channel.send("⚠️ This command can only be used in a server.");
      return;
    }

    if (!behavior) {
      interaction?.reply("⚠️ Invalid arguments");
      if (message?.channel.isSendable())
        message.channel.send(codeBlock("chatbot set-behavior <behavior>"));
      return;
    }

    await this.ctx.dbSvc.setGuildChatbotBehavior(discord_guild_id, behavior);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder()
      .setTitle("Chatbot Behavior Updated")
      .setDescription("The chatbot behavior has been updated for this server.")
      .addFields({
        name: "New Behavior",
        value: inlineCode(behavior.length > 1000 ? `${behavior.slice(0, 1000)}...` : behavior),
      })
      .setFooter({
        text: `Updated by ${username}`,
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleResetBehavior(params: Params) {
    const { discord_guild_id, interaction, message } = params;
    if (!discord_guild_id) {
      interaction?.reply("⚠️ This command can only be used in a server.");
      if (message?.channel.isSendable())
        message.channel.send("⚠️ This command can only be used in a server.");
      return;
    }

    await this.ctx.dbSvc.resetGuildChatbotBehavior(discord_guild_id);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder()
      .setTitle("Chatbot Behavior Reset")
      .setDescription("The chatbot behavior has been reset to the default for this server.")
      .setFooter({
        text: `Reset by ${username}`,
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleSetPersonality(params: Params) {
    const { discord_guild_id, personality, interaction, message } = params;
    if (!discord_guild_id) {
      interaction?.reply("⚠️ This command can only be used in a server.");
      if (message?.channel.isSendable())
        message.channel.send("⚠️ This command can only be used in a server.");
      return;
    }

    if (!personality) {
      interaction?.reply("⚠️ Invalid arguments");
      if (message?.channel.isSendable())
        message.channel.send(codeBlock("chatbot set-personality <personality>"));
      return;
    }

    await this.ctx.dbSvc.setGuildChatbotPersonality(discord_guild_id, personality);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder()
      .setTitle("Chatbot Personality Updated")
      .setDescription("The chatbot personality has been updated for this server.")
      .addFields({
        name: "New Personality",
        value: inlineCode(
          personality.length > 1000 ? `${personality.slice(0, 1000)}...` : personality,
        ),
      })
      .setFooter({
        text: `Updated by ${username}`,
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleResetPersonality(params: Params) {
    const { discord_guild_id, interaction, message } = params;
    if (!discord_guild_id) {
      interaction?.reply("⚠️ This command can only be used in a server.");
      if (message?.channel.isSendable())
        message.channel.send("⚠️ This command can only be used in a server.");
      return;
    }

    await this.ctx.dbSvc.resetGuildChatbotPersonality(discord_guild_id);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder()
      .setTitle("Chatbot Personality Reset")
      .setDescription("The chatbot personality has been reset to the default for this server.")
      .setFooter({
        text: `Reset by ${username}`,
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handlePreviewBehavior(params: Params) {
    const { discord_guild_id, interaction, message } = params;
    const customBehavior = await this.ctx.dbSvc.getGuildChatbotBehavior(discord_guild_id);
    const prompt = customBehavior
      ? processSpintax(customBehavior)
      : processSpintax(prompts.behavior);

    const embed = new EmbedBuilder()
      .setTitle("Behavior Prompt Preview")
      .setDescription("This is a preview of the processed behavior prompt.")
      .addFields({
        name: "Preview",
        value: codeBlock(prompt.length > 2000 ? `${prompt.slice(0, 1990)}...` : prompt),
      })
      .setFooter({
        text: customBehavior ? "Custom behavior prompt" : "Default behavior prompt",
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handlePreviewPersonality(params: Params) {
    const { discord_guild_id, interaction, message } = params;
    const customPersonality = await this.ctx.dbSvc.getGuildChatbotPersonality(discord_guild_id);
    const prompt = customPersonality
      ? processSpintax(customPersonality)
      : processSpintax(prompts.personality);

    const embed = new EmbedBuilder()
      .setTitle("Personality Prompt Preview")
      .setDescription("This is a preview of the processed personality prompt.")
      .addFields({
        name: "Preview",
        value: codeBlock(prompt.length > 2000 ? `${prompt.slice(0, 1990)}...` : prompt),
      })
      .setFooter({
        text: customPersonality ? "Custom personality prompt" : "Default personality prompt",
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleShowBehavior(params: Params) {
    const { discord_guild_id, interaction, message } = params;
    const customBehavior = await this.ctx.dbSvc.getGuildChatbotBehavior(discord_guild_id);
    const prompt = customBehavior ?? prompts.behavior;

    const embed = new EmbedBuilder()
      .setTitle("Behavior Prompt")
      .setDescription("This is the behavior prompt currently in use.")
      .addFields({
        name: "Raw Prompt",
        value: codeBlock(prompt.length > 4000 ? `${prompt.slice(0, 3990)}...` : prompt),
      })
      .setFooter({
        text: customBehavior ? "Custom behavior prompt" : "Default behavior prompt",
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleShowPersonality(params: Params) {
    const { discord_guild_id, interaction, message } = params;
    const customPersonality = await this.ctx.dbSvc.getGuildChatbotPersonality(discord_guild_id);
    const prompt = customPersonality ?? prompts.personality;

    const embed = new EmbedBuilder()
      .setTitle("Personality Prompt")
      .setDescription("This is the personality prompt currently in use.")
      .addFields({
        name: "Raw Prompt",
        value: codeBlock(prompt.length > 4000 ? `${prompt.slice(0, 3990)}...` : prompt),
      })
      .setFooter({
        text: customPersonality ? "Custom personality prompt" : "Default personality prompt",
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleShowModel(params: Params) {
    const { discord_guild_id, interaction, message } = params;
    const availableModels = env.CHATBOT_MODELS;
    const guildModel = await this.ctx.dbSvc.getGuildChatbotModel(discord_guild_id);
    const currentModel = guildModel ?? availableModels[0];

    const embed = new EmbedBuilder()
      .setTitle("Chatbot Model")
      .setDescription("Current model and available models.")
      .addFields(
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
      )
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleSetModel(params: Params) {
    const { discord_guild_id, model, interaction, message } = params;
    if (!discord_guild_id) {
      interaction?.reply("⚠️ This command can only be used in a server.");
      if (message?.channel.isSendable())
        message.channel.send("⚠️ This command can only be used in a server.");
      return;
    }

    if (!model) {
      interaction?.reply("⚠️ Invalid arguments");
      if (message?.channel.isSendable())
        message.channel.send(codeBlock("chatbot set-model <model>"));
      return;
    }

    const availableModels = env.CHATBOT_MODELS;
    if (!availableModels.includes(model)) {
      const embed = new EmbedBuilder()
        .setTitle("Invalid Model")
        .setDescription(`The model \`${model}\` is not available.`)
        .addFields({
          name: "Available Models",
          value: availableModels.map((m) => inlineCode(m)).join(", "),
        })
        .setColor(colors.red);

      interaction?.reply({ embeds: [embed] });
      if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
      return;
    }

    await this.ctx.dbSvc.setGuildChatbotModel(discord_guild_id, model);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder()
      .setTitle("Chatbot Model Updated")
      .setDescription("The chatbot model has been updated.")
      .addFields({
        name: "New Model",
        value: inlineCode(model),
      })
      .setFooter({
        text: `Updated by ${username}`,
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleResetModel(params: Params) {
    const { discord_guild_id, interaction, message } = params;
    if (!discord_guild_id) {
      interaction?.reply("⚠️ This command can only be used in a server.");
      if (message?.channel.isSendable())
        message.channel.send("⚠️ This command can only be used in a server.");
      return;
    }

    await this.ctx.dbSvc.resetGuildChatbotModel(discord_guild_id);

    const username = interaction?.user.displayName ?? message?.author.displayName ?? "Unknown";
    const embed = new EmbedBuilder()
      .setTitle("Chatbot Model Reset")
      .setDescription("The chatbot model has been reset to the default for this server.")
      .setFooter({
        text: `Reset by ${username}`,
      })
      .setTimestamp();

    interaction?.reply({ embeds: [embed] });
    if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
  }

  private async handleHelp(params: Params) {
    const { interaction, message } = params;
    const embed = new EmbedBuilder()
      .setTitle("Chatbot Help")
      .setColor(colors.pastelYellow)
      .setThumbnail(imageLinks.avatar)
      .setDescription(
        "Configure the chatbot's behavior and personality for this server. " +
          "Prompts support [spintax syntax](https://github.com/youyoumu/mahiru/blob/main/apps/bot/docs/spintax.md) for random variations.",
      )
      .addFields({
        name: "/chatbot behavior set",
        value:
          "Set a custom behavior prompt for the chatbot in this server. This will replace the default behavior prompt used by the chatbot.",
      })
      .addFields({
        name: "/chatbot behavior reset",
        value: "Reset the chatbot behavior prompt to the default behavior prompt for this server.",
      })
      .addFields({
        name: "/chatbot behavior show",
        value: "Show the raw behavior prompt.",
      })
      .addFields({
        name: "/chatbot behavior preview",
        value: "Preview the processed behavior prompt to see what the bot will actually use.",
      })
      .addFields({
        name: "/chatbot personality set",
        value:
          "Set a custom personality prompt for the chatbot in this server. This defines the chatbot's personality traits and characteristics.",
      })
      .addFields({
        name: "/chatbot personality reset",
        value:
          "Reset the chatbot personality prompt to the default personality prompt for this server.",
      })
      .addFields({
        name: "/chatbot personality show",
        value: "Show the raw personality prompt.",
      })
      .addFields({
        name: "/chatbot personality preview",
        value: "Preview the processed personality prompt to see what the bot will actually use.",
      })
      .addFields({
        name: "/chatbot model set",
        value: "Set the chatbot model.",
      })
      .addFields({
        name: "/chatbot model reset",
        value: "Reset the chatbot model to the default.",
      })
      .addFields({
        name: "/chatbot model show",
        value: "Show the current chatbot model and all available models.",
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
