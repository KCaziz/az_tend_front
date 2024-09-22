import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import { resolve } from 'path';

export default defineConfig({
    server: {
    port: 5173, // Utilise le port fourni par la plateforme ou 5173 par défaut
    host: true, // Assure que Vite est accessible sur 0.0.0.0
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
