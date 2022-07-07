import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: process.env.IS_DEV !== "true" ? "./" : "/",
  build: {
    outDir: "layout/",
  },
  resolve: {
    alias: {
      $lib: path.resolve(_dirname, "src/lib"),
      $components: path.resolve(_dirname, "src/components"),
      $pages: path.resolve(_dirname, "src/pages"),
      $assets: path.resolve(_dirname, "src/assets"),
    },
  },
});
