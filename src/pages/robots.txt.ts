import type { APIRoute } from 'astro';

// robots.txt generado dinámicamente.
// La URL del sitemap se extrae de `site` en astro.config.mjs,
// por lo que cambia automáticamente al actualizar el dominio.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};
