import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import { cwd } from "process";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    {
      name: "postbuild-commands",
      closeBundle: () => {
        const currDir = cwd();
        fs.copyFile(
          `${currDir}/build/chatbot.js`,
          `${currDir}/../example-app/chatbot.js`,
          (err) => console.log(err),
        );
      },
    },
  ],
  build: {
    cssCodeSplit: false,
    outDir: "build", // Configure Vite to output the build files to a "build" directory
    rollupOptions: {
      input: {
        ["chatbot"]: "./src/main.tsx",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  base: "/jzai/",
  css: {
    modules: {
      generateScopedName: (name) => name,
    },
  },
});
