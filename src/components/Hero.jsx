import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/images/profile.jpg";
import { FaCode, FaRocket, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const text = "Full Stack Developer | AI";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  const stats = [
    { icon: <FaCode />, value: "4+", label: "Projects Built" },
    { icon: <FaRocket />, value: "2", label: "Live Deployments" },
    { icon: <FaLaptopCode />, value: "1+", label: "Year Experience" },
    { icon: <FaGraduationCap />, value: "2026", label: "Graduation" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-black pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE with premium styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-40 animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <img
                src={profile}
                alt="Rahul Kumawat"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur rounded-full p-3 border border-purple-500/50">
              <span className="text-xs text-purple-400">🚀 Ready to build</span>
            </div>
          </div>
        </motion.div>

        {/* TEXT with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-300">Open for opportunities</span>
          </div>

          <p className="text-gray-400 text-lg mb-2">Hi, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Rahul</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Kumawat</span>
          </h1>

          <div className="h-12 mt-4">
            <span className="text-xl md:text-2xl text-purple-400 font-medium tracking-wide">
              {displayText}
              <span className="animate-pulse text-white">|</span>
            </span>
          </div>

          <p className="text-gray-400 max-w-xl mt-6 leading-relaxed">
            Final year Computer Science student passionate about building full-stack web applications. 
            Proficient in MERN stack with 4+ major projects including an AI Interview Agent and 
            real-time chat application. Eager to contribute, learn, and grow in a professional environment.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3 mt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center p-3 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="text-purple-400 text-xl flex justify-center">{stat.icon}</div>
                <div className="text-white font-bold mt-1">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="/Rahul's Resume.pdf"
              download
              className="px-8 py-3 text-white font-medium rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-purple-400 font-medium rounded-full border border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}