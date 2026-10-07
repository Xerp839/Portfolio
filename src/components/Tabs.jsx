import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { education, experience, focusAreas, profile, projects, skills } from '../data'
import { MailIcon } from './Icons'

const TABS = ['About', 'Experience', 'Projects', 'Skills']

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
}

function About() {
  return (
    <div className="panel-grid">
      <motion.div className="card" variants={fade} initial="hidden" animate="show" custom={0}>
        <h3>Summary</h3>
        <p>{profile.summary}</p>
      </motion.div>
      <div className="focus">
        {focusAreas.map((f, i) => (
          <motion.div key={f.title} className="card focus-card" variants={fade} initial="hidden" animate="show" custom={i + 1} whileHover={{ y: -6 }}>
            <span className="focus-num">0{i + 1}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div className="card" variants={fade} initial="hidden" animate="show" custom={5}>
        <h3>Education</h3>
        <ul className="edu">
          {education.map((e) => (
            <li key={e.degree}>
              <div><b>{e.degree}</b><span>{e.school}</span></div>
              <em>{e.period}</em>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="card contact" variants={fade} initial="hidden" animate="show" custom={6}>
        <h3>Contact</h3>
        <a href={`mailto:${profile.email}`}><MailIcon /> {profile.email}</a>
        <span>{profile.phone}</span>
        <span>{profile.location}</span>
      </motion.div>
    </div>
  )
}

function Experience() {
  return (
    <div className="timeline">
      <motion.div className="role-head" variants={fade} initial="hidden" animate="show">
        <h3>{experience.title} <span className="muted">@ {experience.company}</span></h3>
        <em>{experience.period}</em>
      </motion.div>
      {experience.groups.map((g, gi) => (
        <motion.div key={g.name} className="card group" variants={fade} initial="hidden" animate="show" custom={gi + 1}>
          <h4>{g.name}</h4>
          <ul>
            {g.points.map((p) => (
              <li key={p.lead}><b>{p.lead}:</b> {p.text}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

function Projects() {
  return (
    <div className="project-grid">
      {projects.map((p, i) => (
        <motion.article
          key={p.title}
          className="card project"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={i}
          whileHover={{ y: -8 }}
        >
          <div className="project-top">
            <span className="tag">{p.tag}</span>
            <span className="metric">{p.metric}</span>
          </div>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
          <div className="chips">
            {p.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
        </motion.article>
      ))}
    </div>
  )
}

function Skills() {
  return (
    <div className="skill-grid">
      {skills.map((g, gi) => (
        <motion.div key={g.title} className="card" variants={fade} initial="hidden" animate="show" custom={gi}>
          <h3>{g.title}</h3>
          <div className="chips">
            {g.items.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: gi * 0.08 + i * 0.03 }}
                whileHover={{ scale: 1.08 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const VIEWS = { About, Experience, Projects, Skills }

export default function Tabs() {
  const [active, setActive] = useState('About')
  const View = VIEWS[active]
  return (
    <section className="tabs-section">
      <div className="tab-bar" role="tablist">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={active === t} className={`tab ${active === t ? 'active' : ''}`} onClick={() => setActive(t)}>
            {active === t && <motion.span layoutId="tab-pill" className="tab-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
            <span className="tab-label">{t}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
        >
          <View />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
