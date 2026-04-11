import type { Logger } from "pino";

import { env } from "#/env";
import { emojis } from "#/lib/constants";
import { zDigits } from "#/lib/schema";
import {
  type Message,
  type PartialMessage,
  type PartialMessageReaction,
  Events,
  MessageReaction,
} from "discord.js";
import { delay } from "es-toolkit";

import type { NhenHandler } from "./nhen";

export class LinkHandler {
  log: Logger;
  sentEmbedMessages = new Set<string>();
  nhenHandler: NhenHandler;

  constructor(opts: { log: Logger; nhenHandler: NhenHandler }) {
    this.log = opts.log;
    this.nhenHandler = opts.nhenHandler;
  }

  handleMessageReactionAdd(reaction: MessageReaction | PartialMessageReaction) {
    if (reaction.emoji.name === emojis.link || reaction.emoji.name === emojis.book) {
      if (this.sentEmbedMessages.has(reaction.message.id)) return;
      const hasBotReaction = reaction.users.cache.has(env.CLIENT_ID);
      if (!hasBotReaction) return;
      return this.handle(Events.MessageReactionAdd, reaction.message);
    }
  }

  async handle(
    event: Events.MessageCreate | Events.MessageReactionAdd,
    message: Message | PartialMessage,
  ) {
    if (!message.channel.isSendable()) return;
    if (!message.content) return;
    if (!message.content.includes("https://")) return;
    const url = LinkHandler.getUrl(message.content);
    if (!url) return;

    const pathname = url.pathname.split("/");

    const nhenCode = zDigits.safeParse(pathname[2]);
    const isNhen =
      url.hostname === "nhentai.net" && pathname[1] === "g" && nhenCode.success && nhenCode.data;
    if (isNhen) {
      if (event === Events.MessageCreate) this.addReaction({ message, emoji: emojis.book });
      if (event === Events.MessageReactionAdd) {
        this.nhenHandler.handleNhenLink({ code: Number(nhenCode.data), message });
      }
      return;
    }

    const tweetId = zDigits.safeParse(pathname[3]);
    const isTwitter =
      (url.hostname === "x.com" || url.hostname === "twitter.com") &&
      pathname[2] === "status" &&
      tweetId.success;
    if (isTwitter) {
      if (event === Events.MessageCreate) this.addReaction({ message });
      if (event === Events.MessageReactionAdd) {
        this.sendEmbed({ message, url: LinkHandler.createUrl(url, "fxtwitter.com") });
      }
      return;
    }

    const pixivPostId = zDigits.safeParse(pathname[pathname.length - 1]);
    const isPixiv =
      (url.hostname === "pixiv.net" || url.hostname === "www.pixiv.net") &&
      (pathname[1] === "artworks" || pathname[2] === "artworks") &&
      pixivPostId.success;
    if (isPixiv) {
      if (event === Events.MessageCreate) this.addReaction({ message });
      if (event === Events.MessageReactionAdd) {
        this.sendEmbed({ message, url: LinkHandler.createUrl(url, "phixiv.net") });
      }
      return;
    }

    const isReddit =
      (url.hostname === "reddit.com" || url.hostname === "www.reddit.com") &&
      (pathname[1] === "r" || pathname[3] === "comments");
    if (isReddit) {
      if (event === Events.MessageCreate) this.addReaction({ message });
      if (event === Events.MessageReactionAdd) {
        this.sendEmbed({ message, url: LinkHandler.createUrl(url, "vxreddit.com") });
      }
      return;
    }

    const isInsta =
      url.hostname === "www.instagram.com" && (pathname[1] === "p" || pathname[1] === "reel");
    if (isInsta) {
      if (event === Events.MessageCreate) this.addReaction({ message });
      if (event === Events.MessageReactionAdd) {
        this.sendEmbed({ message, url: LinkHandler.createUrl(url, "www.zzinstagram.com") });
      }
      return;
    }
  }

  async addReaction({ message, emoji }: { message: Message | PartialMessage; emoji?: string }) {
    const reactionEmoji = emoji ?? emojis.link;
    try {
      const reaction = await message.react(reactionEmoji);
      await delay(6000);
      await reaction.users.remove(env.CLIENT_ID);
    } catch (err) {
      this.log.error(err, "Could not complete reaction cycle:");
    }
  }

  sendEmbed({ message, url }: { message: Message | PartialMessage; url: string }) {
    if (!message.channel.isSendable()) return;
    message.channel.send(url);
    this.sentEmbedMessages.add(message.id);
  }

  static getUrl(content: string) {
    const urlMatch = content.match(/https?:\/\/[^\s]+/);
    try {
      return urlMatch ? new URL(urlMatch[0]) : undefined;
    } catch {
      return undefined;
    }
  }

  static createUrl(url: URL, hostname: string) {
    const newUrl = new URL(url);
    newUrl.hostname = hostname;
    return newUrl.toString();
  }
}
