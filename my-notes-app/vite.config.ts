import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mi-notes/', // 👈 this is the fix for the index.html getting file paths right in prod
  plugins: [react()],
})
