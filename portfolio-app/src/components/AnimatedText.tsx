import { useRef, useCallback } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
}

export default function AnimatedText({ text, className = '', style, as: Tag = 'h1' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null)

  const isGradient = className.includes('gradient-text')

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const container = containerRef.current
    if (!container) return
    const letters = container.querySelectorAll<HTMLSpanElement>('.anim-letter')
    letters.forEach(letter => {
      const rect = letter.getBoundingClientRect()
      const letterX = rect.left + rect.width / 2
      const letterY = rect.top + rect.height / 2
      const distX = e.clientX - letterX
      const distY = e.clientY - letterY
      const dist = Math.sqrt(distX * distX + distY * distY)
      const maxDist = 120

      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * 6
        const moveX = (distX / dist) * force
        const moveY = (distY / dist) * force
        letter.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.08)`
      } else {
        letter.style.transform = ''
      }
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const letters = container.querySelectorAll<HTMLSpanElement>('.anim-letter')
    letters.forEach(letter => {
      letter.style.transform = ''
    })
  }, [])

  // Split text into words and letters
  const words = text.split(' ')

  // Per-letter gradient class (needed because background-clip:text doesn't work on split spans)
  const letterClass = isGradient ? 'anim-letter-gradient' : ''

  // Remove gradient-text from the parent className since we apply it per-letter
  const parentClass = className.replace('gradient-text', '').trim()

  return (
    <Tag
      ref={containerRef as any}
      className={`anim-text ${parentClass}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mx-[0.2em]">
          {word.split('').map((char, ci) => (
            <span
              key={ci}
              className={`anim-letter inline-block transition-all duration-200 ease-out ${letterClass}`}
              style={{ willChange: 'transform' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}
