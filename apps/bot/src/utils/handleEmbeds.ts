import { env } from "#/env";
import type { Message, PartialMessage } from "discord.js";
import { digits, pipe, safeParse, string } from "valibot";

export const LINK_EMOJI = "🔗";

export const embededMessageStorage = new Map<string, boolean>();

export function handleEmbeds({
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
  const twitterIdSchema = pipe(string(), digits());
  const tweetId = safeParse(twitterIdSchema, pathnameSplit[3]);

  const isTwitter =
    (url.hostname === "x.com" || url.hostname === "twitter.com") &&
    pathnameSplit[2] === "status" &&
    tweetId.success;
  if (isTwitter) {
    if (react) {
      message.react(LINK_EMOJI);
      setTimeout(async () => {
        const myReactions = message.reactions.cache.filter((reactiton) =>
          reactiton.users.cache.has(env.CLIENT_ID),
        );
        try {
          for (const reaction of myReactions.values()) {
            await reaction.users.remove(env.CLIENT_ID);
          }
        } catch {
          console.error("Failed to remove reactions.");
        }
      }, 5000);
    }

    if (embed) {
      const newUrl = new URL("https://fxtwitter.com");
      newUrl.pathname = url.pathname;
      message.channel.send(newUrl.toString());

      if (embededMessageStorage.size >= 10000) {
        const firstKey = embededMessageStorage.keys().next().value;
        if (firstKey) embededMessageStorage.delete(firstKey);
      }
      embededMessageStorage.set(message.id, true);
    }
  }
}
