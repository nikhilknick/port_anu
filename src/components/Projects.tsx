'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 'office',
    category: 'commercial',
    title: 'Office Plans',
    description:
      'A complete set of office plans — structural grid layout with solar & daylight analysis, plus a full architectural layout with workstations, meeting rooms, brainstorming zones, sleeping pods, and support facilities.',
    image: '/office-bubble-diagram.jpg',
    tags: ['Grid Plan', 'Architecture', 'Furniture', 'Ledger', 'Mood Board'],
    planCount: 6,
    files: [
      '/OFFICE BUBBLE.pdf',
      '/OFFICE GRID PLAN-Model.pdf',
      '/OFFCIE LAYOUT.pdf',
      '/OFFICE COMPLETE PLAN.pdf',
      '/Office Ledger Plan.pdf',
      '/MOOD BOARD OFFICE.pdf',
    ],
  },
  {
    id: 'hotel',
    category: 'commercial',
    title: 'Hotel Plans',
    description:
      'The proposed hotel site plan is designed as a premium hospitality and event destination with efficient space planning and smooth circulation. The layout includes well-organized banquet lawns, hotel blocks, recreational amenities, landscaped open spaces, and dedicated parking areas.',
    image: '/hotel-layout-card.jpg',
    tags: ['Hotel Grid Plan', 'Hotel Layout Plan', 'Hotel Complete Plan'],
    planCount: 3,
    files: ['/HOTEL GRID.pdf', '/HOTEL LAYOUT PLAN.pdf', '/HOTEL COMPLETE PLAN.pdf'],
  },
  {
    id: 'kitchen',
    category: 'plan and elevations',
    title: 'Kitchen Plans',
    description:
      'A comprehensive kitchen design set covering layout, cabinetry, elevation, and 3D plans. From the initial spatial arrangement to detailed cabinet configurations and realistic 3D visualisations, this collection provides a complete roadmap for creating a functional and beautiful kitchen space.',
    image: '/kitchen-elevation-card.jpg',
    tags: [
      'Kitchen Plan',
      'Living Room',
      'Master Bedroom',
      'Bathroom Elevation',
    ],
    planCount: 4,
    files: ['/KITCHEN FT.pdf', '/LIVING ROOM.pdf', '/MASTER BEDROOM.pdf', '/BATHROOM ELEVATION.pdf'],
  },
  {
    id: '3d',
    category: '3d',
    title: '3D Plans',
    description:
      'A collection of three-dimensional design plans for various room types, including brainstorming spaces, owner areas, and conference rooms. These plans provide a realistic visualization of the proposed designs and facilitate better communication between clients and designers.',
    image: '/coilab-workstation-3d.jpg',
    tags: ['Workstation', 'Conference Room', 'Owner Room', 'Living Room', 'TV Unit', 'Entrance'],
    planCount: 6,
    files: [
      '/coilab-workstation-3d.jpg',
      '/conference-room-3d.jpg',
      '/owner-room-3d.jpg',
      '/living-room-3d.jpg',
      '/tv-unit-3d.jpg',
      '/entrance-3d.jpg',
    ],
  },
]

