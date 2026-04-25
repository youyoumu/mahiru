import type { Message, PartialMessage } from "discord.js";

const CLEAR_TOKEN_PATTERN = /\|\|clear:(\d+):clear\|\|/;

export function generateClearToken(): string {
  const timestamp = Date.now();
  return `clear:${timestamp}:clear`;
}

export function formatClearToken(token: string): string {
  return `||${token}||`;
}

export function hasClearToken(content: string): boolean {
  return CLEAR_TOKEN_PATTERN.test(content);
}
const THINKING_BLOCK_PATTERN = /<thinking>[\s\S]*?<\/thinking>|<thinking>[\s\S]*?<channel\|>/gi;

export function stripThinkingBlock(content: string): string {
  return content.replace(THINKING_BLOCK_PATTERN, "").trim();
}

export function splitMessage(text: string, limit = 1900): string[] {
  if (text.length <= limit) return [text];

  const chunks: string[] = [];
  let currentText = text;
  let iterations = 0;
  const MAX_ITERATIONS = 100;

  let currentlyInCodeBlock = false;
  let codeBlockLang = "";

  while (currentText.length > 0 && iterations < MAX_ITERATIONS) {
    iterations++;
    if (currentText.length <= limit) {
      chunks.push(currentText);
      break;
    }

    const subText = currentText.substring(0, limit);

    if (currentlyInCodeBlock) {
      const nextClosing = currentText.indexOf("```", 3);

      if (nextClosing !== -1 && nextClosing + 3 <= limit) {
        const splitIndex = nextClosing + 3;
        chunks.push(currentText.substring(0, splitIndex));
        currentText = currentText.substring(splitIndex).trimStart();
        currentlyInCodeBlock = false;
        codeBlockLang = "";
        continue;
      }

      const lastNewline = subText.lastIndexOf("\n");
      let splitIndex = lastNewline > 4 ? lastNewline : limit - 4;
      if (splitIndex <= 4) splitIndex = limit - 4;

      chunks.push(`${currentText.substring(0, splitIndex)}\n\`\`\``);
      currentText = `\`\`\`${codeBlockLang}\n${currentText.substring(splitIndex).trimStart()}`;
      continue;
    }

    const occurrences = (subText.match(/```/g) || []).length;

    if (occurrences % 2 !== 0) {
      const lastBackticks = subText.lastIndexOf("```");

      if (lastBackticks > 0) {
        const splitIndex = lastBackticks;
        chunks.push(currentText.substring(0, splitIndex).trimEnd());
        currentText = currentText.substring(splitIndex);
        continue;
      } else {
        const lineEnd = subText.indexOf("\n");
        if (lineEnd !== -1) {
          codeBlockLang = subText.substring(3, lineEnd).trim();
        }

        const lastNewline = subText.lastIndexOf("\n");
        let splitIndex = lastNewline > 4 ? lastNewline : limit - 4;
        if (splitIndex <= 4) splitIndex = limit - 4;

        chunks.push(`${currentText.substring(0, splitIndex)}\n\`\`\``);
        currentText = `\`\`\`${codeBlockLang}\n${currentText.substring(splitIndex).trimStart()}`;
        currentlyInCodeBlock = true;
        continue;
      }
    }

    const boundaries = ["\n\n", "\n", ". ", " "];

    let splitIndex = -1;
    for (const boundary of boundaries) {
      const index = subText.lastIndexOf(boundary);
      if (index !== -1) {
        splitIndex = index + boundary.length;
        break;
      }
    }

    if (splitIndex <= 0) {
      splitIndex = limit;
    }

    chunks.push(currentText.substring(0, splitIndex));
    currentText = currentText.substring(splitIndex).trimStart();
  }

  return chunks;
}

export function fixMentions(content: string, message: Message | PartialMessage): string {
  let result = content;

  const usernameToIdMap = new Map<string, string>();

  const guild = message.guild;
  if (guild) {
    for (const member of guild.members.cache.values()) {
      if (member.user) {
        usernameToIdMap.set(member.user.username.toLowerCase(), member.user.id);
        if (
          member.displayName &&
          member.displayName.toLowerCase() !== member.user.username.toLowerCase()
        ) {
          usernameToIdMap.set(member.displayName.toLowerCase(), member.user.id);
        }
      }
    }
  }

  if (usernameToIdMap.size === 0 && message.client) {
    for (const user of message.client.users.cache.values()) {
      usernameToIdMap.set(user.username.toLowerCase(), user.id);
    }
  }

  if (usernameToIdMap.size === 0) {
    return result;
  }

  result = result.replace(/<@([a-zA-Z0-9_]+)>/g, (match, username) => {
    if (/^\d+$/.test(username)) {
      return match;
    }
    const userId = usernameToIdMap.get(username.toLowerCase());
    return userId ? `<@${userId}>` : match;
  });

  const parts = result.split(/(```[\s\S]*?```|`[^`]+`)/g);
  const processedParts = parts.map((part) => {
    if (part.startsWith("```") || part.startsWith("`")) {
      return part;
    }
    return part.replace(/@([a-zA-Z0-9_]{2,32})/g, (match, username) => {
      const userId = usernameToIdMap.get(username.toLowerCase());
      return userId ? `<@${userId}>` : match;
    });
  });
  result = processedParts.join("");

  return result;
}

export function fixEmojis(content: string, message: Message | PartialMessage): string {
  let result = content;

  const emojiMap = new Map<string, string>();
  const guild = message.guild;
  if (guild) {
    for (const emoji of guild.emojis.cache.values()) {
      if (emoji.id && emoji.name) {
        const emojiFormat = emoji.animated
          ? `<a:${emoji.name}:${emoji.id}>`
          : `<:${emoji.name}:${emoji.id}>`;
        emojiMap.set(emoji.name.toLowerCase(), emojiFormat);
      }
    }
  }

  if (emojiMap.size === 0) {
    return result;
  }

  const staticEmojiMap = new Map<string, string>();
  for (const [key, value] of emojiMap) {
    if (value.startsWith("<:")) {
      staticEmojiMap.set(key, value);
    }
  }

  const parts = result.split(/(```[\s\S]*?```|`[^`]+`)/g);
  const processedParts = parts.map((part) => {
    if (part.startsWith("```") || part.startsWith("`")) {
      return part;
    }
    let processed = part.replace(/(?<![<a]):([a-zA-Z0-9_]+):/g, (match, emojiName) => {
      const emojiFormat = emojiMap.get(emojiName.toLowerCase());
      return emojiFormat || match;
    });
    if (staticEmojiMap.size > 0) {
      processed = processed.replace(/<a:([a-zA-Z0-9_]+):(\d+)>/g, (match, emojiName, emojiId) => {
        const staticFormat = staticEmojiMap.get(emojiName.toLowerCase());
        if (staticFormat && staticFormat.endsWith(`:${emojiId}>`)) {
          return staticFormat;
        }
        return match;
      });
    }
    return processed;
  });
  result = processedParts.join("");

  return result;
}

export function extractStickers(content: string): { content: string; stickerNames: string[] } {
  const STICKER_PATTERN = /\[STICKER:([^\]]+)\]/g;
  const stickerNames: string[] = [];
  const cleanContent = content
    .replace(STICKER_PATTERN, (_, name) => {
      stickerNames.push(name.trim());
      return "";
    })
    .replace(/\s\s+/g, " ")
    .trim();
  return { content: cleanContent, stickerNames };
}
