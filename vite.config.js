import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/REACTJS-Primera-entrega/', // Solo la ruta del repositorio, sin el dominio
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})