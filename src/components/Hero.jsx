import { useCallback, useEffect, useState } from 'react'
import { CV_URL, navLinks } from '../data/content'
import { CloseIcon, MenuIcon } from './Icons'

/* Retrasos (s) del reveal "smear" palabra por palabra, igual que en el diseño */
const headline = [
  { text: 'Diseño', delay: 0.35 },
  { text: 'experiencias', delay: 0.5, breakAfter: 'always' },
  { text: 'centradas', delay: 0.65 },
  { text: 'en', delay: 0.78, breakAfter: 'mobile' },
  { text: 'las', delay: 0.9 },
  { text: 'personas', delay: 1.02 },
]

function Logo() {
  return <span className="logo-mark serif">ah</span>
}

function HeroBackground() {
  return (
    <>
      <div className="hero__bg" aria-hidden="true">
        <div className="h-base" />
        <div className="h-glow">
          <span className="b h-band" />
          <span className="b h-band2" />
          <span className="b h-hi1" />
          <span className="b h-hi2" />
          <span className="b h-tl" />
          <span className="b h-lo1" />
          <span className="b h-lo2" />
        </div>
        <div className="h-pl">
          <div className="h-ring" />
          <div className="h-planet">
            <span className="h-shade" />
            <span className="h-sheen" />
          </div>
        </div>
        <div className="h-vig" />
      </div>
      <div className="dots" aria-hidden="true" />
      <svg className="grain" aria-hidden="true">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
      <div className="hero__fade" aria-hidden="true" />
    </>
  )
}

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div id="mobile-menu" className={`mmenu ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open ? true : undefined}>
      <div className="mmenu__top px">
        <span className="nav__brand">
          <Logo />
          Alejandra Hoces
        </span>
        <button className="menu-btn" type="button" aria-label="Cerrar menú" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <nav className="mmenu__links px" aria-label="Principal">
        {navLinks.map((l, i) => (
          <a key={l.href} href={l.href} onClick={onClose} style={{ transitionDelay: open ? `${0.08 + i * 0.06}s` : '0s' }}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="mmenu__cta px">
        <a className="btn btn-w" href={CV_URL} target="_blank" rel="noreferrer">
          Descargar CV <span className="dot" />
        </a>
      </div>
    </div>
  )
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header className="hero" id="inicio">
      <HeroBackground />

      <nav className="nav wrap" aria-label="Principal">
        <a className="nav__brand ws" href="#inicio" style={{ animationDelay: '.1s' }}>
          <Logo />
          Alejandra Hoces
        </a>

        <div className="nav__links">
          {navLinks.map((l, i) => (
            <a key={l.href} className="ws" href={l.href} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="menu-btn ws"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          style={{ animationDelay: '.25s' }}
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon />
        </button>
      </nav>

      <div className="hero__content wrap">
        <p className="hero__eyebrow ws" style={{ animationDelay: '.2s' }}>
          UX Designer · Lima, Perú
        </p>
        <h1 className="hero__title serif">
          {headline.map((w) => (
            <span key={w.text}>
              <span className="w" style={{ animationDelay: `${w.delay}s` }}>
                {w.text}
              </span>
              {w.breakAfter === 'always' && <br />}
              {w.breakAfter === 'mobile' && <br className="br-mobile" />}
              {!w.breakAfter && ' '}
              {w.breakAfter === 'mobile' && <span className="sp-desktop"> </span>}
            </span>
          ))}
        </h1>
        <div className="hero__actions">
          <a className="btn btn-w ws" href="#proyectos" style={{ animationDelay: '1.1s' }}>
            Ver proyectos <span className="dot" />
          </a>
          <a className="btn btn-g ws" href={CV_URL} target="_blank" rel="noreferrer" style={{ animationDelay: '1.25s' }}>
            Descargar CV
          </a>
        </div>
        <div className="sline" style={{ animationDelay: '1.4s' }} aria-hidden="true">
          <span />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </header>
  )
}
