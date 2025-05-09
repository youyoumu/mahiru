import { webUrl } from "#/utils/webUrl";
import {
  ChatInputCommandInteraction,
  Message,
  SlashCommandBuilder,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("login")
    .setDescription("Get a link to log in to the Mahiru web app."),
  async execute(interaction: ChatInputCommandInteraction) {
    const discord_user_id = interaction.user.id;

    const res = await interaction.client.hc.auth.token.$post({
      json: { discord_user_id },
    });

    if (res.ok) {
      const { one_time_token } = await res.json();

      return await interaction.reply(getLoginUrl(one_time_token));
    }

    await interaction.reply("Something went wrong");
  },
  async prefixExecute({ message, args }: { message: Message; args: string[] }) {
    const discord_user_id = message.author.id;

    const res = await message.client.hc.auth.token.$post({
      json: { discord_user_id },
    });

    if (res.ok) {
      const { one_time_token } = await res.json();
      await message.author.send({
        content: getLoginUrl(one_time_token),
      });
      await message.reply("Please check your DMs");
    }
  },
};

function getLoginUrl(token: string) {
  const url = new URL(webUrl);
  url.pathname = "/sign_in";
  url.searchParams.set("one_time_token", token);
  return url.toString();
}
