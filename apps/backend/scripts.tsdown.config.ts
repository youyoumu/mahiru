import { defineConfig } from "tsdown";

export default defineConfig({
  format: ["esm"],
  entry: ["./scripts/healthcheck.ts"],
  outDir: ".scripts.dist",
  clean: false,
  minify: false,
});
