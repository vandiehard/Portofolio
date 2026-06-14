import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import TechStack from './components/TechStack'
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
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), var(--surface)',
        }}>
        <MouseBubble />
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
