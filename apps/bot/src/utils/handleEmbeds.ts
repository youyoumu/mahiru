import { env } from "#/env";
import type { Message } from "discord.js";
import { digits, pipe, safeParse, string } from "valibot";

export function handleEmbeds({ message }: { message: Message }) {
  console.log("Message:", message.member?.id, message.guildId, message.content);
  if (!message.channel.isSendable()) return;

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
    const newUrl = new URL("https://fxtwitter.com");
    newUrl.pathname = url.pathname;
    message.react("🔗");
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
    // message.channel.send(newUrl.toString());
  }
}
