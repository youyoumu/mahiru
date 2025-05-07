import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("login")
    .setDescription("Get link to login to Mahiru web app"),
  async execute(interaction: ChatInputCommandInteraction) {
    const discord_user_id = interaction.user.id;

    const res = await interaction.client.hc.auth.token.$post({
      json: { discord_user_id },
    });

    if (res.ok) {
      const { one_time_token } = await res.json();

      return await interaction.reply(
        `http://localhost:3000/sign_in?one_time_token=${one_time_token}`,
      );
    }

    await interaction.reply("Something went wrong");
  },
  async prefixExecute() {},
};
