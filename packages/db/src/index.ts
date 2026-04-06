import { eq, or, inArray } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "./env";
import * as schema from "./schema";
import * as zodSchemas from "./zod";

const db = drizzle({ connection: { url: env.DATABASE_URL }, schema: schema });

export default db;
export { schema, eq, or, inArray };
export const selectMemesSchema = zodSchemas.selectMemesSchema;
