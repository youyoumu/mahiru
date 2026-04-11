import { drizzle } from "drizzle-orm/libsql";
import { createSelectSchema } from "drizzle-zod";

import * as schema from "./schema";

export const zSelectTags = createSelectSchema(schema.tags);

export { schema, drizzle };
