import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://tomas99843.github.io/REACTJS-Primera-entrega/', // Exactamente como aparece en tu URL de GitHub Pages
  plugins: [react()]
});