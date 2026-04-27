'use client';

import { motion, AnimatePresence } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import BackgroundElement from "./BackgroundElement";

export default function Contact() {
  const contactItems = [
    { title: "WhatsApp", value: "082283864119", icon: "💬", link: "https://wa.me/6282283864119" },
    { title: "Email", value: "ardyansyahm492@gmail.com", icon: "📧", link: "mailto:ardyansyahm492@gmail.com" },
    { title: "Phone", value: "082283864119", icon: "📞", link: "tel:082283864119" },
    { title: "GitHub", value: "ardy-ansyah", icon: "💻", link: "https://github.com/ardy-ansyah" },
    { title: "LinkedIn", value: "Ardy Ansyah", icon: "🔗", link: "https://linkedin.com/in/ardyansyah" },
  ];

  return (
    <ParallaxSection id="contact" className="mt-20 text-center pb-24 relative">
      <BackgroundElement color="blue" size={250} top={20} left={20} duration={9} />
      <BackgroundElement color="cyan" size={200} top={50} left={70} duration={11} />

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-12"
      >
        Contact
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto relative z-20">
        {contactItems.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target={item.title !== "Email" && item.title !== "Phone" ? "_blank" : undefined}
            rel={item.title !== "Email" && item.title !== "Phone" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="backdrop-blur-lg bg-white/5 border border-white/20 p-6 rounded-lg block transition-all shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:bg-white/10 glass-shine group"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
              className="text-4xl mb-4"
            >
              {item.icon}
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="text-lg font-bold text-white"
            >
              {item.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.4 }}
              className="text-gray-400 text-sm mt-2 break-all"
            >
              {item.value}
            </motion.p>
          </motion.a>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 p-10 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-white/10 rounded-3xl max-w-3xl mx-auto backdrop-blur-lg shadow-2xl"
      >
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-2xl font-bold mb-4 text-white">Mari Berdiskusi!</motion.h3>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-gray-300 mb-8 leading-relaxed">
          Apakah Anda memiliki ide project atau sekadar ingin bertanya? 
          Silahkan hubungi saya melalui salah satu media di atas.
        </motion.p>
        <motion.a 
          href="mailto:ardyansyahm492@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-900/40 transition-all"
        >
          Kirim Email
        </motion.a>
      </motion.div>
    </ParallaxSection>
  );
}