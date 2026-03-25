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
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  const bgShape = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.4, ease: 'easeInOut' },
    },
  }

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      <motion.div
        className="absolute -top-12 -left-16 w-52 h-52 rounded-full bg-lavender-300/50 blur-2xl"
        variants={bgShape}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-accent-purple/30 blur-2xl"
        variants={bgShape}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-lavender-200/40 blur-3xl"
        variants={bgShape}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="break-inside-avoid bg-white bg-lavender-50/90 rounded-xl shadow-md border border-lavender-100 overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover rounded-t-xl"
                style={{ minHeight: 190 }}
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-lavender-700 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="text-xs font-medium px-3 py-1 rounded-full text-white bg-lavender-400 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-lavender-300 text-white font-semibold hover:bg-lavender-400 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub className="inline mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-lavender-100 text-lavender-700 font-semibold hover:bg-lavender-200 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink className="inline mr-2" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
