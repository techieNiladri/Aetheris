import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': projectRoot },
  },
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(projectRoot, 'index.html'),
        services: path.resolve(projectRoot, 'services.html'),
        work: path.resolve(projectRoot, 'work.html'),
        about: path.resolve(projectRoot, 'about.html'),
        contact: path.resolve(projectRoot, 'contact.html'),
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
});
