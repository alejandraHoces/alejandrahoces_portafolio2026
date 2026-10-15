import { cx } from '../utils/stagger'

export default function Eyebrow({ children, className }) {
  return (
    <p className={cx('eyebrow fu', className)}>
      <span className="eyebrow__mark serif" aria-hidden="true">ah</span>
      {children}
    </p>
  )
}
