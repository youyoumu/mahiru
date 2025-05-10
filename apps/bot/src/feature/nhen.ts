import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  EmbedBuilder,
  Message,
  type PartialMessage,
} from "discord.js";
import { API, Book } from "nhentai-api";
import { digits, number, pipe, safeParse, string, transform } from "valibot";

const nH = new API();

export async function handleNhenLink({
  nhenCode,
  message,
}: {
  nhenCode: number;
  message: Message | PartialMessage;
}) {
  if (!message.channel.isSendable()) return;
  let book: Book;
  try {
    book = await nH.getBook(nhenCode);
  } catch {
    return;
  }
  const totalPages = book.pages.length;
  const page1 = book.pages[0] ? nH.getImageURL(book.pages[0]) : null;
  if (!page1) return;
  const newPage1 = new URL(page1);
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

export async function handleNHenButtonInteraction({
  interaction,
}: {
  interaction: ButtonInteraction;
}) {
  console.log("DEBUG[429]: interaction=", interaction.message.embeds);

  const str = interaction.message.embeds[0]?.footer?.text;
  if (!str) return;
  const [code, pageInfo] = str.split("-").map((part) => part.trim());
  if (!pageInfo) return;
  const [currentPage] = pageInfo.split("/");

  const numberSchema = pipe(
    string(),
    digits(),
    transform((s) => Number(s)),
    number(),
  );

  const parsedCode = safeParse(numberSchema, code);
  const parsedCurrentPage = safeParse(numberSchema, currentPage);
  if (!parsedCode.success || !parsedCurrentPage.success) return;

  let book: Book;
  try {
    book = await nH.getBook(parsedCode.output);
  } catch {
    return;
  }
  const totalPages = book.pages.length;

  const index = parsedCurrentPage.output;
  const page = book.pages[index] ? nH.getImageURL(book.pages[index]) : null;
  if (!page) return;
  const newPage = new URL(page);
  newPage.hostname = "i4.nhentai.net";

  console.log("Code:", code);
  console.log("Current Page:", currentPage);
  console.log("Total Page:", totalPages);

  const embed = new EmbedBuilder()
    .setTitle(book.title.pretty)
    .setColor("#fef3c6")
    .setFooter({
      text: `${parsedCode.output} - ${index + 1}/${totalPages}`,
    })
    .setImage(newPage.toString());

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

  interaction.update({ embeds: [embed], components: [row] });
}
