import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const featured = [
    {
      title: "✨ Pinterest-Style Developer Portfolio",
      desc: "Designed and built a visually rich, Pinterest-inspired portfolio with custom animations and modern UI aesthetics.",
      github: "https://github.com/Sujata005/Pinteresty-Portfolio",
      live: "https://pinteresty-portfolio.vercel.app/",
      image: "https://picsum.photos/600/400",
    },
    {
      title: "🤖 AI Resume Analyzer",
      desc: "Analyzes resumes using AI to extract meaningful insights and evaluate candidate profiles efficiently.",
      github: "https://github.com/Sujata005/AI-Resume-Scanner",
      live: "https://ai-resume-scannerfrontend.vercel.app",
      image: "https://picsum.photos/600/401",
    },
    {
      title: "🧠 AI Career Path Recommender",
      desc: "Suggests personalized career paths based on user skills and interests using intelligent analysis.",
      github: "https://github.com/Sujata005/CareerPathAnalyzer",
      live: "https://career-path-analyzer-orpin.vercel.app/",
      image: "https://picsum.photos/600/402",
    },
    {
      title: "🍽️ Smart Café – Fullstack App",
      desc: "Built a fullstack MERN application for seamless food ordering with dynamic UI and backend integration.",
      github: "https://github.com/Sujata005/smart-cafe",
      live: "https://smart-cafe-lilac-tau.vercel.app/",
      image: "https://picsum.photos/600/403",
    },
  ];

  const others = [
    { title: "💬 WhatsApp Message Generator", desc: "Automates message generation using APIs.", github: "#", live: "#" },
    { title: "🏥 PhysioAI", desc: "AI-based physiotherapy assistant.", github: "#", live: "" },
    { title: "🤖 Discord Chatbot", desc: "Custom chatbot with API integrations.", github: "https://github.com/Sujata005/discord", live: "" },
    { title: "📊 Sentiment Analysis", desc: "ML model to classify text sentiment.", github: "https://github.com/Sujata005/Sentimental-Analysis", live: "" },
    { title: "☁️ Word Cloud", desc: "Generates word clouds from text.", github: "https://github.com/Sujata005/Word-cloud", live: "" },
    { title: "📧 Mail Automation", desc: "Automates email workflows using SMTP.", github: "https://github.com/Sujata005/Automation_of_mail_sending_using_python", live: "" },
  ];

  const mini = [
    { title: "🧮 Calculator" },
    { title: "✅ ToDo App" },
    { title: "🔐 Password Generator" },
  ];

  return (
    <section className="py-24 px-4 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* ⭐ FEATURED */}
        <h3 className="text-3xl font-semibold mb-2">⭐ Featured Projects</h3>
        <p className="text-sm text-gray-500 mb-8 italic">
          A curated selection of my most impactful and creative work.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featured.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-[0_10px_30px_rgba(167,139,250,0.3)] transition duration-300"
            >
              <img
                src={p.image}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
                <h4 className="text-xl font-bold">{p.title}</h4>
                <p className="text-sm opacity-80 mb-3">{p.desc}</p>

                <div className="flex gap-4">
                  {p.github && (
                    <a href={p.github} target="_blank">
                      <FiGithub />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-12" />

        {/* ⚡ OTHER */}
        <h3 className="text-2xl font-semibold mb-2">⚡ Other Projects</h3>
        <p className="text-sm text-gray-500 mb-8 italic">
          Supporting builds showcasing versatility across domains.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {others.map((p, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{p.desc}</p>

              <div className="flex gap-3 text-sm">
                {p.github && <a href={p.github}>GitHub</a>}
                {p.live && <a href={p.live}>Live</a>}
              </div>
            </div>
          ))}
        </div>

        {/* divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-12" />

        {/* 🧪 MINI */}
        <h3 className="text-2xl font-semibold mb-6">🧪 Mini Projects</h3>

        <div className="flex flex-wrap gap-4">
          {mini.map((p, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm"
            >
              {p.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}