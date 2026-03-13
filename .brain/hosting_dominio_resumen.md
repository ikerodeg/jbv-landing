# Hosting, Dominio y Formulario — Decisiones Acordadas

> Fecha: 12 de marzo de 2026

---

## Stack de producción

| Pieza | Servicio | Coste |
|---|---|---|
| Código fuente | GitHub (repo privado, cuenta del desarrollador) | 0€ |
| Hosting | Cloudflare Pages | 0€ |
| Formulario de contacto | FormSubmit.co | 0€ |
| Dominio | Por determinar (Cloudflare / Namecheap / Porkbun) | ~10-15€/año |
| **Total anual** | | **~10-15€/año** |

---

## Decisiones clave

### GitHub
- Repo **privado** en la cuenta personal del desarrollador
- El desarrollador mantiene el control del código fuente
- Si es necesario, se puede transferir el repo o dar acceso de colaborador al cliente

### Cloudflare Pages
- Hosting gratuito con CDN global y bandwidth ilimitado
- SSL/HTTPS automático
- Deploy automático al hacer `git push`
- Compatible oficialmente con Astro SSG
- Escala sin problemas (no hay límite de visitas)

### FormSubmit.co
- Servicio gratuito de procesamiento de formularios (envíos ilimitados)
- No requiere registro previo
- Recibe los datos del formulario y los reenvía por email al cliente
- Necesario porque el sitio es estático y JS en el navegador no puede enviar emails
- **Pendiente**: implementar en `Contact.astro` (cambio de 1 línea) + email real del cliente

### Dominio
- **Pendiente**: decidir el dominio real (actualmente `https://www.jbv.com` como placeholder)
- Al elegir dominio, actualizar:
  - `astro.config.mjs` → `site`
  - `public/robots.txt` → URL del sitemap
  - `Layout.astro` → canonical, structured data

---

## Flujo de deploy

```
Editar código → git push → Cloudflare Pages detecta cambio → Web actualizada (~30s)
```

---

## Requisitos previos al lanzamiento

- [ ] Comprar el dominio real
- [ ] Actualizar URLs placeholder en el código (dominio, teléfono, redes sociales)
- [ ] Implementar FormSubmit.co con email real del cliente
- [ ] Crear cuenta Cloudflare Pages y conectar el repo
- [ ] Configurar dominio personalizado en Cloudflare Pages
- [ ] Crear Google Business Profile
- [ ] Registrar en Google Search Console y enviar sitemap
- [ ] Instalar Google Analytics (GA4)
