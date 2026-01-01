import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

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

  // Smooth scroll function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // adjust if your navbar height is different
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setOpen(false); // close mobile menu if open
    }
  };

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
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="hover:text-purple-400 hover:underline underline-offset-8 transition"
            >
              {link.name}
            </button>
          ))}

          {/* Social Icons */}
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
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="hover:text-purple-400 transition"
              >
                {link.name}
              </button>
            ))}

            {/* Social Icons */}
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
