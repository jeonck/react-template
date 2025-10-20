import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/react-template/' : '/'
  return {
    plugins: [react()],
    base,
    define: {
      'process.env.APP_BASENAME': JSON.stringify(base)
    },
    build: {
      outDir: 'docs'
    }
  }
})