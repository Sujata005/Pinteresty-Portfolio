import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronDown } from 'react-icons/fi'
import Typed from 'typed.js'

export default function Home() {
  const typedRef = useRef(null)
  const tags = ['Fullstack', 'React', 'Python', 'AI', 'Student']
  const miniCards = ['Projects', 'AI', 'Code', 'Design', 'Portfolio']
  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: '#' },
    { icon: FiLinkedin, label: 'LinkedIn', href: '#' },
    { icon: FiTwitter, label: 'Twitter', href: '#' },
    { icon: FiMail, label: 'Email', href: '#' },
  ]

  // Initialize Typed.js
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Fullstack Developer',
        'AI Enthusiast',
        'Creative Coder',
        'Student Builder',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

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

  const miniCardVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 4,
        delay: i * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  }

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-lavender-200/40 blur-3xl"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-48 h-48 rounded-full bg-accent-purple/20 blur-3xl"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-lavender-300/30 blur-3xl"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-44 h-44 rounded-full bg-lavender-100/50 blur-3xl"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Mini Cards */}
        <div className="hidden lg:block absolute -left-40 top-10">
          {miniCards.slice(0, 2).map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={miniCardVariants}
              animate="animate"
              className="mb-6 px-4 py-3 bg-white rounded-2xl shadow-lg text-sm font-medium text-lavender-600 backdrop-blur-sm"
            >
              {card}
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block absolute -right-40 top-32">
          {miniCards.slice(2, 4).map((card, i) => (
            <motion.div
              key={i + 2}
              custom={i + 2}
              variants={miniCardVariants}
              animate="animate"
              className="mb-6 px-4 py-3 bg-white rounded-2xl shadow-lg text-sm font-medium text-lavender-600 backdrop-blur-sm"
            >
              {card}
            </motion.div>
          ))}
        </div>

        {/* Main Card */}
        <motion.div
          variants={itemVariants}
          className="card max-w-lg mx-auto p-8 md:p-12 text-center relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-lavender-400/20 to-accent-purple/20 rounded-3xl blur-2xl -z-10"></div>

          {/* Profile Image with Glow */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex justify-center relative"
          >
            {/* Glow Circle */}
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-lavender-400 to-accent-purple opacity-30 blur-2xl"></div>

            {/* Profile Circle */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-lavender-400 to-accent-purple shadow-2xl overflow-hidden ring-4 ring-white ring-offset-4 ring-offset-lavender-100">
              <img
                src="https://via.placeholder.com/200?text=Profile+Photo"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name with Gradient and Typing Animation */}
          <motion.div variants={itemVariants} className="mb-2">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent">
              Your Name
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="mb-6 h-8">
            <p className="text-xl text-lavender-700 font-semibold">
              <span ref={typedRef}></span>
            </p>
          </motion.div>

          {/* Skills Tags */}
          <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-2 justify-center">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-lavender-100 to-lavender-50 text-lavender-700 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Intro Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-10 leading-relaxed"
          >
            A creative developer passionate about building beautiful and functional digital experiences. Welcome to my portfolio!
          </motion.p>

          {/* Main Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary mx-auto block mb-8"
          >
            View Portfolio
          </motion.button>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 pt-6 border-t border-lavender-100"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-icon hover:bg-lavender-200"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Fifth Mini Card - Center Bottom */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -bottom-20">
          <motion.div
            custom={4}
            variants={miniCardVariants}
            animate="animate"
            className="px-4 py-3 bg-white rounded-2xl shadow-lg text-sm font-medium text-lavender-600 backdrop-blur-sm"
          >
            {miniCards[4]}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2 font-medium">Scroll Down</p>
          <motion.div
            variants={scrollIndicatorVariants}
            animate="animate"
            className="text-lavender-400 flex justify-center"
          >
            <FiChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
