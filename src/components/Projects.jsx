import { FiGithub, FiExternalLink } from "react-icons/fi";
import CafeGif from "../assets/gifs/Higa.gif";
import ResumeGif from "../assets/gifs/Resume.gif";
import physioImg from "../assets/gifs/physio.gif";
import ToDoImg from "../assets/gifs/ToDo.gif";
import botImg from "../assets/images/bot.png";
import sentimentImg from "../assets/images/sentiment.png";
import mailImg from "../assets/images/mail.png";
import calcImg from "../assets/images/calc.png";
import wordImg from "../assets/images/word.png";
import passImg from "../assets/images/pass.png";
export default function Projects() {
  const featured = [
    {
      title: "🤖 AI Resume Analyzer",
      desc: "Analyzes resumes using AI to extract meaningful insights and evaluate candidate profiles efficiently.",
      github: "https://github.com/Sujata005/AI-Resume-Scanner",
      live: "https://ai-resume-scannerfrontend.vercel.app",
      image: ResumeGif,
    },
    {
      title: "🍽️ Smart Café – Fullstack App",
      desc: "Built a fullstack MERN application for seamless food ordering with dynamic UI and backend integration.",
      github: "https://github.com/Sujata005/smart-cafe",
      live: "https://smart-cafe-lilac-tau.vercel.app/",
      image: CafeGif,
    },
    {
      title: "✨ Pinterest-Style Developer Portfolio",
      desc: "Designed and built a visually rich, Pinterest-inspired portfolio with custom animations and modern UI aesthetics.",
      github: "https://github.com/Sujata005/Pinteresty-Portfolio",
      live: "https://pinteresty-portfolio.vercel.app/",
      image: "https://picsum.photos/600/402",
    },
    
  ];

  const academic = [
    { title: "🏥 PhysioAI", image: physioImg, github: "https://github.com/Sujata005/Pinteresty-Portfolio"},
    { title: "🤖 Discord Chatbot", image: botImg, github: "https://github.com/Sujata005/Pinteresty-Portfolio"},
    { title: "📊 Sentiment Analysis", image: sentimentImg, github: "https://github.com/Sujata005/Pinteresty-Portfolio"},
    { title: "📧 Mail Automation", image: mailImg, github: "https://github.com/Sujata005/Pinteresty-Portfolio"},
    { title: "🧮 Calculator", image: calcImg, github: "https://github.com/Sujata005/Calculator", live: "https://sujata005.github.io/Calculator/"},
    { title: "✅ ToDo App", image: ToDoImg, github: "https://github.com/Sujata005/ToDo-SIte", live: "https://sujata005.github.io/ToDo-SIte/"},
    { title: "☁️ Word Cloud", image: wordImg, github: "https://github.com/Sujata005/Pinteresty-Portfolio", live: "https://pinteresty-portfolio.vercel.app/"},
    { title: "🔐 Password Generator", image: passImg, github: "https://github.com/Sujata005/password-generator", live: "https://sujata005.github.io/password-generator/"},
  ];

  const others = [
    { title: "💬 WhatsApp Generator", github: "https://github.com/Sujata005/Pinteresty-Portfolio", live: "https://pinteresty-portfolio.vercel.app/" },
    { title: "🧠 Career Path Analyzer", github: "https://github.com/Sujata005/Pinteresty-Portfolio", live: "https://pinteresty-portfolio.vercel.app/" },
  ];

   return (
    <section className="py-24 px-4 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* ⭐ FEATURED */}
        <h3 className="text-3xl font-semibold mb-6">⭐ Featured Projects</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featured.map((p, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={p.image}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-white">
                <h4 className="font-bold">{p.title}</h4>
                <p className="text-sm opacity-80">{p.desc}</p>

                <div className="flex gap-3 mt-2">
                  <a href={p.github} target="_blank">GitHub</a>
                  <a href={p.live} target="_blank">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🎓 ACADEMIC */}
        <h3 className="text-2xl font-semibold mb-6">🎓 Academic Projects</h3>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {academic.map((p, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-3 hover:shadow-md transition">
              <img src={p.image} className="rounded mb-2 h-32 w-full object-cover" />
              <p className="text-sm font-medium">{p.title}</p>
              <div className="flex gap-3 mt-2">
                  <a href={p.github} target="_blank">GitHub</a>
                  <a href={p.live} target="_blank">Live Demo</a>
                </div>
            </div>
          ))}
        </div>

        {/* ⚡ OTHER */}
        <h3 className="text-2xl font-semibold mb-6">⚡ Other Projects</h3>

        <div className="flex gap-4 flex-wrap">
          {others.map((p, i) => (
            <span key={i} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
              {p.title}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}