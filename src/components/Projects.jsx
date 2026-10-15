import { projects } from '../data/content'
import { stagger, cx } from '../utils/stagger'
import Eyebrow from './Eyebrow'
import Lines from './Lines'

function ProjectLinks({ project }) {
  return (
    <div className="media__actions">
      {project.links.map((l, i) => (
        <a
          key={i}
          className={cx('media__pill', i === 0 ? 'media__pill--primary' : 'media__pill--secondary')}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${l.label}: ${project.name} (se abre en una pestaña nueva)`}
        >
          {l.label}
          {i === 0 ? <span className="dot" /> : <ArrowIcon />}
        </a>
      ))}
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="projects wrap">
      <Eyebrow>{projects.eyebrow}</Eyebrow>
      <div className="section-head">
        <h2 className="section-title serif rv">
          <Lines lines={projects.title} />
        </h2>
        <p className="section-lead fu">{projects.lead}</p>
      </div>

      <div className="projects__grid">
        {projects.items.map((p, i) => {
          const st = stagger(1, i % 2 ? 2 : 1)
          return (
            <article key={i} className="proj">
              <div className={cx('media clip', p.code && 'media--code', st)}>
                <div className="media__zoom">
                  {p.code ? (
                    <span className="media__code serif" aria-hidden="true">&lt;/&gt;</span>
                  ) : (
                    p.image && <img src={p.image} alt={p.alt} style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined} />
                  )}
                </div>
                <ProjectLinks project={p} />
              </div>
              <div className={cx('proj__body fu', st)}>
                <p className="proj__client">{p.client}</p>
                <h3 className="proj__name serif">{p.name}</h3>
                <p className="proj__desc">{p.desc}</p>
                <div className="chips">
                  {p.tags.map((t, j) => (
                    <span key={j} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
