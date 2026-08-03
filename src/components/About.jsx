import { skills } from '../data/projects'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="tag">01</span>
          <h2>About</h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="about-text">
            I'm a Software Engineer who likes building
            things end-to-end — from database schema to a working UI. Lately
            most of my work has centered on retrieval-augmented generation:
            connecting language models to real documents through vector search
            so answers stay grounded and verifiable. Outside of coursework, I
            build and document full projects the way I'd want a teammate to
            hand them to me.
          </p>
        </Reveal>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} className="skill-group" delay={i * 70}>
              <h3>{group}</h3>
              <div className="skill-chips">
                {items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
