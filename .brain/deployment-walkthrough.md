# JBV Landing — Guía de Despliegue a Producción

> **Autor:** Antigravity (Full-Stack Engineer)  
> **Fecha:** 2026-04-01  
> **Estado del proyecto:** Build estable ✅ | Formulario decorativo ⚠️ | Dominio pendiente ⚠️

---

## Orden de ejecución recomendado

```
1. Web3Forms  →  2. Vercel  →  3. DonDominio  →  4. Post-launch
```

El orden importa: el formulario se conecta **antes** de subir a producción para no tener que hacer un re-deploy solo para eso. Vercel va antes que el dominio porque necesitas la URL de Vercel para configurar los DNS.

---

## FASE 1 — Conectar el formulario (Web3Forms)

### Por qué Web3Forms
- Gratuito hasta 250 envíos/mes
- Sin backend, funciona 100% desde el cliente
- Protección anti-spam integrada (honeypot + captcha opcional)
- El proyecto ya tiene el honeypot implementado

### Pasos

**1.1 Crear cuenta**
- Ve a [web3forms.com](https://web3forms.com)
- Regístrate con el email del cliente: `jbvconductor@outlook.es`
- Haz clic en **"Create your Access Key"**
- Copia el `access_key` (formato: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

**1.2 Actualizar `Contact.astro`**

En `src/components/sections/Contact.astro`, localiza el `<form>`:

```astro
<form
  class="contact-form"
  id="contact-form"
  action="#"          ← cambiar
  method="post"
```

Añade un campo oculto con el access key dentro del `<form>`, justo arriba del primer `.form-row`:

```html
<!-- Web3Forms config -->
<input type="hidden" name="access_key" value="TU-ACCESS-KEY-AQUI" />
<input type="hidden" name="subject" value="Nueva consulta desde JBV — Grúas" />
<input type="hidden" name="from_name" value="JBV Landing Page" />
<input type="hidden" name="redirect" value="false" />
```

**1.3 Modificar el JS del formulario**

En el mismo `Contact.astro`, el script de envío actual es decorativo. Reemplaza la lógica con:

```js
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validación existente ...

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: json,
    });
    const data = await res.json();

    if (data.success) {
      form.hidden = true;
      if (success) success.hidden = false;
    } else {
      console.error('Web3Forms error:', data);
      // mostrar mensaje de error al usuario
    }
  } catch (err) {
    console.error('Network error:', err);
  }
});
```

**1.4 Verificar**
- Rellena el formulario en local (`bun run dev`)
- Comprueba que llega un email a `jbvconductor@outlook.es`
- El panel de Web3Forms muestra los envíos en tiempo real

---

## FASE 2 — Desplegar en Vercel

### Por qué Vercel
- Hobby plan **gratuito** para proyectos estáticos/SSG
- CI/CD automático: cada `git push` = nuevo deploy
- URL HTTPS gratuita (`jbv-landing.vercel.app`)
- CDN global, rendimiento excelente para usuarios en España/Alemania

### Preparar el repositorio

**2.1 Asegurar que el repo existe en GitHub**

Si aún no está en GitHub:
```bash
git init
git add .
git commit -m "feat: proyecto listo para producción"
gh repo create jbv-landing --public --source=. --push
# o manualmente en github.com → New repository
```

**2.2 Ajustar `astro.config.mjs` para Vercel**

Cuando despliegues en Vercel con dominio propio, el `base` ya no es necesario. Pero **antes de tener el dominio**, mantén la config actual. Cuando tengas el dominio:

```js
// astro.config.mjs — versión final con dominio propio
export default defineConfig({
  site: 'https://www.jbv.com',
  base: '/',           // ← quitar el /jbv-landing
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
```

> [!IMPORTANT]
> No cambies `site` ni `base` hasta tener el dominio apuntando a Vercel. Si lo cambias antes, los links internos se romperán en el deploy provisional.

### Desplegar

**2.3 Conectar Vercel con GitHub**

1. Ve a [vercel.com](https://vercel.com) → **Sign up with GitHub**
2. **Add New Project** → Import el repo `jbv-landing`
3. Vercel detecta Astro automáticamente. Configuración que aplica sola:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build` (o `astro build`)
   - **Output Directory:** `dist`
4. Haz clic en **Deploy**

**2.4 Verificar el deploy**

- Vercel te da una URL: `https://jbv-landing-xxxx.vercel.app`
- Navega por todas las páginas, comprueba:
  - Hero, About, Contact, footer
  - `/privacidad/` y `/aviso-legal/` funcionan
  - El formulario envía emails
  - Las imágenes cargan correctamente

---

## FASE 3 — Dominio en DonDominio

### 3.1 Comprar el dominio

1. Ve a [dondominio.com](https://www.dondominio.com)
2. Busca `jbv.com` (o la variante disponible: `jbvconductor.com`, `jbvgruas.es`, etc.)
3. Completa la compra. Precio orientativo: 10-15€/año para `.es`, 12-20€ para `.com`

> [!TIP]
> Si `jbv.com` no está disponible o es muy caro (puede estar en reventa), alternativas recomendadas:
> - `jbvgruas.com` / `jbvgruas.es`
> - `jbv-gruas.es`
> - `jbvconductor.es`
> El `.es` es perferable para SEO local español.

### 3.2 Configurar DNS en DonDominio → Vercel

**En Vercel:**
1. Ve a tu proyecto → **Settings → Domains**
2. Añade tu dominio: `www.jbv.com` (y también `jbv.com` sin www)
3. Vercel te mostrará los DNS records a configurar

**En DonDominio:**
1. Panel de control → **DNS / Nameservers** → Gestión DNS
2. Añade los registros que Vercel indica (normalmente):

| Tipo | Nombre | Valor |
|------|--------|-------|
| `A` | `@` | `76.76.21.21` (IP de Vercel) |
| `CNAME` | `www` | `cname.vercel-dns.com` |

3. Propagación DNS: **entre 15 minutos y 48 horas** (usual: 1-2h)

> [!NOTE]
> Vercel gestiona el certificado SSL/TLS (HTTPS) automáticamente mediante Let's Encrypt. No necesitas comprar ni configurar ningún certificado.

### 3.3 Verificar la propagación

```bash
# Comprueba si los DNS ya han propagado
dig www.jbv.com
# O usa: https://dnschecker.org
```

---

## FASE 4 — Post-lanzamiento (después de tener dominio)

### 4.1 Actualizar `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://www.jbv.com',  // ← dominio real
  base: '/',                    // ← sin subfolder
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
```

Haz commit y push → Vercel desplegará automáticamente.

### 4.2 Actualizar el canonical en `Layout.astro`

```js
canonical = "https://www.jbv.com",  // ya está correcto
```

Esto ya está bien. Al actualizar `astro.config.mjs`, el `canonical` en `LegalLayout.astro` también se actualizará automáticamente porque usa `Astro.site`.

### 4.3 Verificar el sitemap

```
https://www.jbv.com/sitemap-index.xml
```

Debe listar todas las páginas. Si funciona, envíalo a Google Search Console.

### 4.4 Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Añade propiedad → Tipo **URL prefix** → `https://www.jbv.com`
3. Verifica el dominio con el método HTML tag (añadir `<meta name="google-site-verification" content="...">` en el `<head>` de `Layout.astro`)
4. Una vez verificado: **Sitemaps** → Envía `https://www.jbv.com/sitemap-index.xml`

### 4.5 Redes sociales (si el cliente las tiene)

Actualizar en `Layout.astro` el bloque `sameAs` del JSON-LD:

```js
sameAs: [
  "https://www.linkedin.com/in/cuenta-real",
  // añadir solo las redes que realmente existan
],
```

### 4.6 Limpiar imágenes no usadas (punto 10 del audit)

```bash
# Imágenes que se pueden eliminar de src/assets/images/
rm src/assets/images/bg-crane-mobile5.webp   # 1.7MB — no usada
rm src/assets/images/bg-crane-mobile2.webp   # no usada
rm src/assets/images/bg-crane-mobile3.webp   # no usada
rm src/assets/images/bg-crane-desk1.jpg      # no usada, además en .jpg
rm src/assets/images/bg-crane-desk3.webp     # no usada
rm src/assets/images/1744657373201.jpeg      # captura temporal, borrar
```

Hacer commit después del borrado y verificar que el build sigue limpio.

---

## Checklist de lanzamiento

```
PRE-DEPLOY
[ ] Formulario Web3Forms conectado y probado
[ ] Build limpio sin errores (npm run build)
[ ] Todas las secciones visibles en local

VERCEL
[ ] Repo en GitHub actualizado
[ ] Deploy en Vercel completado
[ ] URL provisional verificada (todas las páginas)
[ ] Formulario funciona en producción

DOMINIO
[ ] Dominio comprado en DonDominio
[ ] DNS configurados (A + CNAME hacia Vercel)
[ ] DNS propagados (https://dnschecker.org)
[ ] HTTPS activo (Vercel lo gestiona automáticamente)

POST-LAUNCH
[ ] astro.config.mjs actualizado con site real + base '/'
[ ] Nuevo deploy tras cambio de config
[ ] Sitemap accesible: https://www.jbv.com/sitemap-index.xml
[ ] Google Search Console configurado
[ ] Sitemap enviado a GSC
[ ] JSON-LD sameAs actualizado con redes reales
[ ] Imágenes no usadas eliminadas
[ ] Test de velocidad: https://pagespeed.web.dev
[ ] Test OG/Twitter card: https://opengraph.xyz
```

---

## Recursos útiles

| Herramienta | URL | Para qué |
|---|---|---|
| Web3Forms | web3forms.com | Formulario de contacto |
| Vercel | vercel.com | Hosting y CI/CD |
| DonDominio | dondominio.com | Compra del dominio |
| DNS Checker | dnschecker.org | Verificar propagación DNS |
| PageSpeed | pagespeed.web.dev | Core Web Vitals |
| OpenGraph.xyz | opengraph.xyz | Preview OG image en redes |
| Google GSC | search.google.com/search-console | Indexación SEO |
| Schema Validator | validator.schema.org | Validar JSON-LD |
