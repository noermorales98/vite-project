import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-project/',
  resolve: {
    alias: {
      '@home' : '/src/pages/Home/Home.jsx',
      '@cryptos': '/src/pages/Cryptos/Cryptos',
      '@crypto': '/src/pages/Cryptos/Crypto',
    },
   }
})
