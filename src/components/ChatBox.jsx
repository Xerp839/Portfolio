import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { chatFlow } from '../data'
import { ChatIcon, CloseIcon } from './Icons'

const greeting = { from: 'bot', text: "Hi! I'm Anish's assistant. Pick a question below to learn more about him." }

export default function ChatBox() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([greeting])
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)
  const timer = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, typing, open])

  useEffect(() => () => clearTimeout(timer.current), [])

  const ask = (item) => {
    if (typing) return
    setMessages((m) => [...m, { from: 'user', text: item.q }])
    setTyping(true)
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: item.a }])
      setTyping(false)
    }, 900)
  }

  const asked = new Set(messages.filter((m) => m.from === 'user').map((m) => m.text))

  return (
    <div className="chat">
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            <div className="chat-head">
              <img src="/profile-pic.jpeg" alt="" />
              <div>
                <b>Ask about Anish</b>
                <span><i className="pulse" /> Online</span>
              </div>
            </div>
            <div className="chat-body">
              {messages.map((m, i) => (
                <motion.div key={i} className={`bubble ${m.from}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <div className="bubble bot dots"><i /><i /><i /></div>
              )}
              <div ref={endRef} />
            </div>
            <div className="chat-options">
              {chatFlow.map((item) => (
                <button key={item.q} disabled={typing} className={asked.has(item.q) ? 'asked' : ''} onClick={() => ask(item)}>
                  {item.q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={open ? 'x' : 'c'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
            {open ? <CloseIcon /> : <ChatIcon />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
