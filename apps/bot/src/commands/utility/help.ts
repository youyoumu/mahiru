import {
  ChatInputCommandInteraction,
  EmbedBuilder,
  Message,
  SlashCommandBuilder,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Explain all commands"),
  async execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder()
      .setDescription("Explain all commands")
      .addFields({
        name: "asd",
        value: "asd",
      })

      .setFooter({
        text: "footer",
      });

    await interaction?.reply({ embeds: [embed] });
  },
  async prefixExecute({ message, args }: { message: Message; args: string[] }) {
    if (message.channel.isSendable()) message.channel.send("Pong!");
  },
};
