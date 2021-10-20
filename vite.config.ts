import { defineConfig, Plugin } from "vite";

import { injectHtml } from "vite-plugin-html";
import showcase from "./showcase.json";

export default defineConfig({
  plugins: [
    injectHtml({
      data: {
        showcase,
      },
    }),
  ],
});
