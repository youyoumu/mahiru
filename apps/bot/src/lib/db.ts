import type { Logger } from "@repo/db";
import type { Logger as PinoLogger } from "pino";

import { env } from "#/env";
import { schema, drizzle, eq, and, inArray, sql, relations, migrate } from "@repo/db";
import { uniqBy } from "es-toolkit";
import { DatabaseSync } from "node:sqlite";

class MyLogger implements Logger {
  log: PinoLogger;
  constructor(log: PinoLogger) {
    this.log = log;
  }

  logQuery = (query: string, params: unknown[]): void => {
    this.log.trace(`[QUERY]: ${query} \n[PARAMS]: ${JSON.stringify(params)}`);
  };
}

type GuildPrefixEntry = { prefix?: string };
export type DB = ReturnType<typeof drizzle<typeof schema, typeof relations>>;

export class DbSvc {
  static globalPrefix = "!";
  db: DB;
  private guildSettingsCache = new Map<string, schema.GuildSettings>();

  constructor(log: PinoLogger, databaseUrl?: string, drizzleDir?: string) {
    const client = new DatabaseSync(databaseUrl ?? env.DATABASE_URL);
    this.db = drizzle({ client, schema, relations, logger: new MyLogger(log) });
    const migrationsFolder = drizzleDir ?? env.DRIZZLE_DIR;
    if (migrationsFolder) migrate(this.db, { migrationsFolder });
  }

  private async getGuildSettings(
    discord_guild_id: string | null | undefined,
  ): Promise<schema.GuildSettings | undefined> {
    if (!discord_guild_id) return undefined;

    const cached = this.guildSettingsCache.get(discord_guild_id);
    if (cached) return cached;

    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (guildSettings) {
      this.guildSettingsCache.set(discord_guild_id, guildSettings.settings);
      return guildSettings.settings;
    }

    return undefined;
  }

  private async setGuildSettings(
    discord_guild_id: string,
    updater: (settings: schema.GuildSettings) => schema.GuildSettings,
  ) {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    const currentSettings = guildSettings?.settings ?? {};
    const newSettings = updater(currentSettings);

    if (guildSettings) {
      await this.db
        .update(schema.guildSettings)
        .set({ settings: newSettings })
        .where(eq(schema.guildSettings.id, guildSettings.id));
    } else {
      await this.db.insert(schema.guildSettings).values({
        discord_guild_id,
        settings: newSettings,
      });
    }

    this.guildSettingsCache.set(discord_guild_id, newSettings);
  }

  async getGuildPrefix(discord_guild_id: string | null | undefined): Promise<string> {
    const settings = await this.getGuildSettings(discord_guild_id);
    return settings?.prefix ?? DbSvc.globalPrefix;
  }

  async getUserTag(key: string, discord_user_id: string) {
    return await this.db.query.tags.findFirst({
      where: { key, discord_user_id },
    });
  }

  async getUserTags(discord_user_id: string) {
    return await this.db.query.tags.findMany({
      where: { discord_user_id },
    });
  }

  async getGuildTag(key: string, discord_guild_id: string | undefined | null) {
    if (!discord_guild_id) return undefined;
    return await this.db.query.tags.findFirst({
      where: { key, discord_guild_id },
    });
  }

  async getGuildTags(discord_guild_id: string | undefined | null) {
    if (!discord_guild_id) return [];
    return await this.db.query.tags.findMany({
      where: { discord_guild_id },
    });
  }

  async getTag(key: string, discord_user_id: string, discord_guild_id: string | undefined | null) {
    const userTag = await this.getUserTag(key, discord_user_id);
    if (userTag) return userTag;
    const guildTag = await this.getGuildTag(key, discord_guild_id);
    return guildTag;
  }

  async getTags(discord_user_id: string, discord_guild_id: string | undefined | null) {
    const userTags = await this.getUserTags(discord_user_id);
    const guildTags = await this.getGuildTags(discord_guild_id);
    return uniqBy([...userTags, ...guildTags], (item) => item.id);
  }

  //TODO: use transaction
  async addTag(
    key: string,
    value: string,
    discord_user_id: string,
    discord_guild_id: string | undefined | null,
  ) {
    const userTag = await this.getUserTag(key, discord_user_id);
    const guildTag = await this.getGuildTag(key, discord_guild_id);

    // If this guild already has a tag with this key, remove it from the guild.
    if (guildTag) {
      await this.db
        .update(schema.tags)
        .set({ discord_guild_id: "" })
        .where(eq(schema.tags.id, guildTag.id));
    }

    // If the user already has a tag with this key, update it.
    if (userTag) {
      await this.db
        .update(schema.tags)
        .set({ value, discord_guild_id: discord_guild_id ?? "" })
        .where(eq(schema.tags.id, userTag.id));
    }

    // Otherwise create a new tag.
    else {
      await this.db.insert(schema.tags).values({
        key,
        value,
        discord_user_id,
        discord_guild_id: discord_guild_id ?? "",
      });
    }
  }

