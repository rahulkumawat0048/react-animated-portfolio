import { useState } from "react";
import {motion} from "framer-motion"
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rahulkumawat0048/", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/rahulkumawat0048", label: "GitHub" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with premium styling */}
        <button onClick={() => handleScroll("about")} className="group">
          <h1 className="text-white font-bold text-xl flex items-center">
            <span className="text-purple-400 transition group-hover:scale-110 inline-block">&lt;</span>
            <span className="mx-1 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">RK</span>
            <span className="text-purple-400 transition group-hover:scale-110 inline-block">/&gt;</span>
          </h1>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/10">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-lg transition-all duration-300 hover:text-purple-400 hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-gray-300 hover:text-purple-400 transition text-lg"
            >
              {link.name}
            </button>
          ))}
          <div className="flex space-x-8 pt-4 border-t border-white/10">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-2xl transition-all hover:text-purple-400"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}