import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for "src" directory
    },
  },
  server: {
    proxy: {
      "/faq": {
        target: "https://mcs-backend-b5kl.onrender.com",
        changeOrigin: true,
        secure: false, // Required if Render uses HTTPS
      },
    },
  },
});
