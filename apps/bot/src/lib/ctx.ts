import type { AppType } from "@repo/backend";

import { hc } from "hono/client";

import type { DbSvc } from "./db";
import type { Unblock } from "./unblock";

export class Ctx {
  api: ReturnType<typeof hc<AppType>>;
  dbSvc: DbSvc;
  unblock: Unblock;

  constructor(opts: { api: ReturnType<typeof hc<AppType>>; dbSvc: DbSvc; unblock: Unblock }) {
    this.api = opts.api;
    this.dbSvc = opts.dbSvc;
    this.unblock = opts.unblock;
  }
}
