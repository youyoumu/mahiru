import db from "@repo/db";

export const globalPrefix = "!";
const prefixStorage = new Map();

export function getPrefixStorage() {
  return prefixStorage;
}

export async function getGuildPrefix({
  discord_guild_id,
}: {
  discord_guild_id: string | null | undefined;
}): Promise<string> {
  const prefixFromStorage = getPrefixStorage().get(discord_guild_id);
  if (prefixFromStorage) return prefixFromStorage;

  const prefix =
    (
      await db.query.prefixes.findFirst({
        where(fields, operators) {
          return operators.eq(fields.discord_guild_id, discord_guild_id ?? "");
        },
      })
    )?.prefix ?? globalPrefix;

  if (prefix && discord_guild_id) {
    getPrefixStorage().set(discord_guild_id, prefix);
    return prefix;
  }

  return globalPrefix;
}
