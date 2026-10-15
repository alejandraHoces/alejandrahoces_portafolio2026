import { aboutText, stats } from '../data/content'
import { stagger, cx } from '../utils/stagger'

export default function About() {
  return (
    <section id="sobre-mi" className="about wrap">
      <h2 className="about__title serif rv">
        Diseño con propósito.<br className="br-desktop" /> Enfocada en las personas.
      </h2>

      <div className="stats">
        {stats.map((s, i) => (
          <div key={s.label[0]} className="stat">
            <div className={cx('stat__line ln', stagger(i + 1))} aria-hidden="true" />
            <p className="stat__value serif">
              {s.prefix}
              <span className={cx('count', stagger(i + 1))} style={{ '--n': s.value }} aria-label={String(s.value)} />
            </p>
            <p className={cx('stat__label fu', stagger(i + 1))}>
              {s.label[0]}
              <br />
              {s.label[1]}
            </p>
          </div>
        ))}
      </div>

      <p className="about__text fu">{aboutText}</p>
    </section>
  )
}
