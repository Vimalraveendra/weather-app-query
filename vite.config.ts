import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  watch: {
    usePolling: true,
  },
},
resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    coverage: {
      provider: "v8",
      include: ["src/components/**/*.{ts,tsx}","src/containers/**/*.{ts,tsx}"],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      },
      exclude: [
        "node_modules",
        "src/setupTests.ts",
        "src/components/**/*.{types,test,spec,stories,constants}.{ts,tsx}"
      ]
    }
  }
})