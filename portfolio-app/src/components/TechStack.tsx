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
    name: 'Next.js',
    color: '#ffffff',
    category: 'Framework',
    level: 'Intermediate',
    svg: (
      <>
        <circle cx="12" cy="12" r="11" fill="#000" />
        <path d="M10 7.5v9l6.5-9H15v6.5h-1V9.3l-4.8 6.7H10z" fill="white" />
        <path d="M15.5 7.5h1.2V16h-1.2z" fill="white" />
      </>
    ),
  },
  {
    name: 'Express.js',
    color: '#ffffff',
    category: 'Framework',
    level: 'Intermediate',
    svg: (
      <>
        <circle cx="12" cy="12" r="11" fill="#2d2d2d" />
        <path d="M7 9h10v1.5H9.5v1.5H16v1.5H9.5V15H17v1.5H7V9z" fill="white" />
      </>
    ),
  },
  {
    name: 'Tailwind',
    color: '#06B6D4',
    category: 'Styling',
    level: 'Advanced',
    svg: <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.73 1.91 1.34C13.44 10.88 14.55 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.73-1.91-1.34C15.56 7.12 14.45 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.73 1.91 1.34C8.44 16.88 9.55 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.73-1.91-1.34C10.56 13.12 9.45 12 7 12z" fill="#06B6D4" />,
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
    name: 'Vite',
    color: '#646CFF',
    category: 'Build Tool',
    level: 'Intermediate',
    svg: (
      <>
        <path d="M12 2L3 20h6.5L12 2z" fill="#BD34FE" />
        <path d="M12 2l9 18h-6.5L12 2z" fill="#FFDD00" />
        <path d="M9.5 20L12 10l2.5 10H9.5z" fill="#646CFF" />
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
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 reveal-stagger">
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
