import { useState, useEffect } from 'react'
import { Code, Server, Download, ArrowRight, X, Award, Globe } from 'lucide-react'
import { TechLogo } from './TechLogos'
import AnimatedText from './AnimatedText'
import { useReveal } from '../hooks/useReveal'

const certificates = [
  {
    title: 'Programmer Psychology Laboratory',
    issuer: 'Gunadarma University',
    date: '2025',
    skills: ['React', 'Hooks', 'State Management', 'TailwindCSS'],
    color: '#3b82f6',
  },
  {
    title: 'Python for Web Development',
    issuer: 'Online Bootcamp',
    date: '2024',
    skills: ['Python', 'Flask', 'Django', 'REST APIs'],
    color: '#10b981',
  },
  {
    title: 'Frontend Development Fundamentals',
    issuer: 'Certification Course',
    date: '2025',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    color: '#f59e0b',
  },
]

const projects = [
  { title: 'E-Commerce Platform', tech: 'React, Node.js, Express.js, MySQL', category: 'Full-Stack' },
  { title: 'Task Management App', tech: 'Python, Django, SQLite', category: 'Full-Stack' },
  { title: 'Weather Dashboard', tech: 'JavaScript, React, TailwindCSS', category: 'Frontend' },
  { title: 'Blog CMS', tech: 'React, Next.js, TypeScript, TailwindCSS', category: 'Full-Stack' },
  { title: 'Portfolio Website', tech: 'React, TypeScript, TailwindCSS, Vite', category: 'Frontend' },
  { title: 'REST API Service', tech: 'FastAPI, Python, PostgreSQL, Docker', category: 'Backend' },
]

const languages = [
  { name: 'Arabic', level: 'Intermediate', percent: 60, flag: '🇸🇦' },
  { name: 'English', level: 'Proficient', percent: 80, flag: '🇬🇧' },
  { name: 'Indonesian', level: 'Native', percent: 100, flag: '🇮🇩' },
]

// Photo modal - click the profile photo to enlarge
function PhotoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }} />
      <div className="relative animate-slide-up" onClick={e => e.stopPropagation()}>
        <div className="rounded-3xl overflow-hidden"
          style={{ border: '1px solid var(--surface-border)', boxShadow: '0 0 60px rgba(0,0,0,0.4)', maxWidth: '420px' }}>
          <img src="/profile.jpg" alt="Ahmad Syamsudin Ihsan" className="w-full h-auto" />
        </div>
        <button onClick={onClose} className="absolute -top-3 -right-3 p-2.5 rounded-full transition hover:scale-110 z-10"
          style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)', color: 'var(--text)' }}>
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

// Modal wrapper for stats detail views
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)' }} />
      <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto glass-card rounded-3xl p-6 md:p-8 animate-slide-up"
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full transition hover:opacity-80 z-10"
          style={{ background: 'var(--surface-card)', color: 'var(--text-2)' }}>
          <X className="w-4 h-4" />
        </button>
        {children}
      </div>
    </div>
  )
}

