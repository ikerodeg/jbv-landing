# JBV — Grúas y Esclusas

Landing page profesional para **JBV**, servicio de intermediación de grúas autopropulsadas entre Alemania y España. Desarrollada con Astro 5, HTML semántico y CSS moderno. Optimizada para rendimiento, SEO y despliegue en GitHub Pages.

🔗 **Demo en vivo**: [jbv-landing](https://ikerodeg.github.io/jbv-landing/) _(próximamente)_

---

## Stack Tecnológico

| Categoría        | Tecnología                                                        |
| ---------------- | ----------------------------------------------------------------- |
| Framework        | [Astro 5](https://astro.build/)                                   |
| Estilos          | Vanilla CSS moderno — OKLCH, Logical Properties, `@layer`, Custom Properties |
| JavaScript       | Vanilla ES Modules                                                |
| Tipografía       | Bebas Neue (display) · Barlow / Barlow Condensed (cuerpo)         |
| Package Manager  | [Bun](https://bun.sh/) (recomendado) / npm                       |
| Despliegue       | GitHub Pages                                                      |

---

## Estructura del Proyecto

```text
jbv-landing/
├── public/
│   ├── images/               ← Recursos gráficos (WebP)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   └── Footer.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Services.astro
│   │   │   ├── Process.astro
│   │   │   ├── WhyUs.astro
│   │   │   └── Contact.astro
│   │   └── ui/
│   │       └── Icon.astro
│   ├── data/                  ← Contenido estructurado
│   ├── layouts/
│   │   ├── Layout.astro       ← Layout principal con SEO
│   │   └── LegalLayout.astro  ← Layout para páginas legales
│   ├── pages/
│   │   ├── index.astro        ← Página principal
│   │   ├── aviso-legal.astro
│   │   ├── privacidad.astro
│   │   └── cookies.astro
│   ├── scripts/
│   │   └── reveal.js          ← Scroll reveal con IntersectionObserver
│   └── styles/
│       ├── global.css          ← Punto de entrada de estilos
│       └── base/
│           ├── tokens.css      ← Design tokens (colores, espaciado, tipografía)
│           ├── reset.css       ← Reset CSS normalizado
│           ├── layout.css      ← Utilidades de layout
│           ├── components.css  ← Estilos base de componentes
│           └── animations.css  ← Animaciones y transiciones
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Inicio Rápido

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
bun run dev        # Servidor de desarrollo en http://localhost:4321
```

### Producción

```bash
bun run build      # Genera el sitio estático en dist/
bun run preview    # Vista previa del build de producción
```

### Scripts adicionales

```bash
bun run lint       # Comprobación de tipos con Astro check
bun run check      # Validación del proyecto
```

---

## Características

- **Rendimiento** — Build 100 % estático; sin JavaScript en runtime salvo las animaciones de scroll.
- **SEO completo** — Meta tags, Open Graph, JSON-LD (`LocalBusiness`), canonical URL, sitemap automático y `robots.txt`.
- **Diseño responsivo** — Mobile-first con breakpoints fluidos.
- **CSS moderno** — Uso de `@layer`, Custom Properties, OKLCH y Logical Properties para un design system escalable.
- **Accesibilidad** — HTML5 semántico, contraste adecuado y navegación por teclado.
- **Páginas legales** — Aviso Legal, Política de Privacidad y Política de Cookies con layout dedicado.

---

## Despliegue en GitHub Pages

El sitio está configurado para desplegarse en **GitHub Pages**. El build genera archivos HTML/CSS/JS estáticos en la carpeta `dist/` sin dependencias en runtime.

---

## SEO

El sitio implementa las mejores prácticas de posicionamiento:

- Meta tags completos (`title`, `description`, `keywords`)
- Open Graph para redes sociales
- Structured Data con JSON-LD — `schema.org/LocalBusiness`
- URL canónica por página
- Atributo `lang="es"` en el documento
- Sitemap XML generado automáticamente
- `robots.txt` configurado

---

## Licencia

El **código fuente** de este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT). Consulta el archivo [LICENSE](./LICENSE) para más detalles.

### Contenido y marca

Las imágenes, logotipos, textos comerciales, contenido de marca y demás material gráfico incluidos en este repositorio son **propiedad exclusiva de JBV** y **no están cubiertos por la licencia MIT**. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa por escrito del titular.

---

<p align="center">
  Desarrollado con <a href="https://astro.build/">Astro</a> · Desplegado en <a href="https://pages.github.com/">GitHub Pages</a>
</p>
