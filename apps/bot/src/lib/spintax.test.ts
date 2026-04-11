import { describe, it, expect } from "vitest";

import { processSpintax, getAllVariations } from "./spintax";

describe("spintax", () => {
  describe("processSpintax", () => {
    it("should return plain text unchanged", () => {
      expect(processSpintax("Hello world")).toBe("Hello world");
    });

    it("should pick one option from equal weight spintax", () => {
      const result = processSpintax("{Hello|Hi|Hey}");
      expect(["Hello", "Hi", "Hey"]).toContain(result);
    });

    it("should handle spintax with surrounding text", () => {
      const result = processSpintax("The car is {fast|quick}.");
      expect(["The car is fast.", "The car is quick."]).toContain(result);
    });

    it("should handle weighted spintax", () => {
      const result = processSpintax(
        "{70:The car is fast|20:The car is quick|10:The car is speedy}",
      );
      expect(["The car is fast", "The car is quick", "The car is speedy"]).toContain(result);
    });

    it("should handle mixed weighted and unweighted options", () => {
      const result = processSpintax("{50:fast|quick}");
      expect(["fast", "quick"]).toContain(result);
    });

    it("should handle nested spintax", () => {
      const result = processSpintax("{Hello|Hi} {world|earth}");
      const expected = ["Hello world", "Hello earth", "Hi world", "Hi earth"];
      expect(expected).toContain(result);
    });

    it("should handle multiple spintax groups in one string", () => {
      const result = processSpintax("{Hello|Hi}, {world|earth}!");
      expect(result).toMatch(/^(Hello|Hi), (world|earth)!$/);
    });

    it("should respect weights over many iterations", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{70:A|20:B|10:C}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      expect(results.get("A") ?? 0).toBeGreaterThan(results.get("B") ?? 0);
      expect(results.get("B") ?? 0).toBeGreaterThan(results.get("C") ?? 0);
    });

    it("should handle empty options", () => {
      const result = processSpintax("Hello {} world");
      expect(result).toBe("Hello  world");
    });

    it("should handle single option in braces", () => {
      expect(processSpintax("{Hello} world")).toBe("Hello world");
    });

    it("should handle weights summing to more than 100", () => {
      const result = processSpintax("{200:A|300:B|500:C}");
      expect(["A", "B", "C"]).toContain(result);
    });

    it("should handle weights summing to less than 100", () => {
      const result = processSpintax("{10:A|20:B|30:C}");
      expect(["A", "B", "C"]).toContain(result);
    });

    it("should respect relative proportions when sum exceeds 100", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{400:A|200:B|400:C}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // A and C should have similar counts, both higher than B
      const countA = results.get("A") ?? 0;
      const countB = results.get("B") ?? 0;
      const countC = results.get("C") ?? 0;

      expect(countA).toBeGreaterThan(countB);
      expect(countC).toBeGreaterThan(countB);
      // A and C should be roughly equal (within 30% tolerance)
      expect(Math.abs(countA - countC)).toBeLessThan(Math.max(countA, countC) * 0.3);
    });

    it("should respect relative proportions when sum is less than 100", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{5:A|15:B|10:C}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // B should appear most frequently, then C, then A
      expect(results.get("B") ?? 0).toBeGreaterThan(results.get("C") ?? 0);
      expect(results.get("C") ?? 0).toBeGreaterThan(results.get("A") ?? 0);
    });

    it("should handle very small weights summing to much less than 100", () => {
      const result = processSpintax("{1:rare|2:uncommon|3:common}");
      expect(["rare", "uncommon", "common"]).toContain(result);
    });

    it("should handle very large weights summing to much more than 100", () => {
      const result = processSpintax("{1000:A|2000:B|3000:C}");
      expect(["A", "B", "C"]).toContain(result);
    });

    it("should handle weights with sum exactly 100", () => {
      const result = processSpintax("{25:A|25:B|50:C}");
      expect(["A", "B", "C"]).toContain(result);
    });

    it("should maintain correct distribution with sum > 100 over many iterations", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{150:X|50:Y|100:Z}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // X should be ~50%, Z ~33%, Y ~17%
      const countX = results.get("X") ?? 0;
      const countY = results.get("Y") ?? 0;
      const countZ = results.get("Z") ?? 0;

      expect(countX).toBeGreaterThan(countZ);
      expect(countZ).toBeGreaterThan(countY);
    });

    it("should maintain correct distribution with sum < 100 over many iterations", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{3:P|12:Q|6:R}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // Q should be ~57%, R ~29%, P ~14%
      const countP = results.get("P") ?? 0;
      const countQ = results.get("Q") ?? 0;
      const countR = results.get("R") ?? 0;

      expect(countQ).toBeGreaterThan(countR);
      expect(countR).toBeGreaterThan(countP);
    });

    it("should handle single weighted option that appears less than 100% of the time", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{20:something}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // "something" should appear ~20% of the time, "" ~80%
      const countSomething = results.get("something") ?? 0;
      const countEmpty = results.get("") ?? 0;

      expect(countSomething).toBeGreaterThan(100); // Should be around 200 (20%)
      expect(countSomething).toBeLessThan(300); // Should be around 200 (20%)
      expect(countEmpty).toBeGreaterThan(700); // Should be around 800 (80%)
      expect(countEmpty).toBeLessThan(900); // Should be around 800 (80%)
    });

    it("should handle single weighted option with higher probability", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{80:often}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // "often" should appear ~80% of the time, "" ~20%
      const countOften = results.get("often") ?? 0;
      const countEmpty = results.get("") ?? 0;

      expect(countOften).toBeGreaterThan(700); // Should be around 800 (80%)
      expect(countOften).toBeLessThan(900); // Should be around 800 (80%)
      expect(countEmpty).toBeGreaterThan(100); // Should be around 200 (20%)
      expect(countEmpty).toBeLessThan(300); // Should be around 200 (20%)
    });

    it("should handle single weighted option with probability of 100", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{100:always}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // "always" should appear 100% of the time
      expect(results.get("always")).toBe(iterations);
      expect(results.get("")).toBeUndefined();
    });

    it("should handle single weighted option mixed with surrounding text", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("Hello {30:world}!");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // "Hello world!" should appear ~30%, "Hello !" ~70%
      const countWithWorld = results.get("Hello world!") ?? 0;
      const countWithoutWorld = results.get("Hello !") ?? 0;

      expect(countWithWorld).toBeGreaterThan(200); // Should be around 300 (30%)
      expect(countWithWorld).toBeLessThan(400); // Should be around 300 (30%)
      expect(countWithoutWorld).toBeGreaterThan(600); // Should be around 700 (70%)
      expect(countWithoutWorld).toBeLessThan(800); // Should be around 700 (70%)
    });

    it("should treat {50:something|} the same as {50:something}", () => {
      const results = new Map<string, number>();
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax("{50:something|}");
        results.set(result, (results.get(result) || 0) + 1);
      }

      // "something" should appear ~50% of the time, "" ~50%
      const countSomething = results.get("something") ?? 0;
      const countEmpty = results.get("") ?? 0;

      expect(countSomething).toBeGreaterThan(400); // Should be around 500 (50%)
      expect(countSomething).toBeLessThan(600); // Should be around 500 (50%)
      expect(countEmpty).toBeGreaterThan(400); // Should be around 500 (50%)
      expect(countEmpty).toBeLessThan(600); // Should be around 500 (50%)
    });

    it("should handle escaped pipe character", () => {
      expect(processSpintax("{a\\|b|c}")).toMatch(/^(a\|b|c)$/);
    });

    it("should handle escaped colon character", () => {
      expect(processSpintax("{50:text\\:here}")).toMatch(/^$|^text:here$/);
    });

    it("should handle escaped opening brace", () => {
      expect(processSpintax("Hello \\{world\\}")).toBe("Hello {world}");
    });

    it("should handle escaped closing brace", () => {
      expect(processSpintax("Hello \\{world\\}")).toBe("Hello {world}");
    });

    it("should handle multiple escaped characters", () => {
      const result = processSpintax("{a\\|b|c\\:d}");
      expect(["a|b", "c:d"]).toContain(result);
    });

    it("should handle escaped backslash", () => {
      expect(processSpintax("path\\\\to\\\\file")).toBe("path\\to\\file");
    });

    it("should handle realistic user prompt with multiple spintax groups", () => {
      const result = processSpintax(
        "Write a {short|long|detailed} {story|article|post} about {AI|artificial intelligence|machine learning} that is {engaging|informative|both engaging and informative}.",
      );
      expect(result).toMatch(
        /^Write a (short|long|detailed) (story|article|post) about (AI|artificial intelligence|machine learning) that is (engaging|informative|both engaging and informative)\.$/,
      );
    });

    it("should handle realistic weighted prompt with multiple spintax groups", () => {
      const results = new Map<string, number>();
      const iterations = 1000;
      const prompt =
        "{70:Please write|20:Could you write|10:I need} a {80:friendly|20:professional} email to {50:the team|30:my manager|20:the client} about {60:the project deadline|40:the budget update}.";

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax(prompt);
        results.set(result, (results.get(result) || 0) + 1);
      }

      // Verify some expected combinations exist
      const hasPleaseFriendly = [...results.keys()].some((k) =>
        k.startsWith("Please write a friendly"),
      );
      const hasCouldYouProfessional = [...results.keys()].some((k) =>
        k.startsWith("Could you write a professional"),
      );

      expect(hasPleaseFriendly).toBe(true);
      expect(hasCouldYouProfessional).toBe(true);
    });

    it("should handle prompt with escaped characters inside spintax", () => {
      const result = processSpintax(
        "Explain the difference between {C++|Java|Python} and how to use {operators like \\|\\||functions}.",
      );
      expect(result).toMatch(
        /Explain the difference between (C\+\+|Java|Python) and how to use (operators like \|\||functions)\./,
      );
    });

    it("should handle complex marketing copy with mixed weights", () => {
      const results = new Map<string, number>();
      const iterations = 1000;
      const prompt =
        "{50:Discover|30:Experience|20:Unlock} the {70:power|30:potential} of {our new product|innovation} and {40:transform|30:improve|30:enhance} your {business|workflow|daily routine} today!";

      for (let i = 0; i < iterations; i++) {
        const result = processSpintax(prompt);
        results.set(result, (results.get(result) || 0) + 1);
      }

      // Should generate various unique combinations
      expect(results.size).toBeGreaterThan(10);

      // "Discover" should appear ~50% of the time
      const discoverCount = [...results.entries()]
        .filter(([k]) => k.startsWith("Discover"))
        .reduce((sum, [, v]) => sum + v, 0);
      expect(discoverCount).toBeGreaterThan(400);
      expect(discoverCount).toBeLessThan(600);
    });

    it("should handle greeting-style prompt with multiple variations", () => {
      const result = processSpintax(
        "{Hello|Hi|Hey|Greetings} {there|friend|user}, {80:how are you today?|15:hope you're doing well!|5:what can I help with?}",
      );
      expect(result).toMatch(
        /^(Hello|Hi|Hey|Greetings) (there|friend|user), (how are you today\?|hope you're doing well!|what can I help with\?)$/,
      );
    });

    it("should treat text with non-digit before colon as unweighted option", () => {
      const result = processSpintax("{abc:def|ghi}");
      expect(["abc:def", "ghi"]).toContain(result);
    });

    it("should treat text with spaces before colon as unweighted option", () => {
      const result = processSpintax("{10 :text|more text}");
      expect(result).toMatch(/^10 :text|more text$/);
    });

    it("should treat text with symbols before colon as unweighted option", () => {
      const result = processSpintax("{10@:text|more}");
      expect(["10@:text", "more"]).toContain(result);
    });

    it("should treat text with letters mixed in digits before colon as unweighted", () => {
      const result = processSpintax("{1a2:text|other}");
      expect(["1a2:text", "other"]).toContain(result);
    });

    it("should handle option that starts with valid weight after invalid one", () => {
      const result = processSpintax("{abc:invalid|50:valid|normal}");
      expect(["abc:invalid", "valid", "normal"]).toContain(result);
    });
  });

  describe("getAllVariations", () => {
    it("should return array with single element for plain text", () => {
      expect(getAllVariations("Hello world")).toEqual(["Hello world"]);
    });

    it("should return all variations for simple spintax", () => {
      const variations = getAllVariations("{Hello|Hi}");
      expect(variations).toEqual(["Hello", "Hi"]);
    });

    it("should return all combinations for multiple groups", () => {
      const variations = getAllVariations("{Hello|Hi} {world|earth}");
      expect(variations).toEqual(["Hello world", "Hello earth", "Hi world", "Hi earth"]);
    });

    it("should strip weights from variations", () => {
      const variations = getAllVariations("{70:fast|20:slow}");
      expect(variations).toEqual(["fast", "slow"]);
    });

    it("should handle spintax with surrounding text", () => {
      const variations = getAllVariations("The {car|truck} is {fast|slow}");
      expect(variations).toEqual([
        "The car is fast",
        "The car is slow",
        "The truck is fast",
        "The truck is slow",
      ]);
    });
  });
});
