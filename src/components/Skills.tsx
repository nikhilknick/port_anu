'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    icon: 'fas fa-drafting-compass',
    title: 'AutoCAD',
    description:
      'Precision floor plans, technical drawings, and construction documentation crafted to exact architectural standards.',
  },
  {
    icon: 'fas fa-cube',
    title: 'SketchUp',
    description:
      'Intuitive 3D modelling for spatial planning and concept development — bringing layouts to life before construction begins.',
  },
  {
    icon: 'fas fa-sun',
    title: 'V-Ray',
    description:
      'Photo-realistic renders with ray-traced lighting and material accuracy — letting clients visualise every detail before build.',
  },
  {
    icon: 'fas fa-image',
    title: 'Photoshop',
    description:
      'Polished presentation boards, mood boards, and post-production of renders to communicate design vision with clarity.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section py-[110px] relative">
      <div className="container max-w-[1200px] mx-auto px-8 relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[700px] mx-auto mb-[70px]"
        >
          <span className="text-[0.72rem] tracking-[0.28em] uppercase text-gold block mb-[14px]">— Skills</span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.2] text-text-primary mb-[18px]">
            What I bring to <span className="gradient-text">every project</span>
          </h2>
          <p className="text-[0.95rem] text-text-secondary leading-[1.8]">
            A full spectrum of design disciplines, delivered with precision and warmth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="skill-card bg-bg-card border border-[rgba(201,169,110,0.15)] rounded-lg p-8 transition-elegant relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-primary before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:border-[rgba(201,169,110,0.4)] hover:-translate-y-[6px] hover:shadow-hover hover:bg-bg-card-hover hover:before:scale-x-100"
            >
              <div className="w-[52px] h-[52px] bg-[rgba(201,169,110,0.1)] rounded-lg flex items-center justify-center mb-5 text-[1.3rem] text-gold transition-elegant skill-icon">
                <i className={skill.icon} />
              </div>
              <h3 className="font-display text-[1.25rem] font-medium mb-3 text-text-primary">{skill.title}</h3>
              <p className="text-[0.88rem] text-text-secondary leading-[1.75]">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
