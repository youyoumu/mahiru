import {
  ChatInputCommandInteraction,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import db from "@repo/db";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction: ChatInputCommandInteraction) {
    console.log(await db.query.meme.findMany());
    await interaction.reply("Pong!");
  },
  async prefixExecute({ message, args }: { message: Message; args: string[] }) {
    if (message.channel.isSendable()) message.channel.send("Pong!");
  },
};
