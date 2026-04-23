import fs from "node:fs/promises";
import path from "node:path";
import { describe, expect, test } from "vitest";

import { zNotSoBotTagExport } from "./schema";

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

