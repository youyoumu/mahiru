import type { Ctx } from "#/lib/ctx";
import type { Message, PartialMessage } from "discord.js";
import type { Logger } from "pino";

import { env } from "#/env";
import { zCompletionResponse } from "#/lib/schema";
import { processSpintax } from "#/lib/spintax";
import { prompts } from "#/prompts";
import { openWebuiClient } from "#/utils/open-webui-client";

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

    const messages = await this.createMessages(message);
    const data = await this.completion(messages);
    const content = data?.choices[0]?.message.content;
    if (typeof content === "string") {
      this.log.debug(`[Chatbot] \n${content}`);
      message.channel.send(content);
    }
  }

  async createMessages(message: Message<boolean> | PartialMessage) {
    const lastMessages = await message.channel.messages.fetch({
      limit: 10,
    });

    const repliedMessage = lastMessages.find((msg) => msg.id === message.reference?.messageId);

    // Collect users from chat history
    const usersInChat = new Map<string, string>();
    const allMessages = [...lastMessages.values(), message];
    if (repliedMessage) allMessages.push(repliedMessage);
    for (const msg of allMessages) {
      if (msg.author && !msg.author.bot) {
        usersInChat.set(msg.author.id, msg.author.username);
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
      usersInChat.size > 0 ? [...usersInChat.values()].map((name) => `- ${name}`).join("\n") : "";

    const emojisList = emojis.join("\n");

    const discordContext = prompts.discordContext
      .replace(/\{\{MEMBERS\}\}/g, membersList)
      .replace(/\{\{EMOJIS\}\}/g, emojisList);

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

    for (const [, msg] of filteredMessages) {
      const isBot = msg.author?.id === env.CLIENT_ID;
      chatHistoryMessages.push({
        role: isBot ? "assistant" : "user",
        content: isBot
          ? this.processMentions(msg)
          : `${msg.author?.username}: ${this.processMentions(msg)}`,
      });
    }

    //TODO: do something about this
    if (repliedMessage) {
      const isBot = repliedMessage.author?.id === env.CLIENT_ID;
      chatHistoryMessages.push({
        role: isBot ? "assistant" : "user",
        content: isBot
          ? this.processMentions(repliedMessage)
          : `${repliedMessage.author?.username}: ${this.processMentions(repliedMessage)}`,
      });
    }

    messages.push(...chatHistoryMessages);
    messages.push({
      role: "user",
      content: `${message.author?.username}: ${this.processMentions(message)}`,
    });

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
  ) {
    try {
      const res = await openWebuiClient.POST("/api/chat/completions", {
        body: {
          model: "gemma4:e2b",
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
}
