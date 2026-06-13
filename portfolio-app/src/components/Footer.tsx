import { Heart, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { Mail } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#Home' },
  { name: 'About', href: '#About' },
  { name: 'Projects', href: '#Projects' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Contact', href: '#Contact' },
]

export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--surface-border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a href="#Home" className="flex items-center gap-2 font-bold text-xl" style={{ color: 'var(--accent)' }}>
              <Code2 className="w-6 h-6" />
              <span>Ree</span>
            </a>
            <p className="text-sm mt-2" style={{ color: 'var(--text-3)' }}>
              Building digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href}
                className="text-sm transition-colors"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            {[
              { icon: GithubIcon, href: 'https://github.com/ree-ichi', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://linkedin.com/in/ahmadsyamsudinihsan', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:radjaihsan321@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--surface-card)', color: 'var(--text-3)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid var(--surface-border)' }}>
          <p className="text-sm flex items-center justify-center gap-1" style={{ color: 'var(--text-3)' }}>
            &copy; {new Date().getFullYear()} Ahmad Syamsudin Ihsan™. Made with
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
