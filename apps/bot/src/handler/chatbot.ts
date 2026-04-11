import type { Message, PartialMessage } from "discord.js";
import type { Logger } from "pino";

import { env } from "#/env";
import { zCompletionResponse } from "#/lib/schema";
import { openWebuiClient } from "#/utils/open-webui-client";

import discordContextPrompt from "./discord-context.prompt.txt";
import personalityPrompt from "./personality.prompt.txt";
import behaviorPrompt from "./behavior.prompt.txt";

type MessagesPayload = {
  role: "system" | "user" | "assistant";
  content: string;
}[];

export class ChatbotHandler {
  log: Logger;
  constructor(opts: { log: Logger }) {
    this.log = opts.log;
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

    const discordContext = discordContextPrompt
      .replace(/\{\{MEMBERS\}\}/g, membersList)
      .replace(/\{\{EMOJIS\}\}/g, emojisList);

    const messages: MessagesPayload = [
      {
        role: "system",
        content: personalityPrompt,
      },
      {
        role: "system",
        content: discordContext,
      },
      {
        role: "system",
        content: behaviorPrompt,
      },
    ];

    const filteredMessages = lastMessages
      .filter((msg) => msg.id !== repliedMessage?.id && msg.id !== message.id)
      .reverse();

    for (const [, msg] of filteredMessages) {
      const isBot = msg.author?.id === env.CLIENT_ID;
      messages.push({
        role: isBot ? "assistant" : "user",
        content: isBot
          ? this.processMentions(msg)
          : `${msg.author?.username}: ${this.processMentions(msg)}`,
      });
    }

    if (repliedMessage) {
      const isBot = repliedMessage.author?.id === env.CLIENT_ID;
      messages.push({
        role: isBot ? "assistant" : "user",
        content: isBot
          ? this.processMentions(repliedMessage)
          : `${repliedMessage.author?.username}: ${this.processMentions(repliedMessage)}`,
      });
    }

    messages.push({
      role: "user",
      content: `${message.author?.username}: ${this.processMentions(message)}`,
    });

    this.log.debug(messages, "MessagesPayload");
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
