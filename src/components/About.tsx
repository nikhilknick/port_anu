'use client'

import { motion } from 'framer-motion'

export default function About() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 80
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="section py-[110px] relative">
      <div className="container max-w-[1200px] mx-auto px-8 relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[700px] mx-auto mb-[70px]"
        >
          <span className="text-[0.72rem] tracking-[0.28em] uppercase text-gold block mb-[14px]">— About Me</span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.2] text-text-primary mb-[18px]">
            A designer who <span className="gradient-text">listens first</span>
          </h2>
          <p className="text-[0.95rem] text-text-secondary leading-[1.8]">
            Great interiors don't begin with mood boards — they begin with understanding who you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-[72px] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="aspect-[3/4] max-w-[360px] bg-bg-card border border-[rgba(201,169,110,0.15)] rounded-lg relative overflow-hidden flex items-center justify-center">
              <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.12),transparent_70%)]" />
              <div className="absolute bottom-[-30px] left-[-30px] w-[160px] h-[160px] bg-gradient-to-br from-[rgba(196,113,74,0.1)] to-transparent rounded-full" />
              <div className="font-display text-[5rem] font-light tracking-[0.2em] text-[rgba(201,169,110,0.25)] relative z-[1]">
                A
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="font-display text-[1.5rem] font-normal italic leading-[1.4] text-text-primary mb-6">
              I believe every room holds the potential for beauty — it simply needs a thoughtful hand to reveal it.
            </p>
            <p className="text-[0.95rem] text-text-secondary mb-[18px] leading-[1.85]">
              With a strong foundation in spatial planning and interior aesthetics, I focus on designing environments
              that balance elegance with everyday comfort. <em className="text-gold italic">alive</em>.
            </p>
            <p className="text-[0.95rem] text-text-secondary mb-[18px] leading-[1.85]">
              My work blends technical precision with creative storytelling — shaping residential and commercial spaces
              that are visually timeless and thoughtfully experienced. From concept development to material selection, I
              believe every detail should contribute to a cohesive and meaningful atmosphere.
            </p>

            <div className="my-7 flex flex-col gap-[14px]">
              {[
                'Specialising in residential, hospitality & boutique retail',
                'Fluent in English & Hindi',
                'Sustainable & ethically sourced materials by default',
                '3D visualisation & technical drawings in-house',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-[0.88rem] text-text-secondary">
                  <i className="fas fa-check-circle text-gold mt-[3px] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => handleNavClick('#contact')}
                className="inline-flex items-center gap-[10px] px-[30px] py-[14px] rounded-full text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-elegant bg-gradient-primary text-charcoal shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,169,110,0.5)]"
              >
                <i className="fas fa-feather-alt" />
                Start a Conversation
              </button>
              <a
                href="/Anurag Resume.pdf"
                download
                className="inline-flex items-center gap-[10px] px-[30px] py-[14px] rounded-full text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-elegant bg-transparent border border-[rgba(201,169,110,0.4)] text-gold hover:bg-[rgba(201,169,110,0.08)] hover:border-gold"
              >
                <i className="fas fa-download" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
