import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Self-Directed Projects",
      period: "2024 – Present",
      icon: <FaCode />,
      highlights: [
        "Built 4 major full-stack applications including AI Interview Agent, Food Delivery App, WhatsApp Clone, and Portfolio",
        "Implemented real-time features using Socket.IO for live chat and order tracking functionality",
        "Integrated OpenAI API and Web Speech API for AI-powered interview simulation",
        "Deployed 2 projects to production using Vercel and Render platforms"
      ]
    },
    {
      title: "MERN Stack Developer",
      company: "Academic & Personal Projects",
      period: "2024 – Present",
      icon: <FaLaptopCode />,
      highlights: [
        "Developed responsive web applications with React, Tailwind CSS, and Node.js",
        "Built RESTful APIs with Express.js and MongoDB for data persistence",
        "Implemented authentication and authorization using JWT and bcrypt",
        "Collaborated on code versioning using Git and GitHub for project management"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Project Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-4">Building real-world applications through self-directed learning</p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px w-0.5 h-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent" />
        
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              idx % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%] md:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot */}
            <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 ${idx === 0 ? "mt-6" : "mt-6"}`} />
            
            {/* Content Card */}
            <div className="w-full md:w-auto flex-1 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{exp.title}</h3>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </div>
              </div>
              
              <div className="text-xs text-purple-400 mb-4 flex items-center gap-2">
                <FaRocket className="w-3 h-3" />
                {exp.period}
              </div>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}