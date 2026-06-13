import { Briefcase, GraduationCap, Calendar } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Frontend Developer',
    organization: 'Freelance Projects',
    period: '2024 - Present',
    description: [
      'Built responsive portfolio websites using React and TailwindCSS',
      'Implemented dark/light themes with smooth transitions',
      'Focused on performance optimization and accessibility',
    ],
  },
  {
    type: 'work',
    title: 'Web Development Intern',
    organization: 'Tech Startup',
    period: '2023 - 2024',
    description: [
      'Developed RESTful APIs using Flask and Python',
      'Created responsive frontend interfaces with React',
      'Participated in agile development processes',
    ],
  },
  {
    type: 'education',
    title: 'B.S. Information Systems',
    organization: 'Gunadarma University',
    period: '2021 - Present',
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
    period: '2023',
    description: [
      'Intensive full-stack web development program',
      'Built multiple projects from concept to deployment',
      'Learned React, Node.js, Python, and database technologies',
    ],
  },
]

export default function Experience() {
  return (
    <section id="Experience" className="py-20 px-6 grid-bg">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Experience & <span className="gradient-text-purple">Education</span>
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <div key={index} className="relative flex gap-6 md:gap-8">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10"
                  style={{ background: 'var(--surface)', border: '2px solid var(--accent)' }}
                >
                  {item.type === 'work' ? (
                    <Briefcase className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  ) : (
                    <GraduationCap className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  )}
                </div>

                {/* Card */}
                <div
                  className="flex-1 glass-card rounded-2xl p-6 transition-all duration-300"
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm" style={{ color: 'var(--text-3)' }}>
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>
                  <p className="font-medium text-sm mb-3" style={{ color: 'var(--accent)' }}>{item.organization}</p>
                  <ul className="space-y-1.5">
                    {item.description.map((point, i) => (
                      <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-2)' }}>
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
