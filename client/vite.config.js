// client/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    // add this code
    proxy: {
      '/weather': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});

