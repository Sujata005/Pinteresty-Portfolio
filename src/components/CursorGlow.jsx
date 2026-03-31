import { useEffect, useState, useRef, useCallback } from 'react'

export default function HeartCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState([])
  const cursorRef = useRef(null)
  const animationRef = useRef(null)
  const particleIdRef = useRef(0)
  const lastPositionRef = useRef({ x: 0, y: 0 })

  // Create a new particle
  const createParticle = useCallback((x, y) => {
    const newParticle = {
      id: particleIdRef.current++,
      x: x - 6, // Center the 12px particle
      y: y - 6,
      createdAt: Date.now(),
      velocity: {
        x: (Math.random() - 0.5) * 2, // Random horizontal drift
        y: -Math.random() * 1.5 - 0.5 // Upward float
      }
    }
    return newParticle
  }, [])

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none'

    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)
      setIsVisible(true)

      // Create particle if mouse moved significantly
      const lastPos = lastPositionRef.current
      const distance = Math.sqrt(
        Math.pow(newPosition.x - lastPos.x, 2) +
        Math.pow(newPosition.y - lastPos.y, 2)
      )

      if (distance > 5) { // Only create particle if moved more than 5px
        setParticles(prev => {
          const newParticle = createParticle(newPosition.x, newPosition.y)
          const updated = [...prev, newParticle]

          // Limit to 15 particles for performance
          return updated.slice(-15)
        })
        lastPositionRef.current = newPosition
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Check for hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isClickable = target.matches('button, a, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])')
      setIsHovering(isClickable)
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    // Smooth animation using requestAnimationFrame
    const animateCursor = () => {
      if (cursorRef.current) {
        const cursor = cursorRef.current
        const currentX = parseFloat(cursor.style.left) || 0
        const currentY = parseFloat(cursor.style.top) || 0
        const targetX = mousePosition.x - 12 // Center the 24px heart
        const targetY = mousePosition.y - 12

        // Smooth interpolation for lag effect
        const lerp = (start, end, factor) => start + (end - start) * factor
        const newX = lerp(currentX, targetX, 0.12) // Slightly more lag for smoother feel
        const newY = lerp(currentY, targetY, 0.12)

        cursor.style.left = `${newX}px`
        cursor.style.top = `${newY}px`
      }

      // Update particles
      setParticles(prev => prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.velocity.x,
          y: particle.y + particle.velocity.y,
          velocity: {
            ...particle.velocity,
            y: particle.velocity.y + 0.02 // Slight gravity
          }
        }))
        .filter(particle => Date.now() - particle.createdAt < 800) // Remove after 800ms
      )

      animationRef.current = requestAnimationFrame(animateCursor)
    }

    // Start animation loop
    animationRef.current = requestAnimationFrame(animateCursor)

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      // Cleanup
      document.body.style.cursor = 'auto'
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [mousePosition.x, mousePosition.y, createParticle])

  return (
    <>
      {/* Main Heart Cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[999] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: '0px',
          top: '0px',
          fontSize: isHovering ? '28px' : '24px',
          filter: 'drop-shadow(0 0 8px rgba(255, 182, 193, 0.6)) drop-shadow(0 0 16px rgba(255, 182, 193, 0.3))',
        }}
      >
        💖
      </div>

      {/* Particle Trail */}
      {particles.map(particle => {
        const age = Date.now() - particle.createdAt
        const opacity = Math.max(0, 1 - (age / 800)) // Fade out over 800ms
        const scale = Math.max(0.3, 1 - (age / 600)) // Shrink over 600ms

        return (
          <div
            key={particle.id}
            className="fixed pointer-events-none z-[998] transition-none"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              fontSize: '12px',
              opacity: opacity,
              transform: `scale(${scale})`,
              filter: `drop-shadow(0 0 4px rgba(255, 182, 193, ${opacity * 0.4}))`,
            }}
          >
            💖
          </div>
        )
      })}
    </>
  )
}