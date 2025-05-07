import {
  ChatInputCommandInteraction,
  codeBlock,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import db, { schema } from "@repo/db";
import { eq } from "drizzle-orm";
import { getPrefixStorage, globalPrefix } from "#/utils/prefixStorage";

const action = {
  current: "current",
  change: "change",
} as const;

const param = {
  key: "key",
  value: "value",
  ["new-prefix"]: "new-prefix",
};

export default {
  data: new SlashCommandBuilder()
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
      subCommand
        .setName(action.current)
        .setDescription("Show current bot prefix for this server"),
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const selectedAction =
      interaction.options.getSubcommand() as keyof typeof action;
    const newPrefix = interaction.options.getString(param["new-prefix"]);
    const discord_guild_id = interaction.guildId;

    if (!discord_guild_id) return;

    switch (selectedAction) {
      case "change": {
        if (newPrefix) {
          return handleChange({
            discord_guild_id,
            prefix: newPrefix,
            interaction,
          });
        }
        return interaction.reply("⚠️ Invalid arguments");
      }

      case "current": {
        return handleCurrent({
          discord_guild_id,
          interaction,
        });
      }
    }

    return interaction.reply("Something went wrong");
  },
  async prefixExecute({ message, args }: { message: Message; args: string[] }) {
    const discord_guild_id = message.guildId;
    if (!discord_guild_id) return;
    const subCommand = args[0];

    switch (subCommand) {
      case action.change: {
        const newPrefix = args[1];

        if (newPrefix) {
          return handleChange({
            discord_guild_id,
            prefix: newPrefix,
            message,
          });
        }

        if (message.channel.isSendable()) {
          message.channel.send(codeBlock("change <new-prefix>"));
        }
        break;
      }
      case action.current: {
        return handleCurrent({
          discord_guild_id,
          message,
        });
      }
      default: {
        return handleCurrent({
          discord_guild_id,
          message,
        });
      }
    }
  },
};

async function getGuildPrefix({
  discord_guild_id,
}: {
  discord_guild_id: string;
}) {
  return await db.query.prefixes.findFirst({
    where(fields, operators) {
      return operators.eq(fields.discord_guild_id, discord_guild_id);
    },
  });
}

async function handleChange({
  discord_guild_id,
  prefix,
  interaction,
  message,
}: {
  discord_guild_id: string;
  prefix: string;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}) {
  if (prefix.length > 2) {
    interaction?.reply("The maximum prefix length is 2 characters.");
    if (message?.channel.isSendable())
      message.channel.send("The maximum prefix length is 2 characters.");
    return;
  }

  const guildPrefix = await getGuildPrefix({ discord_guild_id });

  if (guildPrefix) {
    await db
      .update(schema.prefixes)
      .set({ prefix: prefix })
      .where(eq(schema.prefixes.id, guildPrefix.id));
  } else {
    await db.insert(schema.prefixes).values({
      discord_guild_id: discord_guild_id,
      prefix: prefix,
    });
  }
  getPrefixStorage().set(discord_guild_id, prefix);

  interaction?.reply(inlineCode(prefix));
  if (message?.channel.isSendable()) message.channel.send(inlineCode(prefix));
}

async function handleCurrent({
  discord_guild_id,
  interaction,
  message,
}: {
  discord_guild_id: string;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}) {
  const prefix =
    (await getGuildPrefix({ discord_guild_id }))?.prefix ?? globalPrefix;

  interaction?.reply(inlineCode(prefix));
  if (message?.channel.isSendable()) message.channel.send(inlineCode(prefix));
}
