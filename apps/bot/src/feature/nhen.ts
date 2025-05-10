import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  EmbedBuilder,
  Message,
  type PartialMessage,
} from "discord.js";
import { API, TagTypes } from "nhentai-api";
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
        const pageNumber = currentPage + 1;
        return pageNumber > totalPages ? totalPages : pageNumber;
      }
      case buttonId.prev: {
        const pageNumber = currentPage - 1;
        return pageNumber < 1 ? 1 : pageNumber;
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
  const url = new URL("https://nhentai.net");
  const tags = book.tags.map((tag) => tag.name).join(", ");
  const artist = book.tags.find((tag) => tag.type === TagTypes.Artist)?.name;

  const artistUrl = new URL(url);
  artistUrl.pathname = `/artist/${artist ?? "unknown"}/`;
  url.pathname = `/g/${code}/`;

  const embed = new EmbedBuilder()
    .setTitle(book.title.pretty)
    .setURL(url.toString())
    .setDescription(tags)
    .setAuthor({
      name: artist ?? "unknown",
      url: artistUrl.toString(),
      iconURL: "https://i.imgur.com/uLAimaY.png",
    })
    .setColor("#fef3c6")
    .setFooter({
      text: `${code} - ${pageNumber}/${totalPages}`,
    })
    .setImage(newPage.toString());

  const first = new ButtonBuilder()
    .setCustomId(buttonId.first)
    .setEmoji("⏪")
    .setStyle(ButtonStyle.Secondary);
  const prev = new ButtonBuilder()
    .setCustomId(buttonId.prev)
    .setEmoji("⬅️")
    .setStyle(ButtonStyle.Secondary);
  const next = new ButtonBuilder()
    .setCustomId(buttonId.next)
    .setEmoji("➡️")
    .setStyle(ButtonStyle.Secondary);
  const last = new ButtonBuilder()
    .setCustomId(buttonId.last)
    .setEmoji("⏩")
    .setStyle(ButtonStyle.Secondary);
  const row = new ActionRowBuilder<ButtonBuilder>()
    .addComponents(first)
    .addComponents(prev)
    .addComponents(next)
    .addComponents(last);
  return { embeds: [embed], components: [row] };
}
