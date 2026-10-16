import { Fragment } from 'react'

const BR = /<br\s*\/?>/i

/**
 * Texto del JSON que admite saltos de línea con <br> (o <br/>, <br />).
 * Solo se interpreta <br>: cualquier otra etiqueta se muestra como texto, así no se inyecta HTML.
 */
export default function Text({ children }) {
  if (typeof children !== 'string' || !BR.test(children)) return children
  return children.split(new RegExp(BR, 'gi')).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {part}
    </Fragment>
  ))
}
