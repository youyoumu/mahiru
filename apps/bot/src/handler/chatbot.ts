import type { Ctx } from "#/lib/ctx";
import type { Message, PartialMessage } from "discord.js";
import type { Logger } from "pino";

import { env } from "#/env";
import {
  fixEmojis,
  fixMentions,
  hasClearToken,
  splitMessage,
  stripThinkingBlock,
} from "#/lib/chatbot";
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
  private imageCache = new Map<string, { base64: string; contentType: string }>();
  private failedImageCache = new Set<string>();
  private cacheClearInterval: ReturnType<typeof setInterval> | undefined;
  private guildEmojis = new Map<string, string[]>();

  constructor(opts: { log: Logger; ctx: Ctx }) {
    this.log = opts.log;
    this.ctx = opts.ctx;

    this.cacheClearInterval = setInterval(
      () => {
        this.imageCache.clear();
        this.failedImageCache.clear();
      },
      60 * 60 * 1000,
    );
  }

  async handle({ message }: { message: Message | PartialMessage }) {
    if (!message.channel.isSendable()) return;

    if (message.guildId && message.content) {
      this.trackEmojis(message.guildId, message.content);
    }
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
      }, 10000);
    }
    try {
      const messages = await this.createMessages(message);
      const data = await this.completion(messages, message.guildId);
      const content = data?.choices[0]?.message.content;
      if (typeof content === "string") {
        this.log.debug(`[Chatbot] \n${content}`);
        const processedContent = fixEmojis(
          fixMentions(stripThinkingBlock(content), message),
          message,
        );

        const chunks = splitMessage(processedContent);
        for (const chunk of chunks) {
          await message.channel.send(chunk).catch((err) => {
            this.log.error(err, "Error while sending message");
          });
          await delay(1000);
        }
      }
    } catch (err) {
      this.log.error(err, "Error while handling message");
    } finally {
      if (typingInterval) clearInterval(typingInterval);
    }
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
    const emojis = guild ? this.guildEmojis.get(guild.id) || [] : [];

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

    const systemPrompt = `${personalityContext}\n\n${discordContext}\n\n${behaviorContext}`;
    const messages: MessagesPayload = [
      {
        role: "system",
        content: systemPrompt,
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
    if (this.failedImageCache.has(url)) return null;
    const cached = this.imageCache.get(url);
    if (cached) return cached;

    const MAX_SIZE = 4 * 1024 * 1024; // 4MB
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(url, { signal: controller.signal }).finally(() =>
        clearTimeout(timeout),
      );

      if (!res.ok) {
        this.log.error(`Failed to fetch image ${url}: ${res.statusText}`);
        this.failedImageCache.add(url);
        return null;
      }

      const arrayBuffer = await res.arrayBuffer();
      if (arrayBuffer.byteLength > MAX_SIZE) {
        this.log.warn(`Skipping image ${url} because actual size exceeds 4MB`);
        this.failedImageCache.add(url);
        return null;
      }

      const base64 = Buffer.from(arrayBuffer).toString("base64");
      const contentType = res.headers.get("content-type") || "image/png";
      const result = { base64, contentType };
      this.imageCache.set(url, result);
      return result;
    } catch (err) {
      this.failedImageCache.add(url);
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
      if (!res.response.ok && res.error) throw res.error;
      return zCompletionResponse.parse(res.data);
    } catch (err) {
      this.log.error(err, "Error while generating response");
    }
  }

  processMentions(message: Message<boolean> | PartialMessage): string {
    let result = message.content ?? "";
    message.mentions.users.forEach((user) => {
      if (user.id === env.CLIENT_ID) {
        result = result.replaceAll(`<@${user.id}>`, "");
      } else {
        result = result.replaceAll(`<@${user.id}>`, `@${user.username}`);
      }
    });
    result = result.replaceAll(/<@!?[0-9]+>/g, "");
    return result;
  }

  private trackEmojis(guildId: string, content: string) {
    const emojiRegex = /<a?:(\w+):(\d+)>/g;
    let match;
    const newEmojis: string[] = [];

    while ((match = emojiRegex.exec(content)) !== null) {
      const name = match[1];
      const id = match[2];
      const isAnimated = content.substring(match.index, match.index + 2) === "<a";
      newEmojis.push(isAnimated ? `<a:${name}:${id}>` : `<:${name}:${id}>`);
    }

    if (newEmojis.length === 0) return;

    const existing = this.guildEmojis.get(guildId) || [];
    const combined = [...existing, ...newEmojis];
    const uniqueEmojis = [...new Set(combined)];
    const last10 = uniqueEmojis.slice(-10);

    this.guildEmojis.set(guildId, last10);
  }
}
