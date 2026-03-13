# Estrategia SEO/SEM para JBV + Auditoría Técnica

## Parte 1 — Estrategia de posicionamiento para una empresa nueva

### Contexto del negocio

JBV es una empresa de **nueva creación** en un nicho muy específico: **intermediación de grúas autopropulsadas entre Alemania y España**. Esto tiene implicaciones importantes:

- **Competencia baja** → El nicho "grúas autopropulsadas Alemania España" tiene relativamente pocos competidores online
- **Búsquedas de alto valor** → Cada lead puede significar operaciones de miles de euros
- **Público B2B** → Empresas de construcción, no usuarios domésticos

---

### Recomendación estratégica: SEO orgánico + Google My Business (SEM solo después)

Para una empresa nueva con presupuesto limitado, **NO recomiendo empezar con Google Ads**. Este es el orden que sugiero:

#### Fase 1 — Gratuita (ya hecha o casi) ⏱ Inmediata

| Acción | Estado | Coste |
|---|---|---|
| SEO on-page (meta tags, structured data, HTML semántico) | ✅ Implementado | 0€ |
| Sitemap + robots.txt | ✅ Implementado | 0€ |
| Velocidad de carga (Astro SSG) | ✅ Excelente | 0€ |
| SSL/HTTPS | Depende del hosting | 0€ (si usas Vercel/Netlify) |

#### Fase 2 — Gratuita pero requiere acción ⏱ Primera semana

