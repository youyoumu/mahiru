import { describe, it, expect } from "vitest";

import { parseTagSpintax } from "./tag-spintax";

describe("parseTagSpintax", () => {
  it("should parse multiple attach tags", () => {
    const input = "{attach:url1}{attach:url2}{attach:url3}";
    const result = parseTagSpintax(input);
    expect(result.attach).toEqual(["url1", "url2", "url3"]);
    expect(result.choose).toEqual([]);
  });

  it("should parse choose tags", () => {
    const input = "{choose: url1 | url2 | url3 }";
    const result = parseTagSpintax(input);
    expect(result.attach).toEqual([]);
    expect(result.choose).toEqual(["url1", "url2", "url3"]);
  });

  it("should parse both attach and choose tags", () => {
    const input = "{attach:url1}{choose: url2 | url3 }";
    const result = parseTagSpintax(input);
    expect(result.attach).toEqual(["url1"]);
    expect(result.choose).toEqual(["url2", "url3"]);
  });

  it("should handle spaces correctly", () => {
    const input = "{attach:  url1  }{choose:  url2 | url3  }";
    const result = parseTagSpintax(input);
    expect(result.attach).toEqual(["url1"]);
    expect(result.choose).toEqual(["url2", "url3"]);
  });

  it("should return empty arrays if no tags found", () => {
    const input = "https://example.com";
    const result = parseTagSpintax(input);
    expect(result.attach).toEqual([]);
    expect(result.choose).toEqual([]);
  });

  it("should handle multiple choose blocks", () => {
    const input = "{choose: A | B} {choose: C | D}";
    const result = parseTagSpintax(input);
    expect(result.choose).toEqual(["A", "B", "C", "D"]);
  });
});
