import { Suspense, lazy, useEffect, useLayoutEffect, useRef, useState } from 'react'

/* Registro de secciones creadas con lazySection(): permite forzar su carga (p. ej. al navegar a un #ancla) */
const sections = new Set()
const mounted = new Set()
const revealers = new Set()
let waiters = []

function flushWaiters() {
  if (mounted.size < sections.size) return
  waiters.forEach((resolve) => resolve())
  waiters = []
}

/**
 * Envuelve un `import()` dinámico: el chunk solo se pide cuando se llama a `preload`
 * (lo hace DeferredSection al acercarse al viewport), no al montar el componente.
 */
export function lazySection(load) {
  let promise
  const preload = () => (promise ??= load())
  const section = { Component: lazy(preload), preload }
  sections.add(section)
  return section
}

/**
 * Carga y muestra todas las secciones diferidas; resuelve cuando su contenido ya está en el DOM
 * (no basta con que el import() termine: React 19 retrasa ~300ms la salida del fallback de Suspense).
 */
export function loadAllSections({ timeout = 4000 } = {}) {
  revealers.forEach((reveal) => reveal())
  sections.forEach((section) => section.preload())
  const allMounted = new Promise((resolve) => {
    waiters.push(resolve)
    flushWaiters()
  })
  return Promise.race([allMounted, new Promise((resolve) => setTimeout(resolve, timeout))])
}

function MountSignal({ section }) {
  useLayoutEffect(() => {
    mounted.add(section)
    flushWaiters()
  }, [section])
  return null
}

/**
 * Renderiza un placeholder hasta que está a ~800px de entrar al viewport;
 * recién ahí dispara el `import()` de la sección, así los chunks se piden uno a uno al hacer scroll.
 */
export default function DeferredSection({ section, minHeight }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return
    const reveal = () => setVisible(true)
    revealers.add(reveal)

    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(([entry]) => entry.isIntersecting && reveal(), { rootMargin: '800px 0px' })
      io.observe(ref.current)
    } else {
      reveal()
    }

    return () => {
      revealers.delete(reveal)
      io?.disconnect()
    }
  }, [visible])

  const placeholder = <div ref={ref} style={{ minHeight }} aria-hidden="true" />
  if (!visible) return placeholder

  const { Component } = section
  return (
    <Suspense fallback={placeholder}>
      <Component />
      <MountSignal section={section} />
    </Suspense>
  )
}
