import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { FiExternalLink, FiAward, FiX } from 'react-icons/fi'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certs = [
    {
      title: "Fullstack Web Development",
      issuer: "Udemy",
      date: "2024",
      image: "/certs/cert1.png",
      link: "#",
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "2023",
      image: "/certs/cert2.png",
      link: "#",
    },
    {
      title: "AI Basics",
      issuer: "Google",
      date: "2024",
      image: "/certs/cert3.png",
      link: "#",
    },
    {
      title: "React Course",
      issuer: "Udemy",
      date: "2024",
      image: "/certs/cert4.png",
      link: "#",
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-lavender-200/40 blur-3xl" />
      <div className="absolute top-20 right-8 w-44 h-44 rounded-full bg-accent-purple/30 blur-3xl" />
      <div className="absolute bottom-10 left-20 w-52 h-52 rounded-full bg-lavender-300/30 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent">
          Certifications
        </h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-lavender-400/50 transition-all duration-300 border border-lavender-100 relative">
                {/* Badge Icon */}
                <div className="absolute top-3 right-3 z-10 bg-lavender-500 text-white p-2 rounded-full shadow-lg">
                  <FiAward className="w-4 h-4" />
                </div>
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedCert(cert)}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-lavender-800 mb-2">{cert.title}</h3>
                  <p className="text-lavender-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-lavender-500 mb-4">{cert.date}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-lavender-500 text-white rounded-lg hover:bg-lavender-600 transition-colors duration-300"
                  >
                    View Certificate
                    <FiExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative max-w-4xl max-h-full bg-white rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 bg-lavender-500 text-white p-2 rounded-full hover:bg-lavender-600 transition-colors shadow-lg"
                  onClick={() => setSelectedCert(null)}
                >
                  <FiX className="w-5 h-5" />
                </button>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold text-lavender-800 mb-2">{selectedCert.title}</h3>
                  <p className="text-lavender-600 mb-1">{selectedCert.issuer}</p>
                  <p className="text-sm text-lavender-500 mb-4">{selectedCert.date}</p>
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-lavender-500 text-white rounded-lg hover:bg-lavender-600 transition-colors duration-300"
                  >
                    View Certificate
                    <FiExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
