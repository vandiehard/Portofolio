import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MouseBubble from './components/MouseBubble'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-poppins"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(168, 85, 247, 0.07) 0%, transparent 50%), var(--surface)',
        }}>
        <MouseBubble />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
