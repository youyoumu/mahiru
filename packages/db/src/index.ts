import { drizzle } from "drizzle-orm/libsql";
import "dotenv/config";

import { env } from "./env";
import * as schema from "./schema";

const db = drizzle({ connection: { url: env.DATABASE_URL }, schema: schema });

export default db;
export { schema };
