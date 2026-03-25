import { useState } from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="min-h-screen py-24 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-lavender-800 mb-16 text-center fade-in">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="card slide-in-up">
            <h3 className="text-2xl font-bold text-lavender-700 mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-lavender-200 focus:border-lavender-400 outline-none transition-colors bg-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-lavender-200 focus:border-lavender-400 outline-none transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-lavender-200 focus:border-lavender-400 outline-none transition-colors resize-none bg-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="p-4 bg-lavender-100 text-lavender-700 rounded-2xl text-center animate-fadeIn">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6 slide-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Contact Methods */}
            <div className="card">
              <h3 className="text-2xl font-bold text-lavender-700 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="btn-icon">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-lavender-600 font-medium hover:text-lavender-700"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h3 className="text-2xl font-bold text-lavender-700 mb-6">
                Follow Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="p-4 rounded-2xl bg-lavender-100 hover:bg-lavender-200 transition-colors flex items-center justify-center gap-2 text-lavender-700 font-medium group"
                >
                  <FiGithub size={20} />
                  <span className="group-hover:text-lavender-800">GitHub</span>
                </a>
                <a
                  href="#"
                  className="p-4 rounded-2xl bg-lavender-100 hover:bg-lavender-200 transition-colors flex items-center justify-center gap-2 text-lavender-700 font-medium"
                >
                  <FiLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="p-4 rounded-2xl bg-lavender-100 hover:bg-lavender-200 transition-colors flex items-center justify-center gap-2 text-lavender-700 font-medium"
                >
                  <FiTwitter size={20} />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="p-4 rounded-2xl bg-lavender-100 hover:bg-lavender-200 transition-colors flex items-center justify-center gap-2 text-lavender-700 font-medium"
                >
                  <FiMail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
