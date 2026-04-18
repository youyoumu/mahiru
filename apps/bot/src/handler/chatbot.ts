import type { Ctx } from "#/lib/ctx";
import type { Message, PartialMessage } from "discord.js";
import type { Logger } from "pino";

import { env } from "#/env";
import { hasClearToken } from "#/lib/chatbot";
import { openWebuiClient } from "#/lib/openapi";
import { zCompletionResponse } from "#/lib/schema";
import { processSpintax } from "#/lib/spintax";
import { prompts } from "#/prompts";
import { delay } from "es-toolkit";

type MessageContent =
  | { type: "text"; text: string }
  | { type: "image_url"; image_url: { url: string } };

type MessagesPayload = {
  role: "system" | "user" | "assistant";
  content: string | MessageContent[];
}[];

export class ChatbotHandler {
  log: Logger;
  ctx: Ctx;
  constructor(opts: { log: Logger; ctx: Ctx }) {
    this.log = opts.log;
    this.ctx = opts.ctx;
  }

  async handle({ message }: { message: Message | PartialMessage }) {
    if (!message.channel.isSendable()) return;
    const isMention = message.mentions.users.some((user) => {
      return user.id === env.CLIENT_ID;
    });

    const guildReplyChance = await this.ctx.dbSvc.getGuildChatbotReplyChance(message.guildId);
    const probability = guildReplyChance ?? 0.002;

    const isForce =
      Math.random() < probability && env.FORCE_CHATBOT_CHANNEL_ID.includes(message.channelId);
    if (!isMention && !isForce) return;

    const channel = message.channel;
    let typingInterval: ReturnType<typeof setInterval> | undefined;
    if (message.channel.isTextBased()) {
      channel.sendTyping().catch(() => {});
      typingInterval = setInterval(() => {
        channel.sendTyping().catch(() => {});
      }, 5000);
    }
    try {
      const messages = await this.createMessages(message);
      const data = await this.completion(messages, message.guildId);
      const content = data?.choices[0]?.message.content;
      if (typeof content === "string") {
        this.log.debug(`[Chatbot] \n${content}`);
        const processedContent = ChatbotHandler.fixEmojis(
          ChatbotHandler.fixMentions(content, message),
          message,
        );

        const chunks = ChatbotHandler.splitMessage(processedContent);
        for (const chunk of chunks) {
          await message.channel.send(chunk).catch((err) => {
            this.log.error(err);
          });
          await delay(1000);
        }
      }
    } finally {
      if (typingInterval) clearInterval(typingInterval);
    }
  }

  /**
   * Splits a message into multiple chunks, each within the character limit.
   * Attempts to split at natural boundaries (code blocks, paragraphs, newlines, sentences, spaces).
   */
  static splitMessage(text: string, limit = 1900): string[] {
    if (text.length <= limit) return [text];

    const chunks: string[] = [];
    let currentText = text;
    let iterations = 0;
    const MAX_ITERATIONS = 100;

    // Track if we are inside a code block globally across chunks
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
        // We are already inside a code block from a previous chunk.
        // The currentText ALREADY STARTS WITH ```lang\n
        const nextClosing = currentText.indexOf("```", 3); // Skip the opening one

        if (nextClosing !== -1 && nextClosing + 3 <= limit) {
          // The block ends within this chunk's limit
          const splitIndex = nextClosing + 3;
          chunks.push(currentText.substring(0, splitIndex));
          currentText = currentText.substring(splitIndex).trimStart();
          currentlyInCodeBlock = false;
          codeBlockLang = "";
          continue;
        }

        // Must split inside the code block
        const lastNewline = subText.lastIndexOf("\n");
        // Only split at newline if it's not the opening one
        let splitIndex = lastNewline > 4 ? lastNewline : limit - 4;
        if (splitIndex <= 4) splitIndex = limit - 4;

        chunks.push(`${currentText.substring(0, splitIndex)}\n\`\`\``);
        currentText = `\`\`\`${codeBlockLang}\n${currentText.substring(splitIndex).trimStart()}`;
        // currentlyInCodeBlock remains true
        continue;
      }

