import { FaGithub, FaExternalLinkAlt, FaRobot, FaVideo, FaMicrophone, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

import foodImg from "../assets/images/food.png";
import whatsappImg from "../assets/images/whatsapp.png";
import portfolioImg from "../assets/images/portfolio.png";
// Import your AI Interview Agent image here
import aiInterviewImg from "../assets/images/ai-interview.png";

const projects = [
  {
    title: "AI Interview Agent",
    description:
      "An intelligent interview preparation platform powered by AI that conducts realistic mock interviews. Features voice-based interaction, real-time feedback on answers, and comprehensive performance analytics.",
    image: aiInterviewImg,
    github: "https://github.com/rahulkumawat0048/InterviewIQ",
    live: "https://interviewiq-client-er1d.onrender.com/",
    featured: true,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Web Speech API",
      "Tailwind CSS"
    ],
    features: [
      "🤖 AI-powered interview questions tailored to job role",
      "🎙️ Voice recognition for natural conversation flow",
      "📊 Real-time answer evaluation with scoring",
      "💡 Intelligent feedback and improvement suggestions",
      "📈 Performance tracking across multiple sessions",
      "🎯 Role-specific question generation (Frontend, Backend, Full Stack, etc.)"
    ]
  },
  {
    title: "Food Delivery App",
    description:
      "A full-stack food delivery platform with real-time order tracking and role-based dashboards for users, restaurants, and delivery partners.",
    image: foodImg,
    github: "https://github.com/rahulkumawat0048/Mern-Food-Delivery-App",
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "Twilio",
      "MongoDB",
      "Socket.IO",
    ],
    features: [
      "Restaurant and delivery partner dashboards",
      "Real-time order status updates",
      "SMS notifications via Twilio",
      "Secure authentication and role-based routing"
    ]
  },
  {
    title: "WhatsApp Clone",
    description:
      "A real-time messaging application with instant chat, user profiles, and video calling capabilities.",
    image: whatsappImg,
    github: "https://github.com/rahulkumawat0048/Mern-WhatsApp-clone",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "WebRTC"],
    features: [
      "Instant messaging with read receipts",
      "Video and audio calling with WebRTC",
      "User authentication and profile management",
      "Responsive design for all devices"
    ]
  },
  {
    title: "Animated Developer Portfolio",
    description:
      "A modern portfolio website with smooth animations and a sleek dark theme to showcase projects and skills.",
    image: portfolioImg,
    github: "https://github.com/rahulkumawat0048/react-animated-portfolio",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    features: [
      "Smooth page transitions and scroll animations",
      "Fully responsive layout",
      "Interactive project showcase",
      "Optimized performance with Vite"
    ]
  },
];

export default function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Featured Work
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-4">Projects that showcase my expertise in full-stack and AI development</p>
      </motion.div>

      {/* Featured Project - AI Interview Agent */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <FaRobot className="w-3 h-3" /> Featured Project
                </span>
              </div>
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                {featuredProject.title}
                <FaRobot className="text-purple-400 w-5 h-5" />
              </h3>
              
              <p className="text-gray-300 text-base mb-6">
                {featuredProject.description}
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {featuredProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-purple-400">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-6">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 transition border border-purple-500/50"
                >
                  <FaGithub /> View Code
                </a>
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-500 hover:to-purple-600 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Other Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Key features summary */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.features.slice(0, 2).map((feature, i) => (
                  <span key={i} className="text-xs text-purple-400">• {feature.slice(0, 30)}...</span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.slice(0, 4).map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-xs text-gray-500">+{project.tech.length - 4}</span>
                )}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}