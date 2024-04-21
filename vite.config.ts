import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.md"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
  ],
  // server: {
  //   proxy: {
  //     "/articles": {
  //       target: `https://api.notion.com/v1/databases/da12c2d245be4d5d8b279b365e5e7bb7/query`,
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/articles/, ""),
  //     },
  //   },
  // },
});
