import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-sqlite";
import { createSelectSchema } from "drizzle-zod";

import { relations } from "./relations";
import * as schema from "./schema";

export const zSelectTags = createSelectSchema(schema.tags);

export { schema, drizzle, eq, and, relations };
