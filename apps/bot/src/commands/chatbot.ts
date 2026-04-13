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
} as const;
type Action = keyof typeof ACTION;

const PARAMS = {
  behavior: "behavior",
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
      default: {
        this.handleHelp({ interaction, message });
      }
    }
  }

  private async handleSetBehavior({
    discord_guild_id,
    discord_user_id,
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

    const embed = new EmbedBuilder()
      .setTitle("Chatbot Behavior Updated")
      .setDescription("The chatbot behavior has been updated for this server.")
      .addFields({
        name: "New Behavior",
        value: inlineCode(behavior.length > 1000 ? `${behavior.slice(0, 1000)}...` : behavior),
      })
      .setFooter({
        text: `Updated by <@${discord_user_id}>`,
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
      .addFields({
        name: "chatbot set-behavior",
        value:
          "Set a custom behavior prompt for the chatbot in this server. This will replace the default behavior prompt used by the chatbot.",
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
