import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

import packageJson from "./package.json" with { type: "json" };

const version = packageJson.version;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter({ autoCodeSplitting: true }), viteReact(), tailwindcss()],
  resolve: {
    alias: {
      "#": resolve(__dirname, "./src"),
    },
  },

  define: {
    __VERSION__: JSON.stringify(version),
  },
});
