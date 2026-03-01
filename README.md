# JBV — Sitio Web Oficial

Intermediación Profesional de Grúas Autopropulsadas entre Alemania y España.

## Stack Tecnológico

- **Framework**: Astro 5
- **Estilos**: Vanilla CSS moderno (OKLCH, Logical Properties, @layer, custom properties)
- **JavaScript**: Vanilla ES Modules
- **Fuentes**: Bebas Neue (display) + Barlow / Barlow Condensed (cuerpo)
- **Package Manager**: Bun (recomendado) / npm

## Estructura del Proyecto

```
jbv-astro/
├── public/
│   ├── images/
│   │   ├── bg-crane.png        ← Imagen de fondo hero (grúa)
│   │   └── ximo.webp           ← Foto de Ximo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Process.astro
│   │   ├── WhyUs.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro        ← Layout principal con SEO
│   ├── pages/
│   │   ├── index.astro         ← Página principal
│   │   ├── aviso-legal.astro
│   │   ├── privacidad.astro
│   │   └── cookies.astro
│   ├── scripts/
│   │   └── reveal.js           ← Scroll reveal con IntersectionObserver
│   └── styles/
│       └── global.css          ← Design system completo
└── astro.config.mjs
```

## Setup

### Con Bun (recomendado según spec)
```bash
bun install
bun run dev       # Desarrollo
bun run build     # Producción
bun run preview   # Preview de build
```

### Con npm (alternativa)
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Personalización Obligatoria

1. **Teléfono**: Reemplaza `+34 600 000 000` con el número real de Ximo
2. **WhatsApp**: Actualiza `https://wa.me/34600000000` con el número real
3. **Email**: Actualiza `info@jbv.com` con el email real
4. **Dominio**: Actualiza `site` en `astro.config.mjs` y `canonical` en Layout
5. **Analytics**: Añadir Google Analytics en `Layout.astro` (dentro de `<head>`)
6. **Formulario**: Conectar a servicio de email (FormSubmit.co, Netlify Forms, etc.)
7. **Aviso Legal**: Completar datos completos del titular con abogado

## Formulario de Contacto

El formulario actualmente simula el envío. Para producción, opciones:

### FormSubmit (gratuito, sin backend)
```html
<form action="https://formsubmit.co/tu@email.com" method="POST">
  <input type="hidden" name="_subject" value="Nueva consulta JBV">
  <input type="hidden" name="_next" value="https://www.jbv.com/gracias">
  ...
</form>
```

### Netlify Forms (si hospedas en Netlify)
Añadir `data-netlify="true"` al form y `netlify` como atributo.

## SEO

El sitio incluye:
- Meta tags completos (title, description, keywords)
- Open Graph para redes sociales
- Structured Data (JSON-LD) con schema.org/LocalBusiness
- Canonical URL
- `lang="es"` en html
- Semántica HTML5 correcta

## Despliegue

Compatible con cualquier hosting estático:
- **Netlify** (recomendado): `npm run build` → carpeta `dist/`
- **Vercel**: Detección automática de Astro
- **GitHub Pages**: Requiere configuración de base path

## Dependencias de Producción (Astro genera HTML estático puro)

El build de producción genera HTML/CSS/JS estático. Sin dependencias en runtime.
