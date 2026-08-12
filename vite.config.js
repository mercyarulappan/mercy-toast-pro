import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    cssInjectedByJsPlugin(),
  ],

  publicDir: false,

  build: {
    lib: {
      entry: resolve("src/index.js"),
      name: "MercyToastPro",
      formats: ["es"],
      fileName: "mercy-toast-pro",
      cssFileName: "mercy-toast-pro",
    },

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
