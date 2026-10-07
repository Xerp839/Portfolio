import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tabs from './components/Tabs'
import ChatBox from './components/ChatBox'

export default function App() {
  return (
    <>
      <div className="bg-glow g1" />
      <div className="bg-glow g2" />
      <div className="bg-grid" />
      <Navbar />
      <main className="container">
        <Hero />
        <Tabs />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Anish Patil · Built with React</footer>
      <ChatBox />
    </>
  )
}
