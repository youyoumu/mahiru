import type { AppType } from "@repo/backend";

import { hc } from "hono/client";

export class Ctx {
  api: ReturnType<typeof hc<AppType>>;

  constructor(opts: { api: ReturnType<typeof hc<AppType>> }) {
    this.api = opts.api;
  }
}
