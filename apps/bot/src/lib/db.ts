import { env } from "#/env";
import { schema } from "@repo/db";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";
import { uniqBy } from "es-toolkit";

export type DB = ReturnType<typeof drizzle<typeof schema>>;

export class DbSvc {
  static globalPrefix = "!";
  db: DB;
  private prefixStorage = new Map<string, string>();

  constructor() {
    this.db = drizzle({ connection: { url: env.DATABASE_URL }, schema });
  }

  async getGuildPrefix(discord_guild_id: string | null | undefined): Promise<string> {
    const prefixFromStorage = this.prefixStorage.get(discord_guild_id ?? "");
    if (prefixFromStorage) return prefixFromStorage;

    const prefix =
      (
        await this.db.query.prefixes.findFirst({
          where(fields, operators) {
            return operators.eq(fields.discord_guild_id, discord_guild_id ?? "");
          },
        })
      )?.prefix ?? DbSvc.globalPrefix;

    if (prefix && discord_guild_id) {
      this.prefixStorage.set(discord_guild_id, prefix);
      return prefix;
    }

    return DbSvc.globalPrefix;
  }

  async getUserMeme(key: string, discord_user_id: string) {
    return await this.db.query.meme.findFirst({
      where(fields, { eq, and }) {
        return and(eq(fields.key, key), eq(fields.discord_user_id, discord_user_id));
      },
    });
  }

  async getUserMemes(discord_user_id: string) {
    return await this.db.query.meme.findMany({
      where(fields, { eq, and }) {
        return and(eq(fields.discord_user_id, discord_user_id));
      },
    });
  }

  async getGuildMeme(key: string, discord_guild_id: string | undefined | null) {
    if (!discord_guild_id) return undefined;
    return await this.db.query.meme.findFirst({
      where(fields, { eq, and }) {
        return and(eq(fields.key, key), eq(fields.discord_guild_id, discord_guild_id));
      },
    });
  }

  async getGuildMemes(discord_guild_id: string | undefined | null) {
    if (!discord_guild_id) return [];
    return await this.db.query.meme.findMany({
      where(fields, { eq, and }) {
        return and(eq(fields.discord_guild_id, discord_guild_id));
      },
    });
  }

  async getMeme(key: string, discord_user_id: string, discord_guild_id: string | undefined | null) {
    const userMeme = await this.getUserMeme(key, discord_user_id);
    if (userMeme) return userMeme;
    const guildMeme = await this.getGuildMeme(key, discord_guild_id);
    return guildMeme;
  }

  async getMemes(discord_user_id: string, discord_guild_id: string | undefined | null) {
    const userMemes = await this.getUserMemes(discord_user_id);
    const guildMemes = await this.getGuildMemes(discord_guild_id);
    return uniqBy([...userMemes, ...guildMemes], (item) => item.id);
  }

  async addMeme(
    key: string,
    value: string,
    discord_user_id: string,
    discord_guild_id: string | undefined | null,
  ) {
    const userMeme = await this.getUserMeme(key, discord_user_id);
    const guildMeme = await this.getGuildMeme(key, discord_guild_id);

    // if this guild already has meme with this key, remove it from the guild
    if (guildMeme) {
      await this.db
        .update(schema.meme)
        .set({ discord_guild_id: "" })
        .where(eq(schema.meme.id, guildMeme.id));
    }

    // if user already has meme with this key, update it
    if (userMeme) {
      await this.db
        .update(schema.meme)
        .set({ value, discord_guild_id: discord_guild_id ?? "" })
        .where(eq(schema.meme.id, userMeme.id));
    }

    // else create new meme
    else {
      await this.db.insert(schema.meme).values({
        key,
        value,
        discord_user_id,
        discord_guild_id: discord_guild_id ?? "",
      });
    }
  }

  async removeMeme(
    key: string,
    discord_user_id: string,
    discord_guild_id: string | undefined | null,
  ) {
    const userMeme = await this.getUserMeme(key, discord_user_id);
    const guildMeme = await this.getGuildMeme(key, discord_guild_id);

    // if this guild already has meme with this key, remove it from this server
    if (guildMeme) {
      await this.db
        .update(schema.meme)
        .set({ discord_guild_id: "" })
        .where(eq(schema.meme.id, guildMeme.id));
    }

    if (userMeme) {
      await this.db.delete(schema.meme).where(eq(schema.meme.id, userMeme.id));
    }

    return !!(guildMeme || userMeme);
  }

  async getGuildPrefixEntry(discord_guild_id: string) {
    return await this.db.query.prefixes.findFirst({
      where(fields, operators) {
        return operators.eq(fields.discord_guild_id, discord_guild_id);
      },
    });
  }

  async changeGuildPrefix(discord_guild_id: string, prefix: string) {
    const guildPrefix = await this.getGuildPrefixEntry(discord_guild_id);

    if (guildPrefix) {
      await this.db
        .update(schema.prefixes)
        .set({ prefix: prefix })
        .where(eq(schema.prefixes.id, guildPrefix.id));
    } else {
      await this.db.insert(schema.prefixes).values({
        discord_guild_id: discord_guild_id,
        prefix: prefix,
      });
    }

    this.prefixStorage.set(discord_guild_id, prefix);
  }
}
