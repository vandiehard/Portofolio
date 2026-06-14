import { useState } from 'react'
import { ExternalLink, Code2 } from 'lucide-react'

const categories = ['All', 'Frontend', 'Backend', 'Full-Stack']

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration.',
    tags: ['React', 'Django', 'MySQL'],
    category: 'Full-Stack',
    liveUrl: '#',
    codeUrl: 'https://github.com/ree-ichi',
  },
  {
    title: 'Task Management App',
    description: 'Kanban-style project management tool with drag-and-drop functionality.',
    tags: ['React', 'Flask', 'MySQL'],
    category: 'Full-Stack',
    liveUrl: '#',
    codeUrl: 'https://github.com/ree-ichi',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with interactive maps and forecasts.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'Frontend',
    liveUrl: '#',
    codeUrl: 'https://github.com/ree-ichi',
  },
  {
    title: 'Blog CMS',
    description: 'Content management system with markdown support and SEO optimization.',
    tags: ['Django', 'Python', 'MySQL'],
    category: 'Backend',
    liveUrl: '#',
    codeUrl: 'https://github.com/ree-ichi',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website with dark/light theme and smooth animations.',
    tags: ['React', 'TailwindCSS'],
    category: 'Frontend',
    liveUrl: 'https://ree-portofolio.vercel.app/',
    codeUrl: 'https://github.com/ree-ichi',
  },
  {
    title: 'REST API Service',
    description: 'Scalable RESTful API with authentication, rate limiting, and documentation.',
    tags: ['Flask', 'Python', 'MySQL'],
    category: 'Backend',
    liveUrl: '#',
    codeUrl: 'https://github.com/ree-ichi',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="Projects" className="py-20 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            My <span className="gradient-text-purple">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Here are some of my recent projects. Each one was built with attention to
            detail, performance, and user experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={
                activeFilter === cat
                  ? { background: 'var(--accent)', color: 'var(--surface)', boxShadow: '0 4px 15px rgba(255,255,255,0.1)' }
                  : { background: 'var(--surface-card)', border: '1px solid var(--surface-border)', color: 'var(--text-2)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 group"
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}
            >
              {/* Thumbnail */}
              <div
                className="h-48 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))' }}
              >
                <Code2 className="w-16 h-16 transition-colors" style={{ color: 'var(--accent)', opacity: 0.3 }} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>{project.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-2)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: 'color-mix(in srgb, var(--accent) 10%, transparent)', color: 'var(--accent)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: 'var(--accent)' }}
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: 'var(--text-2)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
                  >
                    <Code2 className="w-4 h-4" /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
