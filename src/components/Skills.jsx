import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)", "Framer Motion", "Vite"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSocket", "JWT Authentication"]
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman", "Vercel"]
    },
    {
      title: "Programming & AI",
      skills: ["Java", "C++", "DSA", "OpenAI API", "Web Speech API", "Prompt Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Technical Arsenal
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-4">Tools and technologies I work with daily</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
          >
            <h3 className="text-xl font-semibold text-white mb-5 pb-2 border-b border-purple-500/30 inline-block">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="
                    px-4 py-2
                    bg-gradient-to-r from-purple-500/10 to-pink-500/10
                    border border-purple-500/30
                    rounded-full
                    text-gray-300 text-sm
                    hover:border-purple-500/70
                    hover:shadow-lg hover:shadow-purple-500/20
                    transition-all duration-300
                    cursor-default
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}