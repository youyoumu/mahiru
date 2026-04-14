import { describe, it, expect } from "vitest";

import { extractTrailingParam, parseCommand } from "./command";

describe("parseCommand", () => {
  it("should return null when content does not start with prefix", () => {
    expect(parseCommand("!", "hello world")).toBeNull();
  });

  it("should return null when content is only prefix", () => {
    expect(parseCommand("!", "!")).toBeNull();
  });

  it("should return null when content is prefix followed by only whitespace", () => {
    expect(parseCommand("!", "!  ")).toBeNull();
  });

  it("should parse command with no args", () => {
    const result = parseCommand("!", "!ping");
    expect(result).toEqual({ commandName: "ping", args: [] });
  });

  it("should parse command with single arg", () => {
    const result = parseCommand("!", "!ping pong");
    expect(result).toEqual({ commandName: "ping", args: ["pong"] });
  });

  it("should parse command with multiple args", () => {
    const result = parseCommand("!", "!tag add hello world");
    expect(result).toEqual({ commandName: "tag", args: ["add", "hello", "world"] });
  });

  it("should handle multiple spaces between args", () => {
    const result = parseCommand("!", "!cmd  arg1   arg2");
    expect(result).toEqual({ commandName: "cmd", args: ["arg1", "arg2"] });
  });

  it("should convert command name to lowercase", () => {
    const result = parseCommand("!", "!HeLLo world");
    expect(result).toEqual({ commandName: "hello", args: ["world"] });
  });

  it("should handle multi-character prefix", () => {
    const result = parseCommand("??", "??test arg1 arg2");
    expect(result).toEqual({ commandName: "test", args: ["arg1", "arg2"] });
  });

  it("should handle empty prefix", () => {
    const result = parseCommand("", "cmd arg1 arg2");
    expect(result).toEqual({ commandName: "cmd", args: ["arg1", "arg2"] });
  });

  it("should preserve case in args", () => {
    const result = parseCommand("!", "!echo HeLLo WoRLd");
    expect(result).toEqual({ commandName: "echo", args: ["HeLLo", "WoRLd"] });
  });
});

describe("extractTrailingParam", () => {
  it("should extract param after command words", () => {
    expect(extractTrailingParam("!chatbot behavior set hello world", ["behavior", "set"])).toBe("hello world");
  });

  it("should preserve multiple spaces", () => {
    expect(extractTrailingParam("!chatbot behavior set a      b", ["behavior", "set"])).toBe("a      b");
  });

  it("should return undefined when content doesn't match pattern", () => {
    expect(extractTrailingParam("!chatbot behavior show", ["behavior", "set"])).toBeUndefined();
  });

  it("should return undefined when content is shorter than pattern", () => {
    expect(extractTrailingParam("!chatbot behavior set", ["behavior", "set"])).toBeUndefined();
  });

  it("should handle single-word pattern", () => {
    expect(extractTrailingParam("!chatbot help text here", ["help"])).toBe("text here");
  });

  it("should handle multiple spaces between pattern words", () => {
    expect(extractTrailingParam("!chatbot behavior   set hello world", ["behavior", "set"])).toBe("hello world");
  });

  it("should handle multiple spaces before pattern", () => {
    expect(extractTrailingParam("!chatbot    behavior set hello world", ["behavior", "set"])).toBe("hello world");
  });

  it("should handle single-letter prefix", () => {
    expect(extractTrailingParam("c behavior set hello", ["behavior", "set"])).toBe("hello");
  });

  it("should handle letter-based prefix", () => {
    expect(extractTrailingParam("mybot behavior set hello", ["behavior", "set"])).toBe("hello");
  });

  it("should handle symbol prefix like ?", () => {
    expect(extractTrailingParam("?chatbot behavior set hello", ["behavior", "set"])).toBe("hello");
  });

  it("should handle symbol prefix like /", () => {
    expect(extractTrailingParam("/chatbot behavior set hello", ["behavior", "set"])).toBe("hello");
  });

  it("should handle prefix with spaces after it", () => {
    expect(extractTrailingParam("!   chatbot behavior set hello", ["behavior", "set"])).toBe("hello");
  });

  it("should handle mixed spacing throughout", () => {
    expect(extractTrailingParam("??   mybot    behavior   set hello world", ["behavior", "set"])).toBe("hello world");
  });
});
