import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import HeartCursor from './components/CursorGlow'
import Home from './components/Home'
import Education from './components/Education'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Certifications from './components/Certifications'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  const pageVariants = {
    initial: {
      opacity: 0,
      filter: 'blur(4px)',
      scale: 0.98,
    },
    in: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
    },
    out: {
      opacity: 0,
      filter: 'blur(4px)',
      scale: 0.98,
    },
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home key="home" />
      case 'education':
        return <Education key="education" />
      case 'projects':
        return <Projects key="projects" />
      case 'resume':
        return <Resume key="resume" />
      case 'certifications':
        return <Certifications key="certifications" />
      case 'gallery':
        return <Gallery key="gallery" />
      case 'contact':
        return <Contact key="contact" />
      default:
        return <Home key="home" />
    }
  }

  return (
    <div className="min-h-screen bg-lavender-100">
      <ScrollProgress />
      <HeartCursor />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
