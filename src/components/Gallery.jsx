import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { FiX } from 'react-icons/fi'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const gallery = [
    {
      image: "/gallery/img1.jpg",
      title: "Project UI",
      tag: "UI",
    },
    {
      image: "/gallery/img2.jpg",
      title: "Coding",
      tag: "Dev",
    },
    {
      image: "/gallery/img3.jpg",
      title: "Design",
      tag: "UI",
    },
    {
      image: "/gallery/img4.jpg",
      title: "Setup",
      tag: "Work",
    },
    {
      image: "/gallery/img5.jpg",
      title: "Screenshot",
      tag: "Project",
    }
  ]

  const filters = ['All', 'UI', 'Project', 'Dev', 'Design', 'Work']

  const filteredGallery = activeFilter === 'All' ? gallery : gallery.filter(item => item.tag === activeFilter)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <motion.section
      className="relative min-h-screen py-24 px-4 overflow-hidden mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Background decorations */}
      <motion.div
        className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-lavender-200/40 blur-3xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />
      <motion.div
        className="absolute top-20 right-8 w-44 h-44 rounded-full bg-accent-purple/30 blur-3xl"
        animate={{
          y: [0, 15, -15, 0],
          x: [0, -10, 10, 0],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          },
        }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-52 h-52 rounded-full bg-lavender-300/30 blur-3xl"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
          transition: {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          },
        }}
      />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent">
          Gallery
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-lavender-500 text-white shadow-lg'
                  : 'bg-white text-lavender-600 hover:bg-lavender-50 border border-lavender-200 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredGallery.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div
                className="relative rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:shadow-lavender-400/50 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.span
                    className="px-3 py-1 bg-lavender-500 text-white rounded-full text-sm font-medium cursor-pointer hover:bg-lavender-600 transition-colors duration-200"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.tag}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative max-w-4xl max-h-full bg-white rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute top-4 right-4 z-10 bg-lavender-500 text-white p-2 rounded-full hover:bg-lavender-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="w-5 h-5" />
                </motion.button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold text-lavender-800 mb-2">{selectedImage.title}</h3>
                  <span className="px-3 py-1 bg-lavender-500 text-white rounded-full text-sm font-medium">
                    {selectedImage.tag}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
