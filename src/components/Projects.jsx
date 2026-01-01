import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import foodImg from "../assets/images/food.png";
import whatsappImg from "../assets/images/whatsapp.png";
import portfolioImg from "../assets/images/portfolio.png";

const projects = [
  {
    title: "Food Delivery App",
    description:
      "A full-stack food delivery web application featuring real-time order tracking and role-based dashboards. Users can browse restaurants, place orders and track deliveries live. Restaurant owners can manage menu items, update availability and process orders. Delivery partners can accept or reject orders and update delivery status in real time. The application includes secure authentication, protected routes and real-time updates powered by Socket.IO.",
    image: foodImg,
    github: "https://github.com/rahulkumawat0048/Mern-Food-Delivery-App",
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "Twilio",
      "MongoDB",
      "Socket.IO",
    ],
  },

  {
    title: "WhatsApp Clone",
    description:
      "A real-time chat application inspired by WhatsApp, supporting instant messaging, user profiles and video calling functionality. Implemented real-time communication using Socket.IO for fast and reliable message delivery. Includes secure user authentication, contact management, message status indicators and responsive UI optimized for both desktop and mobile devices.",
    image: whatsappImg,
    github: "https://github.com/rahulkumawat0048/Mern-WhatsApp-clone",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "WebRTC"],
  },

  {
    title: "Animated Developer Portfolio",
    description:
      "A modern animated personal portfolio website built using React, Vite, Tailwind CSS, and Framer Motion. Features a sleek dark UI, smooth page transitions, interactive components, responsive design and reusable layout sections to showcase projects, skills and experience.",
    image: portfolioImg,
    github: "https://github.com/rahulkumawat0048/react-animated-portfolio",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-center text-3xl font-bold text-white mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden
                       hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30"
          >
            {/* IMAGE */}
            <div className="h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fill group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-5 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-lg text-gray-300 hover:text-purple-400 transition"
                >
                  <FaGithub /> GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
