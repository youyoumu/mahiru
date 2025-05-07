import {
  bold,
  ChatInputCommandInteraction,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import db, { schema } from "@repo/db";
import { unique } from "../../utils/unique";
import { eq } from "drizzle-orm";

const action = {
  add: "add",
  drop: "drop",
  list: "list",
  remove: "remove",
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
        .setDescription("Add a meme to your collections")
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
        .setDescription("Drop a meme from your or server collections")
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
        .setDescription("List all memes you can drop"),
    )

    .addSubcommand((subCommand) =>
      subCommand
        .setName(action.remove)
        .setDescription("Remove a meme from your or server collections")
        .addStringOption((option) =>
          option
            .setName(param.key)
            .setDescription("Key to retrieve the meme")
            .setMaxLength(32)
            .setRequired(true),
        ),
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
          const userMeme = await getUserMeme({ discord_user_id, key });
          const guildMeme = await getGuildMeme({ discord_guild_id, key });

          // if this guild already has meme with this key, remove it from this server
          if (guildMeme) {
            db.update(schema.meme)
              .set({ discord_guild_id: "" })
              .where(eq(schema.meme.id, guildMeme.id));
          }

          // if user already has meme with this key, update it
          if (userMeme) {
            db.update(schema.meme)
              .set({ value })
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

          return await interaction.reply(bold(key) + "\n\n" + value);
        }
        return interaction.reply("⚠️ Invalid arguments");
      }

      case "drop": {
        if (key) {
          const userMeme = await getUserMeme({ discord_user_id, key });
          const guildMeme = await getGuildMeme({ discord_guild_id, key });

          if (userMeme) {
            return interaction.reply(userMeme.value);
          }
          if (guildMeme) {
            return interaction.reply(guildMeme.value);
          }

          return interaction.reply("⚠️ Unknown Key");
        }
        return interaction.reply("⚠️ Invalid arguments");
      }
      case "list": {
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

        const allMemes = [...userMemes, ...guildMemes];
        const allKeys = unique(allMemes.map((meme) => meme.key));

        // inside a command, event listener, etc.
        const embed = new EmbedBuilder()
          .setDescription("Showing memes you can drop")
          // .setThumbnail(
          //   "https://cdn.discordapp.com/avatars/1366671964500000778/555dfb9cf6265ae505041deeaac95b05",
          // )
          .addFields({
            name: "\u200B",
            value: allKeys
              .map((k, i) => `${bold(i.toString())}. ${k}`)
              .join("\n"),
          })

          .setFooter({
            text: `Page 1/1 (${allKeys.length} Total)`,
          });

        return interaction.reply({ embeds: [embed] });
      }
      case "remove":
        if (key) {
          const userMeme = await getUserMeme({ key, discord_user_id });
          const guildMeme = await getGuildMeme({ discord_guild_id, key });

          // if this guild already has meme with this key, remove it from this server
          if (guildMeme) {
            db.update(schema.meme)
              .set({ discord_guild_id: "" })
              .where(eq(schema.meme.id, guildMeme.id));
          }

          if (userMeme) {
            await db.delete(schema.meme).where(eq(schema.meme.id, userMeme.id));
            return interaction.reply(
              `${inlineCode(userMeme.key)} has been deleted`,
            );
          }

          return interaction.reply("⚠️ Unknown Key");
        }
        return interaction.reply("⚠️ Invalid arguments");
    }

    return interaction.reply("Something went wrong");
  },
  async prefixExecute({
    message,
    args,
    command,
  }: {
    message: Message;
    args: string[];
    command: string;
  }) {},
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
