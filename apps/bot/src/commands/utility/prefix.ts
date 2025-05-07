import {
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
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
  help: "help",
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
    )

    .addSubcommand((subCommand) =>
      subCommand.setName(action.help).setDescription("Explain prefix command"),
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

      case "help": {
        return handleHelp({ interaction });
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

      case action.help: {
        return handleHelp({ message });
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

function handleHelp({
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
      value:
        "Change the bot prefix for this server. The maximum prefix length is 2 characters.",
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
