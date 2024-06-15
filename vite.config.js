import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), svgr()],
    base: "https://github.com/arielaguilarit/web.github.io.git",
    server: {
      port: `${env.PORT ?? "3000"}`,
    },
  };
});
