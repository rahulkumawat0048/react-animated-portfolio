import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ ENV VARIABLES
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setStatus("❌ Something went wrong. Try again!");
        }
      );
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      {/* TITLE with gradient */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full" />
      </motion.div>

      {/* FORM CARD - Premium Glassmorphic Design */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          max-w-lg mx-auto
          bg-gradient-to-br from-gray-900/90 to-black/90
          backdrop-blur-sm
          border border-white/10
          rounded-2xl p-8
          hover:border-purple-500/50
          hover:shadow-2xl hover:shadow-purple-500/20
          transition-all duration-500
        "
      >
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* EMAIL */}
          <div className="group">
            <label className="text-gray-400 text-sm group-focus-within:text-purple-400 transition-colors">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="rahul@example.com"
              className="
                w-full mt-2 px-4 py-3
                bg-black/50 text-white
                border border-white/10 rounded-xl
                focus:outline-none focus:border-purple-500
                focus:ring-1 focus:ring-purple-500/50
                transition-all
                placeholder:text-gray-600
              "
            />
          </div>

          {/* MESSAGE */}
          <div className="group">
            <label className="text-gray-400 text-sm group-focus-within:text-purple-400 transition-colors">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="
                w-full mt-2 px-4 py-3
                bg-black/50 text-white
                border border-white/10 rounded-xl
                focus:outline-none focus:border-purple-500
                focus:ring-1 focus:ring-purple-500/50
                transition-all
                placeholder:text-gray-600
                resize-none
              "
            />
          </div>

          {/* BUTTON with glowing effect */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-xl
              bg-gradient-to-r from-purple-600 to-purple-700
              text-white font-medium
              hover:from-purple-500 hover:to-purple-600
              transition-all duration-300
              disabled:opacity-60
              relative overflow-hidden group
            "
          >
            <span className="relative z-10">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-purple-400"
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}