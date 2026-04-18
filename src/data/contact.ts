/**
 * Datos de contacto de JBV — fuente única de verdad.
 * Actualizar aquí cuando cambien teléfono, email o redes sociales.
 */

const PHONE_RAW = '+34642353608';
const PHONE_DISPLAY = '+34 642 353 608';
const EMAIL = 'jbvconductor@outlook.es';

export const contact = {
  /** Teléfono sin espacios (para href tel: y JSON-LD) */
  phone: PHONE_RAW,
  /** Teléfono formateado para mostrar al usuario */
  phoneDisplay: PHONE_DISPLAY,
  /** URL de WhatsApp directo */
  whatsapp: `https://wa.me/${PHONE_RAW.replace('+', '')}`,
  /** Enlace tel: para etiquetas <a> */
  phoneTel: `tel:${PHONE_RAW}`,
  /** Email */
  email: EMAIL,
  /** Enlace mailto: para etiquetas <a> */
  emailHref: `mailto:${EMAIL}`,
} as const;
