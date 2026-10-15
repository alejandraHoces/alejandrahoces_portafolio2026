import { useEffect, useRef, useState } from 'react'
import { services } from '../data/content'
import { stagger, cx } from '../utils/stagger'
import Eyebrow from './Eyebrow'
import { ArrowUpRight, ServiceIcon } from './Icons'
import Lines from './Lines'

/**
 * En pantallas táctiles no hay hover: el diseño mobile muestra una card "encendida".
 * Aquí se enciende la card que queda más cerca del centro del viewport mientras se hace scroll
 * (por defecto la tercera, como en el diseño).
 */
function useTouchActiveCard(count, initial = 2) {
  const refs = useRef([])
  const [active, setActive] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)')
    if (!mq.matches) return
    setActive(initial)
    const ratios = new Map()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(Number(e.target.dataset.index), e.intersectionRatio))
        let best = -1
        let bestRatio = 0
        ratios.forEach((r, idx) => {
          if (r > bestRatio) {
            bestRatio = r
            best = idx
          }
        })
        if (best >= 0) setActive(best)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    refs.current.slice(0, count).forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [count, initial])

  return { refs, active }
}

export default function Services() {
  const { refs, active } = useTouchActiveCard(services.items.length)

  return (
    <section id="servicios" className="services wrap">
      <Eyebrow>{services.eyebrow}</Eyebrow>
      <div className="section-head">
        <h2 className="section-title serif rv">
          <Lines lines={services.title} />
        </h2>
        <p className="section-lead fu">{services.lead}</p>
      </div>

      <div className="cards">
        {services.items.map((s, i) => (
          <a
            key={i}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className={cx('card fu', stagger(1, i + 1), active === i && 'is-on')}
            href="#proyectos"
          >
            <span className="card__glow" />
            <span className="card__orb card__orb--1" />
            <span className="card__orb card__orb--2" />
            <div className="card__ct">
              <ServiceIcon name={s.icon} />
              <h3 className="card__title serif">
                <Lines lines={s.title} />
              </h3>
            </div>
            <p className="card__desc card__ct">{s.desc}</p>
            <ArrowUpRight className="card__arrow" />
          </a>
        ))}
      </div>
    </section>
  )
}
