import { useRef } from 'react'

// GitHub-card-style tilt + glare that follows the cursor.
// Mutates the DOM directly via ref instead of React state, so it stays smooth on every mousemove.
export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const reduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function handleMove(e) {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - py) * 6
    const rotateY = (px - 0.5) * 6
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    el.style.setProperty('--glare-x', `${px * 100}%`)
    el.style.setProperty('--glare-y', `${py * 100}%`)
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}
