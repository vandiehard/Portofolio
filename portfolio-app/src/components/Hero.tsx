import { useState, useEffect } from 'react'
import { ExternalLink, Mail, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import AnimatedText from './AnimatedText'

const typingTexts = ['Tech Enthusiast', 'Frontend Developer', 'Problem Solver']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = typingTexts[textIndex]
    const speed = isDeleting ? 50 : 100
    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex(prev => (prev + 1) % typingTexts.length)
      return
    }
    const timer = setTimeout(() => {
      const next = charIndex + (isDeleting ? -1 : 1)
      setCharIndex(next)
      setDisplayText(current.slice(0, next))
    }, speed)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex])

  const socials = [
    { icon: GithubIcon, href: 'https://github.com/ree-ichi', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/in/ahmadsyamsudinihsan', label: 'LinkedIn' },
    {
      icon: null, href: 'https://instagram.com/syamsudinihsan_/', label: 'Instagram',
      svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
  ]

  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative grid-bg pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="font-medium text-lg mb-4 tracking-wide" style={{ color: 'var(--accent)' }}>
          Hello, I'm
        </p>

        <AnimatedText
          text="Ahmad Syamsudin Ihsan"
          className="text-5xl md:text-7xl font-bold gradient-text mb-2 leading-tight"
        />

        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl font-medium typing-cursor" style={{ color: 'var(--accent)' }}>
            {displayText}
          </span>
        </div>

        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--text-2)' }}>
          Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {['React', 'Javascript', 'Node.js', 'Tailwind'].map(tech => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm font-medium"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--surface-border)', color: 'var(--text-2)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#Gallery"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 text-white"
            style={{ background: 'var(--accent)', color: 'var(--surface)' }}
          >
            View Projects
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#Contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border font-medium transition-all duration-300"
            style={{ borderColor: 'var(--surface-border)', color: 'var(--text)' }}
          >
            Contact Me
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--surface-card)', color: 'var(--text-2)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
            >
              {Icon ? <Icon className="w-5 h-5" /> : svg}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <a
        href="#About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-colors"
        style={{ color: 'var(--text-3)' }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