function ProjectsModal() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 pr-8" style={{ color: 'var(--text)' }}>
        All <span className="gradient-text-purple">Projects</span>
      </h3>
      <div className="space-y-3">
        {projects.map(p => (
          <div key={p.title} className="glass-card rounded-xl p-4">
            <div className="relative z-[1] flex items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold" style={{ color: 'var(--text)' }}>{p.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-2)' }}>{p.tech}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium flex-shrink-0"
                style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}>
                {p.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CertificatesModal() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 pr-8" style={{ color: 'var(--text)' }}>
        My <span className="gradient-text-purple">Certificates</span>
      </h3>
      <div className="space-y-4">
        {certificates.map(cert => (
          <div key={cert.title} className="glass-card rounded-xl p-5">
            <div className="relative z-[1]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cert.color}20` }}>
                  <Award className="w-6 h-6" style={{ color: cert.color }} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--text)' }}>{cert.title}</h4>
                  <div className="flex items-center gap-2 text-sm mb-3" style={{ color: 'var(--text-2)' }}>
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: 'color-mix(in srgb, var(--accent) 10%, transparent)', color: 'var(--accent)' }}>
                        <TechLogo name={skill} size={14} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExperienceModal() {
  const items = [
    { role: 'Frontend Developer', org: 'Freelance Projects', period: '2025 - Present', active: true },
    { role: 'Programmer', org: 'Psichology Laboratory - Gunadarma University', period: '2025 - Present', active: true },
  ]
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 pr-8" style={{ color: 'var(--text)' }}>
        Work <span className="gradient-text-purple">Experience</span>
      </h3>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.role} className="glass-card rounded-xl p-5">
            <div className="relative z-[1]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold" style={{ color: 'var(--text)' }}>{item.role}</h4>
                {item.active && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>Active</span>
                )}
              </div>
              <p className="text-sm mb-1" style={{ color: 'var(--accent)' }}>{item.org}</p>
              <p className="text-xs" style={{ color: 'var(--text-3)' }}>{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const stats = [
  { icon: Code, number: 6, label: 'TOTAL PROJECTS', desc: 'Innovative web solutions crafted', key: 'projects' },
  { icon: Award, number: 3, label: 'CERTIFICATES', desc: 'Professional skills validated', key: 'certificates' },
  { icon: Server, number: 1, label: 'YEARS OF EXPERIENCE', desc: 'Continuous learning journey', key: 'experience' },
]

export default function About() {
  const [modal, setModal] = useState<string | null>(null)
  const [photoOpen, setPhotoOpen] = useState(false)
  const ref = useReveal()

  return (
    <section id="About" className="py-16 sm:py-20 px-4 sm:px-6 grid-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            About <span className="gradient-text-purple">Me</span>
          </h2>
          <p className="italic" style={{ color: 'var(--text-2)' }}>Transforming ideas into digital experiences</p>
        </div>

        {/* Bio + Photo Row */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Profile Photo - 4x6 Rectangular with Rounded Corners */}
          <div className="flex justify-center reveal">
            <div className="relative group cursor-pointer" onClick={() => setPhotoOpen(true)}>
              {/* Outer glass frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl"
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--surface-border)',
                  backdropFilter: 'blur(var(--glass-blur))',
                  WebkitBackdropFilter: 'blur(var(--glass-blur))',
                }} />
              {/* Photo with glass overlay */}
              <div className="relative w-52 h-80 sm:w-64 sm:h-96 md:w-72 md:h-[27rem] rounded-3xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                style={{ border: '2px solid var(--surface-border)', boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)' }}>
                <img src="/profile.jpg" alt="Ahmad Syamsudin Ihsan"
                  className="w-full h-full object-cover" />
                {/* Glass overlay on photo */}
                <div className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%)',
                    pointerEvents: 'none',
                  }} />
              </div>
              {/* Decorative dashed frame */}
              <div className="absolute -inset-5 sm:-inset-7 rounded-[1.75rem] animate-spin-slow hidden sm:block"
                style={{ border: '1px dashed var(--surface-border)', opacity: 0.3 }} />
              {/* Click hint */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                  style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)', color: 'var(--text-2)' }}>
                  Click to view
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="reveal">
            <p className="font-medium text-base sm:text-lg mb-1" style={{ color: 'var(--accent)' }}>Hello, I'm</p>
            <AnimatedText
              text="Ahmad Syamsudin Ihsan"
              as="h3"
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: 'var(--text)' }}
            />
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
              An Information Systems student at Gunadarma University with a strong interest in
              front-end development. Passionate about creating engaging digital experiences and
              consistently striving to deliver the best solutions in every project.
            </p>
            <div className="glass-card rounded-2xl p-5 relative mb-6">
              <span className="text-4xl absolute top-1 left-3" style={{ color: 'var(--accent)', opacity: 0.3 }}>"</span>
              <p className="italic pl-6 relative z-[1]" style={{ color: 'var(--text)' }}>
                Leveraging AI as a professional tool, not a replacement.
              </p>
            </div>
            {/* TODO: Replace with your actual Google Drive share link */}
            <a href="https://drive.google.com/file/d/1crUQawzLuhRid_z4tJMqc9J0ChKTXiDD/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90"
              style={{ background: 'var(--accent)', color: 'var(--surface)' }}>
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Languages Section */}
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 reveal" style={{ color: 'var(--text)' }}>
          <Globe className="inline w-6 h-6 mr-2" style={{ color: 'var(--accent)' }} />
          Languages
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16 reveal-stagger">
          {languages.map(lang => (
            <div key={lang.name} className="reveal glass-card rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 hover:scale-105"
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}>
              <div className="relative z-[1]">
                <span className="text-3xl mb-3 block">{lang.flag}</span>
                <h4 className="font-semibold text-lg mb-1" style={{ color: 'var(--text)' }}>{lang.name}</h4>
                <p className="text-sm mb-3" style={{ color: 'var(--accent)' }}>{lang.level}</p>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface-card)' }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${lang.percent}%`, background: 'var(--accent)' }} />
                </div>
                <p className="text-xs mt-2" style={{ color: 'var(--text-3)' }}>{lang.percent}% proficiency</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats - Clickable */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 reveal-stagger">
          {stats.map(({ icon: Icon, number, label, desc, key }) => (
            <button key={label} onClick={() => setModal(key)}
              className="reveal glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 group text-left cursor-pointer hover:scale-105"
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}>
              <div className="relative z-[1]">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl" style={{ background: 'var(--surface-card)', color: 'var(--text-2)' }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 transition-opacity group-hover:opacity-100" style={{ color: 'var(--accent)' }} />
                </div>
                <p className="text-3xl font-bold mb-1" style={{ color: 'var(--text)' }}>{number}</p>
                <p className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--text)' }}>{label}</p>
                <p className="text-xs" style={{ color: 'var(--text-3)' }}>{desc}</p>
                <p className="text-xs mt-2 font-medium" style={{ color: 'var(--accent)' }}>Click to view details →</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modals */}
      <Modal open={modal === 'projects'} onClose={() => setModal(null)}><ProjectsModal /></Modal>
      <Modal open={modal === 'certificates'} onClose={() => setModal(null)}><CertificatesModal /></Modal>
      <Modal open={modal === 'experience'} onClose={() => setModal(null)}><ExperienceModal /></Modal>
      <PhotoModal open={photoOpen} onClose={() => setPhotoOpen(false)} />
    </section>
  )
}
