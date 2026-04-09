import type { Logger } from "pino";

import { env } from "#/env";
import { handleNhenLink } from "#/feature/nhen";
import { emojis } from "#/lib/constants";
import { type Message, type PartialMessage } from "discord.js";
import { z } from "zod";

export class LinkHandler {
  log: Logger;
  embededMessageStorage = new Map<string, boolean>();

  constructor(options: { log: Logger }) {
    this.log = options.log;
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

    const urlString = message.content.split(" ").find((string) => {
      let validUrl: URL;
      try {
        validUrl = new URL(string);
      } catch {
        return false;
      }
      return validUrl;
    });

    if (!urlString) return;

    const url = new URL(urlString);
    const pathnameSplit = url.pathname.split("/");
    console.log("DEBUG[419]: pathnameSplit=", pathnameSplit);
    const digitsSchema = z.string().regex(/^\d+$/);

    const nhenCode = digitsSchema.safeParse(pathnameSplit[2]);
    const isNhen =
      url.hostname === "nhentai.net" &&
      pathnameSplit[1] === "g" &&
      nhenCode.success &&
      nhenCode.data;
    if (isNhen) {
      if (react) this.handleReact({ message, emoji: emojis.book });
      if (embed) {
        handleNhenLink({ code: Number(nhenCode.data), message });
      }
    }

    // disable embed react until further development
    if (env.ADMIN_KEY) return;

    const tweetId = digitsSchema.safeParse(pathnameSplit[3]);
    const isTwitter =
      (url.hostname === "x.com" || url.hostname === "twitter.com") &&
      pathnameSplit[2] === "status" &&
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

    const pixivPostId = digitsSchema.safeParse(pathnameSplit[pathnameSplit.length - 1]);
    const isPixiv =
      (url.hostname === "pixiv.net" || url.hostname === "www.pixiv.net") &&
      (pathnameSplit[1] === "artworks" || pathnameSplit[2] === "artworks") &&
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
      (pathnameSplit[1] === "r" || pathnameSplit[3] === "comments");
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
      url.hostname === "www.instagram.com" &&
      (pathnameSplit[1] === "p" || pathnameSplit[1] === "reel");
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

  handleReact({ message, emoji }: { message: Message | PartialMessage; emoji?: string }) {
    message.react(emoji ?? emojis.link);
    setTimeout(async () => {
      const myReactions = message.reactions.cache.filter((reaction) =>
        reaction.users.cache.has(env.CLIENT_ID),
      );
      try {
        for (const reaction of myReactions.values()) {
          await reaction.users.remove(env.CLIENT_ID);
        }
      } catch {
        console.error("Failed to remove reactions.");
      }
    }, 6000);
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
