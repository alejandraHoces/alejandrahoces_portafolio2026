import { contact, socials } from '../data/content'

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__box fu">
        <div className="aurora contact__aurora" aria-hidden="true" />
        <div className="dots" aria-hidden="true" />
        <div className="contact__inner">
          <p className="contact__eyebrow">Disponible para nuevos proyectos</p>
          <h2 className="contact__title serif rv">¿Creamos algo juntos?</h2>
          <div className="contact__actions">
            <a className="btn btn-w" href={`mailto:${contact.email}`}>
              {contact.email} <span className="dot" />
            </a>
            <a className="btn btn-g" href={contact.phoneHref}>{contact.phone}</a>
          </div>
          <footer className="contact__footer">
            <span className="contact__copy">© 2026 Alejandra Hoces · Lima, Perú</span>
            <nav className="contact__socials" aria-label="Redes sociales">
              {socials.map((s) => (
                <a key={s.label} className="soc" href={s.href} target="_blank" rel="noreferrer">
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
