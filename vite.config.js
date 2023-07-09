import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-project/',
  resolve: {
    alias: {
      '@home' : '/src/pages/home/Home.jsx',
      '@cryptos': '/src/pages/cryptos/Cryptos',
      '@crypto': '/src/pages/cryptos/Crypto',
    },
   }
})
