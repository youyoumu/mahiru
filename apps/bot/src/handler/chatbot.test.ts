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
});
