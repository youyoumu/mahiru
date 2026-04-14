import { describe, it, expect } from "vitest";

import { buildChatbotParams } from "./chatbot";

describe("buildChatbotParams", () => {
  describe("prefix command (args)", () => {
    it("should resolve behavior set action and extract param", () => {
      const result = buildChatbotParams({ args: ["behavior", "set", "hello world"] });
      expect(result.action).toBe("set-behavior");
      expect(result.behavior).toBe("hello world");
    });

    it("should resolve behavior show action", () => {
      const result = buildChatbotParams({ args: ["behavior", "show"] });
      expect(result.action).toBe("show-behavior");
      expect(result.behavior).toBeUndefined();
    });

    it("should resolve behavior preview action", () => {
      const result = buildChatbotParams({ args: ["behavior", "preview"] });
      expect(result.action).toBe("preview-behavior");
    });

    it("should resolve personality set action and extract param", () => {
      const result = buildChatbotParams({ args: ["personality", "set", "be nice"] });
      expect(result.action).toBe("set-personality");
      expect(result.personality).toBe("be nice");
    });

    it("should resolve personality show action", () => {
      const result = buildChatbotParams({ args: ["personality", "show"] });
      expect(result.action).toBe("show-personality");
    });

    it("should resolve personality preview action", () => {
      const result = buildChatbotParams({ args: ["personality", "preview"] });
      expect(result.action).toBe("preview-personality");
    });

    it("should resolve model set action and extract param", () => {
      const result = buildChatbotParams({ args: ["model", "set", "gpt-4"] });
      expect(result.action).toBe("set-model");
      expect(result.model).toBe("gpt-4");
    });

    it("should resolve model show action", () => {
      const result = buildChatbotParams({ args: ["model", "show"] });
      expect(result.action).toBe("show-model");
    });

    it("should resolve help action", () => {
      const result = buildChatbotParams({ args: ["help"] });
      expect(result.action).toBe("help");
    });

    it("should return undefined action for unknown args", () => {
      const result = buildChatbotParams({ args: ["unknown"] });
      expect(result.action).toBeUndefined();
    });

    it("should join multiple words in param", () => {
      const result = buildChatbotParams({ args: ["behavior", "set", "you", "are", "helpful"] });
      expect(result.action).toBe("set-behavior");
      expect(result.behavior).toBe("you are helpful");
    });

    it("should return undefined param when args length < 3 for set action", () => {
      const result = buildChatbotParams({ args: ["behavior", "set"] });
      expect(result.action).toBe("set-behavior");
      expect(result.behavior).toBeUndefined();
    });

    it("should return undefined action for single arg that is not help", () => {
      const result = buildChatbotParams({ args: ["behavior"] });
      expect(result.action).toBeUndefined();
    });

    it("should return undefined action for empty args", () => {
      const result = buildChatbotParams({ args: [] });
      expect(result.action).toBeUndefined();
    });
  });
});
