import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const kotak = fileURLToPath(import.meta.url);
const ssgein = dirname(kotak)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(ssgein, 'src') }],
  }
})
