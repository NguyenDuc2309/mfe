import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'user',
      filename: 'remoteEntry.js', 
      exposes: {
        './App': './src/App.jsx', 
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5003,
  },
})
