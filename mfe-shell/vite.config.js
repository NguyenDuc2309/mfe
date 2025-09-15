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
      name: 'shell',
      remotes: {
        product: { type: 'module', name: 'product', entry: 'http://localhost:5001/remoteEntry.js' },
        order: { type: 'module', name: 'order', entry: 'http://localhost:5002/remoteEntry.js' },
        user: { type: 'module', name: 'user', entry: 'http://localhost:5003/remoteEntry.js' },
      },
      exposes: {},
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5000,
  },
})
