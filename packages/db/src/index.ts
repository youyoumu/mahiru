import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-sqlite";
import { migrate } from "drizzle-orm/node-sqlite/migrator";
import { createSelectSchema } from "drizzle-zod";
export type { Logger } from "drizzle-orm/logger";

import { relations } from "./relations";
import * as schema from "./schema";
export type * from "./schema";

export const zSelectTags = createSelectSchema(schema.tags);

export { schema, drizzle, eq, and, relations, migrate };
