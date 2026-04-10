import type { paths } from "#/types/openapi-nhen.d.ts";
import type { Logger } from "pino";

import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  EmbedBuilder,
  Message,
  type PartialMessage,
} from "discord.js";

type Gallery =
  paths["/api/v2/galleries/{gallery_id}"]["get"]["responses"]["200"]["content"]["application/json"];

import type { Ctx } from "#/lib/ctx";

const BUTTON_ID = {
  next: "next",
  prev: "prev",
  first: "first",
  last: "last",
} as const;
type ButtonId = keyof typeof BUTTON_ID;

type MessageState = {
  code: number;
  currentPage: number;
  totalPages: number;
  lastUpdatedAt: number;
};

export class NhenHandler {
  ctx: Ctx;
  log: Logger;
  galleryStorage = new Map<number, Gallery>();
  messageState = new Map<string, MessageState>();

  constructor(opts: { ctx: Ctx; log: Logger }) {
    this.ctx = opts.ctx;
    this.log = opts.log;
  }

  async handleNhenLink({ code, message }: { code: number; message: Message | PartialMessage }) {
    if (!message.channel.isSendable()) return;

    try {
      const username = message.author?.username;
      const gallery = await this.getGallery(code);
      const sentMessage = await message.channel.send(
        await this.createMessagePayload({ gallery, code, pageNumber: 1, username }),
      );
      this.messageState.set(sentMessage.id, {
        code,
        currentPage: 1,
        totalPages: gallery.num_pages,
        lastUpdatedAt: Date.now(),
      });
    } catch (err) {
      this.log.error(
        err instanceof Error ? { message: err.message } : err,
        `Failed to embed nhen link`,
      );
    }
  }

  async handleInteraction({ interaction }: { interaction: ButtonInteraction }) {
    const state = this.messageState.get(interaction.message.id);
    if (!state) return;

    const now = Date.now();
    const timeSinceLastUpdate = now - state.lastUpdatedAt;
    if (timeSinceLastUpdate < 500) {
      await interaction.reply({
        content: "Please wait a moment before clicking again!",
        ephemeral: true,
      });
      return;
    }

    const username = interaction.user.username;
    const { code, currentPage, totalPages } = state;

    function getPageNumber() {
      let selectedButtonId: ButtonId = "next";
      if ("data" in interaction.component && "custom_id" in interaction.component.data) {
        selectedButtonId = interaction.component.data.custom_id as ButtonId;
      }

      switch (selectedButtonId) {
        case BUTTON_ID.next: {
          const pageNumber = currentPage + 1;
          return pageNumber > totalPages ? totalPages : pageNumber;
        }
        case BUTTON_ID.prev: {
          const pageNumber = currentPage - 1;
          return pageNumber < 1 ? 1 : pageNumber;
        }
        case BUTTON_ID.first: {
          return 1;
        }
        case BUTTON_ID.last: {
          return totalPages;
        }
      }
    }

    const pageNumber = getPageNumber();
    state.currentPage = pageNumber;
    state.lastUpdatedAt = now;

    try {
      const gallery = await this.getGallery(code);
      interaction.update(await this.createMessagePayload({ gallery, code, pageNumber, username }));
    } catch (err) {
      this.log.error(
        err instanceof Error ? { message: err.message } : err,
        `Failed to update nhen embed`,
      );
    }
  }

  async getGallery(code: number) {
    const cache = this.galleryStorage.get(code);
    const gallery = cache ?? (await this.fetchGallery(code));
    if (!cache) this.galleryStorage.set(code, gallery);
    return gallery;
  }

  async fetchGallery(code: number) {
    const res = await this.ctx.unblock.fetch(`https://nhentai.net/api/v2/galleries/${code}`);
    const json = (await res.json()) as Gallery;
    return json;
  }

  getImageUrl(gallery: Gallery, pageNumber: number) {
    const url = new URL("https://i.nhentai.net");
    const page = gallery.pages.find((page) => page.number === pageNumber);
    if (!page) throw new Error("No page found");
    url.pathname = page.path;
    return url.toString();
  }

  getArtist(gallery: Gallery) {
    return gallery.tags.find((tag) => tag.type === "artist");
  }

  getArtistUrl(gallery: Gallery) {
    const artist = this.getArtist(gallery);
    if (!artist) return;
    const url = new URL("https://nhentai.net");
    url.pathname = artist.url;
    return url.toString();
  }

  getTags(gallery: Gallery) {
    return gallery.tags.map((tag) => tag.name).join(", ");
  }

  async createMessagePayload({
    gallery,
    code,
    pageNumber,
    username,
  }: {
    gallery: Gallery;
    code: number;
    pageNumber: number;
    username: string | undefined;
  }) {
    const imageUrl = this.getImageUrl(gallery, pageNumber);
    const artist = this.getArtist(gallery);
    const artistUrl = this.getArtistUrl(gallery);
    const tags = this.getTags(gallery);
    const url = `https://nhentai.net/g/${code}/`;
    const updatedBy = username ? `updated by ${username}` : "";

    const embed = new EmbedBuilder()
      .setTitle(gallery.title.pretty)
      .setURL(url.toString())
      .setDescription(tags)
      .setAuthor({
        name: artist?.name ?? "unknown",
        url: artistUrl,
        iconURL: "https://i.imgur.com/uLAimaY.png",
      })
      .setColor("#fef3c6")
      .setFooter({
        text: `${pageNumber}/${gallery.num_pages} ${updatedBy}`,
      })
      .setImage(imageUrl);

    const first = new ButtonBuilder()
      .setCustomId(BUTTON_ID.first)
      .setEmoji("⏪")
      .setStyle(ButtonStyle.Secondary);
    const prev = new ButtonBuilder()
      .setCustomId(BUTTON_ID.prev)
      .setEmoji("⬅️")
      .setStyle(ButtonStyle.Secondary);
    const next = new ButtonBuilder()
      .setCustomId(BUTTON_ID.next)
      .setEmoji("➡️")
      .setStyle(ButtonStyle.Secondary);
    const last = new ButtonBuilder()
      .setCustomId(BUTTON_ID.last)
      .setEmoji("⏩")
      .setStyle(ButtonStyle.Secondary);
    const row = new ActionRowBuilder<ButtonBuilder>()
      .addComponents(first)
      .addComponents(prev)
      .addComponents(next)
      .addComponents(last);
    return { embeds: [embed], components: [row] };
  }
}
