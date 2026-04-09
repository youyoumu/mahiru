import type { AppType } from "@repo/backend";

import { hc } from "hono/client";

import type { DbSvc } from "./db";

export class Ctx {
  api: ReturnType<typeof hc<AppType>>;
  dbSvc: DbSvc;

  constructor(opts: { api: ReturnType<typeof hc<AppType>>; dbSvc: DbSvc }) {
    this.api = opts.api;
    this.dbSvc = opts.dbSvc;
  }
}
