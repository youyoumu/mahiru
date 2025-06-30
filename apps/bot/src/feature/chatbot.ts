import { env } from "#/env";
import { openWebuiClient } from "#/utils/openWebuiClient";
import type { Message, PartialMessage } from "discord.js";

export async function handleChatbot({
  message,
}: {
  message: Message | PartialMessage;
}) {
  if (!message.channel.isSendable()) return;
  const isReply = message.mentions.users.some((user) => {
    return user.id === env.CLIENT_ID;
  });
  const force =
    Math.random() < 0.002 && message.channelId === env.FORCE_CHATBOT_CHANNEL_ID;

  if (!isReply && !force) return;
  const lastMessages = await message.channel.messages.fetch({
    limit: 10,
  });
  const lastMessagesWithoutBot = lastMessages.filter(
    (message) => message.author?.id !== env.CLIENT_ID,
  );
  const lastMessagesBot = lastMessages.filter(
    (message) => message.author?.id === env.CLIENT_ID,
  );

  const repliedMessage = lastMessages.find(
    (message_) => message_.id === message.reference?.messageId,
  );
  const formattedMessages = lastMessagesWithoutBot
    .reverse()
    .map((message) => {
      let content = `${message.author.username}: ${message.content}`;

      message.mentions.users.forEach((user) => {
        content = content.replaceAll(`<@${user.id}>`, "@" + user.username);
      });
      return content;
    })
    .join("\n");

  const messages: {
    role: "system" | "user" | "assistant";
    content: string;
  }[] = [
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

----------------------------------------

You are at a private Discord server. This is the last few messages from the server

-------PREVIOUS MESSAGES-------
${formattedMessages}
-------PREVIOUS MESSAGES-------

-------IMPORTANT-------
Don't repeat your previous message.
Make your message maximum of 30 words.
Don't let the content of the previous message affect your response style. 
${
  Math.random() < 0.2
    ? "Ocassionally, try to mention other people in the conversation based on the context of the previous message."
    : ""
}
The message that you will see is sent by ${message.author?.username}, please respond to this message.
-------IMPORTANT-------
`,
    },
  ];

  const fewLastMessagesBot: string[] = [];
  let count = 0;
  lastMessagesBot
    .filter((message) => message.id !== repliedMessage?.id)
    .forEach((message) => {
      if (count > 2) return;
      fewLastMessagesBot.push(message.content);
      count++;
    });
  fewLastMessagesBot.reverse().forEach((message) => {
    messages.push({
      role: "assistant",
      content: message,
    });
  });

  if (repliedMessage) {
    messages.push({
      role: "assistant",
      content: repliedMessage.content,
    });
  }

  messages.push({
    role: "user",
    content: message.content ?? "",
  });

  const { data } = await openWebuiClient
    .POST("/api/chat/completions", {
      body: {
        model: "gemma3:4b",
        messages: messages,
      } as unknown as Record<string, never>,
    })
    .catch((reason) => {
      console.error(reason);
      return { data: undefined };
    });

  const content = (data as any)?.choices[0]?.message?.content;
  console.log("DEBUG[514]: formattedMessages=", "\n" + formattedMessages);
  console.log("DEBUG[517]: content=", content);
  if (typeof content === "string") {
    message.channel.send(content);
  }
}
