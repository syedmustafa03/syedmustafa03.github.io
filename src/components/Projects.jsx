import { projects } from '../data/projects'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

function DiffStat({ added, removed }) {
  const total = added + removed
  const addedBlocks = Math.max(1, Math.round((added / total) * 10))
  const removedBlocks = Math.max(1, 10 - addedBlocks)

  return (
    <div className="diffstat">
      <span>+{added}</span>
      <span style={{ color: 'var(--danger)' }}>-{removed}</span>
      <span className="diffstat-bar">
        {Array.from({ length: addedBlocks }).map((_, i) => (
          <span
            className="diffstat-block added"
            key={`a${i}`}
            style={{ animationDelay: `${i * 40}ms` }}
          />
        ))}
        {Array.from({ length: removedBlocks }).map((_, i) => (
          <span
            className="diffstat-block removed"
            key={`r${i}`}
            style={{ animationDelay: `${(addedBlocks + i) * 40}ms` }}
          />
        ))}
      </span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="tag">02</span>
          <h2>Projects</h2>
        </Reveal>

        <div className="commit-log">
          {projects.map((p, i) => (
            <Reveal key={p.hash} delay={i * 90}>
              <TiltCard>
                <div className="commit-top">
                  <span className="commit-hash">{p.hash}</span>
                  <h3 className="commit-title">{p.title}</h3>
                </div>
                <p className="commit-message">{p.message}</p>
                <p className="commit-message" style={{ fontSize: '0.9rem' }}>
                  {p.description}
                </p>

                <div className="commit-stack">
                  {p.stack.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>

                <DiffStat added={p.diff.added} removed={p.diff.removed} />

                <div className="commit-links">
                  {p.links.repo && (
                    <a href={p.links.repo} target="_blank" rel="noreferrer">
                      View repo →
                    </a>
                  )}
                  {p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noreferrer">
                      Live demo →
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
