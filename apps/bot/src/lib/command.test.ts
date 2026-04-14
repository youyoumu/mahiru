import { describe, it, expect } from "vitest";

import { parseCommand } from "./command";

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
