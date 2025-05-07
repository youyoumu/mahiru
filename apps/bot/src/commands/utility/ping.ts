import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import db from "@repo/db";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction: ChatInputCommandInteraction) {
    console.log(await db.query.meme.findMany());
    await interaction.reply("Pong!");
  },
  async prefixExecute() {},
};
