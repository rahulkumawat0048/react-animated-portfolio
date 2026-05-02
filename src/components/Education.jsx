import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full" />
      </motion.div>

      <div className="space-y-8">
        {/* BTECH - Premium Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6
                     hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition" />
          <span className="text-white absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-purple-700 text-xs px-3 py-1 rounded-full">
            2022 – 2026
          </span>

          <h3 className="text-xl font-semibold text-white mt-4">
            B.Tech – Computer Science & Engineering
          </h3>

          <p className="text-purple-400 mt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
            Shreenath Ji Institute of Technology & Engineering
          </p>

          <p className="text-gray-400 text-sm mt-1 ml-3">
            Nathdwara, Rajsamand (Rajasthan)
          </p>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed border-l-2 border-purple-500/50 pl-4">
            Currently in final semester with CGPA: <span className="text-purple-400 font-semibold">7.9/10</span>. 
            Specializing in full-stack development, real-time applications, and AI-powered solutions.
          </p>
        </motion.div>

        {/* 12th */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6
                     hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
        >
          <span className="text-white absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-purple-700 text-xs px-3 py-1 rounded-full">
            Higher Secondary
          </span>

          <h3 className="text-xl font-semibold text-white mt-4">
            12th Grade – Science (PCM)
          </h3>

          <p className="text-purple-400 mt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
            Bal Krishn Vidhya Mandir
          </p>

          <p className="text-gray-400 text-sm mt-1 ml-3">
            Percentage: <span className="text-white font-medium">80%</span>
          </p>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed border-l-2 border-purple-500/50 pl-4">
            Completed higher secondary education with strong fundamentals in mathematics and science.
          </p>
        </motion.div>
      </div>
    </section>
  );
}