import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

interface GalleryItem {
  title: string
  description: string
  tags: string[]
  colSpan: string
  rowSpan: string
  gradient: string
}

const galleryItems: GalleryItem[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with cart, checkout, and payment integration.',
    tags: ['React', 'Django', 'MySQL'],
    colSpan: 'sm:col-span-2 md:col-span-2',
    rowSpan: 'sm:row-span-2 md:row-span-2',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    title: 'Task Management App',
    description: 'Kanban-style project management with drag-and-drop.',
    tags: ['React', 'Flask', 'MySQL'],
    colSpan: '',
    rowSpan: '',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather with interactive maps.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    colSpan: '',
    rowSpan: 'sm:row-span-2 md:row-span-2',
    gradient: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #1d3461 100%)',
  },
  {
    title: 'Blog CMS',
    description: 'Content management with markdown support.',
    tags: ['Django', 'Python', 'MySQL'],
    colSpan: '',
    rowSpan: '',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio with dark/light theme and smooth animations.',
    tags: ['React', 'TailwindCSS'],
    colSpan: 'sm:col-span-2 md:col-span-2',
    rowSpan: '',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
  },
  {
    title: 'REST API Service',
    description: 'Scalable API with auth and rate limiting.',
    tags: ['Flask', 'Python', 'MySQL'],
    colSpan: '',
    rowSpan: '',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
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
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: item.gradient }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5">
                <h3 className="font-bold text-sm md:text-base text-white mb-1 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-white/0 group-hover:text-white/70 transition-all duration-300 line-clamp-2 drop-shadow">
                  {item.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/15 text-white/80 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
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
              {/* Gradient preview */}
              <div
                className="w-full aspect-video flex items-center justify-center"
                style={{ background: galleryItems[lightbox].gradient }}
              >
                <div className="text-center p-4 sm:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                    {galleryItems[lightbox].title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-lg mx-auto mb-4">
                    {galleryItems[lightbox].description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {galleryItems[lightbox].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
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
