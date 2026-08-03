import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="tag">03</span>
          <h2>Contact</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="about-text">
            Open to internships, collaboration, and interesting problems.
            Reach out through any of these:
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="contact-list">
            <a href="mailto:syyedmustafa3@gmail.com">
              <span className="k">email</span> syyedmustafa3@gmail.com
            </a>
            <a href="https://github.com/syedmustafa03" target="_blank" rel="noreferrer">
              <span className="k">github</span> github.com/syedmustafa03
            </a>
            <a href="https://linkedin.com/in/syyedmustafa3" target="_blank" rel="noreferrer">
              <span className="k">linkedin</span> linkedin.com/in/syyedmustafa3
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <span className="k">resume</span> download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
