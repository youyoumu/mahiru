import { env } from "#/env";
import { schema, drizzle, relations } from "@repo/db";
import { DatabaseSync } from "node:sqlite";

export type DB = ReturnType<typeof drizzle<typeof schema, typeof relations>>;
export function createDb(): DB {
  const client = new DatabaseSync(env.DATABASE_URL);
  return drizzle({ client, schema, relations });
}
