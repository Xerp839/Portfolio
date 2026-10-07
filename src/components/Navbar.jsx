import { motion } from 'framer-motion'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon, DownloadIcon } from './Icons'

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="logo">
        <span className="logo-mark">AP</span>
        <span className="logo-text">{profile.name}</span>
      </div>
      <div className="nav-actions">
        <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
        <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
        <a className="btn btn-primary" href="/Anish_Patil_Resume.pdf" download="ANISH_PATIL.pdf">
          <DownloadIcon />
          <span>Resume</span>
        </a>
      </div>
    </motion.header>
  )
}
