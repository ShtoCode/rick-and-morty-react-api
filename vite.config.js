import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://germanAstudillo1.github.io/rick-and-morty-react-api/",
  plugins: [react()],
})
