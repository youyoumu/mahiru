import type { Ctx } from "#/lib/ctx";
import type { AppType } from "@repo/backend";
import type { Logger } from "pino";

import { env } from "#/env";
import { Client } from "discord.js";
import { hc } from "hono/client";

export class Ready {
  ctx: Ctx;
  log: Logger;

  constructor(opts: { ctx: Ctx; log: Logger }) {
    this.ctx = opts.ctx;
    this.log = opts.log;
  }

  async handler(client: Client) {
    const res = await this.ctx.api.auth.sign_in.$post({
      json: { k: env.ADMIN_KEY },
    });

    if (res.ok) {
      const { token } = await res.json();
      this.ctx.api = hc<AppType>(env.BE_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      this.log.info(`Ready! Logged in as ${client.user?.tag}`);
    } else {
      this.log.error(`Failed to login to backend: ${res.status}`);
    }
  }
}
