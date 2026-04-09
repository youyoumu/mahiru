import { env } from "#/env";
import { schema, drizzle } from "@repo/db";

export type DB = ReturnType<typeof drizzle<typeof schema>>;
export function createDb(): DB {
  return drizzle({ connection: { url: env.DATABASE_URL }, schema });
}