const filters = ['all', 'commercial', 'plan and elevations', '3d']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

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
              onClick={() => setSelectedProject(project)}
              className={`project-card bg-bg-card border border-[rgba(201,169,110,0.15)] rounded-lg overflow-hidden transition-elegant hover:border-[rgba(201,169,110,0.4)] hover:-translate-y-[6px] hover:shadow-hover cursor-pointer ${
                activeFilter === 'all' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden h-[300px] group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: project.image
                      ? `url(${project.image})`
                      : `linear-gradient(135deg, #3a2e1e 0%, #6b5035 40%, #a07850 100%)`,
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

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[rgba(19,15,10,0.92)] backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-bg-card border border-[rgba(201,169,110,0.25)] rounded-lg max-w-[900px] w-full max-h-[85vh] overflow-y-auto relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[rgba(19,15,10,0.7)] border border-[rgba(201,169,110,0.15)] rounded-full text-gold hover:bg-[rgba(201,169,110,0.1)] hover:border-gold transition-elegant z-10"
                  aria-label="Close modal"
                >
                  <i className="fas fa-times text-lg" />
                </button>

                {/* Modal Content */}
                <div className="p-8 md:p-10">
                  {/* Category Badge */}
                  <span className="inline-block bg-[rgba(201,169,110,0.08)] border border-[rgba(201,169,110,0.15)] px-4 py-2 rounded-full text-[0.7rem] tracking-[0.12em] uppercase text-gold mb-6">
                    {selectedProject.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-normal text-text-primary mb-4">
                    {selectedProject.title}
                  </h3>

                  {/* Plan Count */}
                  <div className="flex items-center gap-2 mb-6 text-text-secondary">
                    <i className="fas fa-layer-group text-gold" />
                    <span className="text-[0.88rem] tracking-[0.05em]">{selectedProject.planCount} Plans Included</span>
                  </div>

                  {/* Description */}
                  <p className="text-[0.95rem] text-text-secondary leading-[1.85] mb-8">
                    {selectedProject.description}
                  </p>

                  {/* Project Files/PDFs/Images */}
                  {selectedProject.files && selectedProject.files.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-[0.72rem] tracking-[0.28em] uppercase text-gold mb-4">
                        {selectedProject.files[0].endsWith('.pdf') ? 'Project Files' : '3D Visualizations'}
                      </h4>
                      {selectedProject.files.map((file, index) => (
                        <div key={index} className="mb-6 rounded-lg overflow-hidden border border-[rgba(201,169,110,0.15)]">
                          {file.endsWith('.pdf') ? (
                            <iframe
                              src={file}
                              className="w-full h-[600px]"
                              title={`Project file ${index + 1}`}
                            />
                          ) : (
                            <img
                              src={file}
                              alt={`3D visualization ${index + 1}`}
                              className="w-full h-auto object-contain bg-bg-dark"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Project Image */}
                  {(!selectedProject.files || selectedProject.files.length === 0) && (
                    <div className="mb-8 rounded-lg overflow-hidden border border-[rgba(201,169,110,0.15)]">
                      <div
                        className="w-full h-[400px] bg-cover bg-center"
                        style={{
                          backgroundImage: `linear-gradient(135deg, #3a2e1e 0%, #6b5035 40%, #a07850 100%)`,
                        }}
                      />
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mb-8">
                    <h4 className="text-[0.72rem] tracking-[0.28em] uppercase text-gold mb-4">Included Plans</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-bg-dark border border-[rgba(201,169,110,0.15)] rounded-full text-[0.75rem] tracking-[0.08em] uppercase text-text-muted hover:border-gold hover:text-gold transition-elegant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-6 border-t border-[rgba(201,169,110,0.15)] flex gap-4 flex-wrap">
                    <button
                      onClick={() => {
                        setSelectedProject(null)
                        const contactSection = document.querySelector('#contact')
                        if (contactSection) {
                          const navHeight = 80
                          const targetPosition = contactSection.getBoundingClientRect().top + window.scrollY - navHeight
                          window.scrollTo({ top: targetPosition, behavior: 'smooth' })
                        }
                      }}
                      className="inline-flex items-center gap-[10px] px-[30px] py-[14px] rounded-full text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-elegant bg-gradient-primary text-charcoal shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,169,110,0.5)]"
                    >
                      <i className="fas fa-feather-alt" />
                      Discuss Your Project
                    </button>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center gap-[10px] px-[30px] py-[14px] rounded-full text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-elegant bg-transparent border border-[rgba(201,169,110,0.4)] text-gold hover:bg-[rgba(201,169,110,0.08)] hover:border-gold"
                    >
                      <i className="fas fa-arrow-left" />
                      Back to Projects
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
