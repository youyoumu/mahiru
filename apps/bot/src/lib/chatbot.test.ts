import type {
  Guild,
  GuildMember,
  GuildEmoji,
  Message,
  User,
  TextChannel,
  Collection,
} from "discord.js";

import { describe, it, expect } from "vitest";

import { fixEmojis, fixMentions, splitMessage, stripThinkingBlock } from "./chatbot";

describe("chatbot utils", () => {
  const createMockMember = (
    userId: string,
    username: string,
    displayName?: string,
  ): GuildMember => {
    const mockUser: User = {
      id: userId,
      username,
      displayName: displayName || username,
    } as User;

    return {
      user: mockUser,
      displayName: displayName || username,
    } as GuildMember;
  };

  const createMockEmoji = (emojiId: string, name: string, animated = false): GuildEmoji => {
    return {
      id: emojiId,
      name,
      animated,
    } as GuildEmoji;
  };

  const createMockGuild = (
    members?: Map<string, GuildMember>,
    emojis?: Map<string, GuildEmoji>,
  ): Guild => {
    return {
      members: members
        ? {
            cache: members as Collection<string, GuildMember>,
          }
        : undefined,
      emojis: emojis
        ? {
            cache: emojis as Collection<string, GuildEmoji>,
          }
        : undefined,
    } as Guild;
  };

  describe("fixMentions", () => {
    const createMockMessage = (
      opts: {
        guild?: Guild;
        client?: { users: { cache: Collection<string, User> } };
      } = {},
    ): Message => {
      const mockChannel = {
        isSendable: () => true,
        isTextBased: () => true,
      } as TextChannel;

      return {
        guild: opts.guild,
        client: opts.client,
        channel: mockChannel,
      } as Message;
    };

    it("should convert @username to <@user_id>", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));
      members.set("user2", createMockMember("789012", "bob", "Bob"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hey @alice and @bob, how are you?";
      const result = fixMentions(content, message);

      expect(result).toBe("Hey <@123456> and <@789012>, how are you?");
    });

    it("should convert <@username> to <@user_id>", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello <@alice>!";
      const result = fixMentions(content, message);

      expect(result).toBe("Hello <@123456>!");
    });

    it("should preserve already correct <@user_id> format", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello <@123456>!";
      const result = fixMentions(content, message);

      expect(result).toBe("Hello <@123456>!");
    });

    it("should not replace mentions inside code blocks", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Use `@alice` for mentions or ```@alice``` in code";
      const result = fixMentions(content, message);

      expect(result).toBe("Use `@alice` for mentions or ```@alice``` in code");
    });

    it("should replace mentions outside code blocks but preserve code block content", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));
      members.set("user2", createMockMember("789012", "bob", "Bob"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "@alice said `@bob` and @bob replied";
      const result = fixMentions(content, message);

      expect(result).toBe("<@123456> said `@bob` and <@789012> replied");
    });

    it("should handle display names", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice_wonder", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hey @Alice and @alice_wonder";
      const result = fixMentions(content, message);

      expect(result).toBe("Hey <@123456> and <@123456>");
    });

    it("should handle case-insensitive username matching", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "Alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello @alice and @ALICE";
      const result = fixMentions(content, message);

      expect(result).toBe("Hello <@123456> and <@123456>");
    });

    it("should leave unmatched usernames unchanged", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hey @alice and @unknown";
      const result = fixMentions(content, message);

      expect(result).toBe("Hey <@123456> and @unknown");
    });

    it("should return content unchanged when no guild cache is available", () => {
      const message = createMockMessage({});
      const content = "Hey @alice";
      const result = fixMentions(content, message);

      expect(result).toBe("Hey @alice");
    });
  });

  describe("fixEmojis", () => {
    const createMockMessage = (
      opts: {
        guild?: Guild;
      } = {},
    ): Message => {
      const mockChannel = {
        isSendable: () => true,
        isTextBased: () => true,
      } as TextChannel;

      return {
        guild: opts.guild,
        channel: mockChannel,
      } as Message;
    };

    it("should convert :emoji_name: to <:emoji_name:emoji_id>", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));
      emojis.set("wave", createMockEmoji("222222", "wave"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello :smile: and :wave:";
      const result = fixEmojis(content, message);

      expect(result).toBe("Hello <:smile:111111> and <:wave:222222>");
    });

    it("should convert animated emojis correctly with <a:name:id> format", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("dance", createMockEmoji("333333", "dance", true));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Let's :dance:";
      const result = fixEmojis(content, message);

      expect(result).toBe("Let's <a:dance:333333>");
    });

    it("should preserve already formatted emojis <:name:id>", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Already formatted <:smile:111111>";
      const result = fixEmojis(content, message);

      expect(result).toBe("Already formatted <:smile:111111>");
    });

    it("should preserve already formatted animated emojis <a:name:id>", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("dance", createMockEmoji("333333", "dance", true));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Already formatted <a:dance:333333>";
      const result = fixEmojis(content, message);

      expect(result).toBe("Already formatted <a:dance:333333>");
    });

    it("should convert animated emoji format to static when emoji is not animated", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("pogius", createMockEmoji("893374526543507487", "pogius", false));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = `I'm sorry if I caused any confusion earlier... I was just a bit nervous. <a:pogius:893374526543507487>

Um, since you asked... if I were to cook something special for you today, what would you actually want to eat?`;
      const result = fixEmojis(content, message);

      expect(result).toBe(`I'm sorry if I caused any confusion earlier... I was just a bit nervous. <:pogius:893374526543507487>

Um, since you asked... if I were to cook something special for you today, what would you actually want to eat?`);
    });

    it("should not replace emojis inside code blocks", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Use :smile: or `:smile:` or ```\n:smile:\n```";
      const result = fixEmojis(content, message);

      expect(result).toBe("Use <:smile:111111> or `:smile:` or ```\n:smile:\n```");
    });

    it("should replace emojis outside code blocks but preserve code block content", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));
      emojis.set("wave", createMockEmoji("222222", "wave"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = ":smile: said `:wave:` and :wave: replied";
      const result = fixEmojis(content, message);

      expect(result).toBe("<:smile:111111> said `:wave:` and <:wave:222222> replied");
    });

    it("should handle case-insensitive emoji name matching", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello :SMILE: and :Smile:";
      const result = fixEmojis(content, message);

      expect(result).toBe("Hello <:smile:111111> and <:smile:111111>");
    });

    it("should leave unmatched emoji names unchanged", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello :smile: and :unknown:";
      const result = fixEmojis(content, message);

      expect(result).toBe("Hello <:smile:111111> and :unknown:");
    });

    it("should return content unchanged when no guild emoji cache is available", () => {
      const message = createMockMessage({});
      const content = "Hello :smile:";
      const result = fixEmojis(content, message);

      expect(result).toBe("Hello :smile:");
    });

    it("should handle mixed mentions and emojis correctly", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(members, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hey @alice :smile:";
      const mentionsResult = fixMentions(content, message);
      const finalResult = fixEmojis(mentionsResult, message);

      expect(finalResult).toBe("Hey <@123456> <:smile:111111>");
    });
  });

  describe("splitMessage", () => {
    it("should return the message as a single chunk if it is within the limit", () => {
      const text = "Hello world";
      const result = splitMessage(text, 20);
      expect(result).toEqual(["Hello world"]);
    });

    it("should split by paragraphs if possible", () => {
      const text = "Paragraph 1\n\nParagraph 2";
      const result = splitMessage(text, 15);
      expect(result).toEqual(["Paragraph 1\n\n", "Paragraph 2"]);
    });

    it("should split by newlines if no paragraphs found", () => {
      const text = "Line 1\nLine 2";
      const result = splitMessage(text, 10);
      expect(result).toEqual(["Line 1\n", "Line 2"]);
    });

    it("should split by sentences if no newlines found", () => {
      const text = "Sentence one. Sentence two.";
      const result = splitMessage(text, 20);
      expect(result).toEqual(["Sentence one. ", "Sentence two."]);
    });

    it("should split by spaces if no sentences found", () => {
      const text = "Word1 Word2 Word3";
      const result = splitMessage(text, 11);
      expect(result).toEqual(["Word1 ", "Word2 Word3"]);
    });

    it("should hard split if no boundaries are found", () => {
      const text = "abcdefghij";
      const result = splitMessage(text, 5);
      expect(result).toEqual(["abcde", "fghij"]);
    });

    it("should handle code blocks correctly by closing and reopening them", () => {
      const text = "```javascript\nconst x = 1;\nconst y = 2;\n```";
      const result = splitMessage(text, 30);
      expect(result[0]).toContain("```javascript\nconst x = 1;");
      expect(result[0]).toContain("```");
      expect(result[1]).toContain("```javascript\nconst y = 2;");
      expect(result[1]).toContain("```");
    });

    it("should handle very long code blocks that exceed the limit", () => {
      const longLine = "a".repeat(100);
      const text = `\`\`\`\n${longLine}\n\`\`\``;
      const result = splitMessage(text, 50);

      expect(result.length).toBeGreaterThan(1);
      const totalBackticks = result.join("").match(/```/g)?.length || 0;
      expect(totalBackticks).toBe(2 + (result.length - 1) * 2);

      for (const chunk of result) {
        const backticks = (chunk.match(/```/g) || []).length;
        expect(backticks % 2).toBe(0);
      }
    });

    it("should handle multiple code blocks correctly", () => {
      const text = "Text before.\n```js\ncode1\n```\nMiddle text.\n```js\ncode2\n```\nText after.";
      const result = splitMessage(text, 25);
      expect(result.length).toBeGreaterThan(2);
      for (const chunk of result) {
        const backticks = (chunk.match(/```/g) || []).length;
        expect(backticks % 2).toBe(0);
      }
    });

    it("should trim start of subsequent chunks but preserve internal spacing", () => {
      const text = "First chunk.      Second chunk.";
      const result = splitMessage(text, 15);
      expect(result).toEqual(["First chunk. ", "Second chunk."]);
    });

    it("should handle a complex real-world technical explanation", () => {
      const text = `Here is how you can use the new splitMessage method:

1. Import the class:
\`\`\`typescript
import { splitMessage } from "./lib/chatbot";
\`\`\`

2. Call the static method with your content:
\`\`\`typescript
const content = "your very long content...";
const chunks = splitMessage(content);
\`\`\`

3. Send each chunk sequentially to Discord to avoid hitting the 2000 character limit. This ensures your bot can respond with long explanations without getting error 400.

Hope this helps! Let me know if you have more questions.`;

      const result = splitMessage(text, 150);

      expect(result.length).toBeGreaterThan(2);

      const allText = result.join("");
      expect(allText).toContain("import { splitMessage }");
      expect(allText).toContain("const chunks = splitMessage(content);");

      for (const chunk of result) {
        const backticks = (chunk.match(/```/g) || []).length;
        expect(backticks % 2).toBe(0);
      }
    });

    it("should split correctly at bullet points", () => {
      const text =
        "To-do list:\n- First item that is quite long\n- Second item that is also long\n- Third item";
      const result = splitMessage(text, 40);

      expect(result[0]).toBe("To-do list:\n");
      expect(result[1]).toContain("- First item");
      expect(result[2]).toContain("- Second item");
    });

    it("should handle a very large response with nested code and mixed text", () => {
      const paragraph =
        "This is a long paragraph that provides context for the following code block. It explains the architectural decisions and the importance of splitting messages correctly in a chat application. ".repeat(
          3,
        );
      const code =
        "```javascript\n" +
        "console.log('Very long line of code that exceeds the limit...');\n".repeat(10) +
        "```";
      const text = `${paragraph}\n\n${code}\n\nConclusion of the response.`;

      const limit = 300;
      const result = splitMessage(text, limit);

      expect(result.length).toBeGreaterThan(3);

      for (const chunk of result) {
        expect(chunk.length).toBeLessThanOrEqual(limit + 10);
        const backticks = (chunk.match(/```/g) || []).length;
        expect(backticks % 2).toBe(0);
      }
    });

    it("should preserve code block language extension across chunks", () => {
      const text = "```typescript\nconst x = 1;\nconst y = 2;\nconst z = 3;\n```";
      const result = splitMessage(text, 35);

      expect(result.length).toBeGreaterThan(1);
      expect(result[0]).toContain("```typescript");
      expect(result[0]).toContain("```");
      expect(result[1]).toContain("```typescript");
      expect(result[1]).toContain("const y = 2;");
    });
  });

  describe("stripThinkingBlock", () => {
    it("should remove thinking block from content", () => {
      const content =
        "<thinking>Thinking Process: Analyze the request...</thinking>Hello, how can I help you?";
      const result = stripThinkingBlock(content);
      expect(result).toBe("Hello, how can I help you?");
    });

    it("should handle thinking block with newlines", () => {
      const content =
        "<thinking>Thinking Process:\nAnalyze the request...\nOutput Generation...</thinking>Hello!";
      const result = stripThinkingBlock(content);
      expect(result).toBe("Hello!");
    });

    it("should return original content if no thinking block", () => {
      const content = "Hello, how can I help you?";
      const result = stripThinkingBlock(content);
      expect(result).toBe("Hello, how can I help you?");
    });

    it("should handle multiple thinking blocks", () => {
      const content = "<thinking>First</thinking>Hello<thinking>Second</thinking>World";
      const result = stripThinkingBlock(content);
      expect(result).toBe("HelloWorld");
    });

    it("should handle case-insensitive thinking tags", () => {
      const content = "<THINKING>Thinking</THINKING>Hello<thinking>More</thinking>World";
      const result = stripThinkingBlock(content);
      expect(result).toBe("HelloWorld");
    });

    it("should trim whitespace after removing thinking block", () => {
      const content = "<thinking>Thinking content</thinking>   Hello there!   ";
      const result = stripThinkingBlock(content);
      expect(result).toBe("Hello there!");
    });

    it("should handle empty thinking block", () => {
      const content = "<thinking></thinking>Hello";
      const result = stripThinkingBlock(content);
      expect(result).toBe("Hello");
    });

    it("should handle thinking block that spans the entire content", () => {
      const content = "<thinking>Thinking content</thinking>";
      const result = stripThinkingBlock(content);
      expect(result).toBe("");
    });

    it("should preserve content outside thinking blocks with whitespace", () => {
      const content = "Hello <thinking>thinking</thinking> World";
      const result = stripThinkingBlock(content);
      expect(result).toBe("Hello  World");
    });

    it("should handle the real-world API thinking block leak example", () => {
      const content = `<thinking>Thinking Process:

1.  **Analyze the Request:** The user has provided an image and a context (a conversation/prompt). The core task is to generate a response based on the image and the preceding text.
2.  **Analyze the Image:** The image shows a character (presumably the persona the AI is supposed to be interacting with, or a character reacting to the prompt) that looks somewhat cute/anime-like.
3.  **Analyze the Text Context:** The input text is: "you are [followed by a large block of names/IDs, likely irrelevant noise or context from a previous session], [followed by the actual request implied by the context which is missing, but based on the interaction flow, the AI needs to respond to the presented information or the implied social interaction]." *Self-Correction/Re-evaluation:* Looking closely at the prompt provided in the image context, it seems the user is asking for a continuation or reaction to the image, often in a roleplaying or conversational style.
4.  **Determine the Appropriate Response Tone:** Since this is an image-based prompt, a friendly, conversational, and contextually relevant response is best.
5.  **Formulate the Response:** Since the actual prompt structure is slightly ambiguous (it looks like an image prompt rather than a direct question), I will respond as if I am reacting to the visual information provided, maintaining a pleasant tone. (Since the preceding text seems like an artifact, I will focus purely on the visual interaction.)

*(Self-Correction based on standard instruction flow: If the input is just an image, and no explicit question is asked, the model should describe the image or acknowledge the prompt.)* 
*Output Generation based on the visual information.* (Since I cannot *see* the full preceding conversational text that led to this image, I will generate a standard, engaging response related to the visual presented.)<channel|>Oh! Hello there! You look very cute in this picture! 😊 What can I help you with today?`;
      const result = stripThinkingBlock(content);
      expect(result).toBe(
        "Oh! Hello there! You look very cute in this picture! 😊 What can I help you with today?",
      );
    });
  });
});
