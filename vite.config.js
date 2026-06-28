import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",   
  build: {
    chunkSizeWarningLimit: 1000 // Increase the chunk size warning limit to 1000 KB
  
  }
})