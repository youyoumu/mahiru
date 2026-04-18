import type { Ctx } from "#/lib/ctx";
import type { AppType } from "@repo/backend";
import type { Logger } from "pino";

import { env } from "#/env";
import { Client } from "discord.js";
import { retry } from "es-toolkit";
import { hc } from "hono/client";

export class Ready {
  ctx: Ctx;
  log: Logger;

  constructor(opts: { ctx: Ctx; log: Logger }) {
    this.ctx = opts.ctx;
    this.log = opts.log;
  }

  async handler(client: Client) {
    await retry(
      async () => {
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
      },
      {
        delay: 1000,
        shouldRetry: (error, _attempt) => {
          this.log.error(error instanceof Error ? error.message : error);
          return true;
        },
      },
    );
  }
}
