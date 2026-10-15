/* Íconos SVG del diseño (inline, heredan currentColor) */

const brandPaths = {
  movistar: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M6 10h8" />
    </>
  ),
  izipay: (
    <>
      <rect x="3" y="5" width="14" height="10" rx="2" />
      <path d="M3 9h14" />
    </>
  ),
  aldia: (
    <>
      <circle cx="10" cy="10" r="4" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2" />
    </>
  ),
  wunderman: <path d="M3 5l3.5 10L10 7l3.5 8L17 5" />,
  laboratoria: (
    <>
      <path d="M4 16V4M4 16h12" />
      <path d="M8 12l3-4 3 2" />
    </>
  ),
  acp: <path d="M10 3l7 14H3z" />,
}

export function BrandIcon({ name }) {
  return (
    <svg className="tile__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {brandPaths[name]}
    </svg>
  )
}

const researchRects = [
  [4, 4], [10, 4], [16, 4], [22, 4], [28, 4],
  [4, 10], [28, 10],
  [4, 16], [16, 16], [28, 16],
  [4, 22], [28, 22],
  [4, 28], [10, 28], [16, 28], [22, 28], [28, 28],
]

const architectureDots = [
  [4, 26], [10, 22], [16, 18], [22, 14], [28, 10], [34, 6],
  [10, 28], [16, 24], [22, 20], [28, 16], [34, 12],
  [16, 30], [22, 26], [28, 22], [34, 18],
]

const prototypeDots = [
  [32.0, 18.0, 1.8], [30.1, 25.0, 1.8], [25.0, 30.1, 1.8], [18.0, 32.0, 1.8],
  [11.0, 30.1, 1.8], [5.9, 25.0, 1.8], [4.0, 18.0, 1.8], [5.9, 11.0, 1.8],
  [11.0, 5.9, 1.8], [18.0, 4.0, 1.8], [25.0, 5.9, 1.8], [30.1, 11.0, 1.8],
  [25.0, 18.0, 1.4], [21.5, 24.1, 1.4], [14.5, 24.1, 1.4], [11.0, 18.0, 1.4],
  [14.5, 11.9, 1.4], [21.5, 11.9, 1.4],
]

const contentDots = [
  [31.3, 16.3], [29.3, 20.2], [26.2, 23.3], [22.3, 25.3], [18.0, 26.0],
  [13.7, 25.3], [9.8, 23.3], [6.7, 20.2], [4.7, 16.3],
  [18, 32], [11, 30], [25, 30], [12, 8], [24, 8],
]

const serviceShapes = {
  research: researchRects.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="4" height="4" />),
  architecture: architectureDots.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" />),
  prototype: prototypeDots.map(([cx, cy, r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />),
  content: contentDots.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" />),
}

export function ServiceIcon({ name }) {
  return (
    <svg className="card__icon" viewBox="0 0 36 36" fill="currentColor" aria-hidden="true">
      {serviceShapes[name]}
    </svg>
  )
}

export function ArrowUpRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 8h16M4 16h16" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
