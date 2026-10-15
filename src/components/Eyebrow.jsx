import { site } from '../data/content'
import { cx } from '../utils/stagger'

export default function Eyebrow({ children, className }) {
  return (
    <p className={cx('eyebrow fu', className)}>
      <span className="eyebrow__mark serif" aria-hidden="true">{site.initials}</span>
      {children}
    </p>
  )
}
