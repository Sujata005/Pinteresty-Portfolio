import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Smart Cafe',
      description: 'Food ordering MERN app',
      tech: ['React', 'Node', 'MongoDB'],
      image: 'https://via.placeholder.com/500x380?text=Smart+Cafe',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'AI Gesture Control',
      description: 'Control system using MediaPipe',
      tech: ['Python', 'OpenCV'],
      image: 'https://via.placeholder.com/500x320?text=AI+Gesture+Control',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Discord Bot',
      description: 'Custom chatbot',
      tech: ['Python', 'API'],
      image: 'https://via.placeholder.com/500x430?text=Discord+Bot',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Portfolio',
      description: 'Pinterest style portfolio',
      tech: ['React', 'Tailwind'],
      image: 'https://via.placeholder.com/500x360?text=Portfolio',
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Word Cloud',
      description: 'Converts an Article into Wordcloud',
      tech: ['Python', 'NLP'],
      image: 'images/word.png',
      github: 'https://github.com/Sujata005/Word-cloud',
      live: '#',
    },
    {
      id: 6,
      title: 'Automation of Mail Sending Using Python',
      description: 'Automating the task of mail sending',
      tech: ['Python', 'SMTP'],
      image: 'images/mail.png',
      github: 'https://github.com/Sujata005/Automation_of_mail_sending_using_python',
      live: '#',
    },
    {
      id: 7,
      title: 'Sentimental Analysis',
      description: 'Analyzing polarity of a news article or a text',
      tech: ['Python', 'NLP', 'Machine Learning'],
      image: 'images/sentiment.png',
      github: 'https://github.com/Sujata005/Sentimental-Analysis',
      live: '#',
    },
    {
      id: 8,
      title: 'Discord AI Chatbot',
      description: 'Converse with user',
      tech: ['Python', 'Discord API', 'AI'],
      image: 'images/bot.png',
      github: 'https://github.com/Sujata005/discord',
      live: '#',
    },
    {
      id: 9,
      title: 'Calculator',
      description: 'Calculator. Developed built using React',
      tech: ['React', 'JavaScript'],
      image: 'assets/images/designs/bmicalculator.png',
      github: 'https://github.com/Sujata005/Calculator',
      live: '#',
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
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
      <motion.div
        className="absolute -top-12 -left-16 w-52 h-52 rounded-full bg-lavender-300/50 blur-2xl"
        variants={bgShape}
        initial="hidden"
        animate={{
          ...bgShape.visible,
          y: [0, -15, 0],
          transition: {
            ...bgShape.visible.transition,
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
        }}
      />
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-accent-purple/30 blur-2xl"
        variants={bgShape}
        initial="hidden"
        animate={{
          ...bgShape.visible,
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0],
          transition: {
            ...bgShape.visible.transition,
            x: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          },
        }}
        transition={{ delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-lavender-200/40 blur-3xl"
        variants={bgShape}
        initial="hidden"
        animate={{
          ...bgShape.visible,
          scale: [1, 1.2, 0.8, 1],
          transition: {
            ...bgShape.visible.transition,
            scale: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 },
          },
        }}
        transition={{ delay: 0.8 }}
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent">
          My Projects
        </h2>

        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="break-inside-avoid bg-white rounded-xl shadow-md border border-lavender-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                  style={{ minHeight: 190 }}
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm text-lavender-700 font-semibold hover:bg-white transition-all duration-200 shadow-lg"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="w-4 h-4" />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-lavender-500 to-accent-purple text-white font-semibold hover:shadow-lg transition-all duration-200 shadow-lg"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-lavender-700 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={`${project.id}-${tech}`}
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-lavender-100 to-lavender-200 text-lavender-700 border border-lavender-300/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
