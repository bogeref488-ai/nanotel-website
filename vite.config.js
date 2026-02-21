import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/nanotel-website/",   // 👈 MUST match repo name EXACTLY
});