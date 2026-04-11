import fs from "node:fs/promises";
import path from "node:path";
import openapiTS, { astToString } from "openapi-typescript";

const res = await fetch("http://localhost:8800/openapi.json");
const raw = await res.text();
// const raw = await fs.readFile(path.join(import.meta.dirname, "./open-webui-openapi.json"), "utf-8");
const spec = JSON.parse(raw);

// Fix duplicate operationIds by appending the HTTP method
const seen = new Set<string>();
for (const [pathKey, pathItem] of Object.entries(spec.paths ?? {})) {
  if (typeof pathItem !== "object") continue;
  if (pathItem === null) continue;
  for (const [method, operation] of Object.entries(pathItem)) {
    if (!["get", "put", "post", "delete", "patch", "head", "options", "trace"].includes(method))
      continue;
    if (typeof operation !== "object" || operation === null) continue;
    const op = operation as { operationId?: string };
    if (op.operationId) {
      const uniqueId = `${op.operationId}_${method}`;
      if (seen.has(uniqueId)) {
        op.operationId = `${uniqueId}_${pathKey.replace(/[{}]/g, "").replace(/\//g, "_")}`;
      } else {
        op.operationId = uniqueId;
      }
      seen.add(op.operationId);
    }
  }
}

const ast = await openapiTS(JSON.stringify(spec));
const contents = astToString(ast);
const typesDir = path.join(import.meta.dirname, "../src/types");
await fs.mkdir(typesDir, { recursive: true });
await fs.writeFile(path.join(typesDir, "open-webui-openapi.d.ts"), contents);
