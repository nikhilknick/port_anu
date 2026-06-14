'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 'office',
    category: 'commercial',
    title: 'Office Plans',
    description:
      'A complete set of office plans — structural grid layout with solar & daylight analysis, plus a full architectural layout with workstations, meeting rooms, brainstorming zones, sleeping pods, and support facilities.',
    image: '/project1.jpg',
    tags: ['Grid Plan', 'Architecture', 'Furniture', 'Ledger'],
    planCount: 4,
  },
  {
    id: 'hotel',
    category: 'commercial',
    title: 'Hotel Plans',
    description:
      'The proposed hotel site plan is designed as a premium hospitality and event destination with efficient space planning and smooth circulation. The layout includes well-organized banquet lawns, hotel blocks, recreational amenities, landscaped open spaces, and dedicated parking areas.',
    image: '/project5.jpg',
    tags: ['Hotel Grid Plan', 'Hotel Bubble Diagram', 'Hotel Furniture Plan'],
    planCount: 3,
  },
  {
    id: 'kitchen',
    category: 'plan and elevations',
    title: 'Kitchen Plans',
    description:
      'A comprehensive kitchen design set covering layout, cabinetry, elevation, and 3D plans. From the initial spatial arrangement to detailed cabinet configurations and realistic 3D visualisations, this collection provides a complete roadmap for creating a functional and beautiful kitchen space.',
    image: '/project8.jpg',
    tags: [
      'Kitchen Plan',
      'Bathroom plan',
      'Living Room wall 1',
      'Living Room wall 2',
      'TV Unit',
      'Studio Apartment',
      'Plan and Elevation',
    ],
    planCount: 11,
  },
  {
    id: '3d',
    category: '3d',
    title: '3D Plans',
    description:
      'A collection of three-dimensional design plans for various room types, including brainstorming spaces, owner areas, and conference rooms. These plans provide a realistic visualization of the proposed designs and facilitate better communication between clients and designers.',
    image: '/project15.jpg',
    tags: ['Brainstorming Room', 'Owner Room', 'Conference Room'],
    planCount: 3,
  },
]

const filters = ['all', 'commercial', 'plan and elevations', '3d']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    // Scroll to projects section
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      const navHeight = 80
      const targetPosition = projectsSection.getBoundingClientRect().top + window.scrollY - navHeight - 16
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="section py-[110px] relative">
      <div className="container max-w-[1200px] mx-auto px-8 relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[700px] mx-auto mb-[70px]"
        >
          <span className="text-[0.72rem] tracking-[0.28em] uppercase text-gold block mb-[14px]">
            — Selected Work
          </span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.2] text-text-primary mb-[18px]">
            Spaces I've <span className="gradient-text">brought to life</span>
          </h2>
          <p className="text-[0.95rem] text-text-secondary leading-[1.8]">
            A curated selection from eight years of residential and commercial design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex gap-3 justify-center flex-wrap mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-[22px] py-[9px] border rounded-full text-[0.78rem] tracking-[0.1em] uppercase transition-elegant ${
                activeFilter === filter
                  ? 'border-gold text-gold bg-[rgba(201,169,110,0.06)]'
                  : 'border-[rgba(201,169,110,0.15)] text-text-muted hover:border-gold hover:text-gold hover:bg-[rgba(201,169,110,0.06)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ delay: index * 0.1, duration: 0.35 }}
              className={`project-card bg-bg-card border border-[rgba(201,169,110,0.15)] rounded-lg overflow-hidden transition-elegant hover:border-[rgba(201,169,110,0.4)] hover:-translate-y-[6px] hover:shadow-hover ${
                activeFilter === 'all' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden h-[300px] group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #3a2e1e 0%, #6b5035 40%, #a07850 100%)`,
                  }}
                />
                <div className="absolute inset-0 bg-[rgba(19,15,10,0.52)] opacity-0 group-hover:opacity-100 transition-elegant flex items-center justify-center gap-4">
                  <span className="inline-flex items-center gap-2 px-[22px] py-[10px] bg-[rgba(201,169,110,0.9)] rounded-full text-charcoal text-[0.78rem] font-semibold tracking-[0.1em] uppercase transition-elegant scale-75 group-hover:scale-100">
                    <i className="fas fa-layer-group" />
                    View All Plans
                  </span>
                </div>
                <span className="absolute top-[14px] left-[14px] bg-[rgba(19,15,10,0.7)] border border-[rgba(201,169,110,0.15)] backdrop-blur-sm px-[14px] py-[5px] rounded-full text-[0.7rem] tracking-[0.12em] uppercase text-gold">
                  {project.category}
                </span>
                <span className="absolute bottom-3 right-3 bg-[rgba(19,15,10,0.88)] text-gold text-[0.68rem] tracking-[0.16em] uppercase px-3 py-1 rounded-full border border-gold-dark z-[2] pointer-events-none">
                  {project.planCount} Plans
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-[1.2rem] font-medium mb-[10px] text-text-primary transition-elegant group-hover:text-gold">
                  {project.title}
                </h3>
                <p className="text-[0.88rem] text-text-secondary leading-[1.75] mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-[rgba(201,169,110,0.15)] rounded-full text-[0.68rem] tracking-[0.08em] uppercase text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
