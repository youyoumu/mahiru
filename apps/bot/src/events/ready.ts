import { env } from "#/env";
import { hcWithType } from "@repo/backend/hc";
import { Client, Events } from "discord.js";

export default {
  name: Events.ClientReady as const,
  async execute(client: Client) {
    const res = await client.hc.auth.sign_in.$post({
      json: { secret_key: env.SECRET_KEY },
    });

    if (res.ok) {
      const { token } = await res.json();
      client.hc = hcWithType("http://localhost:8100", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return console.log(`Ready! Logged in as ${client.user?.tag}`);
    }

    console.log("failed to login to backend");
  },
};
