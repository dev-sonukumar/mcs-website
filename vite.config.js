import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
