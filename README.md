<p align="center">
  <img src="public/favicon.svg" width="80" alt="JBV Grúas logo" />
</p>

<h1 align="center">JBV Grúas</h1>

<p align="center">
  <strong>Intermediación profesional de grúas autopropulsadas entre Alemania y España</strong>
</p>

<p align="center">
  <a href="https://www.jbvgruas.es">
    <img src="https://img.shields.io/badge/🌐_Web-jbvgruas.es-F97316?style=for-the-badge" alt="Web" />
  </a>
  <a href="https://astro.build/">
    <img src="https://img.shields.io/badge/Astro-5-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro 5" />
  </a>
  <a href="https://vercel.com/">
    <img src="https://img.shields.io/badge/Deploy-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/Licencia-MIT-22C55E?style=for-the-badge" alt="MIT License" />
  </a>
</p>

<br />

Landing page profesional para **JBV Grúas** — servicio de intermediación especializado en la compra de grúas autopropulsadas desde Alemania para empresas españolas. Buscamos, negociamos y gestionamos toda la operación sin riesgos ni complicaciones.

🔗 **Sitio en producción**: [www.jbvgruas.es](https://www.jbvgruas.es)

---

## 📸 Capturas de Pantalla

<table>
  <tr>
    <td align="center" width="60%">
      <img src="docs/screenshots/desktop.webp" alt="JBV Grúas — Vista Desktop" />
      <br />
      <strong>Desktop</strong>
    </td>
    <td align="center" width="20%">
      <img src="docs/screenshots/tablet.webp" alt="JBV Grúas — Vista Tablet" />
      <br />
      <strong>Tablet</strong>
    </td>
    <td align="center" width="20%">
      <img src="docs/screenshots/mobile.webp" alt="JBV Grúas — Vista Mobile" />
      <br />
      <strong>Mobile</strong>
    </td>
  </tr>
</table>

---

## ⚡ Stack Tecnológico

| Categoría       | Tecnología                                                                    |
| --------------- | ----------------------------------------------------------------------------- |
| Framework       | [Astro 5](https://astro.build/) — Build 100 % estático                       |
| Estilos         | Vanilla CSS — OKLCH, `@layer`, Logical Properties, Custom Properties          |
| JavaScript      | Vanilla ES Modules — Zero dependencies en runtime                             |
| Tipografía      | Bebas Neue _(display)_ · Barlow / Barlow Condensed _(cuerpo)_                |
| SEO             | JSON-LD (`LocalBusiness`), Open Graph, Sitemap XML, `robots.txt`              |
| Formulario      | [Web3Forms](https://web3forms.com/) — Envío de contacto sin backend           |
| Package Manager | [Bun](https://bun.sh/) (recomendado) / npm                                   |
| Despliegue      | [Vercel](https://vercel.com/) — Dominio personalizado `jbvgruas.es`           |

---

## 📁 Estructura del Proyecto

```text
jbv-landing/
├── public/
│   ├── images/                  ← Open Graph image (WebP)
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/              ← Hero backgrounds + fotos optimizadas (WebP)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro     ← Navegación responsive con menú hamburguesa
│   │   │   └── Footer.astro     ← Footer con enlaces legales y contacto
│   │   ├── sections/
│   │   │   ├── Hero.astro       ← Hero con CTA de WhatsApp y llamada
│   │   │   ├── About.astro      ← Sección "Sobre mí" con foto
│   │   │   ├── Services.astro   ← Grid de servicios ofrecidos
│   │   │   ├── Process.astro    ← Proceso paso a paso
│   │   │   ├── WhyUs.astro      ← Razones para elegirnos
│   │   │   └── Contact.astro    ← Formulario de contacto (Web3Forms)
│   │   └── ui/
│   │       └── Icon.astro       ← Componente de iconos SVG inline
│   ├── data/                    ← Contenido estructurado (TypeScript)
│   │   ├── contact.ts
│   │   ├── navigation.ts
│   │   ├── reasons.ts
│   │   ├── services.ts
│   │   └── steps.ts
│   ├── layouts/
│   │   ├── Layout.astro         ← Layout principal con meta SEO
│   │   └── LegalLayout.astro    ← Layout para páginas legales
│   ├── pages/
│   │   ├── index.astro          ← Página principal
│   │   ├── aviso-legal.astro    ← Aviso Legal
│   │   ├── privacidad.astro     ← Política de Privacidad
│   │   ├── cookies.astro        ← Política de Cookies
│   │   └── robots.txt.ts        ← robots.txt dinámico
│   ├── scripts/
│   │   ├── reveal.js            ← Scroll reveal con IntersectionObserver
│   │   └── smooth-scroll.ts     ← Navegación suave entre secciones
│   └── styles/
│       ├── global.css           ← Punto de entrada de estilos
│       └── base/
│           ├── tokens.css       ← Design tokens (colores, tipografía, espaciado)
│           ├── reset.css        ← CSS reset normalizado
│           ├── layout.css       ← Utilidades de layout (contenedores, grid)
│           ├── components.css   ← Estilos base de componentes reutilizables
│           └── animations.css   ← Animaciones y transiciones
├── docs/
│   └── screenshots/             ← Capturas de pantalla del sitio
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Inicio Rápido

### Requisitos previos

- [Node.js](https://nodejs.org/) ≥ 20.0.0
- [Bun](https://bun.sh/) (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ikerodeg/jbv-landing.git
cd jbv-landing

# Instalar dependencias
bun install        # o: npm install
```

### Desarrollo

```bash
bun run dev        # Servidor en http://localhost:4321
```

### Producción

```bash
bun run build      # Genera el sitio estático en dist/
bun run preview    # Vista previa del build
```

### Scripts disponibles

| Script              | Comando              | Descripción                              |
| ------------------- | -------------------- | ---------------------------------------- |
| `dev`               | `bun run dev`        | Servidor de desarrollo con HMR           |
| `build`             | `bun run build`      | Build de producción (estático)           |
| `preview`           | `bun run preview`    | Preview del build de producción          |
| `lint`              | `bun run lint`       | Comprobación de tipos con Astro Check    |
| `check`             | `bun run check`      | Validación completa del proyecto         |

---

## ✨ Características

| Categoría              | Detalle                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------ |
| 🎯 **Rendimiento**     | Build 100 % estático. Cero JavaScript en runtime salvo animaciones de scroll.        |
| 📱 **Responsive**      | Diseño mobile-first con breakpoints fluidos para móvil, tablet y desktop.            |
| 🔍 **SEO**             | Meta tags, Open Graph, JSON-LD (`LocalBusiness`), canonical, sitemap y robots.txt.   |
| 🎨 **CSS Moderno**     | `@layer`, Custom Properties, OKLCH y Logical Properties. Design system escalable.    |
| ♿ **Accesibilidad**    | HTML5 semántico, contraste WCAG, navegación por teclado.                             |
| 📝 **Formulario**      | Contacto funcional con Web3Forms — sin backend propio.                               |
| 📜 **Legal**           | Aviso Legal, Política de Privacidad y Política de Cookies con layout dedicado.       |
| 🖼️ **Imágenes**        | Optimizadas en WebP con variantes por breakpoint (mobile, tablet, desktop).          |
| 🌊 **Animaciones**     | Scroll reveal con `IntersectionObserver` y smooth scroll nativo.                     |

---

## 🌐 Despliegue

El sitio está desplegado en **[Vercel](https://vercel.com/)** con dominio personalizado:

- **Producción**: [www.jbvgruas.es](https://www.jbvgruas.es)
- **Dominio**: `jbvgruas.es` → redirige a `www.jbvgruas.es`

Cada push a la rama `main` dispara un nuevo despliegue automático a través de la integración GitHub ↔ Vercel.

---

## 🔍 SEO & Rendimiento

El sitio implementa las mejores prácticas de posicionamiento web:

- ✅ Meta tags completos (`title`, `description`, `keywords`)
- ✅ Open Graph para vista previa en redes sociales
- ✅ Structured Data con JSON-LD — `schema.org/LocalBusiness`
- ✅ URL canónica por página
- ✅ Atributo `lang="es"` en el documento
- ✅ Sitemap XML generado automáticamente por `@astrojs/sitemap`
- ✅ `robots.txt` dinámico configurado
- ✅ Imágenes optimizadas en formato WebP
- ✅ HTML comprimido en producción (`compressHTML: true`)
- ✅ Inline de estilos críticos automático

---

## 📄 Licencia

El **código fuente** de este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT). Consulta el archivo [LICENSE](./LICENSE) para más detalles.

### Contenido y marca

Las imágenes, logotipos, textos comerciales, contenido de marca y demás material gráfico incluidos en este repositorio son **propiedad exclusiva de JBV Grúas** y **no están cubiertos por la licencia MIT**. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa por escrito del titular.

---

<p align="center">
  Desarrollado con <a href="https://astro.build/">Astro</a> · Desplegado en <a href="https://vercel.com/">Vercel</a>
</p>
