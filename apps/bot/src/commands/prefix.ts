import type { Ctx } from "#/lib/ctx";
import type { DB } from "#/lib/db";

import { DbSvc } from "#/lib/db";
import { schema } from "@repo/db";
import {
  ChatInputCommandInteraction,
  codeBlock,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import { eq } from "drizzle-orm";

import type { Command, CommandProto, PrefixExecuteOpts } from "../lib/command";

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

export const Prefix: CommandProto = class Prefix implements Command {
  static data = new SlashCommandBuilder()
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
      subCommand.setName(action.current).setDescription("Show current bot prefix for this server"),
    )

    .addSubcommand((subCommand) =>
      subCommand.setName(action.help).setDescription("Explain prefix command"),
    );
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(interaction: ChatInputCommandInteraction) {
    const selectedAction = interaction.options.getSubcommand() as keyof typeof action;
    const newPrefix = interaction.options.getString(param["new-prefix"]);
    const discord_guild_id = interaction.guildId;

    if (!discord_guild_id) return;

    switch (selectedAction) {
      case "change": {
        if (newPrefix) {
          return handleChange({
            dbSvc: this.ctx.dbSvc,
            discord_guild_id,
            prefix: newPrefix,
            interaction,
          });
        }
        return interaction.reply("⚠️ Invalid arguments");
      }

      case "current": {
        return handleCurrent({
          dbSvc: this.ctx.dbSvc,
          discord_guild_id,
          interaction,
        });
      }

      case "help": {
        return handleHelp({ interaction });
      }
    }

    return interaction.reply("Something went wrong");
  }

  async prefixExecute({ message, args }: PrefixExecuteOpts) {
    const discord_guild_id = message.guildId;
    if (!discord_guild_id) return;
    const subCommand = args[0];

    switch (subCommand) {
      case action.change: {
        const newPrefix = args[1];

        if (newPrefix) {
          return handleChange({
            dbSvc: this.ctx.dbSvc,
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
          dbSvc: this.ctx.dbSvc,
          discord_guild_id,
          message,
        });
      }

      case action.help: {
        return handleHelp({ message });
      }

      default: {
        return handleCurrent({
          dbSvc: this.ctx.dbSvc,
          discord_guild_id,
          message,
        });
      }
    }
  }
};

async function getGuildPrefixEntry({ db, discord_guild_id }: { db: DB; discord_guild_id: string }) {
  return await db.query.prefixes.findFirst({
    where(fields, operators) {
      return operators.eq(fields.discord_guild_id, discord_guild_id);
    },
  });
}

async function handleChange({
  dbSvc,
  discord_guild_id,
  prefix,
  interaction,
  message,
}: {
  dbSvc: DbSvc;
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

  const guildPrefix = await getGuildPrefixEntry({ db: dbSvc.db, discord_guild_id });

  if (guildPrefix) {
    await dbSvc.db
      .update(schema.prefixes)
      .set({ prefix: prefix })
      .where(eq(schema.prefixes.id, guildPrefix.id));
  } else {
    await dbSvc.db.insert(schema.prefixes).values({
      discord_guild_id: discord_guild_id,
      prefix: prefix,
    });
  }
  dbSvc.getPrefixStorage().set(discord_guild_id, prefix);

  interaction?.reply(inlineCode(prefix));
  if (message?.channel.isSendable()) message.channel.send(inlineCode(prefix));
}

async function handleCurrent({
  dbSvc,
  discord_guild_id,
  interaction,
  message,
}: {
  dbSvc: DbSvc;
  discord_guild_id: string;
  interaction?: ChatInputCommandInteraction;
  message?: Message;
}) {
  const prefix =
    (await getGuildPrefixEntry({ db: dbSvc.db, discord_guild_id }))?.prefix ?? DbSvc.globalPrefix;

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
      value: "Change the bot prefix for this server. The maximum prefix length is 2 characters.",
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
