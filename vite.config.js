import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
  },
  // If using GitHub pages for hosting, adjust the line below to the repository name
  // base: '/REPO_NAME/',
});
