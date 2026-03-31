import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronDown, FiCode, FiZap, FiHeart, FiCoffee, FiBook, FiCamera, FiTrendingUp, FiAward, FiFolder, FiStar } from 'react-icons/fi'
import Typed from 'typed.js'
import profileImage from '../assets/images/profile.jpg'

export default function Home() {
  const typedRef = useRef(null)

  // Initialize Typed.js with smoother animation
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Fullstack Developer',
        'AI/ML Explorer',
        'UI Prototyper',
        'Idea Builder',
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    })

    return () => {
      typed.destroy()
    }
  }, [])

  // Floating Pinterest cards data - Minimal decorative elements
  const floatingCards = [
    { icon: '✨', text: '', color: 'from-lavender-100/60 to-lavender-200/40', delay: 0, position: { top: '15%', left: '5%' } },
    { icon: '💫', text: '', color: 'from-accent-purple/30 to-lavender-200/50', delay: 1, position: { top: '60%', right: '8%' } },
    { icon: '🌟', text: '', color: 'from-lavender-200/50 to-accent-purple/40', delay: 2, position: { bottom: '20%', left: '10%' } },
  ]

  const stats = [
    { icon: <FiFolder className="w-5 h-5" />, label: 'Projects', value: '8+', color: 'text-lavender-600' },
    { icon: <FiAward className="w-5 h-5" />, label: 'Certifications', value: '20+', color: 'text-accent-purple' },
    { icon: <FiCode className="w-5 h-5" />, label: 'GitHub Repos', value: '20+', color: 'text-lavender-500' },
    { icon: <FiTrendingUp className="w-5 h-5" />, label: 'Experience', value: 'Virtual Internships', color: 'text-accent-purple' },
  ]

  // Interests data - Updated to use consistent color system
  const interests = [
    { icon: <FiCamera className="w-6 h-6" />, label: 'Photography', color: 'bg-lavender-100 text-lavender-700' },
    { icon: <FiHeart className="w-6 h-6" />, label: 'Beaded Jewelry', color: 'bg-lavender-100 text-lavender-700' },
    { icon: <FiBook className="w-6 h-6" />, label: 'Reading', color: 'bg-lavender-100 text-lavender-700' },
    { icon: <FiCoffee className="w-6 h-6" />, label: 'Coffee & Tea', color: 'bg-lavender-100 text-lavender-700' },
    { icon: <FiZap className="w-6 h-6" />, label: 'GenAI Experiments', color: 'bg-lavender-100 text-lavender-700' },
    { icon: <FiCode className="w-6 h-6" />, label: 'Open Source', color: 'bg-lavender-100 text-lavender-700' },
  ]

  // What I Do Best data
  const strengths = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'UI Prototyping',
      description: 'Creating intuitive, beautiful interfaces that users love',
      color: 'from-lavender-400 to-accent-purple'
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Fullstack Development',
      description: 'Building end-to-end solutions with modern technologies',
      color: 'from-accent-purple to-lavender-400'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'AI/ML Integration',
      description: 'Exploring and implementing cutting-edge AI solutions',
      color: 'from-lavender-500 to-purple-400'
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Creative Problem Solving',
      description: 'Finding innovative solutions to complex challenges',
      color: 'from-pink-400 to-lavender-500'
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const blobVariants = {
    animate: {
      x: [0, 20, -20, 0],
      y: [0, 30, -30, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const floatingCardVariants = {
    animate: (delay) => ({
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  }

  return (
    <>
      <section className="min-h-screen px-4 pt-20 pb-24 relative overflow-hidden">
      {/* Background Blobs - Enhanced with more subtle floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-48 h-48 rounded-full bg-lavender-200/30 blur-3xl"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-56 h-56 rounded-full bg-accent-purple/20 blur-3xl"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-lavender-300/25 blur-3xl"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />
      {/* Additional subtle floating blobs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-purple-200/20 blur-2xl"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-36 h-36 rounded-full bg-lavender-300/15 blur-2xl"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      />
      <motion.div
        className="absolute top-2/3 right-10 w-28 h-28 rounded-full bg-accent-purple/25 blur-2xl"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '5s' }}
      />

      {/* Floating Pinterest Cards - Minimal decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            custom={card.delay}
            variants={floatingCardVariants}
            animate="animate"
            className={`absolute p-2 rounded-full bg-gradient-to-br ${card.color} shadow-sm backdrop-blur-sm border border-white/30 opacity-60`}
            style={{
              top: card.position.top,
              left: card.position.left,
              right: card.position.right,
              bottom: card.position.bottom,
              transform: `rotate(${(i % 2) * 5 - 2.5}deg)`,
            }}
          >
            <div className="text-sm">{card.icon}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section - 2 Column Layout */}
        <div className="min-h-screen grid lg:grid-cols-2 gap-16 items-center pt-20">
          {/* Left Side - Main Content */}
          <div className="flex flex-col gap-8">
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-lavender-600 via-purple-500 to-accent-purple bg-clip-text text-transparent leading-tight drop-shadow-sm">
                Sujata Bijalwan
              </h1>
              <p className="text-xl md:text-2xl text-lavender-700 font-medium leading-relaxed">
                Fullstack Developer blending UI creativity with AI/ML curiosity
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Graduate actively exploring opportunities in Fullstack and AI
              </p>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="text-left h-12">
              <p className="text-2xl text-lavender-600 font-semibold leading-relaxed">
                <span ref={typedRef}></span>
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(180, 160, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-lavender-500 to-accent-purple text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lavender-500/60 flex items-center gap-2 border-2 border-transparent hover:border-lavender-400"
                >
                  <FiFolder className="w-5 h-5" />
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(180, 160, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-lavender-400 text-lavender-700 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-lavender-300/50 hover:bg-lavender-50 flex items-center gap-2"
                >
                  <FiMail className="w-5 h-5" />
                  Contact Me
                </motion.button>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(180, 160, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-lavender-500 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-800"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-lavender-500 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:bg-blue-600"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-lavender-500 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:bg-blue-400"
                  aria-label="Twitter"
                >
                  <FiTwitter size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Profile Card and Stats */}
          <div className="flex flex-col gap-8">
            {/* Profile Card */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="card p-8 text-center relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-lavender-400/20 to-accent-purple/20 rounded-3xl blur-2xl -z-10"></div>

                {/* Profile Image with Enhanced Glow */}
                <div className="mb-8 flex justify-center relative">
                  {/* Outer Glow Ring */}
                  <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-lavender-400/40 via-purple-400/30 to-accent-purple/40 blur-3xl animate-pulse"></div>
                  {/* Inner Glow Ring */}
                  <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-lavender-500/50 to-accent-purple/50 blur-2xl"></div>

                  {/* Profile Circle */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-lavender-400 to-accent-purple shadow-2xl overflow-hidden ring-4 ring-white ring-offset-4 ring-offset-lavender-100">
                    <img
                      src={profileImage}
                      alt="Sujata Bijalwan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-lavender-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    🟣 Job Hunting
                  </span>
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-lavender-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm ml-2">
                    🟢 Open to Opportunities
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-lavender-100 relative overflow-hidden cursor-pointer hover:border-lavender-300"
                  >
                    {/* Subtle decorative icon */}
                    <motion.div
                      className="absolute top-2 right-2 text-lavender-200 opacity-30 icon-hover"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiStar className="w-3 h-3" />
                    </motion.div>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`p-2 rounded-lg bg-lavender-100 ${stat.color} icon-hover`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <div>
                        <div className="text-3xl font-bold text-lavender-700">{stat.value}</div>
                        <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* About Me Section */}
        <motion.div
          variants={itemVariants}
          className="min-h-screen max-w-4xl mx-auto mt-20"
        >
          <div className="bg-white rounded-xl p-8 shadow-md border border-lavender-100">
            <h2 className="text-4xl font-bold text-lavender-700 mb-6 text-center">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate fullstack developer who thrives on turning creative ideas into functional, beautiful applications.
                My journey in tech started with curiosity about how things work, and it evolved into a love for crafting digital experiences that make a difference.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and continuous learning. When I'm not coding, you'll find me experimenting with AI,
                capturing moments through photography, or creating unique beaded jewelry pieces. I work best in environments that encourage creativity
                and collaboration, and I'm always excited to take on new challenges.
              </p>
              <p>
                My approach combines technical expertise with a user-centered mindset, ensuring that every project I work on not only functions flawlessly
                but also provides an exceptional user experience.
              </p>
            </div>
          </div>
        </motion.div>

            {/* Interests Section */}
            <motion.div variants={itemVariants} className="min-h-screen mt-20">
              <h2 className="text-4xl font-bold text-lavender-700 mb-8 text-center">Interests & Hobbies</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {interests.map((interest, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -3, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-lavender-100 text-center cursor-pointer hover:border-lavender-300"
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full ${interest.color} flex items-center justify-center mx-auto mb-3 icon-hover`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {interest.icon}
                    </motion.div>
                    <div className="text-sm font-medium text-lavender-700">{interest.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

        {/* What I Do Best Section */}
        <motion.div variants={itemVariants} className="min-h-screen mt-20">
          <h2 className="text-4xl font-bold text-lavender-700 mb-8 text-center">What I Do Best</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-lavender-100 text-center cursor-pointer hover:border-lavender-300"
              >
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${strength.color} flex items-center justify-center mx-auto mb-4 text-white icon-hover shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {strength.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-lavender-700 mb-2">{strength.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
    </>
  )
}