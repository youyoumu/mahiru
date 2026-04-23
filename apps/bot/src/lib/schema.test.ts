import fs from "node:fs/promises";
import path from "node:path";
import { describe, expect, test } from "vitest";

import { zNotSoBotTagExport, zTagKey } from "./schema";

const exists = async (path: string) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

describe("zNotSoBotTagExport", () => {
  test("should validate the tag export JSON", async () => {
    const file = path.join(import.meta.dirname, "./tags-exported.json");
    if (!(await exists(file))) return expect(true).toBe(true);
    const data = JSON.parse(await fs.readFile(file, "utf8"));
    const result = zNotSoBotTagExport.safeParse(data);
    expect(result.success).toBe(true);
  });
});

describe("zTagKey", () => {
  test("should accept printable ascii symbols", () => {
    expect(zTagKey.safeParse("?!@#$%^&*()_+-=[]{}|;:',.<>/`~").success).toBe(true);
  });

  test("should reject whitespace", () => {
    expect(zTagKey.safeParse("bad key").success).toBe(false);
  });
});
