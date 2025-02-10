import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./certs/expressproject.key'),
      cert: fs.readFileSync('./certs/expressproject.crt'),
    },
    host: 'localhost',
    port: 5173,
  },
  plugins: [react()],
});

