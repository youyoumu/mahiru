import { env } from "#/env";
import { schema } from "@repo/db";
import { drizzle } from "drizzle-orm/libsql";

export type DB = ReturnType<typeof drizzle<typeof schema>>;

export class DbSvc {
  static globalPrefix = "!";
  db: DB;
  private prefixStorage = new Map<string, string>();

  constructor() {
    this.db = drizzle({ connection: { url: env.DATABASE_URL }, schema });
  }

  getPrefixStorage() {
    return this.prefixStorage;
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
}
