import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__box fu">
        <div className="aurora contact__aurora" aria-hidden="true" />
        <div className="dots" aria-hidden="true" />
        <div className="contact__inner">
          <p className="contact__eyebrow">{contact.eyebrow}</p>
          <h2 className="contact__title serif rv">{contact.title}</h2>
          <div className="contact__actions">
            <a className="btn btn-w" href={`mailto:${contact.email}`}>
              {contact.email} <span className="dot" />
            </a>
            <a className="btn btn-g" href={contact.phoneHref}>{contact.phone}</a>
          </div>
          <footer className="contact__footer">
            <span className="contact__copy">{contact.copyright}</span>
            <nav className="contact__socials" aria-label="Redes sociales">
              {contact.socials.map((s, i) => (
                <a key={i} className="soc" href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </nav>
          </footer>
        </div>
      </div>
    </section>
  )
}
