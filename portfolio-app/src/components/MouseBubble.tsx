import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function MouseBubble() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const themeRef = useRef(theme)

  useEffect(() => {
    themeRef.current = theme
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')!

    let width = window.innerWidth
    let height = window.innerHeight
    let cursor = { x: width / 2, y: height / 2 }
    let particles: Particle[] = []
    let animationFrame = 0

    interface Particle {
      initialLifeSpan: number
      lifeSpan: number
      velocity: { x: number; y: number }
      position: { x: number; y: number }
      baseDimension: number
      update: (ctx: CanvasRenderingContext2D) => void
    }

    function getColors() {
      return themeRef.current === 'light'
        ? { fill: 'rgba(124, 58, 237, 0.22)', stroke: 'rgba(79, 70, 229, 0.55)' }
        : { fill: 'rgba(168, 130, 247, 0.35)', stroke: 'rgba(139, 92, 246, 0.6)' }
    }

    function createParticle(x: number, y: number): Particle {
      const lifeSpan = Math.floor(Math.random() * 60 + 60)
      const particle: Particle = {
        initialLifeSpan: lifeSpan,
        lifeSpan,
        velocity: {
          x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
          y: -0.4 + Math.random() * -1,
        },
        position: { x, y },
        baseDimension: 4,
        update(ctx: CanvasRenderingContext2D) {
          this.position.x += this.velocity.x
          this.position.y += this.velocity.y
          this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75
          this.velocity.y -= Math.random() / 600
          this.lifeSpan--

          const scale = 0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan
          const colors = getColors()

          ctx.fillStyle = colors.fill
          ctx.strokeStyle = colors.stroke
          ctx.beginPath()
          ctx.arc(
            this.position.x - (this.baseDimension / 2) * scale,
            this.position.y - this.baseDimension / 2,
            this.baseDimension * scale,
            0,
            2 * Math.PI
          )
          ctx.stroke()
          ctx.fill()
          ctx.closePath()
        },
      }
      return particle
    }

    function onResize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = width
      canvas!.height = height
    }

    function onMouseMove(e: MouseEvent) {
      cursor.x = e.clientX
      cursor.y = e.clientY
      particles.push(createParticle(cursor.x, cursor.y))
    }

    function onTouchMove(e: TouchEvent) {
      for (let i = 0; i < e.touches.length; i++) {
        particles.push(createParticle(e.touches[i].clientX, e.touches[i].clientY))
      }
    }

    function updateParticles() {
      if (particles.length === 0) return

      context.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.update(context)
      }

      // Remove dead particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].lifeSpan < 0) {
          particles.splice(i, 1)
        }
      }

      if (particles.length === 0) {
        context.clearRect(0, 0, width, height)
      }
    }

    function loop() {
      updateParticles()
      animationFrame = requestAnimationFrame(loop)
    }

    // Setup canvas
    canvas.width = width
    canvas.height = height

    // Bind events
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchstart', onTouchMove, { passive: true })
    window.addEventListener('resize', onResize)

    // Start animation
    loop()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchstart', onTouchMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ zIndex: 9999, width: '100vw', height: '100vh' }}
    />
  )
}
