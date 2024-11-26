import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
proxy:{
  '/api': 'https://zenquotes.io/api/random'
}
  },
  plugins: [react()],
})
