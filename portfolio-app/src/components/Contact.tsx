import { useState, type FormEvent } from 'react'
import { Send, User, Mail, MessageCircle, Globe, Server, Palette, Clock, Code2, Rocket, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const socialCards = [
  {
    platform: 'Instagram', handle: '@syamsudinihsan_',
    href: 'https://instagram.com/syamsudinihsan_/',
    color: 'bg-gradient-to-br from-purple-600 to-pink-500',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    platform: 'Github', handle: '@vandiehard',
    href: 'https://github.com/vandiehard',
    color: 'bg-gray-700',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    platform: 'WhatsApp', handle: '+62 857-7673-5843',
    href: 'https://wa.me/6285776735843',
    color: 'bg-green-600',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.523 5.857L.06 23.487a.5.5 0 00.613.613l5.63-1.463A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.79-.516-5.417-1.487l-.384-.23-3.342.87.87-3.342-.23-.384A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>,
  },
  {
    platform: 'Gmail', handle: 'radjaihsan321@gmail.com',
    href: 'mailto:radjaihsan321@gmail.com',
    color: 'bg-red-600',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>,
  },
]


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const ref = useReveal()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }


  const inputStyle = {
    background: 'var(--surface-card)',
    border: '1px solid var(--surface-border)',
    color: 'var(--text)',
  }

  return (
    <section id="Contact" className="py-16 sm:py-20 px-4 sm:px-6 grid-bg" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold gradient-text-purple mb-4">Contact Me</h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Have any questions? Send me a message and I'll respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-5 sm:p-8 reveal">
            <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>Contact</h3>
            <p className="text-xs sm:text-sm mb-5 sm:mb-6" style={{ color: 'var(--text-2)' }}>
              Have something to discuss? Send me a message and let's talk.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--accent)' }} />
                <input type="text" required placeholder="Your Name" value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl focus:outline-none transition"
                  style={{ ...inputStyle, '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--accent)' }} />
                <input type="email" required placeholder="Your Email" value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl focus:outline-none transition"
                  style={inputStyle}
                />
              </div>
              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 w-4 h-4" style={{ color: 'var(--accent)' }} />
                <textarea required rows={4} placeholder="Your Message" value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl focus:outline-none transition resize-none"
                  style={inputStyle}
                />
              </div>
              <button type="submit" disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-medium transition-all disabled:opacity-50"
                style={{ background: 'var(--accent)', color: 'var(--surface)' }}
              >
                {sending ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </div>

          {/* Social Cards */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-8 h-0.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <h3 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--text)' }}>Connect With Me</h3>
            </div>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/ahmadsyamsudinihsan" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 glass-card rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 transition-all"
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div>
                <p className="font-medium text-sm" style={{ color: 'var(--text)' }}>Let's Connect on LinkedIn</p>
                <p className="text-xs" style={{ color: 'var(--text-3)' }}>linkedin.com/in/ahmadsyamsudinihsan</p>
              </div>
            </a>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialCards.map(card => (
                <a key={card.platform} href={card.href} target="_blank" rel="noopener noreferrer"
                  className="glass-card rounded-xl p-3 sm:p-4 transition-all duration-300"
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm" style={{ color: 'var(--text)' }}>{card.platform}</p>
                      <p className="text-xs truncate" style={{ color: 'var(--text-3)' }}>{card.handle}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Let's Work Together */}
        <div className="reveal">
          <div className="glass-card rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center top, color-mix(in srgb, var(--accent) 8%, transparent), transparent 70%)' }} />

            <div className="relative">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: 'color-mix(in srgb, #22c55e 12%, transparent)', color: '#4ade80', border: '1px solid color-mix(in srgb, #22c55e 20%, transparent)' }}>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping" style={{ background: '#22c55e' }} />
                  <span className="relative inline-flex w-2 h-2 rounded-full" style={{ background: '#22c55e' }} />
                </span>
                Available for work
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                Let's Build Something <span className="gradient-text-purple">Amazing</span>
              </h3>
              <p className="max-w-lg mx-auto text-sm sm:text-base mb-8" style={{ color: 'var(--text-2)' }}>
                I'm always excited to take on new projects. Whether it's a full web app, an API, or a quick fix — let's talk.
              </p>

              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 text-left">
                {[
                  { icon: Globe, title: 'Web Development', desc: 'Full-stack websites with React, Next.js, and Node.js.', color: '#61DAFB' },
                  { icon: Server, title: 'API Development', desc: 'Scalable REST APIs with Express.js and MySQL.', color: '#339933' },
                  { icon: Palette, title: 'UI/UX Design', desc: 'Clean, responsive interfaces with Tailwind CSS.', color: '#BD34FE' },
                ].map(s => (
                  <div key={s.title} className="rounded-xl p-4 transition-all group cursor-default"
                    style={{ background: 'var(--surface-card)', border: '1px solid var(--surface-border)' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = s.color)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `color-mix(in srgb, ${s.color} 15%, transparent)` }}>
                      <s.icon className="w-4.5 h-4.5" style={{ color: s.color }} />
                    </div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>{s.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-3)' }}>{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8">
                {[
                  { icon: Code2, value: '6+', label: 'Projects Built' },
                  { icon: Rocket, value: '9+', label: 'Technologies' },
                  { icon: Clock, value: '< 24h', label: 'Response Time' },
                ].map(stat => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'color-mix(in srgb, var(--accent) 10%, transparent)' }}>
                      <stat.icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold" style={{ color: 'var(--text)' }}>{stat.value}</p>
                      <p className="text-xs" style={{ color: 'var(--text-3)' }}>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#Gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all"
                  style={{ background: 'var(--accent)', color: 'var(--surface)' }}>
                  View My Work <ArrowRight className="w-4 h-4" />
                </a>
                <a href="mailto:radjaihsan321@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-medium transition-all"
                  style={{ borderColor: 'var(--surface-border)', color: 'var(--text)' }}>
                  <Mail className="w-4 h-4" /> radjaihsan321@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
