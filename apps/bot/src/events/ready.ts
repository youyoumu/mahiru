import type { AppType } from "@repo/backend";

import { env } from "#/env";
import { Client, Events } from "discord.js";
import { hc } from "hono/client";

export default {
  name: Events.ClientReady as const,
  async execute(client: Client) {
    const res = await client.api.auth.sign_in.$post({
      json: { secret_key: env.ADMIN_KEY },
    });

    if (res.ok) {
      const { token } = await res.json();
      client.api = hc<AppType>(env.BE_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return console.log(`Ready! Logged in as ${client.user?.tag}`);
    }

    console.log("failed to login to backend");
  },
};
