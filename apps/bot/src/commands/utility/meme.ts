import {
  bold,
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import db, { schema } from "@repo/db";
import { eq } from "drizzle-orm";
import { getGuildPrefix } from "#/utils/prefixStorage";
import { uniqueBy } from "#/utils/uniqueBy";
import { getUser } from "#/events/discordRest";

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

export default {
  data: new SlashCommandBuilder()
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
          option
            .setName(param.value)
            .setDescription("Text or link")
            .setRequired(true),
        ),
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(action.drop)
        .setDescription(
          "Drop a meme from your collection or the server's collection.",
        )
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
        .setDescription(
          "Remove a meme from your collection and/or the server's collection.",
        )
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
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    const selectedAction =
      interaction.options.getSubcommand() as keyof typeof action;
    const key = interaction.options.getString(param.key);
    const value = interaction.options.getString(param.value);
    const discord_user_id = interaction.user.id;
    const discord_guild_id = interaction.guildId;

    switch (selectedAction) {
      case "add": {
        if (key && value) {
          return handleAdd({
            discord_guild_id,
            discord_user_id,
            key,
            value,
            interaction,
          });
        }
        return interaction.reply("⚠️ Invalid arguments");
      }

      case "drop": {
        if (key) {
          return handleDrop({
            discord_guild_id,
            discord_user_id,
            key,
            interaction,
          });
        }
        return interaction.reply("⚠️ Invalid arguments");
      }
      case "list": {
        return handleList({
          discord_guild_id,
          discord_user_id,
          interaction,
        });
      }
      case "remove": {
        if (key) {
          return handleRemove({
            discord_guild_id,
            discord_user_id,
            key,
            interaction,
          });
        }
        return interaction.reply("⚠️ Invalid arguments");
      }
      case "help": {
        return handleHelp({ interaction });
      }
    }

    return interaction.reply("Something went wrong");
  },
  async prefixExecute({ message, args }: { message: Message; args: string[] }) {
    const discord_user_id = message.author.id;
    const discord_guild_id = message.guildId;
    const subCommand = args[0];
    switch (subCommand) {
      case action.add: {
        const key = args[1];
        const value = message.content
          .split(`${key} `)
          .slice(1)
          .join(`${key} `)
          .trim();

        if (key && value) {
          return handleAdd({
            discord_guild_id,
            discord_user_id,
            key,
            value,
            message,
          });
        }

        if (message.channel.isSendable()) {
          message.channel.send(codeBlock("add <key> <value>"));
        }
        break;
      }
      case action.drop: {
        const key = args[1];
        if (key) {
          return handleDrop({
            discord_guild_id,
            discord_user_id,
            key,
            message,
          });
        }

        if (message.channel.isSendable()) {
          message.channel.send(codeBlock("drop <key>"));
        }
        break;
      }
      case action.list: {
        return handleList({
          discord_guild_id,
          discord_user_id,
          message,
        });
      }
      case action.remove: {
        const key = args[1];
        if (key) {
          return handleRemove({
            discord_guild_id,
            discord_user_id,
            key,
            message,
          });
        }

        if (message.channel.isSendable()) {
          message.channel.send(codeBlock("remove <key>"));
        }
        break;
      }
      case action.help: {
        return handleHelp({ message });
      }
      default: {
        if (message.channel.isSendable()) {
          const key = subCommand;
          if (key) {
            return handleDrop({
              discord_guild_id,
              discord_user_id,
              key,
              message,
            });
          }
        }
      }
    }
  },
};

async function getUserMeme({
  key,
  discord_user_id,
}: {
  key: string;
  discord_user_id: string;
}) {
  const userMeme = await db.query.meme.findFirst({
    where(fields, { eq, and }) {
      return and(
        eq(fields.key, key),
        eq(fields.discord_user_id, discord_user_id),
      );
    },
  });
  return userMeme;
}

async function getGuildMeme({
  key,
  discord_guild_id,
}: {
  key: string;
  discord_guild_id: string | undefined | null;
}) {
  const guildMeme = discord_guild_id
    ? await db.query.meme.findFirst({
        where(fields, { eq, and }) {
          return and(
            eq(fields.key, key),
            eq(fields.discord_guild_id, discord_guild_id),
          );
        },
      })
    : undefined;

  return guildMeme;
}

