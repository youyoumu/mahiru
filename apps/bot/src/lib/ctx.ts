import type { AppType } from "@repo/backend";

import { hc } from "hono/client";

import type { DB } from "./db";

export class Ctx {
  api: ReturnType<typeof hc<AppType>>;
  db: DB;

  constructor(opts: { api: ReturnType<typeof hc<AppType>>; db: DB }) {
    this.api = opts.api;
    this.db = opts.db;
  }
}
