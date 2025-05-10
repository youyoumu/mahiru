import commands from "#/commands";
import { getGuildPrefix, globalPrefix } from "#/utils/prefixStorage";
import { Events, Message } from "discord.js";
import { digits, pipe, safeParse, string } from "valibot";

const shortcut: Record<string, string> = {
  m: "meme",
};

export default {
  name: Events.MessageCreate as const,
  async execute(message: Message) {
    if (message.author.bot) return;

    handleEmbeds({ message });

    let args: string[] = [];
    if (message.guild) {
      let prefix: string | undefined;

      const guildPrefix = await getGuildPrefix({
        discord_guild_id: message.guildId,
      });

      if (guildPrefix && message.content.startsWith(guildPrefix)) {
        prefix = guildPrefix;
      }

      // if we found a prefix, setup args; otherwise, this isn't a command
      if (!prefix) return;
      args = message.content.slice(prefix.length).trim().split(/\s+/);
    } else {
      // handle DMs
      const slice = message.content.startsWith(globalPrefix)
        ? globalPrefix.length
        : 0;
      args = message.content.slice(slice).split(/\s+/);
    }

    // get the first space-delimited argument after the prefix as the command
    const command = args?.shift()?.toLowerCase();
    const commandShortcut = shortcut[command ?? ""];
    if (command) {
      commands[commandShortcut ?? command]?.prefixExecute({
        message,
        args,
      });
    }
  },
};

function handleEmbeds({ message }: { message: Message }) {
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
    message.channel.send(newUrl.toString());
  }
}
