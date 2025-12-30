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

  // DEBUG (remove later)
  console.log(serviceId, templateId, publicKey);

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
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-white mb-16"
      >
        Contact Me
      </motion.h2>

      {/* FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          max-w-lg mx-auto
          bg-black border border-white/10
          rounded-2xl p-8
          hover:border-purple-500
          hover:shadow-xl hover:shadow-purple-500/30
          transition
        "
      >
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* EMAIL */}
          <div>
            <label className="text-gray-400 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              className="
                w-full mt-2 px-4 py-3
                bg-black text-white
                border border-white/20 rounded-xl
                focus:outline-none focus:border-purple-500
              "
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-gray-400 text-sm">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="
                w-full mt-2 px-4 py-3
                bg-black text-white
                border border-white/20 rounded-xl
                focus:outline-none focus:border-purple-500
              "
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-xl
              bg-purple-600 text-white font-medium
              hover:bg-purple-700
              transition
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p className="text-center text-sm text-purple-400">
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
