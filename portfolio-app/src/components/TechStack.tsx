import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Tech {
  name: string
  color: string
  category: string
  level: string
  svg: React.ReactNode
}

const techs: Tech[] = [
  {
    name: 'React',
    color: '#61DAFB',
    category: 'Framework',
    level: 'Advanced',
    svg: (
      <>
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
      </>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    category: 'Language',
    level: 'Advanced',
    svg: (
      <>
        <rect width="24" height="24" rx="2" fill="#F7DF1E" />
        <text x="12" y="18" textAnchor="middle" fill="#323330" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">JS</text>
      </>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    category: 'Language',
    level: 'Intermediate',
    svg: (
      <>
        <rect width="24" height="24" rx="2" fill="#3178C6" />
        <text x="12" y="18" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">TS</text>
      </>
    ),
  },
  {
    name: 'HTML5',
    color: '#E44D26',
    category: 'Language',
    level: 'Advanced',
    svg: <path d="M3.5 2L5 20l7 4 7-4 1.5-18h-17zM12 19.5l-5.2-2.9-.4-4.6h2.6l.2 2.8L12 16l2.8-1.2.3-3.3H8.8l-.2-2.5h6.8l.2-2.5H8.2L8 4h8l-.3 3H9.5l.2 2.5h6.5l-.5 5.1L12 19.5z" fill="#E44D26" />,
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    category: 'Styling',
    level: 'Advanced',
    svg: <path d="M3.5 2L5 20l7 4 7-4 1.5-18h-17zM17.2 8l-.3 3.5L12 13l-4.5-1.5-.2-2.5h2.5l.1 1.2L12 11l2.1-.8.1-1.2H8l-.2-2.5h8.7L17.2 8z" fill="#1572B6" />,
  },
  {
    name: 'Tailwind',
    color: '#06B6D4',
    category: 'Styling',
    level: 'Advanced',
    svg: <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.73 1.91 1.34C13.44 10.88 14.55 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.73-1.91-1.34C15.56 7.12 14.45 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.73 1.91 1.34C8.44 16.88 9.55 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.73-1.91-1.34C10.56 13.12 9.45 12 7 12z" fill="#06B6D4" />,
  },
  {
    name: 'Python',
    color: '#3776AB',
    category: 'Language',
    level: 'Intermediate',
    svg: (
      <>
        <path d="M11.9 2C8.2 2 8.4 3.7 8.4 3.7v1.8h3.6v.5H6.6S3 5.6 3 9.5s2.8 3.7 2.8 3.7h1.7V11s-.1-2.8 2.7-2.8h3.6s2.6 0 2.6-2.5V4.1S16.8 2 11.9 2zM9.1 3.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" fill="#3776AB" />
        <path d="M12.1 22c3.7 0 3.5-1.7 3.5-1.7v-1.8H12v-.5h5.4S21 18.4 21 14.5s-2.8-3.7-2.8-3.7h-1.7V13s.1 2.8-2.7 2.8h-3.6s-2.6 0-2.6 2.5v1.6S7.2 22 12.1 22zm2.8-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" fill="#FFD43B" />
      </>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    category: 'Runtime',
    level: 'Intermediate',
    svg: (
      <>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#339933" />
        <text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial, sans-serif">N</text>
      </>
    ),
  },
  {
    name: 'Flask',
    color: '#94a3b8',
    category: 'Framework',
    level: 'Intermediate',
    svg: (
      <>
        <rect width="24" height="24" rx="4" fill="#1a1a2e" />
        <path d="M9 6h6v2l-2 2v1l3 5H8l3-5v-1l-2-2V6z" fill="#94a3b8" opacity="0.85" />
        <circle cx="12" cy="5" r="1.5" fill="#94a3b8" opacity="0.85" />
      </>
    ),
  },
  {
    name: 'Django',
    color: '#092E20',
    category: 'Framework',
    level: 'Intermediate',
    svg: (
      <>
        <rect width="24" height="24" rx="3" fill="#092E20" />
        <path d="M10 5v10.5c-1.3 0-3-.8-3-2.7V8.5c0-1.7 1.3-2.8 3-3.5zm1.5 0h2.3c2.7 0 4.2 1.8 4.2 4.5s-1.5 4.5-4.2 4.5h-2.3V5zm2 7.2h.8c1.5 0 2.5-1 2.5-2.7s-1-2.7-2.5-2.7h-.8v5.4z" fill="white" />
      </>
    ),
  },
  {
    name: 'MySQL',
    color: '#4479A1',
    category: 'Database',
    level: 'Intermediate',
    svg: (
      <>
        <ellipse cx="12" cy="8" rx="9" ry="4.5" fill="#4479A1" />
        <path d="M3 8v8c0 2.5 4 4.5 9 4.5s9-2 9-4.5V8" fill="none" stroke="#4479A1" strokeWidth="1.5" />
        <path d="M3 12.5c0 2.5 4 4.5 9 4.5s9-2 9-4.5" fill="none" stroke="#4479A1" strokeWidth="1" opacity="0.5" />
      </>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    category: 'Tools',
    level: 'Advanced',
    svg: <path d="M23.5 11.3l-10.8-10.8c-.5-.5-1.3-.5-1.8 0L8.5 2.9l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.5 1.8l2.6 2.6c.6-.2 1.3 0 1.8.5.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.7-1.3-.5-1.9l-2.4-2.4v6.3c.2.1.3.2.4.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.4-.3.6-.4V9.8c-.2-.1-.4-.3-.6-.4-.5-.5-.6-1.2-.5-1.8L7.6 4.9.5 12c-.5.5-.5 1.3 0 1.8l10.8 10.8c.5.5 1.3.5 1.8 0l10.4-10.4c.5-.6.5-1.4 0-1.9z" fill="#F05032" />,
  },
  {
    name: 'Docker',
    color: '#2496ED',
    category: 'Tools',
    level: 'Intermediate',
    svg: (
      <>
        <path d="M22 11c-.5-.3-1.6-.4-2.5-.1-.2-1.3-1-2.4-2.1-3.2l-.5-.3-.3.5c-.5.8-.7 2-.4 3-.4-.2-.8-.3-1.3-.3H1l.1.7c.3 1.6 1.5 3 3.2 3.5.8.2 2.8.4 4.4-.3.5-.2 1-.5 1.4-.8.6.6 1.5 1 2.4 1 1.8 0 3.3-1 4-2.5l.2-.4-.4-.3z" fill="#2496ED" />
        <g fill="rgba(255,255,255,0.5)">
          <rect x="3" y="8" width="2" height="2" rx="0.3" />
          <rect x="5.5" y="8" width="2" height="2" rx="0.3" />
          <rect x="8" y="8" width="2" height="2" rx="0.3" />
          <rect x="5.5" y="5.5" width="2" height="2" rx="0.3" />
          <rect x="8" y="5.5" width="2" height="2" rx="0.3" />
          <rect x="8" y="3" width="2" height="2" rx="0.3" />
          <rect x="10.5" y="8" width="2" height="2" rx="0.3" />
        </g>
      </>
    ),
  },
  {
    name: 'VS Code',
    color: '#007ACC',
    category: 'Tools',
    level: 'Advanced',
    svg: (
      <>
        <path d="M17 2l5 3v14l-5 3L5 14 2 16V8l3 2L17 2z" fill="#007ACC" />
        <path d="M17 2v20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
        <path d="M5 14L2 16V8l3 2" fill="rgba(255,255,255,0.15)" />
      </>
    ),
  },
  {
    name: 'Linux',
    color: '#FCC624',
    category: 'Tools',
    level: 'Intermediate',
    svg: (
      <>
        <ellipse cx="12" cy="13" rx="6" ry="8" fill="#FCC624" />
        <circle cx="10" cy="10" r="1.2" fill="white" />
        <circle cx="14" cy="10" r="1.2" fill="white" />
        <circle cx="10" cy="10" r="0.5" fill="#333" />
        <circle cx="14" cy="10" r="0.5" fill="#333" />
        <path d="M10 14c.8 1 3.2 1 4 0" fill="none" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="8" cy="6" rx="1.5" ry="2" fill="#FCC624" />
        <ellipse cx="16" cy="6" rx="1.5" ry="2" fill="#FCC624" />
      </>
    ),
  },
  {
    name: 'Vercel',
    color: '#ffffff',
    category: 'Deployment',
    level: 'Advanced',
    svg: (
      <>
        <rect width="24" height="24" rx="2" fill="#000" />
        <path d="M12 4l8 14H4l8-14z" fill="white" />
      </>
    ),
  },
]

export default function TechStack() {
  const [hovered, setHovered] = useState<string | null>(null)
  const ref = useReveal()

  return (
    <section id="Skills" className="py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Skills & <span className="gradient-text-purple">Tech Stack</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 reveal-stagger">
          {techs.map(tech => (
            <div
              key={tech.name}
              className="reveal tech-card glass-card rounded-xl p-3 sm:p-4 flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer relative"
              onMouseEnter={() => setHovered(tech.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tooltip - hidden on touch via CSS media query */}
              {hovered === tech.name && (
                <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 z-20 px-3 py-2 rounded-lg text-xs whitespace-nowrap hidden sm:block"
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--surface-border)',
                    color: 'var(--text)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  }}>
                  <p className="font-semibold">{tech.name}</p>
                  <p style={{ color: 'var(--text-3)' }}>{tech.category} · {tech.level}</p>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                    style={{ background: 'var(--surface-2)', borderRight: '1px solid var(--surface-border)', borderBottom: '1px solid var(--surface-border)' }} />
                </div>
              )}

              {/* Icon */}
              <div className="tech-icon">
                <svg width={32} height={32} viewBox="0 0 24 24" className="flex-shrink-0">
                  {tech.svg}
                </svg>
              </div>

              {/* Label */}
              <span className="tech-label text-xs font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
