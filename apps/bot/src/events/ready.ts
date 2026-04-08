import type { Ctx } from "#/lib/ctx";
import type { AppType } from "@repo/backend";

import { env } from "#/env";
import { Client } from "discord.js";
import { hc } from "hono/client";

export class Ready {
  ctx: Ctx;

  constructor(opts: { ctx: Ctx }) {
    this.ctx = opts.ctx;
  }

  async execute(client: Client) {
    const res = await client.api.auth.sign_in.$post({
      json: { secret_key: env.ADMIN_KEY },
    });

    if (res.ok) {
      const { token } = await res.json();
      this.ctx.api = hc<AppType>(env.BE_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      client.api = hc<AppType>(env.BE_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return console.log(`Ready! Logged in as ${client.user?.tag}`);
    }

    console.log("failed to login to backend");
  }
}
