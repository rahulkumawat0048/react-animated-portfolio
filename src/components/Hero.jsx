import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/images/profile.jpg"

const text = "Full Stack Developer";

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

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-gray-400 text-xl mb-2">Hi, I am</p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Rahul <span className="text-purple-500">Kumawat</span>
          </h1>

          {/* Animated Typing Text */}
          <div className="h-10 mt-4">
            <span className="text-2xl text-purple-400 font-medium tracking-wide">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-gray-400 max-w-xl mt-6">
            I am a full-stack MERN developer. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="px-7 py-3 text-white font-bold rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/30">
              Download CV
            </button>

            
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl bg-purple-600/30"></div>
            <img
              src={profile}   // apni image yaha rakho
              alt="profile"
              className="relative w-72 h-72 rounded-full border-4 border-purple-500 object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
