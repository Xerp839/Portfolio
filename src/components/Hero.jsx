import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, roles } from '../data'
import { MailIcon } from './Icons'

function Typewriter({ words }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i]
    const delay = deleting ? 35 : text === word ? 1400 : 75
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setI((i + 1) % words.length)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return (
    <span className="typed">
      {text}
      <span className="caret" />
    </span>
  )
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }

export default function Hero() {
  return (
    <section className="hero">
      <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
        <motion.span className="eyebrow" variants={item}>
          <i className="pulse" /> Open to opportunities
        </motion.span>
        <motion.h1 variants={item}>
          Hi, I'm <span className="grad">{profile.name}</span>
        </motion.h1>
        <motion.h2 variants={item}>
          {profile.role} <span className="muted">building</span> <Typewriter words={roles} />
        </motion.h2>
        <motion.p className="lead" variants={item}>
          {profile.location} · Shipping LLM agents, backend pipelines and GitOps deployments for enterprise clients.
        </motion.p>
        <motion.div className="hero-cta" variants={item}>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <MailIcon /> Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="avatar-wrap"
        initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <motion.div className="avatar" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <img src="/profile-pic.jpeg" alt="Anish Patil" />
        </motion.div>
      </motion.div>
    </section>
  )
}
