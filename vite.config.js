import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000*1024, // Set a higher limit (in kB) for chunk size warning
  },
  plugins: [react()],
})
