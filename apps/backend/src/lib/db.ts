import { env } from "#/env";
import { schema, drizzle, relations, migrate } from "@repo/db";
import { DatabaseSync } from "node:sqlite";

export type DB = ReturnType<typeof drizzle<typeof schema, typeof relations>>;
export function createDb(): DB {
  const client = new DatabaseSync(env.DATABASE_URL);
  const db = drizzle({ client, schema, relations });
  if (env.DRIZZLE_DIR) migrate(db, { migrationsFolder: env.DRIZZLE_DIR });
  return db;
}