| Acción | Qué hacer | Coste |
|---|---|---|
| **Google Business Profile** | Crear perfil en [business.google.com](https://business.google.com). Poner dirección, teléfono, fotos, horario. Es FUNDAMENTAL para aparecer en las búsquedas locales y en Google Maps | 0€ |
| **Google Search Console** | Registrar el sitio en [search.google.com/search-console](https://search.google.com/search-console). Enviar el sitemap. Monitorizar qué palabras clave encuentran tu web | 0€ |
| **Google Analytics** | Instalar GA4 para saber cuántas visitas recibes, de dónde vienen, etc. | 0€ |
| **Redes sociales** | Crear perfil en LinkedIn (B2B) e Instagram (portfolio visual de grúas). Los links de "sameAs" del structured data deben ser reales | 0€ |

#### Fase 3 — Contenido (SEO a medio plazo) ⏱ Meses 1-6

> [!IMPORTANT]
> **El contenido es el rey del SEO orgánico.** Una single-page no posiciona tan bien como un sitio con varias páginas de contenido relevante.

Opciones que tu cliente podría considerar:

| Acción | Impacto SEO | Esfuerzo | Coste |
|---|---|---|---|
| **Blog** con artículos sobre grúas (tipos, comparativas, guías de compra) | 🔥 Alto | Medio | DIY: 0€ / Freelancer: 50-150€/artículo |
| **Fichas de producto** (grúas disponibles, con fotos y especificaciones) | 🔥 Alto | Alto | Depende del catálogo |
| **Casos de éxito** (clientes satisfechos con fotos de las grúas entregadas) | 🔥 Medio-Alto | Bajo | 0€ |
| **Página de FAQ** (preguntas frecuentes sobre el proceso, garantías, transporte) | 🔥 Medio | Bajo | 0€ |

#### Fase 4 — SEM/Google Ads (solo si hay presupuesto) ⏱ Opcional

| Concepto | Detalle |
|---|---|
| **CPC estimado** | 1-5€ por clic en keywords como "comprar grúa autopropulsada", "grúas Alemania" |
| **Presupuesto mínimo recomendado** | 300-500€/mes para empezar a testear |
| **Presupuesto competitivo** | 800-1500€/mes |
| **Plataforma** | [ads.google.com](https://ads.google.com) — se puede gestionar uno mismo o contratar |
| **¿Cuándo tiene sentido?** | Cuando el SEO orgánico ya esté asentado (3-6 meses) o si se necesitan leads inmediatos |

> [!TIP]
> **Mi recomendación para JBV**: Empieza por las **Fases 1-2** (gratuitas) y valora la **Fase 3** (contenido). Google Ads solo tiene sentido si el cliente tiene prisa por generar leads o quiere invertir como complemento. En un nicho tan específico, el SEO orgánico bien hecho puede dar resultados muy buenos sin necesidad de pagar publicidad.

### Rango de precios si se contrata externamente

| Servicio | Rango de precios | Nivel |
|---|---|---|
| SEO on-page básico (lo que ya tenemos) | 200-500€ (pago único) | ✅ Ya hecho |
| SEO completo mensual (agencia) | 300-1.500€/mes | Profesional |
| Consultor SEO freelance | 150-600€/mes | Más asequible |
| Gestión Google Ads (agencia) | 200-500€/mes + presupuesto Ads | Profesional |
| Redacción SEO (blog) | 50-150€/artículo | Freelance |

---

## Parte 2 — Auditoría SEO Técnica

### ✅ Lo que está BIEN implementado

| Elemento | Estado | Detalle |
|---|---|---|
| **Meta title** | ✅ | `JBV \| Intermediario de Grúas Autopropulsadas Alemania–España` — Descriptivo con keywords |
| **Meta description** | ✅ | 160 caracteres, incluye keywords principales |
| **Canonical URL** | ✅ | Configurado dinámicamente en [Layout.astro](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/src/layouts/Layout.astro) y [LegalLayout.astro](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/src/layouts/LegalLayout.astro) |
| **Open Graph** | ✅ | Completo: type, url, title, description, image, locale, site_name |
| **Twitter Card** | ✅ | `summary_large_image` con title, description, image |
| **Structured Data (JSON-LD)** | ✅ | Schema `LocalBusiness` con servicios, fundador, áreas |
| **Sitemap** | ✅ | Generado automáticamente con [@astrojs/sitemap](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/node_modules/@astrojs/sitemap) (4 URLs) |
| **robots.txt** | ✅ | `Allow: /` con referencia al sitemap |
| **HTML semántico** | ✅ | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` |
| **Accesibilidad (ARIA)** | ✅ | `aria-label` en secciones, nav, botones, formulario, links |
| **Jerarquía de headings** | ✅ | Un solo `<h1>` ("JBV"), `<h2>` en cada sección, `<h3>` en sub-items |
| **Idioma** | ✅ | `<html lang="es">` |
| **Viewport** | ✅ | Correcto |
| **Compresión HTML** | ✅ | `compressHTML: true` en Astro config |
| **Inline stylesheets** | ✅ | `inlineStylesheets: 'auto'` para optimización CSS |
| **Preload de imágenes críticas** | ✅ | Imagen hero con `fetchpriority="high"` y `<link rel="preload">` |
| **Imágenes WebP** | ✅ | Usando `astro:assets` para optimización automática |
| **Alt text en imágenes** | ⚠️ Parcial | Imagen de Ximo tiene alt ✅, hero bg tiene `alt=""` (correcto para decorativa) |
| **Formulario de contacto** | ✅ | Labels, inputs con `autocomplete`, validación, honeypot anti-spam |
| **Fonts optimization** | ✅ | `preconnect` a Google Fonts, `display=swap` |
| **Páginas legales** | ✅ | Aviso legal, cookies, privacidad — todas con canonical propio |

### ⚠️ Problemas encontrados que hay que corregir

#### 1. 🔴 URLs placeholder en Structured Data
En [Layout.astro](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/src/layouts/Layout.astro#L36-L41):
```json
"sameAs": [
  "https://facebook.com/placeholder",
  "https://instagram.com/placeholder",
  ...
]
```
**Impacto**: Google puede marcar el structured data como inválido. Si no hay redes sociales reales, **eliminar** el campo `sameAs` por completo.

#### 2. 🔴 Teléfono ficticio en Structured Data
En [Layout.astro](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/src/layouts/Layout.astro#L27):
```json
"telephone": "+34600000000"
```
**Impacto**: Google puede detectar datos falsos y penalizar la credibilidad. Hay que poner el teléfono real del cliente.

#### 3. 🔴 URL del sitio ficticia
En [astro.config.mjs](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/astro.config.mjs#L5):
```js
site: 'https://www.jbv.com'
```
Y en [robots.txt](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/public/robots.txt):
```
Sitemap: https://www.jbv.com/sitemap-index.xml
```
**Impacto**: Todo el sitemap, canonical y OG apuntan al dominio incorrecto. Hay que actualizarlo con el dominio real antes de publicar.

#### 4. 🟡 El `<h1>` solo dice "JBV"
En [Hero.astro](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/src/components/sections/Hero.astro#L18):
```html
<h1 class="hero-title">JBV</h1>
```
**Impacto**: El `<h1>` es la etiqueta más importante para SEO. "JBV" por sí solo no le dice nada a Google. Opciones:
- Cambiar visualmente: `<h1>JBV — Grúas Autopropulsadas</h1>`
- O mantener el diseño pero añadir texto oculto accesible: `<h1><span aria-hidden="true">JBV</span><span class="sr-only">JBV - Intermediación de Grúas Autopropulsadas Alemania España</span></h1>`

#### 5. 🟡 Falta favicon completo
Solo hay un [favicon.svg](file:///home/ocp2k/Desarrolloweb/Projects/jbv-landing2/public/favicon.svg). Para máxima compatibilidad se recomienda tener también:
- `favicon.ico` (32×32)
- `apple-touch-icon.png` (180×180)
- `site.webmanifest`

#### 6. 🟡 Falta `<meta name="google-site-verification">`
Necesario para verificar el sitio en Google Search Console. Se añade después de crear la cuenta.

### Resumen de la auditoría

| Categoría | Puntuación |
|---|---|
| Meta tags y SEO on-page | ⭐⭐⭐⭐⭐ 9/10 |
| Structured Data | ⭐⭐⭐ 6/10 (por datos ficticios) |
| Performance | ⭐⭐⭐⭐⭐ 10/10 |
| Accesibilidad | ⭐⭐⭐⭐ 9/10 |
| HTML semántico | ⭐⭐⭐⭐⭐ 10/10 |
| Contenido SEO | ⭐⭐⭐ 6/10 (single-page, pocas keywords) |
| **Total** | **~8.3/10** |

> [!NOTE]
> La web está **muy bien preparada técnicamente** para SEO. Los problemas principales son datos ficticios que habrá que sustituir por reales antes de publicar, y la limitación inherente de una single-page para posicionamiento de keywords variadas.
