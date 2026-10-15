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

Abre en el navegador el link que aparece en la terminal (normalmente `http://localhost:5173`).
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

## 📜 Scripts disponibles

| Comando           | Qué hace                                          |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Levanta el proyecto en local                      |
| `npm run build`   | Genera la versión de producción en `dist/`        |
| `npm run preview` | Muestra en local la versión de producción         |
| `npm run deploy`  | Hace el build y lo publica en GitHub Pages        |

---

**Las imágenes no aparecen en la página publicada**
Impórtalas desde `src/assets` en lugar de usar rutas absolutas (ver sección *Editar el contenido*).

---

## 🧰 Tecnologías

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)