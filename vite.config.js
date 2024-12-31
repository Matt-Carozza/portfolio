// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/oembed': {
        target: 'https://publish.twitter.com',  // Target the actual Twitter endpoint
        changeOrigin: true,  // Ensure the origin is modified to match the target (publish.twitter.com)
        rewrite: (path) => {
          // We don't need to change the path, just forward it as-is
          console.log('Forwarding request to:', path); // Log for debugging
          return path;  // No change to path, just forward it to Twitter
        }
      }
    }
  }
});
