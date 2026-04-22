import { schema, eq } from "@repo/db";
import fs from "node:fs/promises";
import pino from "pino";
import pretty from "pino-pretty";
import { describe, it, expect, beforeEach, afterEach } from "vitest";

import { DbSvc } from "./db";

describe("DbSvc.addTags", () => {
  const TEST_DB_PATH = "../../storage/test.local.db";
  let dbSvc: DbSvc;

  const exists = async (path: string) => {
    try {
      await fs.access(path);
      return true;
    } catch {
      return false;
    }
  };

  beforeEach(async () => {
    // Ensure storage directory exists
    if (!(await exists("../../storage"))) {
      await fs.mkdir("../../storage", { recursive: true });
    }

    if (await exists(TEST_DB_PATH)) {
      await fs.unlink(TEST_DB_PATH);
    }

    const logger = pino(
      { level: "trace" },
      pretty({
        ignore: "pid,hostname",
        translateTime: "SYS:HH:MM:ss",
      }),
    );
    dbSvc = new DbSvc(logger, TEST_DB_PATH, "../../packages/db/drizzle");
  });
  afterEach(async () => {
    // Clean up test database
    if (await exists(TEST_DB_PATH)) {
      await fs.unlink(TEST_DB_PATH);
    }
  });

  it("should batch insert new tags", async () => {
    const userId = "user1";
    const guildId = "guild1";
    const tags = [
      { key: "key1", value: "val1" },
      { key: "key2", value: "val2" },
    ];

    await dbSvc.addTags(tags, userId, guildId);

    const dbTags = dbSvc.db
      .select()
      .from(schema.tags)
      .where(eq(schema.tags.discord_user_id, userId))
      .all();
    expect(dbTags).toHaveLength(2);
    expect(dbTags).toContainEqual(
      expect.objectContaining({ key: "key1", value: "val1", discord_guild_id: guildId }),
    );
    expect(dbTags).toContainEqual(
      expect.objectContaining({ key: "key2", value: "val2", discord_guild_id: guildId }),
    );
  });

  it("should update existing user tags instead of inserting new ones", async () => {
    const userId = "user1";
    const guildId = "guild1";

    // Initial insert
    await dbSvc.addTag("key1", "old_val", userId, guildId);

    const tags = [
      { key: "key1", value: "new_val" },
      { key: "key2", value: "val2" },
    ];

    await dbSvc.addTags(tags, userId, guildId);

    const dbTags = dbSvc.db
      .select()
      .from(schema.tags)
      .where(eq(schema.tags.discord_user_id, userId))
      .all();
    expect(dbTags).toHaveLength(2);

    const tag1 = dbTags.find((t) => t.key === "key1");
    expect(tag1?.value).toBe("new_val");
    expect(tag1?.discord_guild_id).toBe(guildId);
  });

  it("should clear discord_guild_id from other owners in the same guild", async () => {
    const user1 = "user1";
    const user2 = "user2";
    const guildId = "guild1";

    // User2 has key1 in guild1
    await dbSvc.addTag("key1", "user2_val", user2, guildId);

    // User1 imports key1 in guild1
    const tags = [{ key: "key1", value: "user1_val" }];
    await dbSvc.addTags(tags, user1, guildId);

    const tagUser2 = dbSvc.db
      .select()
      .from(schema.tags)
      .where(eq(schema.tags.discord_user_id, user2))
      .all()[0];
    const tagUser1 = dbSvc.db
      .select()
      .from(schema.tags)
      .where(eq(schema.tags.discord_user_id, user1))
      .all()[0];

    expect(tagUser2?.discord_guild_id).toBe("");
    expect(tagUser1?.discord_guild_id).toBe(guildId);
  });

  it("should handle empty guild id by using empty string", async () => {
    const userId = "user1";
    const tags = [{ key: "key1", value: "val1" }];

    await dbSvc.addTags(tags, userId, null);

    const tag = dbSvc.db
      .select()
      .from(schema.tags)
      .where(eq(schema.tags.discord_user_id, userId))
      .all()[0];
    expect(tag?.discord_guild_id).toBe("");
  });
});
