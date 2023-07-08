import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-project/',
  resolve:{
    alias:{
      '@cryptos': '/src/pages/cryptos/Cryptos.jsx',
      '@crypto': '/src/pages/cryptos/Crypto.jsx',
      '@home': '/src/pages/home/Home'
    }
  }
})
