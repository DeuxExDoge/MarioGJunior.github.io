import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitio proyecto en GitHub Pages: https://deuxexdoge.github.io/MarioGJunior.github.io/
const GITHUB_PAGES_BASE = '/MarioGJunior.github.io/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : GITHUB_PAGES_BASE,
}))