      // Not currently in a code block. Check if any start/end in subText.
      const occurrences = (subText.match(/```/g) || []).length;

      if (occurrences % 2 !== 0) {
        // Odd number of backticks: a code block starts.
        const lastBackticks = subText.lastIndexOf("```");

        if (lastBackticks > 0) {
          // Split before the code block starts.
          const splitIndex = lastBackticks;
          chunks.push(currentText.substring(0, splitIndex).trimEnd());
          currentText = currentText.substring(splitIndex);
          continue;
        } else {
          // Starts with ``` and it's odd, so it must stay open.
          // Capture language extension if it exists
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

      // Even number of backticks, or none.
      const boundaries = [
        "\n\n", // Paragraphs
        "\n", // Newlines
        ". ", // Sentences
        " ", // Spaces
      ];

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

  async createMessages(message: Message<boolean> | PartialMessage) {
    const lastMessages = await message.channel.messages.fetch({
      limit: 10,
    });

    const repliedMessage = lastMessages.find((msg) => msg.id === message.reference?.messageId);

    // Collect users from chat history
    const usersInChat = new Map<string, { username: string; displayName: string }>();
    const allMessages = [...lastMessages.values(), message];
    if (repliedMessage) allMessages.push(repliedMessage);
    for (const msg of allMessages) {
      if (msg.author && !msg.author.bot) {
        usersInChat.set(msg.author.id, {
          username: msg.author.username,
          displayName: msg.author.displayName,
        });
      }
    }

    // Collect server emojis
    const guild = message.guild;
    const emojis: string[] = [];
    if (guild) {
      for (const emoji of guild.emojis.cache.values()) {
        if (emoji.id) {
          emojis.push(
            emoji.animated ? `<a:${emoji.name}:${emoji.id}>` : `<:${emoji.name}:${emoji.id}>`,
          );
        }
      }
    }

    const membersList =
      usersInChat.size > 0
        ? [...usersInChat.entries()]
            .map(([id, { username, displayName }]) => `${displayName} -- @${username} -- ${id})`)
            .join("\n")
        : "";

    const emojisList = emojis.join("\n");

    const discordContext = prompts.discordContext
      .replace(/\{\{MEMBERS\}\}/g, membersList)
      .replace(/\{\{EMOJIS\}\}/g, emojisList)
      .replace(
        /\{\{CURRENT_USER\}\}/g,
        `${message.author?.displayName} -- @${message.author?.username} -- ${message.author?.id}`,
      );

    const discordGuildId = message.guildId;
    const customPersonality = await this.ctx.dbSvc.getGuildChatbotPersonality(discordGuildId);
    const personalityContext = customPersonality
      ? processSpintax(customPersonality)
      : processSpintax(prompts.personality);
    const customBehavior = await this.ctx.dbSvc.getGuildChatbotBehavior(discordGuildId);
    const behaviorContext = customBehavior
      ? processSpintax(customBehavior)
      : processSpintax(prompts.behavior);

    const messages: MessagesPayload = [
      {
        role: "system",
        content: personalityContext,
      },
      {
        role: "system",
        content: discordContext,
      },
      {
        role: "system",
        content: behaviorContext,
      },
    ];

    const filteredMessages = lastMessages
      .filter((msg) => msg.id !== repliedMessage?.id && msg.id !== message.id)
      .reverse();

    const chatHistoryMessages: MessagesPayload = [];

    // Convert to array for indexed iteration
    const messagesArray = [...filteredMessages.values()];

    // Find the most recent clear token marker (search backwards)
    let clearChatIndex = -1;
    for (let i = messagesArray.length - 1; i >= 0; i--) {
      const msg = messagesArray[i];
      if (!msg) continue;
      const content = this.processMentions(msg);
      if (hasClearToken(content)) {
        clearChatIndex = i;
        break;
      }
    }

    // Start from AFTER the clear token message (skip the message itself)
    const startIndex = clearChatIndex >= 0 ? clearChatIndex + 1 : 0;

    for (let i = startIndex; i < messagesArray.length; i++) {
      const msg = messagesArray[i];
      if (!msg) continue;
      const content = this.processMentions(msg);

      // Skip messages that contain the clear token marker
      if (hasClearToken(content)) continue;

      const isBot = msg.author?.id === env.CLIENT_ID;
      const processedContent = isBot ? content : `${msg.author?.username}: ${content}`;

      const contentParts = await this.getMessageContent(msg, processedContent);
      if (contentParts.length === 0) continue;

      chatHistoryMessages.push({
        role: isBot ? "assistant" : "user",
        content: contentParts,
      });
    }

    //TODO: do something about this
    if (repliedMessage) {
      const repliedContent = this.processMentions(repliedMessage);

      // Skip if the replied message contains the clear token marker
      if (!hasClearToken(repliedContent)) {
        const isBot = repliedMessage.author?.id === env.CLIENT_ID;
        const processedContent = isBot
          ? repliedContent
          : `${repliedMessage.author?.username}: ${repliedContent}`;

        const contentParts = await this.getMessageContent(repliedMessage, processedContent);
        if (contentParts.length > 0) {
          chatHistoryMessages.push({
            role: isBot ? "assistant" : "user",
            content: contentParts,
          });
        }
      }
    }

    const currentContent = this.processMentions(message);
    const currentContentParts = await this.getMessageContent(
      message,
      `${message.author?.username}: ${currentContent}`,
    );

    chatHistoryMessages.push({
      role: "user",
      content: currentContentParts,
    });
    messages.push(...chatHistoryMessages);

    this.log.debug(`Personality Context: \n${personalityContext}`);
    this.log.debug(`Discord Context: \n${discordContext}`);
    this.log.debug(`Behavior Context: \n${behaviorContext}`);

    const sanitizedHistory = chatHistoryMessages.map((msg) => ({
      ...msg,
      content: Array.isArray(msg.content)
        ? msg.content.map((c) =>
            c.type === "image_url" && c.image_url.url.startsWith("data:")
              ? { ...c, image_url: { url: "[BASE64_IMAGE]" } }
              : c,
          )
        : msg.content,
    }));
    this.log.debug(sanitizedHistory, "ChatHistory");

    return messages;
  }

  //TODO: extract embeds
  async getMessageContent(
    message: Message | PartialMessage,
    text: string,
  ): Promise<MessageContent[]> {
    const contentParts: MessageContent[] = [];
    if (text.trim()) {
      contentParts.push({ type: "text", text });
    }

    const MAX_SIZE = 4 * 1024 * 1024; // 4MB

    // Fetch first Discord CDN image link if present in text
    const discordCdnRegex =
      /https:\/\/cdn\.discordapp\.com\/attachments\/\d+\/\d+\/[^?\s]+\.(?:png|jpg|jpeg|webp|gif)(?:\?\S*)?/i;
    const match = text.match(discordCdnRegex);
    if (match) {
      const url = match[0];
      const imageData = await this.fetchImage(url);
      if (imageData) {
        contentParts.push({
          type: "image_url",
          image_url: { url: `data:${imageData.contentType};base64,${imageData.base64}` },
        });
      }
    }

    for (const attachment of message.attachments.values()) {
      if (attachment.contentType?.startsWith("image/")) {
        if (attachment.size > MAX_SIZE) {
          this.log.warn(`Skipping attachment ${attachment.name} because it exceeds 4MB limit`);
          continue;
        }

        const imageData = await this.fetchImage(attachment.url);
        if (imageData) {
          contentParts.push({
            type: "image_url",
            image_url: { url: `data:${imageData.contentType};base64,${imageData.base64}` },
          });
        }
      }
    }

    return contentParts;
  }

  private async fetchImage(url: string): Promise<{ base64: string; contentType: string } | null> {
    const MAX_SIZE = 4 * 1024 * 1024; // 4MB
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(url, { signal: controller.signal }).finally(() =>
        clearTimeout(timeout),
      );

      if (!res.ok) {
        this.log.error(`Failed to fetch image ${url}: ${res.statusText}`);
        return null;
      }

      const arrayBuffer = await res.arrayBuffer();
      if (arrayBuffer.byteLength > MAX_SIZE) {
        this.log.warn(`Skipping image ${url} because actual size exceeds 4MB`);
        return null;
      }

      const base64 = Buffer.from(arrayBuffer).toString("base64");
      const contentType = res.headers.get("content-type") || "image/png";
      return { base64, contentType };
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        this.log.error(`Fetch timeout for image ${url}`);
      } else {
        this.log.error(err, `Failed to fetch image ${url}`);
      }
      return null;
    }
  }

  async completion(messages: MessagesPayload, discordGuildId?: string | null) {
    try {
      const guildModel = await this.ctx.dbSvc.getGuildChatbotModel(discordGuildId);
      const model = env.CHATBOT_MODELS.includes(guildModel ?? "")
        ? guildModel
        : env.CHATBOT_MODELS[0];

      const res = await openWebuiClient.POST("/api/chat/completions", {
        body: {
          model,
          messages: messages,
        },
      });
      return zCompletionResponse.parse(res.data);
    } catch (err) {
      this.log.error(err instanceof Error ? err.message : err);
    }
  }

  processMentions(message: Message<boolean> | PartialMessage): string {
    let result = message.content ?? "";
    message.mentions.users.forEach((user) => {
      result = result.replaceAll(`<@${user.id}>`, `@${user.username}`);
    });
    // Also clean up any raw <@id> patterns that weren't resolved
    result = result.replaceAll(/<@!?[0-9]+>/g, "");
    return result;
  }

  /**
   * Fixes mention formats in the bot's response to ensure proper Discord mention format.
   * Detects all mention formats (@username, <@username>, <@user_id>) and normalizes to <@user_id>
   */
  static fixMentions(content: string, message: Message | PartialMessage): string {
    let result = content;

    // Build a map of username (lowercase) to user ID from available sources
    const usernameToIdMap = new Map<string, string>();

    // Add users from the message's guild cache if available
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

    // If we couldn't get any members from cache, try to use the client's user cache
    if (usernameToIdMap.size === 0 && message.client) {
      for (const user of message.client.users.cache.values()) {
        usernameToIdMap.set(user.username.toLowerCase(), user.id);
      }
    }

    // If still no members, we can't resolve usernames to IDs, so just return the content
    if (usernameToIdMap.size === 0) {
      return result;
    }

    // Pattern 1: Match <@username> format (with angle brackets but not a numeric ID)
    result = result.replace(/<@([a-zA-Z0-9_]+)>/g, (match, username) => {
      // If it's already a numeric ID, keep it
      if (/^\d+$/.test(username)) {
        return match;
      }
      // Otherwise, try to resolve the username
      const userId = usernameToIdMap.get(username.toLowerCase());
      return userId ? `<@${userId}>` : match;
    });

    // Pattern 2: Match plain @username mentions
    // Avoid matching inside code blocks (``` or `)
    // Split by code blocks to avoid replacing inside them
    const parts = result.split(/(```[\s\S]*?```|`[^`]+`)/g);
    const processedParts = parts.map((part) => {
      // If it's a code block, return as-is
      if (part.startsWith("```") || part.startsWith("`")) {
        return part;
      }
      // Otherwise, replace @username mentions
      return part.replace(/@([a-zA-Z0-9_]{2,32})/g, (match, username) => {
        const userId = usernameToIdMap.get(username.toLowerCase());
        return userId ? `<@${userId}>` : match;
      });
    });
    result = processedParts.join("");

    return result;
  }

  /**
   * Fixes emoji formats in the bot's response to ensure proper Discord emoji format.
   * Detects :emoji_name: format and converts to <:emoji_name:emoji_id> or <a:emoji_name:emoji_id>
   */
  static fixEmojis(content: string, message: Message | PartialMessage): string {
    let result = content;

    // Build a map of emoji name to emoji format (<:name:id> or <a:name:id>) from guild cache
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

    // If no emojis in cache, return as-is
    if (emojiMap.size === 0) {
      return result;
    }

    // Split by code blocks to avoid replacing inside them
    const parts = result.split(/(```[\s\S]*?```|`[^`]+`)/g);
    const processedParts = parts.map((part) => {
      // If it's a code block, return as-is
      if (part.startsWith("```") || part.startsWith("`")) {
        return part;
      }
      // Replace :emoji_name: with proper Discord format
      // But skip already-formatted emojis like <:name:id> or <a:name:id>
      return part.replace(/(?<![<a]):([a-zA-Z0-9_]+):/g, (match, emojiName) => {
        const emojiFormat = emojiMap.get(emojiName.toLowerCase());
        return emojiFormat || match;
      });
    });
    result = processedParts.join("");

    return result;
  }
}
