import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/images/profile.jpg";

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
      className="md:min-h-screen min-h-[900px]  flex items-center bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE – mobile top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl bg-purple-600/30"></div>
            <img
              src={profile}
              alt="profile"
              className="relative md:w-72 md:h-72 h-56 w-56 rounded-full border-4 border-purple-500 object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT – mobile bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="order-2 md:order-1"
        >
          <p className="text-gray-400 text-xl mb-2">Hi, I am</p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Rahul <span className="text-purple-500">Kumawat</span>
          </h1>

          <div className="h-10 mt-4">
            <span className="text-2xl text-purple-400 font-medium tracking-wide">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-gray-400 max-w-xl mt-6">
            I am a full-stack MERN developer. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and modern
            technologies.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="/Rahul's Resume.pdf"
              download
              className="px-7 py-3 text-white font-bold rounded-full hover:scale-110 transition bg-purple-600 hover:bg-purple-700 duration-300 shadow-lg shadow-purple-500/30"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
