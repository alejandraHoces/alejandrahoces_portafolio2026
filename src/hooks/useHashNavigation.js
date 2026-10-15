import { useEffect } from 'react'
import { loadAllSections } from '../components/DeferredSection'

/**
 * Las anclas #sobre-mi, #proyectos y #contacto viven dentro de secciones diferidas,
 * que no existen en el DOM hasta cargarse. Al hacer clic en un enlace interno
 * (o al abrir la página con un hash) se cargan todas las secciones y luego se hace el scroll.
 */
export default function useHashNavigation() {
  useEffect(() => {
    let cancelled = false

    const scrollTo = (hash, behavior) =>
      loadAllSections().then(() => {
        if (cancelled) return
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior })
      })

    if (window.location.hash.length > 1) scrollTo(window.location.hash, 'instant')

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target.closest?.('a[href^="#"]')
      const hash = link?.getAttribute('href')
      if (!hash || hash.length < 2) return
      e.preventDefault()
      history.pushState(null, '', hash)
      // sin `behavior`: respeta scroll-behavior del CSS (smooth, o auto con prefers-reduced-motion)
      scrollTo(hash)
    }

    document.addEventListener('click', onClick)
    return () => {
      cancelled = true
      document.removeEventListener('click', onClick)
    }
  }, [])
}
