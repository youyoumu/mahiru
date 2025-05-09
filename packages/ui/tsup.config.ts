import { spawnSync } from "child_process";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/**/*.{ts,tsx}"],
  format: "esm",
  outDir: "dist",
  splitting: false,
  outExtension() {
    return {
      js: `.js`,
    };
  },
  async onSuccess() {
    spawnSync("tsc", ["--emitDeclarationOnly"]);
    console.log("✅ declaration files generated");
  },
  ...options,
}));
