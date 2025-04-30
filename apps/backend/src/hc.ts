import { hc } from "hono/client";
import { route } from ".";

// this is a trick to calculate the type when compiling
const client = hc<typeof route>("");
export type Client = typeof client;

export const hcWithType = (...args: Parameters<typeof hc>): Client =>
  hc<typeof route>(...args);
