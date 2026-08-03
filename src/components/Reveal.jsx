import { useReveal } from '../hooks/useReveal'

// Wraps children and fades/slides them up into place on scroll.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
