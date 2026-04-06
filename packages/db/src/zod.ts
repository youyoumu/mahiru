import { createSelectSchema } from "drizzle-zod";

import { meme } from "./schema";

export const selectMemesSchema = createSelectSchema(meme);
