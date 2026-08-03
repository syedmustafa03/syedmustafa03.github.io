import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const SECTION_IDS = ['top', 'about', 'projects', 'contact']

export default function App() {
  const [active, setActive] = useState('top')

  // Cursor-following ambient glow
  useEffect(() => {
    function handleMove(e) {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  // Scroll-spy for nav active state
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="bg-grid" />
      <div className="cursor-glow" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top">
            <span className="brand-dot" />
            mustafa
          </a>
          <nav className="nav">
            {SECTION_IDS.filter((id) => id !== 'top').map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
              >
                {id}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer>
        <div className="wrap">
          built with React + Vite, deployed via GitHub Pages
        </div>
      </footer>
    </>
  )
}
