import { ChatInputCommandInteraction, Message, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply("Pong!");
  },
  async prefixExecute({ message, args }: { message: Message; args: string[] }) {
    if (message.channel.isSendable()) message.channel.send("Pong!");
  },
};
