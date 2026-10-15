import { Fragment } from 'react'

/**
 * Texto en varias líneas definido en el JSON como ["línea 1", "línea 2"].
 * Por defecto el salto solo existe en desktop (en mobile las líneas fluyen seguidas);
 * con `always` el salto se ve en todos los tamaños. Un string simple se muestra tal cual.
 */
export default function Lines({ lines, always = false }) {
  if (!Array.isArray(lines)) return lines
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && (always ? <br /> : <><br className="br-desktop" />{' '}</>)}
      {line}
    </Fragment>
  ))
}
