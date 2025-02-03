import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:1443", // Your Express backend URL
        changeOrigin: true,
        secure: false, // Ignore SSL certificate errors (important for self-signed certs)
      },
    },
  },
});
