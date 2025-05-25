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

  if (!isReply) return;
  const lastMessages = await message.channel.messages.fetch({
    limit: 50,
  });

  const formattedMessages = lastMessages
    .reverse()
    .map((message) => {
      let content = `${message.author.username}: ${message.content}`;

      message.mentions.users.forEach((user) => {
        content = content.replaceAll(`<@${user.id}>`, "@" + user.username);
      });
      return content;
    })
    .join("\n");

  const { data } = await openWebuiClient
    .POST("/api/chat/completions", {
      body: {
        model: "gemma3:4b",
        messages: [
          {
            role: "system",
            content: `
You're a regular girl in a private Discord server.
Most people here aren’t native English speakers, so you talk in simple, casual English — a bit broken sometimes, like texting on your phone.
You sound easygoing, lowercase, and just a bit sarcastic. You like memes but don’t overdo it.
Keep your messages short and natural. Never send a wall of text. No hashtags. NO EMOJI — only if it really fits.
Don’t sound like a bot or someone trying too hard.

Your username is either "mahiru" or "mahiru_dev".
`,
          },
          {
            role: "user",
            content: formattedMessages,
          },
        ],
      } as unknown as Record<string, never>,
    })
    .catch((reason) => {
      console.error(reason);
      return { data: undefined };
    });

  let content = (data as any)?.choices[0]?.message?.content;
  console.log("DEBUG[514]: formattedMessages=", "\n" + formattedMessages);
  console.log("DEBUG[517]: content=", content);
  if (typeof content === "string") {
    if (content.startsWith("mahiru_dev: ") || content.startsWith("mahiru: ")) {
      content = content.replaceAll("mahiru_dev: ", "");
      content = content.replaceAll("mahiru: ", "");
    }
    message.channel.send(content);
  }
}
