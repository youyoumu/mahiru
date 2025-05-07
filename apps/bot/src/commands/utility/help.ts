import {
  ChatInputCommandInteraction,
  EmbedBuilder,
  inlineCode,
  Message,
  SlashCommandBuilder,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Explain all commands"),
  async execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder()
      .setTitle("Help")
      .setColor("#fef3c6")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/1366671964500000778/555dfb9cf6265ae505041deeaac95b05",
      )
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> ping",
        value: "Replies with Pong",
      })
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> login",
        value: "Get link to login to Mahiru web app",
      })
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> meme",
        value: `Manage your meme collections. Use ${inlineCode("/meme help")} for details`,
      })
      .addFields({
        name: "<:azusarelaxed:1207544782952595508> prefix",
        value: `Manage bot prefix for this server. Use ${inlineCode("/prefix help")} for details`,
      })
      .setFooter({
        text: "Mahiru",
      })
      .setTimestamp();

    await interaction?.reply({ embeds: [embed] });
  },
  async prefixExecute({ message, args }: { message: Message; args: string[] }) {
    if (message.channel.isSendable()) message.channel.send("Pong!");
  },
};
