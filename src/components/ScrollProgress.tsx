'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      const percentage = Math.min((scrolled / total) * 100, 100)
      setProgress(percentage)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-gradient-primary z-[1001] transition-all duration-100 pointer-events-none"
      style={{ width: `${progress}%` }}
    />
  )
}
