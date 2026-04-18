const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const navigationLinks = [
  { href: `${base}/#inicio`, label: 'Inicio' },
  { href: `${base}/#sobre-mi`, label: 'Sobre Mí' },
  { href: `${base}/#servicios`, label: 'Servicios' },
  { href: `${base}/#proceso`, label: 'Proceso' },
  { href: `${base}/#por-que`, label: 'Por Qué' },
  { href: `${base}/#contacto`, label: 'Contacto' },
];
