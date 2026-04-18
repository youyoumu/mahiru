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

import { ChatbotHandler } from "./chatbot";

describe("ChatbotHandler", () => {
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
      const result = ChatbotHandler.fixMentions(content, message);

      expect(result).toBe("Hey <@123456> and <@789012>, how are you?");
    });

    it("should convert <@username> to <@user_id>", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello <@alice>!";
      const result = ChatbotHandler.fixMentions(content, message);

      expect(result).toBe("Hello <@123456>!");
    });

    it("should preserve already correct <@user_id> format", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello <@123456>!";
      const result = ChatbotHandler.fixMentions(content, message);

      expect(result).toBe("Hello <@123456>!");
    });

    it("should not replace mentions inside code blocks", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Use `@alice` for mentions or ```@alice``` in code";
      const result = ChatbotHandler.fixMentions(content, message);

      expect(result).toBe("Use `@alice` for mentions or ```@alice``` in code");
    });

    it("should replace mentions outside code blocks but preserve code block content", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));
      members.set("user2", createMockMember("789012", "bob", "Bob"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "@alice said `@bob` and @bob replied";
      const result = ChatbotHandler.fixMentions(content, message);

      expect(result).toBe("<@123456> said `@bob` and <@789012> replied");
    });

    it("should handle display names", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice_wonder", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hey @Alice and @alice_wonder";
      const result = ChatbotHandler.fixMentions(content, message);

      expect(result).toBe("Hey <@123456> and <@123456>");
    });

    it("should handle case-insensitive username matching", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "Alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello @alice and @ALICE";
      const result = ChatbotHandler.fixMentions(content, message);

      expect(result).toBe("Hello <@123456> and <@123456>");
    });

    it("should leave unmatched usernames unchanged", () => {
      const members = new Map<string, GuildMember>();
      members.set("user1", createMockMember("123456", "alice", "Alice"));

      const mockGuild = createMockGuild(members);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hey @alice and @unknown";
      const result = ChatbotHandler.fixMentions(content, message);

      expect(result).toBe("Hey <@123456> and @unknown");
    });

    it("should return content unchanged when no guild cache is available", () => {
      const message = createMockMessage({});
      const content = "Hey @alice";
      const result = ChatbotHandler.fixMentions(content, message);

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
      const result = ChatbotHandler.fixEmojis(content, message);

      expect(result).toBe("Hello <:smile:111111> and <:wave:222222>");
    });

    it("should convert animated emojis correctly with <a:name:id> format", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("dance", createMockEmoji("333333", "dance", true));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Let's :dance:";
      const result = ChatbotHandler.fixEmojis(content, message);

      expect(result).toBe("Let's <a:dance:333333>");
    });

    it("should preserve already formatted emojis <:name:id>", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Already formatted <:smile:111111>";
      const result = ChatbotHandler.fixEmojis(content, message);

      expect(result).toBe("Already formatted <:smile:111111>");
    });

    it("should preserve already formatted animated emojis <a:name:id>", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("dance", createMockEmoji("333333", "dance", true));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Already formatted <a:dance:333333>";
      const result = ChatbotHandler.fixEmojis(content, message);

      expect(result).toBe("Already formatted <a:dance:333333>");
    });

    it("should not replace emojis inside code blocks", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Use :smile: or `:smile:` or ```\n:smile:\n```";
      const result = ChatbotHandler.fixEmojis(content, message);

      expect(result).toBe("Use <:smile:111111> or `:smile:` or ```\n:smile:\n```");
    });

    it("should replace emojis outside code blocks but preserve code block content", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));
      emojis.set("wave", createMockEmoji("222222", "wave"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = ":smile: said `:wave:` and :wave: replied";
      const result = ChatbotHandler.fixEmojis(content, message);

      expect(result).toBe("<:smile:111111> said `:wave:` and <:wave:222222> replied");
    });

    it("should handle case-insensitive emoji name matching", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello :SMILE: and :Smile:";
      const result = ChatbotHandler.fixEmojis(content, message);

      expect(result).toBe("Hello <:smile:111111> and <:smile:111111>");
    });

    it("should leave unmatched emoji names unchanged", () => {
      const emojis = new Map<string, GuildEmoji>();
      emojis.set("smile", createMockEmoji("111111", "smile"));

      const mockGuild = createMockGuild(undefined, emojis);

      const message = createMockMessage({ guild: mockGuild });
      const content = "Hello :smile: and :unknown:";
      const result = ChatbotHandler.fixEmojis(content, message);

      expect(result).toBe("Hello <:smile:111111> and :unknown:");
    });

    it("should return content unchanged when no guild emoji cache is available", () => {
      const message = createMockMessage({});
      const content = "Hello :smile:";
      const result = ChatbotHandler.fixEmojis(content, message);

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
      const mentionsResult = ChatbotHandler.fixMentions(content, message);
      const finalResult = ChatbotHandler.fixEmojis(mentionsResult, message);

      expect(finalResult).toBe("Hey <@123456> <:smile:111111>");
    });
  });

  describe("splitMessage", () => {
    it("should return the message as a single chunk if it is within the limit", () => {
      const text = "Hello world";
      const result = ChatbotHandler.splitMessage(text, 20);
      expect(result).toEqual(["Hello world"]);
    });

    it("should split by paragraphs if possible", () => {
      const text = "Paragraph 1\n\nParagraph 2";
      const result = ChatbotHandler.splitMessage(text, 15);
      expect(result).toEqual(["Paragraph 1\n\n", "Paragraph 2"]);
    });

    it("should split by newlines if no paragraphs found", () => {
      const text = "Line 1\nLine 2";
      const result = ChatbotHandler.splitMessage(text, 10);
      expect(result).toEqual(["Line 1\n", "Line 2"]);
    });

    it("should split by sentences if no newlines found", () => {
      const text = "Sentence one. Sentence two.";
      const result = ChatbotHandler.splitMessage(text, 20);
      expect(result).toEqual(["Sentence one. ", "Sentence two."]);
    });

    it("should split by spaces if no sentences found", () => {
      const text = "Word1 Word2 Word3";
      const result = ChatbotHandler.splitMessage(text, 11);
      expect(result).toEqual(["Word1 ", "Word2 Word3"]);
    });

    it("should hard split if no boundaries are found", () => {
      const text = "abcdefghij";
      const result = ChatbotHandler.splitMessage(text, 5);
      expect(result).toEqual(["abcde", "fghij"]);
    });

    it("should handle code blocks correctly by closing and reopening them", () => {
      const text = "```javascript\nconst x = 1;\nconst y = 2;\n```";
      // Limit to split inside the code block
      const result = ChatbotHandler.splitMessage(text, 30);
      expect(result[0]).toContain("```javascript\nconst x = 1;");
      expect(result[0]).toContain("```");
      expect(result[1]).toContain("```javascript\nconst y = 2;");
      expect(result[1]).toContain("```");
    });

    it("should handle very long code blocks that exceed the limit", () => {
      const longLine = "a".repeat(100);
      const text = `\`\`\`\n${longLine}\n\`\`\``;
      const result = ChatbotHandler.splitMessage(text, 50);

      console.log('CHUNKS:', result);

      expect(result.length).toBeGreaterThan(1);
      // Combine all chunks and count total backticks
      const totalBackticks = result.join("").match(/```/g)?.length || 0;
      // We expect the original 2 backticks plus 2 for each split
      expect(totalBackticks).toBe(2 + (result.length - 1) * 2);

      // Each individual chunk should have an even number of backticks
      for (const chunk of result) {
        const backticks = (chunk.match(/```/g) || []).length;
        expect(backticks % 2).toBe(0);
      }
    });

    it("should handle multiple code blocks correctly", () => {
      const text = "Text before.\n```js\ncode1\n```\nMiddle text.\n```js\ncode2\n```\nText after.";
      const result = ChatbotHandler.splitMessage(text, 25);
      expect(result.length).toBeGreaterThan(2);
      // Ensure each code block is properly closed or reopened
      for (const chunk of result) {
        const backticks = (chunk.match(/```/g) || []).length;
        expect(backticks % 2).toBe(0);
      }
    });

    it("should trim start of subsequent chunks but preserve internal spacing", () => {
      const text = "First chunk.      Second chunk.";
      const result = ChatbotHandler.splitMessage(text, 15);
      expect(result).toEqual(["First chunk. ", "Second chunk."]);
    });

    it("should handle a complex real-world technical explanation", () => {
      const text = `Here is how you can use the new splitMessage method:

1. Import the class:
\`\`\`typescript
import { ChatbotHandler } from "./handler/chatbot";
\`\`\`

2. Call the static method with your content:
\`\`\`typescript
const content = "your very long content...";
const chunks = ChatbotHandler.splitMessage(content);
\`\`\`

3. Send each chunk sequentially to Discord to avoid hitting the 2000 character limit. This ensures your bot can respond with long explanations without getting error 400.

Hope this helps! Let me know if you have more questions.`;

      // Split with a limit that forces it to break between points
      const result = ChatbotHandler.splitMessage(text, 150);
      
      expect(result.length).toBeGreaterThan(2);
      
      // Check that code blocks are preserved
      const allText = result.join("");
      expect(allText).toContain('import { ChatbotHandler }');
      expect(allText).toContain('const chunks = ChatbotHandler.splitMessage(content);');
      
      // Check that each chunk is properly balanced if it contains backticks
      for (const chunk of result) {
        const backticks = (chunk.match(/```/g) || []).length;
        expect(backticks % 2).toBe(0);
      }
    });

    it("should split correctly at bullet points", () => {
      const text = "To-do list:\n- First item that is quite long\n- Second item that is also long\n- Third item";
      const result = ChatbotHandler.splitMessage(text, 40);
      
      expect(result[0]).toBe("To-do list:\n");
      expect(result[1]).toContain("- First item");
      expect(result[2]).toContain("- Second item");
    });

    it("should handle a very large response with nested code and mixed text", () => {
      const paragraph = "This is a long paragraph that provides context for the following code block. It explains the architectural decisions and the importance of splitting messages correctly in a chat application. ".repeat(3);
      const code = "```javascript\n" + "console.log('Very long line of code that exceeds the limit...');\n".repeat(10) + "```";
      const text = `${paragraph}\n\n${code}\n\nConclusion of the response.`;
      
      const limit = 300;
      const result = ChatbotHandler.splitMessage(text, limit);
      
      expect(result.length).toBeGreaterThan(3);
      
      // Verification of integrity
      for (const chunk of result) {
        expect(chunk.length).toBeLessThanOrEqual(limit + 10); // slightly over for closing backticks
        const backticks = (chunk.match(/```/g) || []).length;
        expect(backticks % 2).toBe(0);
      }
    });

    it("should preserve code block language extension across chunks", () => {
      const text = "```typescript\nconst x = 1;\nconst y = 2;\nconst z = 3;\n```";
      const result = ChatbotHandler.splitMessage(text, 35);

      expect(result.length).toBeGreaterThan(1);
      expect(result[0]).toContain("```typescript");
      expect(result[0]).toContain("```"); // closing added by split
      expect(result[1]).toContain("```typescript"); // reopened with extension
      expect(result[1]).toContain("const y = 2;");
    });
  });
});
