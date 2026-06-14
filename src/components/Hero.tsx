'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import RoomIllustration from './RoomIllustration'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ['Residential Spaces', 'Boutique Hotels', 'Concept Stores', 'Luxury Retreats']

  useEffect(() => {
    const word = words[wordIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(word.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)

          if (charIndex === word.length) {
            setTimeout(() => setIsDeleting(true), 2200)
          }
        } else {
          setDisplayText(word.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)

          if (charIndex === 0) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 55 : 80
    )

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex, words])

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 80
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero min-h-screen flex items-center pt-[calc(80px+40px)] pb-[60px] relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="hero-content text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-[10px] bg-[rgba(201,169,110,0.08)] border border-[rgba(201,169,110,0.15)] rounded-full px-[18px] py-2 text-[0.78rem] tracking-[0.12em] uppercase text-gold mb-7"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-sage shadow-[0_0_8px] shadow-sage animate-pulse" />
            Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-[clamp(2.4rem,5vw,4rem)] font-normal leading-[1.15] mb-6 flex flex-col gap-[6px]"
          >
            <span className="text-[clamp(1rem,2vw,1.3rem)] font-light text-text-secondary tracking-[0.08em]">
              Hello, I'm
            </span>
            <span className="gradient-text italic font-light">Anurag</span>
            <span className="text-[clamp(1rem,1.8vw,1.2rem)] font-light text-text-secondary tracking-[0.05em] italic min-h-[1.5em]">
              {displayText}
              <span className="text-gold font-light animate-[blink_1.1s_step-end_infinite]">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base text-text-secondary max-w-[480px] mx-auto lg:mx-0 mb-9 leading-[1.85]"
          >
            I'm <strong className="text-text-primary font-medium">Anurag</strong>— a passionate interior designer
            at the start of my creative journey. I love transforming ideas into inspiring spaces that balance style,
            comfort, and personality. My goal is to create interiors that feel welcoming, meaningful, and truly{' '}
            <em className="text-gold italic">yours</em>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 flex-wrap mb-12 justify-center lg:justify-start"
          >
            <button
              onClick={() => handleNavClick('#projects')}
              className="inline-flex items-center gap-[10px] px-[30px] py-[14px] rounded-full text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-elegant bg-gradient-primary text-charcoal shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,169,110,0.5)]"
            >
              <i className="fas fa-eye" />
              View Portfolio
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center gap-[10px] px-[30px] py-[14px] rounded-full text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-elegant bg-transparent border border-[rgba(201,169,110,0.4)] text-text-primary hover:border-gold hover:text-gold"
            >
              <i className="fas fa-feather-alt" />
              Let's Talk
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center lg:justify-end items-center relative"
        >
          <RoomIllustration />
        </motion.div>
      </div>
    </section>
  )
}
