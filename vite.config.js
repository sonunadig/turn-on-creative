// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/turn-on-creative/", // IMPORTANT: match your repo name here
  plugins: [react()],
});
