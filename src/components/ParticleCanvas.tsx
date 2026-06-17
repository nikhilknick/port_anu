'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
  color: string
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W: number, H: number
    let particles: ParticleClass[] = []
    let animFrame: number
    const MAX = window.innerWidth < 768 ? 35 : 70
    const CONNECTION_DIST = 120

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    class ParticleClass {
      x: number = 0
      y: number = 0
      vx: number = 0
      vy: number = 0
      r: number = 0
      alpha: number = 0
      color: string = ''

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.25
        this.vy = (Math.random() - 0.5) * 0.25
        this.r = Math.random() * 1.4 + 0.3
        this.alpha = Math.random() * 0.4 + 0.1
        this.color = Math.random() > 0.5 ? '#c9a96e' : '#e2c898'
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > W) this.vx *= -1
        if (this.y < 0 || this.y > H) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    const initList = () => {
      particles = []
      for (let i = 0; i < MAX; i++) {
        particles.push(new ParticleClass())
      }
    }

    const drawConnections = () => {
      if (!ctx) return
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(201,169,110,${0.08 * (1 - dist / CONNECTION_DIST)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)
      drawConnections()
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      animFrame = requestAnimationFrame(animate)
    }

    resize()
    initList()
    animate()

    const handleResize = () => {
      cancelAnimationFrame(animFrame)
      resize()
      initList()
      animate()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
      id="particles-canvas"
    />
  )
}
