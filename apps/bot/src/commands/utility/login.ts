import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { hcWithType } from "@repo/backend/hc";
import { env } from "#/env";
const hc = hcWithType("http://localhost:8100");

export default {
  data: new SlashCommandBuilder()
    .setName("login")
    .setDescription("Get link to login to Mahiru web app"),
  async execute(interaction: ChatInputCommandInteraction) {
    const discord_user_id = interaction.user.id;

    const res = await hc.auth.sign_in.$post({
      json: { secret_key: env.SECRET_KEY },
    });

    if (res.ok) {
      const { token } = await res.json();

      const res2 = await hc.auth.token.$post(
        { json: { discord_user_id } },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res2.ok) {
        const { one_time_token } = await res2.json();

        return await interaction.reply(one_time_token);
      }
    }

    await interaction.reply("Something went wrong");
  },
};
