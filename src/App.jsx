import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Certifications from './components/Certifications'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-lavender-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-24">
        {activeSection === 'home' && <Home />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'certifications' && <Certifications />}
        {activeSection === 'gallery' && <Gallery />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}
