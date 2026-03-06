# Análisis Técnico — JBV Landing Page

> [!NOTE]
> Análisis realizado con perfil de ingeniero senior de desarrollo web.
> Fecha: 26/02/2026 · Stack: Astro 5 + CSS vanilla

---

## 1. Estructura de Archivos/Carpetas

### ✅ Correcto
- Estructura clara y estándar de Astro (`components/`, `layouts/`, `pages/`, `styles/`, `scripts/`).
- Separación lógica entre componentes, layout y páginas.

### ⚠️ Mejoras

| Hallazgo | Impacto | Sugerencia |
|---|---|---|
| Sin subcarpetas en `components/` (8 archivos planos) | Escalabilidad | Agrupar por dominio: `components/ui/`, `components/sections/` |
| `public/images/` sin subcarpetas organizadas | Mantenibilidad | Separar: `images/hero/`, `images/about/`, `images/icons/` |
| Un solo archivo CSS de **1330 líneas** (`global.css`) | Mantenibilidad | Dividir por sección o componente usando múltiples archivos e `@import` |
| Sin directorio `types/` o `data/` | Organización | Los datos de `services`, `steps`, `reasons` en los componentes deberían extraerse a un `src/data/` |
| Falta `.nvmrc` o `engines` en `package.json` | Reproducibilidad | Fijar versión de Node requerida |

---

## 2. Archivos de Configuración

### `package.json`

| Hallazgo | Severidad | Detalle |
|---|---|---|
| Sin `engines` ni versión de Node | Media | Puede generar incompatibilidades entre desarrolladores |
| Sin script `lint`, `format` ni `check` | Media | Falta `astro check` para validar TypeScript, linting (ESLint) y formatting (Prettier) |
| Sin `devDependencies` separadas | Baja | Todo está en `dependencies`, incluido Astro que debería ser `devDependency` |
| Falta `description`, `license`, `private: true` | Baja | Campos básicos para un proyecto privado |

### `tsconfig.json`

| Hallazgo | Severidad | Detalle |
|---|---|---|
| Sin `compilerOptions` personalizados | Baja | No hay path aliases (`@components/*`, `@layouts/*`), obligando a imports con rutas relativas (`../components/`) |
| Configuración mínima pero funcional | — | Correcto para un proyecto pequeño |

### `astro.config.mjs`

| Hallazgo | Severidad | Detalle |
|---|---|---|
| `site: 'https://jbv.com'` no coincide con el canonical `https://jbv-gruas.es` | **Alta** | La URL del `site` y el `canonical` del Layout **son diferentes**. Esto **daña el SEO** |
| Sin integración de `@astrojs/sitemap` | Media | No se genera sitemap.xml automático |
| Sin configuración de `vite` para optimización | Baja | No hay configuración de build adicional |

### `.gitignore`

- ✅ Correcto y completo.
- ⚠️ Falta ignorar `bun.lock` **o** `package-lock.json` (no deberían coexistir dos lockfiles si no se usa uno de ellos).

---

## 3. Implementación de Componentes Astro

### ✅ Correcto
- Uso adecuado del frontmatter para datos.
- `set:html` para inyectar SVG inline de forma segura.
- Props tipadas con `interface Props` en `Layout.astro`.
- Buena accesibilidad: `aria-label`, `aria-hidden`, `role`, `aria-expanded`, `aria-controls`.
- Structured Data (JSON-LD) en el Layout.

### 🐛 Bugs / Errores

| Archivo | Línea | Problema |
|---|---|---|
| `Layout.astro` | L22 | `"telephone": "+34600000000"` — Teléfono ficticio en Structured Data. Google puede penalizar datos falsos |
| `Layout.astro` | L30 | `"sameAs": []` — Array vacío en Structured Data; mejor omitirlo si no hay redes sociales |
| `Hero.astro` | L44 | `href="https://wa.me/34600000000"` — Número placeholder. Si se despliega así, es un **bug funcional** |
| `Contact.astro` | L164-168 | El formulario finge enviar (`e.preventDefault()` sin backend). No hay validación real ni feedback de errores |

### ⚠️ Mejoras

