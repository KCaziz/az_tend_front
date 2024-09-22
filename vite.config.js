import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import { resolve } from 'path';

export default defineConfig({
    server: {
    host: '44.226.145.213', // Remplacer par 'localhost' si nécessaire
    port: 5173, // Port du serveur de développement React
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
