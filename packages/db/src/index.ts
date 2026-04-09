import { drizzle } from "drizzle-orm/libsql";
import { createSelectSchema } from "drizzle-zod";

import * as schema from "./schema";

export const zSelectMemes = createSelectSchema(schema.meme);

export { schema, drizzle };
