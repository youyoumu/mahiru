import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";
import * as zodSchemas from "./zod";

export { schema, drizzle };
export const selectMemesSchema = zodSchemas.selectMemesSchema;
