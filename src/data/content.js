/*
 * Todo el contenido de la página vive en la carpeta config/ (un JSON por sección).
 * Este módulo solo lo lee y prepara lo que el JSON no puede expresar
 * (imágenes procesadas por Vite, link de teléfono, etc.).
 */
import metas from '../../config/01-metas.json'
import menu from '../../config/02-menu-logo-y-cv.json'
import portada from '../../config/03-portada.json'
import marcas from '../../config/04-marcas.json'
import sobreMi from '../../config/05-sobre-mi.json'
import loQueHago from '../../config/06-lo-que-hago.json'
import proyectos from '../../config/07-proyectos.json'
import experiencia from '../../config/08-experiencia.json'
import contacto from '../../config/09-contacto.json'

/* Imágenes de src/assets: el JSON las nombra por su ruta dentro de esa carpeta (p. ej. "projects/izipay.jpg") */
const assets = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,avif,gif,svg}', { eager: true, import: 'default' })

function resolveImage(path) {
  if (!path) return undefined
  if (/^https?:\/\//.test(path)) return path
  const key = `../assets/${path.replace(/^\/+/, '').replace(/^(src\/)?assets\//, '')}`
  if (key in assets) return assets[key]
  console.warn(`[config/07-proyectos.json] No se encontró la imagen "${path}" en src/assets`)
}

/* Archivos de public/: se les antepone la base del sitio (/alejandrahoces_portafolio2026/) para que funcionen en GitHub Pages */
const publicUrl = (path) => (/^https?:\/\//.test(path) ? path : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '').replace(/^public\//, '')}`)

export const site = { ...metas, ...menu.logo }
export const cv = { ...menu.cv, url: publicUrl(menu.cv.url) }
export const navLinks = menu.links

export const hero = portada
export const brands = marcas
export const about = sobreMi
export const services = loQueHago
export const experience = experiencia

export const projects = {
  ...proyectos,
  items: proyectos.items.map((p) => ({ ...p, image: resolveImage(p.image) })),
}

export const contact = {
  ...contacto,
  phoneHref: `tel:${contacto.phone.replace(/[^\d+]/g, '')}`,
  /* {year} → año actual, calculado en el navegador del visitante (no hace falta volver a publicar cada año) */
  copyright: contacto.copyright.replaceAll('{year}', new Date().getFullYear()),
  /* el CV se agrega al final de las redes del footer */
  socials: cv.footerLabel ? [...contacto.socials, { label: cv.footerLabel, href: cv.url }] : contacto.socials,
}
