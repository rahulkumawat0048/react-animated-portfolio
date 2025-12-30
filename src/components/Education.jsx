import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-center text-3xl font-bold text-white mb-16">
        Education
      </h2>

      <div className="space-y-10">

        {/* BTECH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-black border border-white/10 rounded-2xl p-6
                     hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 transition"
        >
          <span className="text-white absolute -top-3 left-6 bg-purple-600 text-xs px-3 py-1 rounded-full">
            2022 – 2026
          </span>

          <h3 className="text-xl font-semibold text-white mt-4">
            B.Tech – Computer Science
          </h3>

          <p className="text-purple-400 mt-1">
            Shreenath Ji Institute of Technology & Engineering
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Nathdwara, Rajsamand (Rajasthan)
          </p>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Currently in final semester, focusing on full-stack development,
            real-time applications and modern web technologies.
          </p>
        </motion.div>

        {/* 12th */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-black border border-white/10 rounded-2xl p-6
                     hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 transition"
        >
          <span className="text-white absolute -top-3 left-6 bg-purple-600 text-xs px-3 py-1 rounded-full">
            Higher Secondary
          </span>

          <h3 className="text-xl font-semibold text-white mt-4">
            12th Grade – Science
          </h3>

          <p className="text-purple-400 mt-1">
            Bal Krishn Vidhya Mandir
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Percentage: <span className="text-white font-medium">80%</span>
          </p>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Completed higher secondary education with strong fundamentals in
            mathematics and science.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
