import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const readConfig = (file) => JSON.parse(readFileSync(new URL(`./config/${file}`, import.meta.url), 'utf8'))

const escapeHtml = (s) =>
  String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

/* Rellena el <title>, la meta description y el preloader de index.html con config/01-metas.json y las iniciales del logo */
function siteMeta() {
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      const metas = readConfig('01-metas.json')
      const { logo } = readConfig('02-menu-logo-y-cv.json')
      return html
        .replaceAll('__SITE_TITLE__', escapeHtml(metas.title))
        .replaceAll('__SITE_DESCRIPTION__', escapeHtml(metas.description))
        .replaceAll('__SITE_INITIALS__', escapeHtml(logo.initials))
    },
  }
}

export default defineConfig({
  plugins: [react(), siteMeta()],
  base: '/alejandrahoces_portafolio2026/',
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
