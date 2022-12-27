import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/data': "http://localhost:3000",
      "/new-parking-place": "http://localhost:3000",
      "/parking-place": "http://localhost:3000",
      "/delete-parking-place": "http://localhost:3000"
    }
  },
  plugins: [react()],
})
