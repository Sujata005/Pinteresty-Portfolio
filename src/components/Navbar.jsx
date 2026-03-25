import { useState } from 'react'

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-lavender-400 rounded-3xl shadow-lg px-6 py-4 backdrop-blur-xs">
        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`navbar-link text-white font-medium ${
                  activeSection === section.id ? 'active' : ''
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 mt-4 bg-lavender-400 rounded-3xl shadow-lg p-4 w-48">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`block w-full text-left navbar-link text-white font-medium mb-2 ${
                    activeSection === section.id ? 'active' : ''
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
