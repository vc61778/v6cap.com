import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' is set to './' to ensure assets work regardless of whether 
  // you host it at root (v6cap.com) or a subdirectory (username.github.io/repo)
  base: './', 
})