import izipay from '../assets/projects/izipay.jpg'
import aldia from '../assets/projects/aldia.jpg'
import metroapp from '../assets/projects/metroapp.jpg'

export const CV_URL =
  'https://alejandrahoces.github.io/alejandrahoces_portafolio2025/assets/alejandrahoces_cv2025.pdf'

export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Lo que hago' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

/* `icon` solo se muestra desde tablet (en mobile el diseño muestra solo el nombre) */
export const brands = [
  { name: 'Movistar', icon: 'movistar' },
  { name: 'Izipay', icon: 'izipay' },
  { name: 'AlDía', icon: 'aldia' },
  { name: 'Wunderman', icon: 'wunderman' },
  { name: 'Laboratoria', icon: 'laboratoria' },
  { name: 'ACP Group', icon: 'acp' },
]

export const stats = [
  { value: 8, prefix: '+', label: ['Años en tecnología', 'y diseño digital'] },
  { value: 3, label: ['Marcas diseñadas en', 'Wunderman Thompson'] },
  { value: 4, label: ['Casos de estudio', 'publicados'] },
]

export const aboutText =
  'Hola, soy Alejandra Hoces. Tengo formación técnica en Computación e Informática y soy egresada de Laboratoria en UX Design y desarrollo web. Durante un año en Wunderman Thompson diseñé experiencias digitales para marcas como Movistar, Izi Pay y AlDía. Me encanta viajar, aprender constantemente y participar en voluntariados deportivos y ambientales.'

/* title: [línea 1, línea 2] → en desktop se parte en dos líneas, en mobile fluye en una */
export const services = [
  {
    icon: 'research',
    title: ['Research &', 'Síntesis'],
    desc: 'Benchmarking, entrevistas y testing para entender a las personas antes de diseñar.',
  },
  {
    icon: 'architecture',
    title: ['Arquitectura de', 'Información'],
    desc: 'Organizo contenidos y flujos para que cada pantalla tenga sentido y sea fácil de recorrer.',
  },
  {
    icon: 'prototype',
    title: ['Prototipado', '& UI Design'],
    desc: 'De wireframes a prototipos navegables en Figma y Marvel App, listos para testear.',
  },
  {
    icon: 'content',
    title: ['Contenido', '& Desarrollo Web'],
    desc: 'Estrategia de contenido y diseño pensado para construirse en HTML, CSS y JavaScript.',
  },
]

export const projects = [
  {
    name: 'Izi Pay',
    client: 'Wunderman Phantasia · Procesos MC Perú',
    desc: 'Promoción de la plataforma digital de Izi Pay: rediseño de la experiencia para dar a conocer su POS y sus servicios.',
    tags: ['UI Design', 'Redesign', 'Figma', 'Marvel App'],
    image: izipay,
    alt: 'Pantallas del rediseño de Izi Pay en móvil',
    links: [
      { label: 'Ver proyecto', href: 'https://alejandrahoces.github.io/Izipay/' },
      { label: 'Ver demo', href: 'https://marvelapp.com/aa7b7jb' },
    ],
  },
  {
    name: 'AlDía',
    client: 'Wunderman Phantasia · ACP Group',
    desc: 'Plataforma de captación de clientes para asesoría financiera, con simulador para liquidar deudas en pocos pasos.',
    tags: ['UI Design', 'Figma', 'Prototype', 'Benchmark'],
    image: aldia,
    alt: 'Landing de AlDía en desktop y móvil',
    links: [
      { label: 'Ver proyecto', href: 'https://alejandrahoces.github.io/AlDia/' },
      { label: 'Ver demo', href: 'https://marvelapp.com/6764c20' },
    ],
  },
  {
    name: 'Metroapp Lima',
    client: 'Proyecto personal UX',
    desc: 'App móvil para el Metropolitano de Lima con foco en accesibilidad: recarga, saldo y alertas en un solo lugar.',
    tags: ['Benchmarking', 'Research', 'Prototype', 'Testing'],
    image: metroapp,
    alt: 'Pantallas de Metroapp Lima',
    objectPosition: 'center 30%',
    links: [
      { label: 'Ver proyecto', href: 'https://foggy-leopard-239.notion.site/MetroApp-Lima-1dae4c459058800d9a41d520451f54df?pvs=143' },
      {
        label: 'Ver demo',
        href: 'https://www.figma.com/proto/UXJU2nwE5SinbYrNbaojr5/Metro-app-Lima?node-id=2-501&t=1pHmBu3AquWh1rSq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A737',
      },
    ],
  },
  {
    name: 'Réplica de Twitter',
    client: 'Laboratoria',
    desc: 'Maquetación de la red social en versión desktop, construida desde cero con HTML, CSS y JavaScript.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'icomoon', 'GitHub'],
    code: true,
    /* en el portafolio original el primer enlace es el repositorio en GitHub */
    links: [
      { label: 'Ver código', href: 'https://github.com/alejandraHoces/twitter' },
      { label: 'Ver demo', href: 'https://alejandrahoces.github.io/twitter/' },
    ],
  },
]

export const experience = [
  { period: '2020 — Hoy', role: 'Técnico en digitalización', org: 'Computación e Informática' },
  { period: '2018 — 2019', role: 'UX Designer Jr.', org: 'Wunderman Thompson' },
  { period: '2018 — 2019', role: 'UX Designer & Web Development', org: 'Laboratoria' },
]

/* desktopOnly: en el diseño mobile esa herramienta no aparece */
export const tools = [
  { name: 'Figma' },
  { name: 'Marvel App' },
  { name: 'Photoshop' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'GitHub' },
  { name: 'Research & Synthesis' },
  { name: 'Information Architecture', desktopOnly: true },
]

export const contact = {
  email: 'hocesalejandra@hotmail.com',
  phone: '+51 920 150 204',
  phoneHref: 'tel:+51920150204',
}

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alejandrahoces/' },
  { label: 'GitHub', href: 'https://github.com/alejandraHoces' },
  { label: 'Twitter', href: 'https://twitter.com/alejandrahoces' },
  { label: 'CV 2025', href: CV_URL },
]
