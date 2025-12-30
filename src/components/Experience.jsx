export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-center text-3xl font-bold text-white mb-12">
        Experience
      </h2>

      <div className="border-l border-purple-500 pl-6 space-y-10">
        <div>
          <h3 className="text-white font-semibold">
            Full Stack Developer ( Project-Based )
          </h3>
          <p className="text-gray-400">
            Self-Directed Projects | 2024 – Present
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold">Frontend Intern</h3>
          <p className="text-gray-400">HTML , CSS & JavaScript • 2023</p>
        </div>

        <div className="text-gray-300">
          <div>
            {" "}
            • Designed and developed full-stack web applications using React,
            Tailwind CSS and Node.js.
          </div>
          <div>
            • Built responsive and interactive UIs with smooth animations using Framer Motion.{" "}
          </div>
          <div>
            • Implemented REST APIs, authentication and database integration.{" "}
          </div>
          <div>
            • Focused on clean code, reusable components and performance
            optimization.
          </div>
        </div>
      </div>
    </section>
  );
}
