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
  }),
  docker: defineConfig({
    entry: ["./src/index.ts"],
    format: ["esm"],
    copy: ["./drizzle/"],
  }),
};

export default config[isDocker ? "docker" : "default"];
