import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { hcWithType } from "@repo/backend/hc";

export default {
  data: new SlashCommandBuilder()
    .setName("login")
    .setDescription("Get link to login to Mahiru web app"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply("Pong!");
  },
};
