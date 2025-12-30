import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/rahulkumawat0048/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/rahulkumawat0048",
      label: "GitHub",
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-white font-semibold text-lg flex items-center">
          <span className="text-purple-400">&lt;</span>
          <span className="mx-1">Rahul</span>
          <span className="text-purple-400">/</span>
          <span className="mx-1">Kumawat</span>
          <span className="text-purple-400">&gt;</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-400 hover:underline underline-offset-8 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Social Icons - Desktop */}
          <div className="flex items-center space-x-4 ml-4">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-gray-400 text-lg transition-all duration-300 hover:text-purple-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="flex flex-col items-center space-y-6 py-6 text-gray-300 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-purple-400 transition"
              >
                {link.name}
              </a>
            ))}

            {/* Social Icons - Mobile */}
            <div className="flex space-x-6 pt-4">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-gray-400 text-xl transition-all duration-300 hover:text-purple-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
