import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    css: false,
    coverage: {
      reporter: ["text", "html"],
      all: true,
      include: ["src/**/*.{js,ts,vue}"],
      exclude: ["node_modules", "tests", "src/main.js", "src/router/index.js"],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
