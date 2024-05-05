import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import { cwd } from "process";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Allows us to prevent the CSS from being injected into the head of the document by the Vite dev server.
    // Instead, we want it to be injected into our copilot iframe.
    cssInjectedByJsPlugin(),
    // This plugin will copy the built copilot.js file to the example-app directory after the build is complete.
    {
      name: "postbuild-commands",
      closeBundle: () => {
        const currDir = cwd();

        fs.copyFile(
          `${currDir}/build/copilot.js`,
          `${currDir}/../example-app/copilot.js`,
          (err) => console.log("err", err),
        );
      },
    },
  ],
  build: {
    cssCodeSplit: false,
    outDir: "build", // Configure Vite to output the build files to a "build" directory
    rollupOptions: {
      input: {
        ["copilot"]: "./src/main.tsx",
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
