import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'

/* Tope de espera: con red lenta se muestra la página con la fuente de reserva */
const FONT_TIMEOUT = 2500

/*
 * `document.fonts.ready` resuelve al instante si todavía no hay texto que use las fuentes,
 * así que se piden explícitamente las caras que se ven en el hero (una por archivo .woff2).
 */
function waitForFonts() {
  if (!document.fonts?.load) return Promise.resolve()
  const faces = ['400 1em "Plus Jakarta Sans"', '400 1em Newsreader', 'italic 400 1em Newsreader']
  const loaded = Promise.all(faces.map((f) => document.fonts.load(f)))
    .then(() => document.fonts.ready)
    .catch(() => {})
  return Promise.race([loaded, new Promise((resolve) => setTimeout(resolve, FONT_TIMEOUT))])
}

function hidePreloader() {
  const el = document.getElementById('preloader')
  if (!el) return
  el.classList.add('is-done')
  el.addEventListener('transitionend', () => el.remove(), { once: true })
  setTimeout(() => el.remove(), 1000) // por si no hay transición (prefers-reduced-motion)
}

/* Se monta tras las fuentes para que la entrada animada del hero se vea completa y sin salto de tipografía */
waitForFonts().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  requestAnimationFrame(hidePreloader)
})
