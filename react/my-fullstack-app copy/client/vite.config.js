import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/token': {  // Add this new proxy rule
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    },
  },
})