import { env } from "#/env";
import { type Message, type PartialMessage } from "discord.js";
import { digits, pipe, safeParse, string } from "valibot";
import { handleNhenLink } from "#/feature/nhen";

export const LINK_EMOJI = "🔗";

export const embededMessageStorage = new Map<string, boolean>();

export async function handleLink({
  message,
  react,
  embed,
}: {
  message: Message | PartialMessage;

  react: boolean;
  embed: boolean;
}) {
  console.log(
    "Message:",
    `React=${react},Embed:${embed}`,
    message.member?.id,
    message.guildId,
    message.content,
  );
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
  const digitsSchema = pipe(string(), digits());

  const tweetId = safeParse(digitsSchema, pathnameSplit[3]);
  const isTwitter =
    (url.hostname === "x.com" || url.hostname === "twitter.com") &&
    pathnameSplit[2] === "status" &&
    tweetId.success;
  if (isTwitter) {
    if (react) handleReact({ message });

    if (embed) {
      const newUrl = new URL("https://fxtwitter.com");
      newUrl.pathname = url.pathname;
      handleSendEmbed({ message, url: newUrl.toString() });
    }
    return;
  }

  const pixivPostId = safeParse(
    digitsSchema,
    pathnameSplit[pathnameSplit.length - 1],
  );
  const isPixiv =
    (url.hostname === "pixiv.net" || url.hostname === "www.pixiv.net") &&
    (pathnameSplit[1] === "artworks" || pathnameSplit[2] === "artworks") &&
    pixivPostId.success;
  if (isPixiv) {
    if (react) handleReact({ message });
    if (embed) {
      const newUrl = new URL("https://phixiv.net");
      newUrl.pathname = url.pathname;
      handleSendEmbed({ message, url: newUrl.toString() });
    }
    return;
  }

  const isReddit =
    (url.hostname === "reddit.com" || url.hostname === "www.reddit.com") &&
    (pathnameSplit[1] === "r" || pathnameSplit[3] === "comments");
  if (isReddit) {
    if (react) handleReact({ message });
    if (embed) {
      const newUrl = new URL("https://vxreddit.com");
      newUrl.pathname = url.pathname;
      handleSendEmbed({ message, url: newUrl.toString() });
    }
    return;
  }

  const isInsta =
    url.hostname === "www.instagram.com" &&
    (pathnameSplit[1] === "p" || pathnameSplit[1] === "reel");
  if (isInsta) {
    if (react) handleReact({ message });
    if (embed) {
      const newUrl = new URL("https://www.ddinstagram.com");
      newUrl.pathname = url.pathname;
      handleSendEmbed({ message, url: newUrl.toString() });
    }
    return;
  }

  const nhenCode = safeParse(digitsSchema, pathnameSplit[2]);
  const isNhen =
    url.hostname === "nhentai.net" &&
    pathnameSplit[1] === "g" &&
    nhenCode.success;
  if (isNhen) {
    handleNhenLink({ nhenCode: Number(nhenCode.output), message });
  }
}

function handleReact({ message }: { message: Message | PartialMessage }) {
  message.react(LINK_EMOJI);
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
  }, 10000);
}

function handleSendEmbed({
  message,
  url,
}: {
  message: Message | PartialMessage;
  url: string;
}) {
  if (!message.channel.isSendable()) return;
  message.channel.send(url);

  if (embededMessageStorage.size >= 10000) {
    const firstKey = embededMessageStorage.keys().next().value;
    if (firstKey) embededMessageStorage.delete(firstKey);
  }
  embededMessageStorage.set(message.id, true);
}
