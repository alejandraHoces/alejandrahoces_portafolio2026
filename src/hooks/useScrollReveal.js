import { useEffect } from 'react'

const SELECTOR = '.rv, .fu, .ln, .count, .clip'

/**
 * El diseño usa animaciones ligadas al scroll con `animation-timeline: view()` (CSS puro).
 * En navegadores que aún no lo soportan (Firefox, Safari antiguos) se usa este fallback:
 * las animaciones quedan en pausa y se reproducen cuando el elemento entra al viewport.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const supportsScrollTimeline =
      typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline: view()')
    if (supportsScrollTimeline) return

    const root = document.documentElement
    root.classList.add('no-sda')

    /* sin IntersectionObserver: quitar .no-sda reproduce las animaciones al montarse (incluidas las secciones diferidas) */
    if (!('IntersectionObserver' in window)) {
      root.classList.remove('no-sda')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          entry.target.querySelectorAll('img').forEach((img) => img.classList.add('is-in'))
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )

    document.querySelectorAll(SELECTOR).forEach((el) => io.observe(el))

    /* las secciones diferidas (DeferredSection) se montan después: observa también sus elementos */
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) =>
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.matches(SELECTOR)) io.observe(node)
          node.querySelectorAll(SELECTOR).forEach((el) => io.observe(el))
        }),
      )
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
