import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const meme = sqliteTable("meme", {
  id: int().primaryKey({ autoIncrement: true }),
  discord_user_id: text().notNull(),
  discord_guild_id: text().notNull(),
  key: text().notNull(),
  value: text().notNull(),
});

export const prefixes = sqliteTable("prefixes", {
  id: int().primaryKey({ autoIncrement: true }),
  discord_guild_id: text().notNull(),
  prefix: text().notNull(),
});
