import { z } from "zod";

export const zDigits = z.string().regex(/^\d+$/);
