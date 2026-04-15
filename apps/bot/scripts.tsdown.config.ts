import { defineConfig } from "tsdown";

export default defineConfig({
  format: ["esm"],
  entry: ["./scripts/deploy-commands.ts"],
  outDir: ".scripts.dist",
  clean: false,
  minify: false,
});
