import { createSelectSchema } from "drizzle-valibot";
import { meme } from "./schema";

export const selectMemesSchema = createSelectSchema(meme);
