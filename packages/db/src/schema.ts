import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tags = sqliteTable("tags", {
  id: int().primaryKey({ autoIncrement: true }),
  discord_user_id: text().notNull(),
  discord_guild_id: text().notNull(),
  key: text().notNull(),
  value: text().notNull(),
});

export type GuildSettings = {
  prefix?: string;
  language?: string;
  chatbotBehavior?: string;
  chatbotPersonality?: string;
  chatbotModel?: string;
};

export const guildSettings = sqliteTable("guild_settings", {
  id: int().primaryKey({ autoIncrement: true }),
  discord_guild_id: text().notNull().unique(),
  settings: text({ mode: "json" }).$type<GuildSettings>().notNull().default({}),
});
