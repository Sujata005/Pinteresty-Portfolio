import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend, FiMapPin, FiPhone, FiLoader } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: '#', color: 'hover:bg-gray-800' },
    { icon: FiLinkedin, label: 'LinkedIn', href: '#', color: 'hover:bg-blue-600' },
    { icon: FiTwitter, label: 'Twitter', href: '#', color: 'hover:bg-blue-400' },
    { icon: FiMail, label: 'Email', href: 'mailto:your.email@example.com', color: 'hover:bg-red-500' },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Your Name', // Replace with your name
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)

    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsLoading(false)
    }
  }

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
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-lavender-200/40 blur-3xl"
        variants={blobVariants}
        animate={{
          ...blobVariants.animate,
          x: [0, 15, -15, 0],
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-48 h-48 rounded-full bg-accent-purple/20 blur-3xl"
        variants={blobVariants}
        animate={{
          ...blobVariants.animate,
          y: [0, -20, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-lavender-300/30 blur-3xl"
        variants={blobVariants}
        animate={{
          ...blobVariants.animate,
          rotate: [0, 10, -10, 0],
        }}
        style={{ animationDelay: '4s' }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-44 h-44 rounded-full bg-lavender-100/50 blur-3xl"
        variants={blobVariants}
        animate={{
          ...blobVariants.animate,
          x: [0, -25, 25, 0],
          y: [0, 15, -15, 0],
        }}
        style={{ animationDelay: '3s' }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-lavender-700 via-lavender-600 to-accent-purple bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>

          {/* Intro Text */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Let's build something amazing together 💜
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">💜</div>
                  <h3 className="text-2xl font-bold text-lavender-700 mb-2">
                    Message sent successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-xl border border-lavender-200 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-400/20 focus:outline-none transition-all duration-300 bg-lavender-50/50 disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-xl border border-lavender-200 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-400/20 focus:outline-none transition-all duration-300 bg-lavender-50/50 disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-xl border border-lavender-200 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-400/20 focus:outline-none transition-all duration-300 bg-lavender-50/50 resize-none disabled:opacity-50"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={!isLoading ? { scale: 1.05, boxShadow: "0 10px 25px rgba(180, 160, 255, 0.3)" } : {}}
                    whileTap={!isLoading ? { scale: 0.95 } : {}}
                    className="w-full bg-lavender-500 hover:bg-lavender-600 disabled:bg-lavender-300 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:shadow-none flex items-center justify-center gap-2 disabled:cursor-not-allowed cursor-pointer"
                    transition={{ duration: 0.2 }}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <FiLoader className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <motion.div
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiSend className="w-5 h-5" />
                        </motion.div>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Social Links & Contact Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-lavender-700 mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-lavender-100 flex items-center justify-center cursor-pointer icon-hover"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMail className="w-5 h-5 text-lavender-600" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <motion.a
                      href="mailto:your.email@example.com"
                      className="text-lavender-700 hover:text-lavender-800 font-medium transition-colors duration-200 cursor-pointer"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      your.email@example.com
                    </motion.a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-lavender-100 flex items-center justify-center cursor-pointer icon-hover"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMapPin className="w-5 h-5 text-lavender-600" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-lavender-700 font-medium">Your City, Country</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-lavender-100 flex items-center justify-center cursor-pointer icon-hover"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiPhone className="w-5 h-5 text-lavender-600" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-lavender-700 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-lavender-700 mb-6">Follow Me</h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(180, 160, 255, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full aspect-square rounded-xl bg-lavender-500 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg ${social.color} group cursor-pointer`}
                      aria-label={social.label}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="icon-hover"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
