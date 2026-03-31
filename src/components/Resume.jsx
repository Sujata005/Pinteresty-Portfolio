import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiCode, FiBriefcase, FiFolder, FiSettings, FiTrendingUp, FiAward, FiGithub } from 'react-icons/fi'

export default function Resume() {
  const [activeTab, setActiveTab] = useState('preview')

  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      label: "Skills",
      value: "React, Python, Node.js",
      color: "from-lavender-400 to-lavender-500"
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      label: "Experience",
      value: "Internships & Freelance",
      color: "from-accent-purple to-lavender-500"
    },
    {
      icon: <FiFolder className="w-6 h-6" />,
      label: "Projects",
      value: "10+ Completed",
      color: "from-lavender-500 to-accent-purple"
    },
    {
      icon: <FiSettings className="w-6 h-6" />,
      label: "Tech Stack",
      value: "MERN, AI, Cloud",
      color: "from-accent-purple to-lavender-400"
    }
  ]

  const stats = [
    {
      icon: <FiFolder className="w-8 h-8" />,
      label: "Projects Built",
      value: "15+",
      color: "text-lavender-600"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      label: "Certifications",
      value: "8",
      color: "text-accent-purple"
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      label: "Technologies",
      value: "12+",
      color: "text-lavender-500"
    },
    {
      icon: <FiGithub className="w-8 h-8" />,
      label: "GitHub Repos",
      value: "25+",
      color: "text-accent-purple"
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Resume
        </motion.h2>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-md border border-lavender-100 flex">
            <motion.button
              onClick={() => setActiveTab('preview')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-lavender-500 text-white shadow-lg'
                  : 'text-lavender-600 hover:bg-lavender-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Preview
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('highlights')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'highlights'
                  ? 'bg-lavender-500 text-white shadow-lg'
                  : 'text-lavender-600 hover:bg-lavender-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Highlights
            </motion.button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'preview' && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Resume Preview Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(180, 160, 255, 0.2)" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md p-8 border border-lavender-100"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-lavender-800 mb-2">Resume Preview</h3>
                <p className="text-lavender-600">View my complete professional background</p>
              </div>

              {/* PDF Preview Placeholder */}
              <div className="w-full aspect-[3/4] rounded-xl bg-gradient-to-br from-lavender-50 to-lavender-100 border-2 border-lavender-200 flex items-center justify-center mb-6">
                <div className="text-center">
                  <FiDownload className="w-16 h-16 text-lavender-400 mx-auto mb-4" />
                  <p className="text-lavender-600 font-medium">Resume PDF Preview</p>
                  <p className="text-sm text-lavender-500 mt-2">Click download to view full resume</p>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(180, 160, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-lavender-500 hover:bg-lavender-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg cursor-pointer hover:shadow-xl"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FiDownload className="w-5 h-5" />
                  </motion.div>
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'highlights' && (
          <motion.div
            key="highlights"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Quick Highlights Section */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-semibold text-center text-lavender-800 mb-8">Quick Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-gradient-to-br ${highlight.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        className="mb-3 p-3 bg-white/20 rounded-full icon-hover"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {highlight.icon}
                      </motion.div>
                      <h4 className="font-semibold text-lg mb-2">{highlight.label}</h4>
                      <p className="text-white/90 text-sm">{highlight.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold text-center text-lavender-800 mb-8">Key Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(180, 160, 255, 0.15)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl p-6 text-center shadow-md border border-lavender-100 hover:border-lavender-200 transition-all duration-300"
                  >
                    <div className={`mx-auto mb-3 ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-lavender-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-lavender-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}