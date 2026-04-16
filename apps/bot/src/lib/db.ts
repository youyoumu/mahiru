import { env } from "#/env";
import { schema, drizzle, eq, relations } from "@repo/db";
import { uniqBy } from "es-toolkit";
import { DatabaseSync } from "node:sqlite";

type GuildPrefixEntry = { prefix?: string };
export type DB = ReturnType<typeof drizzle<typeof schema, typeof relations>>;

export class DbSvc {
  static globalPrefix = "!";
  db: DB;
  private prefixStorage = new Map<string, string>();

  constructor() {
    const client = new DatabaseSync(env.DATABASE_URL);
    this.db = drizzle({ client, schema, relations });
  }

  async getGuildPrefix(discord_guild_id: string | null | undefined): Promise<string> {
    const prefixFromStorage = this.prefixStorage.get(discord_guild_id ?? "");
    if (prefixFromStorage) return prefixFromStorage;

    const prefix =
      (
        await this.db.query.guildSettings.findFirst({
          where: { discord_guild_id: discord_guild_id ?? "" },
        })
      )?.settings.prefix ?? DbSvc.globalPrefix;

    if (prefix && discord_guild_id) {
      this.prefixStorage.set(discord_guild_id, prefix);
      return prefix;
    }

    return DbSvc.globalPrefix;
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

    return !!(guildTag || userTag);
  }

  async getGuildPrefixEntry(discord_guild_id: string): Promise<GuildPrefixEntry | undefined> {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (!guildSettings) return undefined;

    return { prefix: guildSettings.settings.prefix };
  }

  async changeGuildPrefix(discord_guild_id: string, prefix: string) {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (guildSettings) {
      await this.db
        .update(schema.guildSettings)
        .set({
          settings: {
            ...guildSettings.settings,
            prefix,
          },
        })
        .where(eq(schema.guildSettings.id, guildSettings.id));
    } else {
      await this.db.insert(schema.guildSettings).values({
        discord_guild_id,
        settings: { prefix },
      });
    }

    this.prefixStorage.set(discord_guild_id, prefix);
  }

  //TODO: cache
  async getGuildChatbotBehavior(
    discord_guild_id: string | null | undefined,
  ): Promise<string | undefined> {
    if (!discord_guild_id) return undefined;
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });
    return guildSettings?.settings?.chatbotBehavior;
  }

  async setGuildChatbotBehavior(discord_guild_id: string, behavior: string) {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (guildSettings) {
      await this.db
        .update(schema.guildSettings)
        .set({
          settings: {
            ...guildSettings.settings,
            chatbotBehavior: behavior,
          },
        })
        .where(eq(schema.guildSettings.id, guildSettings.id));
    } else {
      await this.db.insert(schema.guildSettings).values({
        discord_guild_id,
        settings: { chatbotBehavior: behavior },
      });
    }
  }

  async resetGuildChatbotBehavior(discord_guild_id: string) {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (guildSettings) {
      const { chatbotBehavior: _, ...restSettings } = guildSettings.settings;
      await this.db
        .update(schema.guildSettings)
        .set({ settings: restSettings })
        .where(eq(schema.guildSettings.id, guildSettings.id));
    }
  }

  async getGuildChatbotPersonality(
    discord_guild_id: string | null | undefined,
  ): Promise<string | undefined> {
    if (!discord_guild_id) return undefined;
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });
    return guildSettings?.settings?.chatbotPersonality;
  }

  async setGuildChatbotPersonality(discord_guild_id: string, personality: string) {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (guildSettings) {
      await this.db
        .update(schema.guildSettings)
        .set({
          settings: {
            ...guildSettings.settings,
            chatbotPersonality: personality,
          },
        })
        .where(eq(schema.guildSettings.id, guildSettings.id));
    } else {
      await this.db.insert(schema.guildSettings).values({
        discord_guild_id,
        settings: { chatbotPersonality: personality },
      });
    }
  }

  async resetGuildChatbotPersonality(discord_guild_id: string) {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (guildSettings) {
      const { chatbotPersonality: _, ...restSettings } = guildSettings.settings;
      await this.db
        .update(schema.guildSettings)
        .set({ settings: restSettings })
        .where(eq(schema.guildSettings.id, guildSettings.id));
    }
  }

  async getGuildChatbotModel(
    discord_guild_id: string | null | undefined,
  ): Promise<string | undefined> {
    if (!discord_guild_id) return undefined;
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });
    return guildSettings?.settings?.chatbotModel;
  }

  async setGuildChatbotModel(discord_guild_id: string, model: string) {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (guildSettings) {
      await this.db
        .update(schema.guildSettings)
        .set({
          settings: {
            ...guildSettings.settings,
            chatbotModel: model,
          },
        })
        .where(eq(schema.guildSettings.id, guildSettings.id));
    } else {
      await this.db.insert(schema.guildSettings).values({
        discord_guild_id,
        settings: { chatbotModel: model },
      });
    }
  }

  async resetGuildChatbotModel(discord_guild_id: string) {
    const guildSettings = await this.db.query.guildSettings.findFirst({
      where: { discord_guild_id },
    });

    if (guildSettings) {
      const { chatbotModel: _, ...restSettings } = guildSettings.settings;
      await this.db
        .update(schema.guildSettings)
        .set({ settings: restSettings })
        .where(eq(schema.guildSettings.id, guildSettings.id));
    }
  }
}