| Archivo | Problema | Sugerencia |
|---|---|---|
| `Navbar.astro` | Los links de navegación están hardcodeados en el frontmatter y repetidos en `Footer.astro` | Extraer a un archivo de datos compartido (`src/data/navigation.ts`) |
| `Navbar.astro` L44 | `document.getElementById('navbar')!` — Non-null assertion (`!`) sin fallback | Usar optional chaining o guardia |
| Páginas legales | Estilos inline repetidos en `h1` (`style="font-family: 'Bebas Neue'..."`) | Usar clases CSS reutilizables o un layout específico para páginas legales |
| Páginas legales | `<style>` duplicado idéntico en `aviso-legal.astro`, `cookies.astro` y `privacidad.astro` | Crear un componente `LegalLayout.astro` o clase global compartida |
| `About.astro` L8 | `about-eyebrow` con texto "Sobre Mí" cuando ya hay `aria-label="Sobre Mí"` en la `<section>` | Redundancia semántica menor |
| `Hero.astro` | Imagen de fondo con `<img>` nativo en vez de `<Image />` de Astro | Perder optimización automática de imágenes de Astro |
| `About.astro` | `<img>` nativo con `src="/images/ximo.webp"` | Usar componente `<Image />` de Astro para optimización automática |
| `Contact.astro` | `writingsuggestions="false"` en textarea | Atributo no estándar; considerar eliminar |
| `Services.astro` / `WhyUs.astro` | SVG icon paths embebidos como strings en arrays de datos | Considerar un sistema de iconos (archivo SVG sprite o componentes de icono) |
| `Process.astro` L48 | `reveal-delay-${i + 1}` con 5 pasos genera `reveal-delay-5` | Solo hay CSS hasta `delay-5`, funciona pero no escala |

---

## 4. Implementación de Estilos

### ✅ Correcto
- Design tokens bien definidos en `:root` con OKLCH.
- Uso consistente de logical properties (`inset-block-start`, `inline-size`, etc.).
- Sistema de capas CSS (`@layer`) bien estructurado.
- Variables semánticas (`--accent`, `--text-muted`, `--surface`).
- Responsive con media queries apropiados.

### ⚠️ Problemas

| Hallazgo | Severidad | Detalle |
|---|---|---|
| **Archivo monolítico de 1330 líneas** | **Alta** | Dificulta mantenimiento, debugging y trabajo en equipo. Dividir por componente/sección |
| Colores OKLCH hardcodeados fuera de variables | Media | Ej: `oklch(0.73 0.19 52 / 0.35)` repetido ~20 veces en lugar de usar `var(--orange-glow)` con diferentes opacidades |
| `@import url(Google Fonts)` bloqueante | Media | La carga de Google Fonts con `@import` es render-blocking. Usar `<link rel="preconnect">` + `<link>` en el `<head>` |
| Sin `prefers-reduced-motion` | Media | Las animaciones no se desactivan para usuarios con preferencias de accesibilidad |
| Sin `prefers-color-scheme` | Baja | Solo dark mode, aceptable para la marca pero ideal sería declarar que el esquema de color está definido (`color-scheme: dark`) |
| `.about` con `min-block-size: 100svh` | Baja | Fuerza la sección a pantalla completa incluso si el contenido es menor — puede dejar mucho espacio vacío en desktop |
| Hamburger transform magic numbers | Baja | `translate(5px, 5px)` en las líneas del hamburguesa puede descuadrarse con cambios de tamaño |
| Selector `.form-field select` definido | Baja | No existe ningún `<select>` en el HTML. CSS muerto |
| `.btn-ghost` definido | Baja | No se usa en ningún componente. CSS muerto |
| `.divider` definido | Baja | No se usa en ningún componente. CSS muerto |

---

## 5. Implementación de Lógica (JS)

### ✅ Correcto
- `IntersectionObserver` para reveal animations: eficiente y moderno.
- `unobserve` tras activar: evita trabajo innecesario.
- `{ passive: true }` en el scroll listener: buena práctica de rendimiento.
- Honeypot anti-spam en el formulario.

### ⚠️ Problemas

