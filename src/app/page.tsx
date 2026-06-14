'use client'

import { useEffect, useState } from 'react'
import ParticleCanvas from '@/components/ParticleCanvas'
import Loader from '@/components/Loader'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ParticleCanvas />
      <Loader isLoading={loading} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
