import type { Ctx } from "#/lib/ctx";
import type { Message, PartialMessage } from "discord.js";
import type { Logger } from "pino";

import { env } from "#/env";
import { openWebuiClient } from "#/lib/openapi";
import { zCompletionResponse } from "#/lib/schema";
import { processSpintax } from "#/lib/spintax";
import { hasClearToken } from "#/lib/chatbot";
import { prompts } from "#/prompts";

type MessagesPayload = {
  role: "system" | "user" | "assistant";
  content: string;
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
    const isForce =
      Math.random() < 0.002 && env.FORCE_CHATBOT_CHANNEL_ID.includes(message.channelId);
    if (!isMention && !isForce) return;

    const channel = message.channel;
    let typingInterval: ReturnType<typeof setInterval> | undefined;
    let typingTimeout: ReturnType<typeof setTimeout> | undefined;
    if (message.channel.isTextBased()) {
      typingTimeout = setTimeout(() => {
        typingInterval = setInterval(() => {
          channel.sendTyping().catch(() => {});
        }, 5000);
      }, 1000);
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
        await message.channel.send(processedContent);
      }
    } finally {
      if (typingTimeout) clearTimeout(typingTimeout);
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
      const processedContent = isBot
        ? content
        : `${msg.author?.username}: ${content}`;
      if (!processedContent.trim()) continue;
      chatHistoryMessages.push({
        role: isBot ? "assistant" : "user",
        content: processedContent,
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
        if (processedContent.trim()) {
          chatHistoryMessages.push({
            role: isBot ? "assistant" : "user",
            content: processedContent,
          });
        }
      }
    }

    chatHistoryMessages.push({
      role: "user",
      content: `${message.author?.username}: ${this.processMentions(message)}`,
    });
    messages.push(...chatHistoryMessages);

    this.log.debug(`Personality Context: \n${personalityContext}`);
    this.log.debug(`Discord Context: \n${discordContext}`);
    this.log.debug(`Behavior Context: \n${behaviorContext}`);
    this.log.debug(chatHistoryMessages, "ChatHistory");

    return messages;
  }

  async completion(
    messages: {
      role: "system" | "user" | "assistant";
      content: string;
    }[],
    discordGuildId?: string | null,
  ) {
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