async function handleDrop({
  discord_guild_id,
  discord_user_id,
  key,
  interaction,
  message,
}: {
  discord_guild_id: string | undefined | null;
  discord_user_id: string;
  key: string;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}) {
  const userMeme = await getUserMeme({ discord_user_id, key });
  const guildMeme = await getGuildMeme({ discord_guild_id, key });

  if (userMeme) {
    interaction?.reply(userMeme.value);
    if (message?.channel.isSendable()) message?.channel.send(userMeme.value);
    return;
  }
  if (guildMeme) {
    interaction?.reply(guildMeme.value);
    if (message?.channel.isSendable()) message?.channel.send(guildMeme.value);
    return;
  }

  const unknownKeyMessage = "⚠️ Unknown Key";

  interaction?.reply(unknownKeyMessage);
  if (message?.channel.isSendable()) message?.channel.send(unknownKeyMessage);
}

async function handleAdd({
  discord_guild_id,
  discord_user_id,
  key,
  value,
  interaction,
  message,
}: {
  discord_guild_id: string | undefined | null;
  discord_user_id: string;
  key: string;
  value: string;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}) {
  if (key.length > 32) {
    interaction?.reply("The maximum key length is 32 characters.");
    if (message?.channel.isSendable())
      message.channel.send("The maximum key length is 32 characters.");
    return;
  }

  const userMeme = await getUserMeme({ discord_user_id, key });
  const guildMeme = await getGuildMeme({ discord_guild_id, key });

  // if this guild already has meme with this key, remove it from this server
  if (guildMeme) {
    await db
      .update(schema.meme)
      .set({ discord_guild_id: "" })
      .where(eq(schema.meme.id, guildMeme.id));
  }

  // if user already has meme with this key, update it
  if (userMeme) {
    await db
      .update(schema.meme)
      .set({ value, discord_guild_id: discord_guild_id ?? "" })
      .where(eq(schema.meme.id, userMeme.id));
  }
  // else create new meme
  else {
    await db.insert(schema.meme).values({
      key,
      value,
      discord_user_id,
      discord_guild_id: discord_guild_id ?? "",
    });
  }

  interaction?.reply(bold(key) + "\n\n" + value);
  if (message?.channel.isSendable())
    message.channel.send(bold(key) + "\n\n" + value);
}

async function handleList({
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
  const userMemes = await db.query.meme.findMany({
    where(fields, { eq, and }) {
      return and(eq(fields.discord_user_id, discord_user_id));
    },
  });

  const guildMemes = discord_guild_id
    ? await db.query.meme.findMany({
        where(fields, { eq, and }) {
          return and(eq(fields.discord_guild_id, discord_guild_id));
        },
      })
    : [];

  const allMemes = await Promise.all(
    uniqueBy([...userMemes, ...guildMemes], (item) => item.id).map(
      async (meme) => {
        const user = await getUser({ discord_user_id: meme.discord_user_id });
        return {
          ...meme,
          user,
        };
      },
    ),
  );

  // inside a command, event listener, etc.
  const embed = new EmbedBuilder()
    .setDescription("Showing memes you can drop")
    .addFields({
      name: "\u200B",
      value: allMemes
        .map(
          (meme, i) =>
            `${bold(i.toString())}. ${meme.key} - ${meme.user.username}`,
        )
        .join("\n"),
    })

    .setFooter({
      text: `Page 1/1 (${allMemes.length} Total)`,
    });

  interaction?.reply({ embeds: [embed] });
  if (message?.channel.isSendable()) message.channel.send({ embeds: [embed] });
}

async function handleRemove({
  discord_guild_id,
  discord_user_id,
  key,
  interaction,
  message,
}: {
  discord_guild_id: string | undefined | null;
  discord_user_id: string;
  key: string;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}) {
  const userMeme = await getUserMeme({ key, discord_user_id });
  const guildMeme = await getGuildMeme({ discord_guild_id, key });

  // if this guild already has meme with this key, remove it from this server
  if (guildMeme) {
    await db
      .update(schema.meme)
      .set({ discord_guild_id: "" })
      .where(eq(schema.meme.id, guildMeme.id));
  }

  if (userMeme) {
    await db.delete(schema.meme).where(eq(schema.meme.id, userMeme.id));
  }

  if (guildMeme || userMeme) {
    interaction?.reply(`${inlineCode(key)} has been deleted`);
    if (message?.channel.isSendable())
      message?.channel.send(`${inlineCode(key)} has been deleted`);
    return;
  }

  interaction?.reply("⚠️ Unknown Key");
  if (message?.channel.isSendable()) message?.channel.send("⚠️ Unknown Key");
}

async function handleHelp({
  interaction,
  message,
}: {
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}) {
  const discord_guild_id = message?.guildId ?? interaction?.guildId;
  const prefix = await getGuildPrefix({ discord_guild_id });

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
      value:
        "Remove a meme from your collection and/or the server's collection.",
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
