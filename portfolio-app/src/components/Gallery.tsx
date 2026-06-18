import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { useReveal } from '../hooks/useReveal'

interface GalleryItem {
  title: string
  description: string
  tags: string[]
  colSpan: string
  rowSpan: string
  gradient: string
  image: string
  github: string
}

const galleryItems: GalleryItem[] = [
  {
    title: 'Blog CMS',
    description: 'Content management system for bloggers with markdown support.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/vandiehard/Blog-CMS',
    colSpan: 'sm:col-span-2 md:col-span-2',
    rowSpan: 'sm:row-span-2 md:row-span-2',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    image: '/blog-cms.png',
  },
  {
    title: 'Task Management App',
    description: 'Task management app with project boards and task tracking.',
    tags: ['Python', 'Django', 'SQLite'],
    github: 'https://github.com/vandiehard/Task-Management',
    colSpan: '',
    rowSpan: '',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    image: '/task-manager.png',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with interactive maps.',
    tags: ['JavaScript', 'React', 'Tailwind'],
    github: 'https://github.com/vandiehard/Weather-Dashboard',
    colSpan: '',
    rowSpan: 'sm:row-span-2 md:row-span-2',
    gradient: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #1d3461 100%)',
    image: '/weather.png',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with cart, checkout, and payment integration.',
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/vandiehard/E-Commerce',
    colSpan: '',
    rowSpan: '',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
    image: '/ecommerce.png',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio with dark/light theme and smooth animations.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    github: 'https://github.com/vandiehard/Portofolio',
    colSpan: 'sm:col-span-2 md:col-span-2',
    rowSpan: '',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
    image: '/portfolio.png',
  },
  {
    title: 'REST API Service',
    description: 'Scalable API with auth and rate limiting.',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/vandiehard/INVENTORY-API',
    colSpan: '',
    rowSpan: '',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
    image: '/api-service.png',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const ref = useReveal()

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null), [])
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % galleryItems.length : null), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, closeLightbox, prev, next])

  return (
    <section id="Gallery" className="py-16 sm:py-20 px-4 sm:px-6 grid-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Project <span className="gradient-text-purple">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-2)' }}>
            A visual showcase of my recent work and projects.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-3">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`${item.colSpan} ${item.rowSpan} group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 reveal`}
              style={{ border: '1px solid var(--surface-border)' }}
              onClick={() => setLightbox(index)}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}
            >
              {/* Background gradient */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark gradient for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5">
                <h3 className="font-bold text-sm md:text-base text-white mb-1 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-white/0 group-hover:text-white/70 transition-all duration-300 line-clamp-2 drop-shadow">
                  {item.description}
                </p>
                {/* Tags + GitHub */}
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/15 text-white/80 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={closeLightbox}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-2 rounded-full transition hover:bg-white/10"
            style={{ color: 'white' }}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-2 sm:left-8 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            style={{ color: 'white' }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-2 sm:right-8 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            style={{ color: 'white' }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Content */}
          <div
            className="relative max-w-3xl w-full mx-4 sm:mx-6 animate-slide-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* Image preview */}
              <img
                src={galleryItems[lightbox].image}
                alt={galleryItems[lightbox].title}
                className="w-full aspect-video object-cover"
              />

              {/* Info bar */}
              <div className="p-4 sm:p-6" style={{ background: '#111' }}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {galleryItems[lightbox].title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm md:text-base mb-3">
                  {galleryItems[lightbox].description}
                </p>
                {/* Tags + GitHub */}
                <div className="flex flex-wrap items-center gap-2">
                  {galleryItems[lightbox].tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                  <a
                    href={galleryItems[lightbox].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white/80 transition"
                    onClick={e => e.stopPropagation()}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-white/40 font-medium">
                {lightbox + 1} / {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
