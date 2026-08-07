import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Ignora estritamente a node_modules e a pasta de build do monitoramento
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
  },
})
