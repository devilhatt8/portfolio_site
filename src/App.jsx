import { useEffect, useState } from 'react'
import profilePhoto from './assets/gurnoorbir-singh.jpg'
const skills = [
  { label: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'Tailwind CSS'] },
  { label: 'Backend & data', items: ['Node.js', 'Express', 'PostgreSQL'] },
  { label: 'Foundations', items: ['Data structures', 'Algorithms'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Ubuntu Server'] },
  { label: 'Exploring', items: ['RAG concepts', 'AI developer tools'] },
]

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} title={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
      <span aria-hidden="true">{isDark ? '☼' : '◐'}</span>
      <span className="toggle-label">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

function Header({ theme, onToggle }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Gurnoorbir Singh, home"><span className="wordmark-mark">g<span>.</span></span><span>Gurnoorbir Singh</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="sakura-branch" aria-hidden="true">
        <i className="branch-main" /><i className="branch-upper" /><i className="branch-lower" />
        <b className="blossom blossom-one" /><b className="blossom blossom-two" /><b className="blossom blossom-three" /><b className="blossom blossom-four" />
      </div>
      <div className="sakura-petals" aria-hidden="true">
        <i /><i /><i /><i /><i /><i /><i />
      </div>
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Student Developer <span className="eyebrow-sep">/</span> MAIT · 2024–2028</p>
        <h1 id="hero-title">Building AI tools<br />and <span>self-hosted systems.</span></h1>
        <p className="hero-description">I’m Gurnoorbir Singh, a B.Tech student building practical software: AI-assisted developer tools, home infrastructure, and full-stack web projects.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
          <a className="button button-quiet" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
        </div>
        <p className="availability"><span className="availability-rule" /> Learning through systems I can build, use, and improve.</p>
      </div>
      <aside className="hero-note" aria-label="Portrait and current focus">
        <div className="portrait-frame"><img src={profilePhoto} alt="Gurnoorbir Singh outdoors in a mountain landscape" /></div>
        <span>Current focus</span>
        <p>Reliable systems, thoughtful tooling, and honest iteration.</p>
      </aside>
      <a className="scroll-cue" href="#work" aria-label="Scroll to projects">SCROLL TO PROJECTS <span aria-hidden="true">↓</span></a>
    </section>
  )
}

function SectionHeading({ index, title, note }) {
  return <div className="section-heading"><p className="section-index">{index} <span>/</span></p><h2>{title}</h2>{note && <p className="section-note">{note}</p>}</div>
}

function About() {
  return (
    <section className="content-section about-section" id="about">
      <SectionHeading index="02" title="A little about me" />
      <div className="about-grid">
        <p className="about-lede">Curious by default.<br />Learning by <span>building.</span></p>
        <div className="about-copy"><p>I’m strengthening my computer science fundamentals while building projects that help me learn beyond the classroom. I’m currently pursuing a B.Tech at Maharaja Agrasen Institute of Technology (2024–2028). My interests include C++, problem-solving, and exploring how retrieval-augmented generation can make AI tools more useful for developers.</p><p>I value clear thinking, maintainable code, and honest progress. This portfolio will grow as I build, test, and ship more projects.</p><a href="#contact" className="text-link">A note or a question? Say hello <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  )
}

function Project() {
  return (
    <section className="content-section work-section" id="work">
      <SectionHeading index="01" title="Selected work" note="Software projects and systems built." />
      <article className="project-feature home-lab" aria-labelledby="home-server-title">
        <div className="project-topline"><span className="project-number">PROJECT 001 <span aria-hidden="true">/</span> HOME LAB</span><span className="project-status"><span /> Running at home</span></div>
        <div className="project-main"><div><h3 id="home-server-title">Home Media &amp;<br />Backup Server<span className="title-period">.</span></h3></div><div className="project-intro"><p>A budget Ubuntu Server that keeps personal photo backups and runs private media streaming services across my home network.</p><div className="project-tags" aria-label="Home Lab technologies"><span>Docker</span><span>Jellyfin</span><span>Immich</span><span>RAID 1</span></div></div></div>
        <div className="project-divider" />
        <div className="project-details home-lab-details"><div><p className="detail-label">SERVICES</p><p>Jellyfin for home media streaming and Immich as a self-hosted Google Photos alternative for personal backups.</p></div><div><p className="detail-label">HARDWARE</p><p>AMD FX-4300 · 8 GB DDR3 · 256 GB SATA SSD for Ubuntu Server. Built-in gigabit Ethernet; no add-in networking card.</p></div><div><p className="detail-label">STORAGE &amp; RESILIENCE</p><p>RAID 1 across four older drives: two 1 TB and two 512 GB. Chosen to add redundancy because the drives had low reported health.</p></div><div><p className="detail-label">OPERATIONS</p><p>Connected to a UPS and configured for wake-on-LAN so it can be started over the network when needed.</p></div></div>
        <div className="project-footer"><span>BUILT TO BE USED <span aria-hidden="true">↗</span></span><a className="project-source-link" href="https://github.com/devilhatt8/home-server-" target="_blank" rel="noreferrer">Read the build notes <span aria-hidden="true">↗</span></a></div>
      </article>
      <article className="project-secondary" aria-labelledby="rag-title">
        <div className="project-secondary-heading"><span className="project-number">PROJECT 002 <span aria-hidden="true">/</span> AI TOOLING</span><h3 id="rag-title">Multi-RAG Code Reviewer</h3></div>
        <div className="project-secondary-copy"><p>An in-development code-review tool exploring how retrieval-augmented context can make AI feedback more aware of a codebase, its conventions, and its documentation.</p><span className="project-status"><span /> Partially working · In progress</span></div>
      </article>
    </section>
  )
}

function Skills() {
  return (
    <section className="content-section skills-section" id="skills">
      <SectionHeading index="03" title="Tools & interests" note="A growing toolkit, built one concept at a time." />
      <div className="skill-list">{skills.map((group) => <div className="skill-row" key={group.label}><span className="skill-label">{group.label}</span><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div><p className="section-index">04 <span>/</span> CONTACT</p><h2>Good work starts<br />with a <span>conversation.</span></h2><p className="contact-copy">Have a project idea, a question, or just want to connect? I’d be happy to hear from you.</p></div>
      <div className="contact-aside"><span className="contact-prompt">$ open_to_conversation</span><div className="contact-links" aria-label="Contact links"><a className="contact-link" href="mailto:gurnoor.bsingh@gmail.com"><span>Email</span><span aria-hidden="true">↗</span></a><a className="contact-link" href="https://github.com/devilhatt8" target="_blank" rel="noreferrer"><span>GitHub</span><span aria-hidden="true">↗</span></a><a className="contact-link" href="https://www.linkedin.com/in/gurnoorbir-singh-937184325" target="_blank" rel="noreferrer"><span>LinkedIn</span><span aria-hidden="true">↗</span></a></div></div>
    </section>
  )
}

function Footer() {
  return <footer className="site-footer"><a className="wordmark" href="#home"><span className="wordmark-mark">g<span>.</span></span><span>Gurnoorbir Singh</span></a><p>Designed &amp; built with care.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') }
    catch { return 'light' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Storage can be disabled. */ }
  }, [theme])
  return <><a className="skip-link" href="#main">Skip to content</a><div className="page-shell"><Header theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><main id="main"><Hero /><Project /><About /><Skills /><Contact /></main><Footer /></div></>
}
