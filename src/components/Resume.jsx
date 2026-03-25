import { FiDownload } from 'react-icons/fi'

export default function Resume() {
  return (
    <section className="min-h-screen py-24 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-lavender-800 mb-16 text-center fade-in">
          Resume
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resume Preview */}
          <div className="card slide-in-up flex flex-col items-center justify-center min-h-96">
            <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-lavender-200 to-lavender-100 flex items-center justify-center mb-6">
              <img
                src="https://via.placeholder.com/300x400?text=Resume+Preview"
                alt="Resume Preview"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
            <p className="text-gray-600 text-center text-sm">
              PDF resume preview
            </p>
          </div>

          {/* Resume Info */}
          <div className="space-y-6 slide-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="card">
              <h3 className="text-2xl font-bold text-lavender-700 mb-4">
                Download Resume
              </h3>
              <p className="text-gray-600 mb-6">
                Get my complete resume in PDF format with all my experience, skills, and achievements.
              </p>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <FiDownload />
                Download Resume
              </button>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-lavender-700 mb-4">
                Experience Highlights
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-lavender-400 font-bold mr-3">•</span>
                  <span>5+ years of web development experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender-400 font-bold mr-3">•</span>
                  <span>Full-stack developer with React and Node.js expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender-400 font-bold mr-3">•</span>
                  <span>UI/UX designer with modern design sensibilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lavender-400 font-bold mr-3">•</span>
                  <span>Built and launched multiple successful projects</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-lavender-700 mb-4">
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'UI Design', 'API Development', 'Git'].map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
