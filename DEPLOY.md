# Portafolio · Alejandra Hoces

Portafolio personal hecho con **React + Vite**, publicado en **GitHub Pages**.

🌐 **Sitio en vivo:** https://alejandrahoces.github.io/alejandrahoces_portafolio2026/

---

## 📋 Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada) 24.11.0
- [Git](https://git-scm.com/)
- Acceso a la cuenta de GitHub **alejandraHoces**

---

## 🚀 Primera vez en una computadora nueva

```bash
# 1. Clonar el repositorio
git clone https://github.com/alejandraHoces/alejandrahoces_portafolio2026.git

# 2. Entrar a la carpeta
cd alejandrahoces_portafolio2026

# 3. Instalar dependencias
npm install

# 4. Configurar tu identidad de Git en este repo
git config user.name "alejandraHoces"
git config user.email "correo-electronico@gmail.com"
```

---

## ✏️ Cómo actualizar el contenido

### 1. Levantar el proyecto en local

```bash
npm run dev
```

Abre en el navegador el link que aparece en la terminal (normalmente `http://localhost:5173/alejandrahoces_portafolio2026`).
Los cambios que hagas se ven al instante.

### 2. Revisar cómo quedará en producción (opcional)

```bash
npm run build
npm run preview
```

### 3. Guardar los cambios en GitHub (código fuente)

```bash
git add .
git commit -m "Describe aquí qué cambiaste"
git push
```

### 4. Publicar la página actualizada

```bash
npm run deploy
```

Espera 1–2 minutos y recarga el sitio. Si no ves el cambio, prueba con **Ctrl + Shift + R** (recarga sin caché).

---

## 🔁 Resumen rápido

```bash
npm run dev                          # 1. Ver cambios en local
git add .                            # 2. Preparar cambios
git commit -m "mensaje"              # 3. Guardar cambios
git push                             # 4. Subir el código a GitHub
npm run deploy                       # 5. Publicar la página
```

> `git push` guarda el **código**. `npm run deploy` actualiza la **página web**. Son dos pasos distintos.

---

## 📝 Editar el contenido

**Todo el contenido de la página está en la carpeta `config/`, un archivo JSON por sección.**
Los archivos están numerados en el mismo orden en que aparecen en la página. Textos, links e imágenes se cambian ahí; no hace falta tocar los componentes.

| Archivo                           | Qué controla                                                        |
| --------------------------------- | ------------------------------------------------------------------- |
| `config/01-metas.json`            | Título de la pestaña y descripción para Google                      |
| `config/02-menu-logo-y-cv.json`   | Logo (nombre e iniciales), enlaces del menú y link/textos del CV    |
| `config/03-portada.json`          | Portada: texto pequeño, titular y botón "Ver proyectos"             |
| `config/04-marcas.json`           | Marcas y equipos                                                    |
| `config/05-sobre-mi.json`         | Sobre mí: título, cifras y párrafo                                  |
| `config/06-lo-que-hago.json`      | Lo que hago: título, texto y las 4 cards                            |
| `config/07-proyectos.json`        | Proyectos: título, texto y cada caso de estudio (con sus imágenes)  |
| `config/08-experiencia.json`      | Experiencia y herramientas                                          |
| `config/09-contacto.json`         | Email, teléfono, copyright y redes del footer                       |

Cada archivo empieza con un campo `"_ayuda"` que explica qué controla. Es solo una nota: la página lo ignora.

---

## 📜 Scripts disponibles

| Comando           | Qué hace                                          |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Levanta el proyecto en local                      |
| `npm run build`   | Genera la versión de producción en `dist/`        |
| `npm run preview` | Muestra en local la versión de producción         |
| `npm run deploy`  | Hace el build y lo publica en GitHub Pages        |

---

**Las imágenes no aparecen en la página publicada**
Guárdalas dentro de `src/assets/` y en `config/07-proyectos.json` usa la ruta desde esa carpeta, p. ej. `"projects/izipay.jpg"` (ver sección *Editar el contenido*).

---

## 🧰 Tecnologías

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)