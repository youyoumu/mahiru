import type { Logger } from "pino";

import { env } from "#/env";
import { emojis } from "#/lib/constants";
import { type Message, type PartialMessage } from "discord.js";
import { delay } from "es-toolkit";
import { z } from "zod";

import type { NhenHandler } from "./nhen";

const zDigits = z.string().regex(/^\d+$/);

export class LinkHandler {
  log: Logger;
  embededMessageStorage = new Map<string, boolean>();
  nhenHandler: NhenHandler;

  constructor(opts: { log: Logger; nhenHandler: NhenHandler }) {
    this.log = opts.log;
    this.nhenHandler = opts.nhenHandler;
  }

  async handle({
    message,
    react,
    embed,
  }: {
    message: Message | PartialMessage;
    react: boolean;
    embed: boolean;
  }) {
    if (!message.channel.isSendable()) return;
    if (!message.content) return;
    if (!message.content.includes("https://")) return;
    const url = this.getUrl(message.content);
    if (!url) return;

    const pathname = url.pathname.split("/");

    const nhenCode = zDigits.safeParse(pathname[2]);
    const isNhen =
      url.hostname === "nhentai.net" && pathname[1] === "g" && nhenCode.success && nhenCode.data;
    if (isNhen) {
      if (react) this.handleReact({ message, emoji: emojis.book });
      if (embed) {
        this.nhenHandler.handleNhenLink({ code: Number(nhenCode.data), message });
      }
    }

    const tweetId = zDigits.safeParse(pathname[3]);
    const isTwitter =
      (url.hostname === "x.com" || url.hostname === "twitter.com") &&
      pathname[2] === "status" &&
      tweetId.success;
    if (isTwitter) {
      if (react) this.handleReact({ message });

      if (embed) {
        const newUrl = new URL("https://fxtwitter.com");
        newUrl.pathname = url.pathname;
        this.handleSendEmbed({ message, url: newUrl.toString() });
      }
      return;
    }

    const pixivPostId = zDigits.safeParse(pathname[pathname.length - 1]);
    const isPixiv =
      (url.hostname === "pixiv.net" || url.hostname === "www.pixiv.net") &&
      (pathname[1] === "artworks" || pathname[2] === "artworks") &&
      pixivPostId.success;
    if (isPixiv) {
      if (react) this.handleReact({ message });
      if (embed) {
        const newUrl = new URL("https://phixiv.net");
        newUrl.pathname = url.pathname;
        this.handleSendEmbed({ message, url: newUrl.toString() });
      }
      return;
    }

    const isReddit =
      (url.hostname === "reddit.com" || url.hostname === "www.reddit.com") &&
      (pathname[1] === "r" || pathname[3] === "comments");
    if (isReddit) {
      if (react) this.handleReact({ message });
      if (embed) {
        const newUrl = new URL("https://vxreddit.com");
        newUrl.pathname = url.pathname;
        this.handleSendEmbed({ message, url: newUrl.toString() });
      }
      return;
    }

    const isInsta =
      url.hostname === "www.instagram.com" && (pathname[1] === "p" || pathname[1] === "reel");
    if (isInsta) {
      if (react) this.handleReact({ message });
      if (embed) {
        const newUrl = new URL("https://www.ddinstagram.com");
        newUrl.pathname = url.pathname;
        this.handleSendEmbed({ message, url: newUrl.toString() });
      }
      return;
    }
  }

  getUrl(content: string) {
    const urlMatch = content.match(/https?:\/\/[^\s]+/);
    try {
      return urlMatch ? new URL(urlMatch[0]) : undefined;
    } catch {
      return undefined;
    }
  }

  async handleReact({ message, emoji }: { message: Message | PartialMessage; emoji?: string }) {
    const reactionEmoji = emoji ?? emojis.link;
    try {
      const reaction = await message.react(reactionEmoji);
      await delay(6000);
      await reaction.users.remove(env.CLIENT_ID);
    } catch (err) {
      this.log.error(err, "Could not complete reaction cycle:");
    }
  }

  handleSendEmbed({ message, url }: { message: Message | PartialMessage; url: string }) {
    if (!message.channel.isSendable()) return;
    message.channel.send(url);

    if (this.embededMessageStorage.size >= 10000) {
      const firstKey = this.embededMessageStorage.keys().next().value;
      if (firstKey) this.embededMessageStorage.delete(firstKey);
    }
    this.embededMessageStorage.set(message.id, true);
  }
}
