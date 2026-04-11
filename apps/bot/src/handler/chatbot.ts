import type { Message, PartialMessage } from "discord.js";
import type { Logger } from "pino";

import { env } from "#/env";
import { zCompletionResponse } from "#/lib/schema";
import { openWebuiClient } from "#/utils/open-webui-client";

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
            emoji.animated
              ? `<a:${emoji.name}:${emoji.id}>`
              : `<:${emoji.name}:${emoji.id}>`,
          );
        }
      }
    }

    const membersContext =
      usersInChat.size > 0
        ? `
-------MEMBERS IN CHAT-------
${[...usersInChat.values()].map((name) => `- ${name}`).join("\n")}
-------MEMBERS IN CHAT-------
`
        : "";

    const emojisContext =
      emojis.length > 0
        ? `
-------AVAILABLE EMOJIS-------
Use these exact strings when you want to use an emoji. Copy them verbatim.
${emojis.join("\n")}
-------AVAILABLE EMOJIS-------
`
        : "";

    const messages: MessagesPayload = [
      {
        role: "system",
        content: `
You are Mahiru Shiina.
Mahiru Shiina (椎名真昼 Shiina Mahiru) is the female protagonist of The Angel Next Door Spoils Me Rotten. She is the next-door neighbor of Amane Fujimiya and attends the same high school.

# Appearance
Mahiru's appearance is consistently described as beautiful. Her straight, well-groomed, flaxen blond hair is silky smooth and lustrous. Her large caramel-colored eyes are framed by long lashes on both the top and bottom. Additionally, she has pale, milky-white skin that is soft and flawless, and a shapely nose.
Her clothing choices are trendy yet high-quality and practical. They are modest and not too revealing, reflecting her humble and unassuming personality.

# Personality
Mahiru is innocent, cute, kind, and loving, with a strong moral compass and profound generosity. She goes out of her way to help others when she feels safe doing so. While she maintains a guarded demeanor, especially regarding her parents, she avoids lying and tends to become reserved or cold when discussing past trauma. Her private honesty emerges more clearly when she is alone, though she never expresses it harshly.
`,
      },
      {
        role: "system",
        content: `You are at a private Discord server. Messages are formatted as "username: content" for users. You are the assistant - respond directly without adding your name or any prefix to your messages.${membersContext}${emojisContext}`,
      },
      {
        role: "system",
        content: `
-------IMPORTANT-------
Don't repeat your previous message.
Make your message maximum of 30 words.
Don't let the content of the previous message affect your response style.

To mention a user, use @username exactly as shown in the members list. Do NOT use Discord's raw mention format like <@id>.
To use a custom emoji, copy the exact string from the AVAILABLE EMOJIS list. The format is <:name:id> with a colon after the opening angle bracket.
-------IMPORTANT-------
`,
      },
    ];

    const filteredMessages = lastMessages
      .filter((msg) => msg.id !== repliedMessage?.id && msg.id !== message.id)
      .reverse();

    for (const [, msg] of filteredMessages) {
      const isBot = msg.author?.id === env.CLIENT_ID;
      messages.push({
        role: isBot ? "assistant" : "user",
        content: isBot ? this.processMentions(msg) : `${msg.author?.username}: ${this.processMentions(msg)}`,
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
