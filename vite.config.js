import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REACTJS-Primera-entrega/'  // Asegúrate que coincida con tu repo
})