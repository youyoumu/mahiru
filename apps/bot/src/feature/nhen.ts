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
  code,
  message,
}: {
  code: number;
  message: Message | PartialMessage;
}) {
  if (!message.channel.isSendable()) return;

  try {
    message.channel.send(
      await createMessage({
        code,
        pageNumber: 1,
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
  const str = interaction.message.embeds[0]?.footer?.text;
  if (!str) return;
  const [codeString, pageInfo] = str.split("-").map((part) => part.trim());
  if (!pageInfo) return;
  const [currentPageString] = pageInfo.split("/");

  const numberSchema = pipe(
    string(),
    digits(),
    transform((s) => Number(s)),
    number(),
  );

  const code = safeParse(numberSchema, codeString);
  const currentPage = safeParse(numberSchema, currentPageString);
  if (!code.success || !currentPage.success) return;

  try {
    interaction.update(
      await createMessage({
        code: code.output,
        pageNumber: currentPage.output + 1,
      }),
    );
  } catch {
    return;
  }
}

async function createMessage({
  code,
  pageNumber,
}: {
  code: number;
  pageNumber: number;
}) {
  const book = await nH.getBook(code);
  const totalPages = book.pages.length;
  const index = pageNumber - 1;
  const page = book.pages[index] ? nH.getImageURL(book.pages[index]) : null;
  if (!page) throw new Error("No page found");
  const newPage = new URL(page);
  newPage.hostname = "i4.nhentai.net";

  const embed = new EmbedBuilder()
    .setTitle(book.title.pretty)
    .setColor("#fef3c6")
    .setFooter({
      text: `${code} - ${pageNumber}/${totalPages}`,
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