| Archivo | Problema | Sugerencia |
|---|---|---|
| `Navbar.astro` L44-46 | Non-null assertions (`!`) sin verificación | Si el DOM no tiene el elemento, crashea silenciosamente |
| `Navbar.astro` L54-67 | Recalcula **todos** los sections en **cada** frame de scroll | Throttle o `requestAnimationFrame` para reducir computación |
| `Navbar.astro` L60 | `for (const { el, a } of sections)` recorre todo sin `break` | El loop podría salir antes cuando encuentra el section activo (optimización menor) |
| `Contact.astro` L161 | `as HTMLFormElement` — TypeScript assertion en un `<script>` inline de Astro | Funciona, pero es frágil. Mejor usar type guard |
| `Contact.astro` L164-168 | Formulario sin **ninguna validación** real | A pesar de `novalidate`, no hay validación JS personalizada (nombre vacío, email malformado, etc.) |
| `Contact.astro` L166 | `// In production: connect to...` — Comentario TODO en producción | Indica funcionalidad no implementada que podría desplegarse así |
| `reveal.js` | No usa `defer` ni verifica `DOMContentLoaded` | Funciona porque Astro lo procesa, pero como script independiente no es seguro |
| `index.astro` L25 | `<script src="../scripts/reveal.js">` con tag de cierre | Debería ser `<script src="..." />` en Astro, o mejor `<script>` con import |

---

## 6. Rendimiento

### ✅ Correcto
- `compressHTML: true` en Astro config.
- `fetchpriority="high"` en la imagen hero.
- `loading="lazy"` y `decoding="async"` en imágenes below-the-fold.
- `inlineStylesheets: 'auto'` para optimización automática.
- IntersectionObserver en vez de listeners de scroll para reveals.

### ⚠️ Problemas

| Hallazgo | Severidad | Detalle |
|---|---|---|
| **`bg-crane.png` (121 KB) en formato PNG** | **Alta** | Debe convertirse a **WebP/AVIF** — ahorro estimado ~60-70% |
| **Google Fonts cargadas con `@import` CSS** | **Alta** | Bloquea el render. Mover a `<link>` con `preconnect` y `display=swap` |
| Se cargan **3 familias de fuentes** (Bebas Neue, Barlow, Barlow Condensed) con múltiples pesos | Media | Son **7+ archivos de fuente**. Considerar self-hosting y subsetting |
| `preload` de `bg-crane.png` en todas las páginas (incluidas legales) | Media | El preload solo debería estar en la página principal |
| Imagen hero con `<img>` nativo | Media | No se aprovecha el componente `<Image>` de Astro (optimización automática, formatos modernos, responsive `srcset`) |
| SVG inline repetidos (WhatsApp icon aparece 2 veces completo) | Baja | Crear un componente Icon reutilizable o SVG sprite |
| Sin `will-change` en las animaciones de reveal | Baja | Podría mejorar suavidad en dispositivos low-end |
| Sin CDN ni caché headers configurados | Baja | Depende del hosting, pero no hay hints en el config |

---

## 7. SEO

### ✅ Correcto
- `<title>` y `<meta description>` configurables via props.
- `<link rel="canonical">` presente.
- Open Graph y Twitter Cards configurados.
- Structured Data JSON-LD (`LocalBusiness`).
- HTML semántico: `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`, `<article>`.
- `lang="es"` en `<html>`.
- Un solo `<h1>` por página.

### 🐛 Bugs

| Hallazgo | Severidad | Detalle |
|---|---|---|
| **`site` en Astro config ≠ canonical en Layout** | **Crítica** | `astro.config.mjs` → `https://jbv.com` vs Layout → `https://jbv-gruas.es`. Señales contradictorias a Google |
| Structured Data con teléfono ficticio | Alta | `+34600000000` en JSON-LD — Google valida estos datos |
| `"sameAs": []` vacío | Media | Genera ruido en el Schema; omitir si no hay |

### ⚠️ Mejoras

| Hallazgo | Detalle |
|---|---|
| Sin `sitemap.xml` | Instalar `@astrojs/sitemap` |
| Sin `robots.txt` | Crear archivo en `public/robots.txt` con referencia al sitemap |
| Sin imagen OG (`og:image`) | Falta meta tag `og:image` — esencial para compartir en redes |
| Sin `<meta name="geo.position">` ni coordenadas | Para LocalBusiness, ayudaría a Google Maps |
| Páginas legales sin canonical propio | El default `https://jbv-gruas.es` se aplica a todas; cada página legal debería tener su propio canonical |
| `meta name="keywords"` | Google ignora esta meta tag desde 2009 — eliminar o mantener por motivos informativos internos |
| Sin `hreflang` | Si el negocio opera en Alemania y España, considerar versión alemana con `hreflang` alternates |
| Sin `<meta name="theme-color" media="...">` | Solo hay un `theme-color`, aceptable |
| Heading hierarchy en páginas legales | `h1` → `h2` directo — correcto pero sin `h3` para subsecciones |

