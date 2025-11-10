// vite.config.js (or vite.config.ts)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Import the Tailwind plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // 1. The React plugin
    tailwindcss(), // 2. The Tailwind CSS plugin
  ],
})