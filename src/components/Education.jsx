import { motion } from 'framer-motion'
import { FiAward, FiBook, FiFileText } from 'react-icons/fi'

export default function Education() {
  const education = [
    {
      id: 1,
      degree: 'B.Tech Computer Science',
      school: 'Graphic Era HillUniversity',
      year: '2021 - 2025',
      icon: <FiAward className="w-5 h-5" />,
    },
    {
      id: 2,
      degree: 'Senior Secondary',
      school: 'Kendriya Vidyalaya',
      year: '2019 - 2020',
      desc: 'PCM with Computer Science',
      icon: <FiBook className="w-5 h-5" />,
    },
    {
      id: 3,
      degree: 'High School',
      school: 'Kendriya Vidyalaya',
      year: '2016 - 2017',
      icon: <FiFileText className="w-5 h-5" />,
    },
  ]

  const entryVariants = {
    hiddenLeft: { opacity: 0, x: -60 },
    hiddenRight: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
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

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-6 h-full w-1 bg-lavender-200 transform -translate-x-1/2" />

          <div className="space-y-8">
            {education.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={item.id}
                  className={`relative md:w-1/2 ${isLeft ? 'md:left-0 md:pr-8 text-right md:ml-auto' : 'md:ml-0 md:pl-8 text-left md:mr-auto'}`}
                  initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={entryVariants}
                >
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:translate-x-0 md:top-auto md:mr-0 md:ml-0">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-white border-2 border-lavender-200 shadow-md flex items-center justify-center cursor-pointer hover:border-lavender-400 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="icon-hover"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div className="mt-8 md:mt-0 bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-lg hover:border-lavender-200 border border-transparent" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
                    <p className="text-sm text-lavender-500 mb-2">{item.year}</p>
                    <h3 className="text-xl font-semibold text-lavender-800 mb-2">{item.degree}</h3>
                    <p className="text-lg font-medium text-lavender-600 mb-3">{item.school}</p>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

