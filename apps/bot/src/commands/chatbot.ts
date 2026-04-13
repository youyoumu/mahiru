import type { Ctx } from "#/lib/ctx";

import {
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

const ACTION = {
  "set-behavior": "set-behavior",
  "reset-behavior": "reset-behavior",
  "set-personality": "set-personality",
  "reset-personality": "reset-personality",
  help: "help",
} as const;
type Action = keyof typeof ACTION;

const PARAMS = {
  behavior: "behavior",
  personality: "personality",
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
      subCommand
        .setName(ACTION.help)
        .setDescription("Show help information for chatbot commands."),
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
    const behavior =
      interaction?.options.getString(PARAMS.behavior) ??
      message?.content.split("set-behavior ").slice(1).join("set-behavior ").trim();
    const personality =
      interaction?.options.getString(PARAMS.personality) ??
      message?.content.split("set-personality ").slice(1).join("set-personality ").trim();
    const discord_user_id = interaction?.user.id ?? message?.author.id;
    const discord_guild_id = interaction?.guildId ?? message?.guildId ?? null;
    if (!discord_user_id) return;

    switch (selectedAction) {
      case "set-behavior": {
        this.handleSetBehavior({
          discord_guild_id,
          discord_user_id,
          behavior,
          interaction,
          message,
        });
        break;
      }
      case "reset-behavior": {
        this.handleResetBehavior({
          discord_guild_id,
          discord_user_id,
          interaction,
          message,
        });
        break;
      }
      case "set-personality": {
        this.handleSetPersonality({
          discord_guild_id,
          discord_user_id,
          personality,
          interaction,
          message,
        });
        break;
      }
      case "reset-personality": {
        this.handleResetPersonality({
          discord_guild_id,
          discord_user_id,
          interaction,
          message,
        });
        break;
      }
      case "help": {
        this.handleHelp({
          interaction,
          message,
        });
        break;
      }
      default: {
        this.handleHelp({ interaction, message });
      }
    }
  }

  private async handleSetBehavior({
    discord_guild_id,
    behavior,
    interaction,
    message,
  }: {
    discord_guild_id: string | undefined | null;
    discord_user_id: string;
    behavior: string | undefined;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
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

  private async handleResetBehavior({
    discord_guild_id,
    interaction,
    message,
  }: {
    discord_guild_id: string | undefined | null;
    discord_user_id: string;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
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

  private async handleSetPersonality({
    discord_guild_id,
    personality,
    interaction,
    message,
  }: {
    discord_guild_id: string | undefined | null;
    discord_user_id: string;
    personality: string | undefined;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
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

  private async handleResetPersonality({
    discord_guild_id,
    interaction,
    message,
  }: {
    discord_guild_id: string | undefined | null;
    discord_user_id: string;
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
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

  private async handleHelp({
    interaction,
    message,
  }: {
    interaction?: ChatInputCommandInteraction;
    message?: Message;
  }) {
    const embed = new EmbedBuilder()
      .setTitle("Chatbot Help")
      .setColor("#fef3c6")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/1366671964500000778/555dfb9cf6265ae505041deeaac95b05",
      )
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
