import { defineConfig } from "tsdown";

export default defineConfig({
  format: ["esm"],
  outDir: ".exec",
  clean: false,
  minify: false,
});
