import type { Ctx } from "#/lib/ctx";

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
  help: "help",
} as const;
type Action = keyof typeof ACTION;

const PARAMS = {
  behavior: "behavior",
  personality: "personality",
};

type Params = {
  discord_user_id: string | undefined;
  discord_guild_id: string | undefined | null;
  behavior: string | undefined;
  personality: string | undefined;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
};

export const Chatbot: CommandProto = class Chatbot implements Command {
  static data = new SlashCommandBuilder()
    .setName("chatbot")
    .setDescription("Configure chatbot settings for this server")
    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION["set-behavior"])
        .setDescription("Set a custom behavior prompt for the chatbot in this server.")
        .addStringOption((option) =>
          option
            .setName(PARAMS.behavior)
            .setDescription("The behavior prompt text to use for the chatbot.")
            .setRequired(true),
        ),
    )
    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION["reset-behavior"])
        .setDescription("Reset the chatbot behavior to the default behavior prompt."),
    )
    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION["set-personality"])
        .setDescription("Set a custom personality prompt for the chatbot in this server.")
        .addStringOption((option) =>
          option
            .setName(PARAMS.personality)
            .setDescription("The personality prompt text to use for the chatbot.")
            .setRequired(true),
        ),
    )
    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION["reset-personality"])
        .setDescription("Reset the chatbot personality to the default personality prompt."),
    )
    .addSubcommand((subCommand) =>
      subCommand.setName(ACTION.help).setDescription("Show help information for chatbot commands."),
    )
    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION["preview-behavior"])
        .setDescription("Preview the processed behavior prompt."),
    )
    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION["preview-personality"])
        .setDescription("Preview the processed personality prompt."),
    )
    .addSubcommand((subCommand) =>
      subCommand.setName(ACTION["show-behavior"]).setDescription("Show the raw behavior prompt."),
    )
    .addSubcommand((subCommand) =>
      subCommand
        .setName(ACTION["show-personality"])
        .setDescription("Show the raw personality prompt."),
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
    const params = {
      discord_user_id: interaction?.user.id ?? message?.author.id,
      discord_guild_id: interaction?.guildId ?? message?.guildId ?? null,
      behavior:
        interaction?.options.getString(PARAMS.behavior) ??
        message?.content.split("set-behavior ").slice(1).join("set-behavior ").trim(),
      personality:
        interaction?.options.getString(PARAMS.personality) ??
        message?.content.split("set-personality ").slice(1).join("set-personality ").trim(),
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
        name: "chatbot set-behavior",
        value:
          "Set a custom behavior prompt for the chatbot in this server. This will replace the default behavior prompt used by the chatbot.",
      })
      .addFields({
        name: "chatbot reset-behavior",
        value: "Reset the chatbot behavior prompt to the default behavior prompt for this server.",
      })
      .addFields({
        name: "chatbot set-personality",
        value:
          "Set a custom personality prompt for the chatbot in this server. This defines the chatbot's personality traits and characteristics.",
      })
      .addFields({
        name: "chatbot reset-personality",
        value:
          "Reset the chatbot personality prompt to the default personality prompt for this server.",
      })
      .addFields({
        name: "chatbot preview-behavior",
        value: "Preview the processed behavior prompt to see what the bot will actually use.",
      })
      .addFields({
        name: "chatbot preview-personality",
        value: "Preview the processed personality prompt to see what the bot will actually use.",
      })
      .addFields({
        name: "chatbot show-behavior",
        value: "Show the raw behavior prompt.",
      })
      .addFields({
        name: "chatbot show-personality",
        value: "Show the raw personality prompt.",
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
