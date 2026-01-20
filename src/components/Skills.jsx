import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Java",
    "C++",
    "DSA",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
  ];

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-center text-3xl font-bold text-white mb-16">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.12 }}
            className="
              group relative bg-black
              border border-white/10 rounded-2xl
              px-6 py-5 text-center
              text-gray-300 font-medium tracking-wide
              hover:border-purple-500
              hover:shadow-xl hover:shadow-purple-500/30
              transition-all duration-300
            "
          >
            {/* Glow Effect */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-purple-500/10 opacity-0
              group-hover:opacity-100
              blur-xl transition
            " />

            <span className="relative z-10">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