---

## Resumen Ejecutivo

```
Críticos:   2  (discrepancia site/canonical, imagen PNG sin optimizar)
Altos:      4  (Google Fonts blocking, datos ficticios en LD, formulario sin backend, falta og:image)
Medios:    12  (CSS monolítico, colores hardcoded, falta sitemap, navegación duplicada, etc.)
Bajos:      9  (CSS muerto, minor optimizations, etc.)
```

### Plan de Implementación (orden por dependencia de proyecto)

- [x] 1. Añadir `engines`, `private: true`, `description` y `license` en `package.json`
- [x] 2. Mover `astro` de `dependencies` a `devDependencies`
- [x] 3. Añadir scripts `lint`, `format` y `check` en `package.json`
- [x] 4. Crear `.nvmrc` con la versión de Node requerida
- [x] 5. Unificar `site` en `astro.config.mjs` con el canonical real (`www.jbv.com`)
- [x] 6. Instalar `@astrojs/sitemap` y configurar en `astro.config.mjs`
- [x] 7. Añadir path aliases (`@components`, `@layouts`, `@data`, `@styles`) en `tsconfig.json`
- [x] 8. Crear `public/robots.txt` con referencia al sitemap
- [x] 9. Crear directorio `src/data/` y extraer datos compartidos (`navigation.ts`, `services.ts`, `steps.ts`, `reasons.ts`)
- [x] 10. Crear `src/components/ui/Icon.astro` para centralizar SVGs reutilizados (WhatsApp, teléfono)
- [x] 11. Dividir `global.css` en archivos por sección (`tokens.css`, `base.css`, `navbar.css`, `hero.css`, `about.css`, `services.css`, `process.css`, `whyus.css`, `contact.css`, `footer.css`, `animations.css`)
- [x] 12. Eliminar CSS muerto (`.btn-ghost`, `.divider`, `.form-field select`)
- [ ] 13. Reemplazar colores OKLCH hardcodeados repetidos por variables CSS con opacidades
- [x] 14. Mover `@import url(Google Fonts)` del CSS a `<link rel="preconnect">` + `<link>` en `Layout.astro`
- [x] 15. Añadir `color-scheme: dark` en `:root`
- [ ] 16. Añadir media query `prefers-reduced-motion: reduce` para desactivar animaciones
- [x] 17. Crear `LegalLayout.astro` para páginas legales (eliminar estilos inline y `<style>` duplicados)
- [x] 18. Refactorizar páginas legales (`aviso-legal`, `cookies`, `privacidad`) para usar `LegalLayout.astro`
- [x] 19. Añadir canonical dinámico con `Astro.url` en cada página legal
- [x] 20. Convertir `bg-crane.png` a WebP/AVIF
- [x] 21. Reemplazar `<img>` nativas por componente `<Image />` de Astro en `Hero.astro` y `About.astro`
- [x] 22. Mover `preload` de `bg-crane.png` solo a la página principal (no en Layout global)
- [x] 23. Reemplazar datos ficticios (`+34600000000`, `info@jbv-gruas.es`) por datos reales en todos los archivos
- [x] 24. Corregir `"sameAs": []` en Structured Data (omitir si no hay redes, o añadir las reales)
- [x] 25. Añadir `og:image` al Layout
- [x] 26. Eliminar `<meta name="keywords">` del Layout
- [x] 27. Reemplazar non-null assertions (`!`) en `Navbar.astro` por optional chaining con guardias
- [ ] 28. Añadir throttle o `requestAnimationFrame` al listener de scroll del Navbar
- [ ] 29. Implementar validación JS real en el formulario de contacto
- [ ] 30. Conectar el formulario a un backend real (FormSubmit, Netlify Forms, etc.)
- [ ] 31. Eliminar el comentario TODO del formulario
- [ ] 32. Cambiar `<script src="../scripts/reveal.js">` por import en `index.astro`
- [x] 33. Eliminar atributo no estándar `writingsuggestions="false"` del textarea
- [ ] 34. Reorganizar `public/images/` en subcarpetas (`hero/`, `about/`)
- [ ] 35. Reorganizar `src/components/` en subcarpetas (`ui/`, `sections/`)
