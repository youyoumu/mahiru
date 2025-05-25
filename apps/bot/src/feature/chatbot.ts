import { env } from "#/env";
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
    limit: 10,
  });

  const formattedMessages = lastMessages.map((message) => {
    return `${message.author.username}: ${message.content}`;
  });

  console.log("DEBUG[514]: formattedMessages=", formattedMessages);
}
