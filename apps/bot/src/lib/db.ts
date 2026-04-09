import { env } from "#/env";
import { schema } from "@repo/db";
import { drizzle } from "drizzle-orm/libsql";

export type DB = ReturnType<typeof drizzle<typeof schema>>;

export function createDb(): DB {
  return drizzle({ connection: { url: env.DATABASE_URL }, schema });
}
