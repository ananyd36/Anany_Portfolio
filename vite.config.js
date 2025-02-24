import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Anany_Portfolio/',  // Set this to your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
