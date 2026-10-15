/**
 * Escalonado de los reveals al hacer scroll.
 * El diseño usa un escalonado distinto en mobile y en desktop
 * (p. ej. en mobile las marcas van en 2 columnas y en desktop en 6),
 * así que cada elemento recibe un paso para mobile (sm-*) y otro para desktop (sd-*).
 * El paso 1 es el valor por defecto y no añade clase.
 */
export function stagger(mobileStep = 1, desktopStep = mobileStep) {
  const c = []
  if (mobileStep > 1) c.push(`sm-${mobileStep}`)
  if (desktopStep > 1) c.push(`sd-${desktopStep}`)
  return c.join(' ')
}

export const cx = (...classes) => classes.filter(Boolean).join(' ')