  async addTags(
    tags: { key: string; value: string }[],
    discord_user_id: string,
    discord_guild_id: string | undefined | null,
  ) {
    const keys = tags.map((t) => t.key);
    this.db.transaction((tx) => {
      // 1. Clear discord_guild_id for these keys in this guild (if someone else owns them).
      if (discord_guild_id) {
        tx.update(schema.tags)
          .set({ discord_guild_id: "" })
          .where(
            and(eq(schema.tags.discord_guild_id, discord_guild_id), inArray(schema.tags.key, keys)),
          )
          .run();
      }

      // 2. Identify which tags already exist for this user.
      const existingUserTags = tx
        .select({ key: schema.tags.key })
        .from(schema.tags)
        .where(
          and(eq(schema.tags.discord_user_id, discord_user_id), inArray(schema.tags.key, keys)),
        )
        .all();

      const existingKeys = new Set(existingUserTags.map((t) => t.key));
      const toUpdate = tags.filter((t) => existingKeys.has(t.key));
      const toInsert = tags.filter((t) => !existingKeys.has(t.key));

      // 3. Update existing tags using a CASE statement (batch update with different values).
      if (toUpdate.length > 0) {
        const valueCase = sql.join(
          toUpdate.map((t) => sql`WHEN ${schema.tags.key} = ${t.key} THEN ${t.value}`),
          sql` `,
        );
        tx.update(schema.tags)
          .set({
            value: sql`CASE ${valueCase} END`,
            discord_guild_id: discord_guild_id ?? "",
          })
          .where(
            and(
              eq(schema.tags.discord_user_id, discord_user_id),
              inArray(
                schema.tags.key,
                toUpdate.map((t) => t.key),
              ),
            ),
          )
          .run();
      }

      // 4. Batch Insert new tags.
      if (toInsert.length > 0) {
        tx.insert(schema.tags)
          .values(
            toInsert.map((t) => ({
              key: t.key,
              value: t.value,
              discord_user_id,
              discord_guild_id: discord_guild_id ?? "",
            })),
          )
          .run();
      }
    });
  }

  async removeTag(
    key: string,
    discord_user_id: string,
    discord_guild_id: string | undefined | null,
  ) {
    const userTag = await this.getUserTag(key, discord_user_id);
    const guildTag = await this.getGuildTag(key, discord_guild_id);

    // If this guild already has a tag with this key, remove it from this server.
    if (guildTag) {
      await this.db
        .update(schema.tags)
        .set({ discord_guild_id: "" })
        .where(eq(schema.tags.id, guildTag.id));
    }

    if (userTag) {
      await this.db.delete(schema.tags).where(eq(schema.tags.id, userTag.id));
    }

    return { userTag, guildTag };
  }

  async getGuildPrefixEntry(discord_guild_id: string): Promise<GuildPrefixEntry | undefined> {
    const settings = await this.getGuildSettings(discord_guild_id);
    if (!settings) return undefined;
    return { prefix: settings.prefix };
  }

  async changeGuildPrefix(discord_guild_id: string, prefix: string) {
    await this.setGuildSettings(discord_guild_id, (s) => ({ ...s, prefix }));
  }

  async getGuildChatbotBehavior(
    discord_guild_id: string | null | undefined,
  ): Promise<string | undefined> {
    const settings = await this.getGuildSettings(discord_guild_id);
    return settings?.chatbotBehavior;
  }

  async setGuildChatbotBehavior(discord_guild_id: string, behavior: string) {
    await this.setGuildSettings(discord_guild_id, (s) => ({ ...s, chatbotBehavior: behavior }));
  }

  async resetGuildChatbotBehavior(discord_guild_id: string) {
    await this.setGuildSettings(discord_guild_id, (s) => {
      const { chatbotBehavior: _, ...rest } = s;
      return rest;
    });
  }

  async getGuildChatbotPersonality(
    discord_guild_id: string | null | undefined,
  ): Promise<string | undefined> {
    const settings = await this.getGuildSettings(discord_guild_id);
    return settings?.chatbotPersonality;
  }

  async setGuildChatbotPersonality(discord_guild_id: string, personality: string) {
    await this.setGuildSettings(discord_guild_id, (s) => ({
      ...s,
      chatbotPersonality: personality,
    }));
  }

  async resetGuildChatbotPersonality(discord_guild_id: string) {
    await this.setGuildSettings(discord_guild_id, (s) => {
      const { chatbotPersonality: _, ...rest } = s;
      return rest;
    });
  }

  async getGuildChatbotModel(
    discord_guild_id: string | null | undefined,
  ): Promise<string | undefined> {
    const settings = await this.getGuildSettings(discord_guild_id);
    return settings?.chatbotModel;
  }

  async setGuildChatbotModel(discord_guild_id: string, model: string) {
    await this.setGuildSettings(discord_guild_id, (s) => ({ ...s, chatbotModel: model }));
  }

  async resetGuildChatbotModel(discord_guild_id: string) {
    await this.setGuildSettings(discord_guild_id, (s) => {
      const { chatbotModel: _, ...rest } = s;
      return rest;
    });
  }

  async getGuildChatbotReplyChance(
    discord_guild_id: string | null | undefined,
  ): Promise<number | undefined> {
    const settings = await this.getGuildSettings(discord_guild_id);
    return settings?.chatbotReplyChance;
  }

  async setGuildChatbotReplyChance(discord_guild_id: string, probability: number) {
    await this.setGuildSettings(discord_guild_id, (s) => ({
      ...s,
      chatbotReplyChance: probability,
    }));
  }

  async resetGuildChatbotReplyChance(discord_guild_id: string) {
    await this.setGuildSettings(discord_guild_id, (s) => {
      const { chatbotReplyChance: _, ...rest } = s;
      return rest;
    });
  }
}
