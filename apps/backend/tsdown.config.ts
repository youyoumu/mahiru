import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/hc.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  unbundle: true,
  clean: false,
  minify: false,
});
