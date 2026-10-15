import { experience } from '../data/content'
import { stagger, cx } from '../utils/stagger'

export default function Experience() {
  return (
    <section className="experience wrap" aria-labelledby="exp-title">
      <div className="experience__intro">
        <h2 id="exp-title" className="section-title serif rv">{experience.title}</h2>
        <p className="experience__lead fu">{experience.lead}</p>
      </div>

      <div className="experience__list">
        <div className="experience__rows">
        {experience.items.map((e, i) => (
          <div key={i} className={cx('xrow fu', stagger(1, i + 1))}>
            <span className="xrow__meta">
              {e.period}
              <span className="xrow__org-inline"> · {e.org}</span>
            </span>
            <span className="xrow__role serif">{e.role}</span>
            <span className="xrow__org">{e.org}</span>
          </div>
        ))}
        </div>

        <p className="experience__tools-title fu">{experience.toolsTitle}</p>
        <div className="chips fu">
          {experience.tools.map((t, i) => (
            <span key={i} className={cx('chip', t.desktopOnly && 'desktop-only')}>{t.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
