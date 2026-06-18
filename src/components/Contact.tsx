'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1800))

    setIsSubmitting(false)
    setShowSuccess(true)
    ;(e.target as HTMLFormElement).reset()

    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  return (
    <section id="contact" className="section py-[110px] relative">
      <div className="container max-w-[1200px] mx-auto px-8 relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[700px] mx-auto mb-[70px]"
        >
          <span className="text-[0.72rem] tracking-[0.28em] uppercase text-gold block mb-[14px]">
            — Get In Touch
          </span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.2] text-text-primary mb-[18px]">
            Let's create something <span className="gradient-text">beautiful together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="font-display text-[1.6rem] font-normal mb-[18px] text-text-primary">
              Start your design journey
            </h3>
            <p className="text-[0.92rem] text-text-secondary leading-[1.85] mb-9">
              Whether you're renovating a single room or a full villa, the first conversation is always free. I'd love
              to hear your vision.
            </p>

            <div className="flex flex-col gap-5 mb-9">
              <div className="flex items-start gap-4">
                <div className="w-[44px] h-[44px] flex-shrink-0 bg-[rgba(201,169,110,0.1)] rounded-sm flex items-center justify-center text-gold text-base">
                  <i className="fas fa-envelope" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <strong className="text-[0.82rem] tracking-[0.08em] uppercase text-text-primary">Email</strong>
                  <span className="text-[0.88rem] text-text-secondary">anuragkholiwal@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[44px] h-[44px] flex-shrink-0 bg-[rgba(201,169,110,0.1)] rounded-sm flex items-center justify-center text-gold text-base">
                  <i className="fas fa-phone" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <strong className="text-[0.82rem] tracking-[0.08em] uppercase text-text-primary">Phone</strong>
                  <span className="text-[0.88rem] text-text-secondary">+91 9821493106</span>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-[rgba(201,169,110,0.15)] rounded-full flex items-center justify-center text-text-muted text-[0.9rem] transition-elegant hover:border-gold hover:text-gold hover:bg-[rgba(201,169,110,0.08)]"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div> */}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-bg-card border border-[rgba(201,169,110,0.15)] rounded-lg p-10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[0.75rem] tracking-[0.12em] uppercase text-text-muted">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-bg-dark border border-[rgba(201,169,110,0.15)] rounded-sm px-4 py-[13px] text-[0.92rem] text-text-primary transition-elegant outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[0.75rem] tracking-[0.12em] uppercase text-text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-bg-dark border border-[rgba(201,169,110,0.15)] rounded-sm px-4 py-[13px] text-[0.92rem] text-text-primary transition-elegant outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project-type" className="text-[0.75rem] tracking-[0.12em] uppercase text-text-muted">
                  Project Type
                </label>
                <input
                  type="text"
                  id="project-type"
                  name="project-type"
                  className="bg-bg-dark border border-[rgba(201,169,110,0.15)] rounded-sm px-4 py-[13px] text-[0.92rem] text-text-primary transition-elegant outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[0.75rem] tracking-[0.12em] uppercase text-text-muted">
                  Tell me about your space
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="bg-bg-dark border border-[rgba(201,169,110,0.15)] rounded-sm px-4 py-[13px] text-[0.92rem] text-text-primary transition-elegant outline-none resize-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-[10px] px-[30px] py-[14px] rounded-full text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-elegant bg-gradient-primary text-charcoal shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,169,110,0.5)] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <i className="fas fa-feather-alt" />
                    Send Message
                  </>
                )}
              </button>

              {showSuccess && (
                <div className="bg-[rgba(122,140,114,0.1)] border border-[rgba(122,140,114,0.3)] rounded-sm px-[18px] py-[14px] text-[0.9rem] text-sage flex items-center gap-[10px]">
                  <i className="fas fa-check-circle" />
                  Thanks! I'll be in touch within 48 hours.
                </div>
              )}
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
