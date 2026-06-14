import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', href: '#Home' },
  { name: 'About', href: '#About' },
  { name: 'Gallery', href: '#Gallery' },
  { name: 'TechStack', href: '#TechStack' },
  { name: 'Projects', href: '#Projects' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Contact', href: '#Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#Home" className="font-bold text-xl" style={{ color: 'var(--accent)' }}>
              Ree
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`text-sm font-medium transition-colors pb-1 ${
                  active === link.name
                    ? 'border-b-2'
                    : 'hover:opacity-80'
                }`}
                style={{
                  color: active === link.name ? 'var(--text)' : 'var(--text-2)',
                  borderColor: active === link.name ? 'var(--accent)' : 'transparent',
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:opacity-80"
              style={{ background: 'var(--surface-card)', color: 'var(--text-2)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={{ color: 'var(--text-2)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors"
              style={{ color: 'var(--text-2)' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4" style={{ borderTop: '1px solid var(--surface-border)' }}>
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => { setActive(link.name); setIsOpen(false) }}
                className="block py-3 text-sm font-medium transition-colors"
                style={{ color: active === link.name ? 'var(--accent)' : 'var(--text-2)' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
