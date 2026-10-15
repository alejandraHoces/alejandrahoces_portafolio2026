import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Vite 8 usa Rolldown: `rolldownOptions` + `codeSplitting` reemplazan a `rollupOptions` + `manualChunks`
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            // react / react-dom en su propio archivo (vendor-*.js), separado del código de la app
            { name: 'vendor', test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
          ],
        },
      },
    },
  },
})
