'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [outlinePos, setOutlinePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) return

    let animationFrameId: number

    const animateOutline = () => {
      setOutlinePos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }))
      animationFrameId = requestAnimationFrame(animateOutline)
    }

    animateOutline()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePos])

  useEffect(() => {
    if (window.innerWidth < 768) return

    const hoverTargets = document.querySelectorAll(
      'a, button, .skill-card, .project-card, input, textarea'
    )

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <div
        className="cursor-dot fixed w-[6px] h-[6px] bg-gold rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      <div
        className={`cursor-outline fixed rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 border ${
          isHovering
            ? 'w-[52px] h-[52px] border-gold bg-[rgba(201,169,110,0.06)]'
            : 'w-[32px] h-[32px] border-[rgba(201,169,110,0.5)]'
        }`}
        style={{
          left: `${outlinePos.x}px`,
          top: `${outlinePos.y}px`,
        }}
      />
    </>
  )
}
