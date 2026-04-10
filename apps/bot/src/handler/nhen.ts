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

import { z } from "zod";

const buttonId = {
  next: "next",
  prev: "prev",
  first: "first",
  last: "last",
} as const;
type ButtonId = keyof typeof buttonId;

export class NhenHandler {
  ctx: Ctx;
  log: Logger;
  galleryStorage = new Map<number, Gallery>();

  constructor(opts: { ctx: Ctx; log: Logger }) {
    this.ctx = opts.ctx;
    this.log = opts.log;
  }

  async handleNhenLink({ code, message }: { code: number; message: Message | PartialMessage }) {
    if (!message.channel.isSendable()) return;

    try {
      message.channel.send(await this.createMessage({ code, pageNumber: 1 }));
    } catch (err) {
      this.log.error(
        err instanceof Error ? { message: err.message } : err,
        `Failed to embed nhen link`,
      );
    }
  }

  async handleNHenButtonInteraction({ interaction }: { interaction: ButtonInteraction }) {
    const str = interaction.message.embeds[0]?.footer?.text;
    if (!str) return;
    const [codeString, pageInfo] = str.split("-").map((part) => part.trim());
    if (!pageInfo) return;
    const [currentPageString, totalPagesString] = pageInfo.split("/");

    const numberSchema = z
      .string()
      .regex(/^\d+$/)
      .transform((s) => Number(s));

    let code: number;
    let currentPage: number;
    let totalPages: number;

    try {
      code = numberSchema.parse(codeString);
      currentPage = numberSchema.parse(currentPageString);
      totalPages = numberSchema.parse(totalPagesString);
    } catch {
      return;
    }

    function getPageNumber() {
      let selectedButtonId: ButtonId = "next";
      if ("data" in interaction.component && "custom_id" in interaction.component.data) {
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
      interaction.update(await this.createMessage({ code: code, pageNumber: getPageNumber() }));
    } catch (error) {
      console.error(error);
      return;
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
    return gallery.tags.find((tag) => tag.type === "artist")?.name;
  }

  getArtistUrl(gallery: Gallery) {
    const artist = this.getArtist(gallery);
    if (!artist) return;
    const url = new URL("https://nhentai.net");
    url.pathname = `/artist/${artist}/`;
    return url.toString();
  }

  getTags(gallery: Gallery) {
    return gallery.tags.map((tag) => tag.name).join(", ");
  }

  async createMessage({ code, pageNumber }: { code: number; pageNumber: number }) {
    const gallery = await this.getGallery(code);
    const imageUrl = this.getImageUrl(gallery, pageNumber);
    const artist = this.getArtist(gallery);
    const artistUrl = this.getArtistUrl(gallery);
    const tags = this.getTags(gallery);
    const url = `https://nhentai.net/g/${code}/`;

    const embed = new EmbedBuilder()
      .setTitle(gallery.title.pretty)
      .setURL(url.toString())
      .setDescription(tags)
      .setAuthor({
        name: artist ?? "unknown",
        url: artistUrl,
        iconURL: "https://i.imgur.com/uLAimaY.png",
      })
      .setColor("#fef3c6")
      .setFooter({
        text: `${code} - ${pageNumber}/${gallery.num_pages}`,
      })
      .setImage(imageUrl);

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
}
