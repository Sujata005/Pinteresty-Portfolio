import { motion } from 'framer-motion'
import { FiAward, FiBook, FiFileText } from 'react-icons/fi'

export default function Education() {
  const education = [
    {
      id: 1,
      degree: 'B.Tech Computer Science',
      school: 'AKGEC Ghaziabad',
      year: '2021 - 2025',
      desc: 'Focused on fullstack, AI, and software development',
      icon: <FiAward className="w-5 h-5" />,
    },
    {
      id: 2,
      degree: 'Class 12',
      school: 'CBSE School',
      year: '2020 - 2021',
      desc: 'PCM with Computer Science',
      icon: <FiBook className="w-5 h-5" />,
    },
    {
      id: 3,
      degree: 'Class 10',
      school: 'CBSE School',
      year: '2018 - 2019',
      desc: 'Science stream',
      icon: <FiFileText className="w-5 h-5" />,
    },
  ]

  const entryVariants = {
    hiddenLeft: { opacity: 0, x: -60 },
    hiddenRight: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-lavender-200/40 blur-3xl" />
      <div className="absolute top-20 right-8 w-44 h-44 rounded-full bg-accent-purple/30 blur-3xl" />
      <div className="absolute bottom-10 left-20 w-52 h-52 rounded-full bg-lavender-300/30 blur-3xl" />

      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-6 h-full w-1 bg-lavender-200 transform -translate-x-1/2" />

          <div className="space-y-10">
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
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-lavender-200 shadow-md flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <motion.div className="mt-8 md:mt-0 bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300" whileHover={{ scale: 1.03 }}>
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
    </section>
  )
}

