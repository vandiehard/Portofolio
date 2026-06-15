import { Briefcase, GraduationCap, Calendar } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const experiences = [
  {
    type: 'work',
    title: 'Frontend Developer',
    organization: 'Freelance Projects',
    period: '2025 - Present',
    description: [
      'Built responsive portfolio websites using React and TailwindCSS',
      'Implemented dark/light themes with smooth transitions',
      'Focused on performance optimization and accessibility',
    ],
  },
  {
    type: 'work',
    title: 'Programmer',
    organization: 'Psichology Laboratory - Gunadarma University',
    period: '2025 - Present',
    description: [
      'Developed responsive frontend interfaces with React',
      'Created responsive frontend interfaces with React',
      'Participated in agile development processes',
    ],
  },
  {
    type: 'education',
    title: 'B.S. Information Systems',
    organization: 'Gunadarma University',
    period: '2024 - Present',
    description: [
      'Strong focus on front-end development and web technologies',
      'Active participant in coding communities and hackathons',
      'Building projects that combine academic knowledge with practical skills',
    ],
  },
  {
    type: 'education',
    title: 'Web Development Bootcamp',
    organization: 'Online Learning Platform',
    period: '2025',
    description: [
      'Intensive full-stack web development program',
      'Built multiple projects from concept to deployment',
      'Learned React, Node.js, Python, and database technologies',
    ],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="Experience" className="py-16 sm:py-20 px-4 sm:px-6 grid-bg" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Experience & <span className="gradient-text-purple">Education</span>
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'var(--accent)' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((item, index) => (
              <div key={index} className="reveal relative flex gap-4 sm:gap-6 md:gap-8">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10"
                  style={{ background: 'var(--surface)', border: '2px solid var(--accent)' }}
                >
                  {item.type === 'work' ? (
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--accent)' }} />
                  ) : (
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--accent)' }} />
                  )}
                </div>

                {/* Card */}
                <div
                  className="flex-1 glass-card rounded-2xl p-4 sm:p-6 transition-all duration-300"
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-lg font-bold" style={{ color: 'var(--text)' }}>{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm mt-1 sm:mt-0" style={{ color: 'var(--text-3)' }}>
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {item.period}
                    </span>
                  </div>
                  <p className="font-medium text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'var(--accent)' }}>{item.organization}</p>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {item.description.map((point, i) => (
                      <li key={i} className="text-xs sm:text-sm flex items-start gap-2" style={{ color: 'var(--text-2)' }}>
                        <span className="mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
