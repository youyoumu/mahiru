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
import { digits, number, parse, pipe, string, transform } from "valibot";

const nH = new API();
const buttonId = {
  next: "next",
  prev: "prev",
  first: "first",
  last: "last",
} as const;
type ButtonId = keyof typeof buttonId;

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
  const [currentPageString, totalPagesString] = pageInfo.split("/");

  const numberSchema = pipe(
    string(),
    digits(),
    transform((s) => Number(s)),
    number(),
  );

  let code: number;
  let currentPage: number;
  let totalPages: number;

  try {
    code = parse(numberSchema, codeString);
    currentPage = parse(numberSchema, currentPageString);
    totalPages = parse(numberSchema, totalPagesString);
  } catch {
    return;
  }

  function getPageNumber() {
    let selectedButtonId: ButtonId = "next";
    if (
      "data" in interaction.component &&
      "custom_id" in interaction.component.data
    ) {
      selectedButtonId = interaction.component.data.custom_id as ButtonId;
    }

    switch (selectedButtonId) {
      case buttonId.next: {
        return currentPage + 1;
      }
      case buttonId.prev: {
        return currentPage - 1;
      }
      case buttonId.first: {
        return 1;
      }
      case buttonId.last: {
        return totalPages;
      }
    }
  }

  try {
    interaction.update(
      await createMessage({
        code: code,
        pageNumber: getPageNumber(),
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

  const prev = new ButtonBuilder()
    .setCustomId(buttonId.prev)
    .setEmoji("⬅️")
    .setStyle(ButtonStyle.Secondary);
  const next = new ButtonBuilder()
    .setCustomId(buttonId.next)
    .setEmoji("➡️")
    .setStyle(ButtonStyle.Secondary);
  const row = new ActionRowBuilder<ButtonBuilder>()
    .addComponents(prev)
    .addComponents(next);
  return { embeds: [embed], components: [row] };
}
