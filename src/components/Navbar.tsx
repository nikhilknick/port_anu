'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= sectionTop - 130) {
          current = section.getAttribute('id') || ''
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 80
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 h-20 z-[1000] transition-elegant ${
        scrolled
          ? 'bg-bg-nav backdrop-blur-[24px] border-b border-[rgba(201,169,110,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-8 h-full flex items-center justify-between gap-6">
        <div className="font-display text-[1.45rem] font-normal tracking-[0.04em] text-text-primary">
          Anurag
        </div>

        <ul
          className={`nav-menu flex items-center gap-1 md:flex ${
            menuOpen ? 'open' : ''
          } max-md:fixed max-md:top-[68px] max-md:left-0 max-md:right-0 max-md:bg-bg-nav max-md:backdrop-blur-[24px] max-md:flex-col max-md:p-6 max-md:gap-1 max-md:border-b max-md:border-[rgba(201,169,110,0.15)] max-md:transition-elegant ${
            menuOpen ? 'max-md:opacity-100 max-md:visible max-md:translate-y-0' : 'max-md:opacity-0 max-md:invisible max-md:-translate-y-5'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`nav-link text-[0.82rem] font-normal tracking-[0.12em] uppercase px-[14px] py-2 rounded-sm transition-elegant relative ${
                  activeSection === item.href.slice(1)
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                } max-md:w-full max-md:py-3 max-md:px-4`}
              >
                {item.name}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-gold transition-all duration-[350ms] ${
                    activeSection === item.href.slice(1) ? 'w-4' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          className="hamburger hidden max-md:flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-text-primary rounded-sm transition-elegant ${
              menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-text-primary rounded-sm transition-elegant ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-text-primary rounded-sm transition-elegant ${
              menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>
    </nav>
  )
}
