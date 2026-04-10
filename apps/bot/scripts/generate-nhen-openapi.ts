import fs from "node:fs/promises";
import path from "node:path";
import openapiTS, { astToString } from "openapi-typescript";

import { Unblock } from "../src/lib/unblock";
const unblock = new Unblock();

const res = await unblock.fetch("https://nhentai.net/api/v2/openapi.json");
const text = await res.text();
const ast = await openapiTS(text);
const contents = astToString(ast);
const typesDir = path.join(import.meta.dirname, "../src/types");
await fs.mkdir(typesDir, { recursive: true });
await fs.writeFile(path.join(typesDir, "openapi-nhen.d.ts"), contents);
