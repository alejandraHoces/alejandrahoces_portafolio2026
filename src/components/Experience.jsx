import { experience, tools } from '../data/content'
import { stagger, cx } from '../utils/stagger'

export default function Experience() {
  return (
    <section className="experience wrap" aria-labelledby="exp-title">
      <div className="experience__intro">
        <h2 id="exp-title" className="section-title serif rv">Experiencia</h2>
        <p className="experience__lead fu">De la técnica al diseño: una mirada que une a las personas con la tecnología.</p>
      </div>

      <div className="experience__list">
        <div className="experience__rows">
        {experience.map((e, i) => (
          <div key={e.role} className={cx('xrow fu', stagger(1, i + 1))}>
            <span className="xrow__meta">
              {e.period}
              <span className="xrow__org-inline"> · {e.org}</span>
            </span>
            <span className="xrow__role serif">{e.role}</span>
            <span className="xrow__org">{e.org}</span>
          </div>
        ))}
        </div>

        <p className="experience__tools-title fu">HERRAMIENTAS</p>
        <div className="chips fu">
          {tools.map((t) => (
            <span key={t.name} className={cx('chip', t.desktopOnly && 'desktop-only')}>{t.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
