import { useEffect, useState } from 'react'
import ContributionGraph from './ContributionGraph'

const COMMAND = 'whoami'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setTyped(COMMAND)
      setShowOutput(true)
      return
    }

    let i = 0
    const typeInterval = setInterval(() => {
      i += 1
      setTyped(COMMAND.slice(0, i))
      if (i >= COMMAND.length) {
        clearInterval(typeInterval)
        setTimeout(() => setShowOutput(true), 300)
      }
    }, 90)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section className="hero" style={{ borderTop: 'none' }} id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow fade-up" style={{ animationDelay: '0ms' }}>
              // portfolio.init()
            </p>
            <h1 className="fade-up" style={{ animationDelay: '80ms' }}>
              Mustafa — Software Engineer
            </h1>
            <p className="lead fade-up" style={{ animationDelay: '160ms' }}>
              A Software Engineer  building full-stack
              applications and retrieval-augmented AI systems. This site tracks
              real, shipped work — not just a list of skills.
            </p>
            <div className="hero-cta fade-up" style={{ animationDelay: '240ms' }}>
              <a className="btn btn-primary" href="#projects">View projects</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: '200ms' }}>
            <div className="terminal">
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#ff5f57' }} />
                <span className="terminal-dot" style={{ background: '#febc2e' }} />
                <span className="terminal-dot" style={{ background: '#28c840' }} />
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span>
                    {typed}
                    {!showOutput && <span className="cursor-blink" />}
                  </span>
                </div>
                {showOutput && (
                  <>
                    <div className="terminal-line fade-up" style={{ animationDelay: '0ms' }}>
                      <span className="terminal-output">
                        <strong>Mustafa</strong> — · Python · React · LangChain
                      </span>
                    </div>
                    <div className="terminal-line fade-up" style={{ animationDelay: '120ms' }}>
                      <span className="terminal-prompt">$</span>
                      <span>contributions --last-year</span>
                    </div>
                    <div className="fade-up" style={{ animationDelay: '220ms', marginTop: '10px' }}>
                      <ContributionGraph weeks={26} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
