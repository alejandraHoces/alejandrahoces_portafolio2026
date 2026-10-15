import { about } from '../data/content'
import { stagger, cx } from '../utils/stagger'
import Lines from './Lines'

export default function About() {
  return (
    <section id="sobre-mi" className="about wrap">
      <h2 className="about__title serif rv">
        <Lines lines={about.title} />
      </h2>

      <div className="stats">
        {about.stats.map((s, i) => (
          <div key={i} className="stat">
            <div className={cx('stat__line ln', stagger(i + 1))} aria-hidden="true" />
            <p className="stat__value serif">
              {s.prefix}
              <span className={cx('count', stagger(i + 1))} style={{ '--n': s.value }} aria-label={String(s.value)} />
            </p>
            <p className={cx('stat__label fu', stagger(i + 1))}>
              <Lines lines={s.label} always />
            </p>
          </div>
        ))}
      </div>

      <p className="about__text fu">{about.text}</p>
    </section>
  )
}
