import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  EmbedBuilder,
  Message,
  type PartialMessage,
} from "discord.js";
import { API } from "nhentai-api";

const nH = new API();

export async function handleNhenLink({
  nhenCode,
  message,
}: {
  nhenCode: number;
  message: Message | PartialMessage;
}) {
  if (!message.channel.isSendable()) return;
  const book = await nH.getBook(nhenCode);
  const totalPages = book.pages.length;
  const page1 = book.pages[0] ? nH.getImageURL(book.pages[0]) : null;
  const newPage1 = new URL(page1 ?? "");
  newPage1.hostname = "i4.nhentai.net";

  const embed = new EmbedBuilder()
    .setTitle(book.title.pretty)
    .setColor("#fef3c6")
    .setFooter({
      text: `${nhenCode} - 1/${totalPages}`,
    })
    .setImage(newPage1.toString());

  const next = new ButtonBuilder()
    .setCustomId("next")
    .setEmoji("➡️")
    .setStyle(ButtonStyle.Secondary);
  const prev = new ButtonBuilder()
    .setCustomId("prev")
    .setEmoji("⬅️")
    .setStyle(ButtonStyle.Secondary);
  const row = new ActionRowBuilder<ButtonBuilder>()
    .addComponents(prev)
    .addComponents(next);

  message.channel.send({ embeds: [embed], components: [row] });
}

export function handleNHenButtonInteraction({
  interaction,
}: {
  interaction: ButtonInteraction;
}) {
  console.log("DEBUG[429]: interaction=", interaction.message.embeds);
}
