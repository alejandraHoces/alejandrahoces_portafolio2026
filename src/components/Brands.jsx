import { brands } from '../data/content'
import { stagger, cx } from '../utils/stagger'
import { BrandIcon } from './Icons'

export default function Brands() {
  return (
    <section className="brands wrap" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title fu">{brands.title}</h2>
      <ul className="brands__grid">
        {brands.items.map((b, i) => (
          <li key={i} className={cx('tile fu', stagger(i % 2 ? 2 : 1, i + 1))}>
            <BrandIcon name={b.icon} />
            {b.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
