import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef(null)
  const activeTabRef = useRef(null)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ]

  // Update indicator position when active section changes
  useEffect(() => {
    if (activeTabRef.current && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const activeRect = activeTabRef.current.getBoundingClientRect()

      setIndicatorStyle({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
      })
    }
  }, [activeSection])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="bg-lavender-400/90 backdrop-blur-md rounded-3xl shadow-xl px-6 py-4 border border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/20 rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 relative" ref={navRef}>
            {/* Sliding Indicator */}
            <motion.div
              className="absolute top-0 h-full bg-white/20 rounded-2xl shadow-lg backdrop-blur-sm"
              animate={indicatorStyle}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />

            {sections.map((section) => (
              <motion.button
                key={section.id}
                ref={activeSection === section.id ? activeTabRef : null}
                onClick={() => handleNavClick(section.id)}
                className={`navbar-link text-white font-medium relative px-4 py-2 rounded-2xl transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-lavender-700'
                    : 'hover:text-white hover:bg-white/10'
                }`}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}

                {/* Hover underline effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-white rounded-full"
                  initial={{ width: 0, x: '-50%' }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 mt-4 bg-lavender-400/95 backdrop-blur-md rounded-3xl shadow-xl p-4 w-48 border border-white/20"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`block w-full text-left navbar-link text-white font-medium mb-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white/20 text-lavender-700'
                      : 'hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </nav>
  )
}
