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

  try {
    message.channel.send(
      await createMessage({
        code: nhenCode,
        currentPage: 1,
      }),
    );
  } catch {
    return;
  }
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

  try {
    interaction.update(
      await createMessage({
        code: parsedCode.output,
        currentPage: parsedCurrentPage.output,
      }),
    );
  } catch {
    return;
  }
}

async function createMessage({
  code,
  currentPage,
}: {
  code: number;
  currentPage: number;
}) {
  const book = await nH.getBook(code);
  const totalPages = book.pages.length;
  const index = currentPage - 1;
  const page = book.pages[index] ? nH.getImageURL(book.pages[index]) : null;
  if (!page) throw new Error("No page found");
  const newPage = new URL(page);
  newPage.hostname = "i4.nhentai.net";

  const embed = new EmbedBuilder()
    .setTitle(book.title.pretty)
    .setColor("#fef3c6")
    .setFooter({
      text: `${code} - ${currentPage}/${totalPages}`,
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
  return { embeds: [embed], components: [row] };
}
