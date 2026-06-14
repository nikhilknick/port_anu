'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-[46px] h-[46px] border border-gold rounded-full flex items-center justify-center text-gold text-[0.85rem] z-[999] bg-bg-card transition-elegant hover:bg-gold hover:text-charcoal hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(201,169,110,0.4)]"
          title="Back to Top"
        >
          <i className="fas fa-chevron-up" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
