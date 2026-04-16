import { bundleStats } from "rollup-plugin-bundle-stats";
import { defineConfig } from "tsdown";

const isDocker = process.env.DOCKER === "true";
const config = {
  default: defineConfig({
    entry: ["./src/index.ts"],
    format: ["esm"],
    dts: true,
    sourcemap: true,
    unbundle: true,
    clean: false,
    minify: false,
    plugins: [
      bundleStats({
        outDir: "..",
      }),
    ],
  }),
  docker: defineConfig({
    entry: ["./src/index.ts"],
    deps: {
      onlyBundle: false,
      alwaysBundle: [/.*/],
      neverBundle: ["zlib-sync"],
    },
    format: ["esm"],
    plugins: [
      bundleStats({
        outDir: "..",
      }),
    ],
  }),
};

export default config[isDocker ? "docker" : "default"];
