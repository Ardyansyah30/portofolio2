'use client';

import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import BackgroundElement from "./BackgroundElement";

export default function Contact() {
  const contactItems = [
    { title: "WhatsApp", value: "082283864119", icon: "💬", link: "https://wa.me/6282283864119" },
    { title: "Email", value: "ardyansyahm492@gmail.com", icon: "📧", link: "mailto:ardyansyahm492@gmail.com" },
    { title: "Phone", value: "082283864119", icon: "📞", link: "tel:082283864119" },
    { title: "GitHub", value: "ardy-ansyah", icon: "💻", link: "https://github.com/Ardyansyah30" },
    { title: "LinkedIn", value: "Ardy Ansyah", icon: "🔗", link: "https://www.linkedin.com/in/muhammad-ardyansyah-627bb512a/" },
  ];

  return (
    <ParallaxSection id="contact" className="mt-20 text-center pb-24 relative">
      <BackgroundElement color="blue" size={250} top={20} left={20} duration={9} />
      <BackgroundElement color="cyan" size={200} top={50} left={70} duration={11} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Siap bekerja sama</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-8">
            Saya selalu terbuka untuk kolaborasi profesional, pengembangan produk digital, dan solusi TI yang meningkatkan efektivitas bisnis Anda.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Pilih cara terbaik untuk menghubungi saya</h3>
            <p className="text-slate-400 leading-8 mb-8">
              Kontak berikut disusun agar Anda dapat memilih media yang paling nyaman, baik untuk diskusi teknis, tawaran kerja, maupun project baru.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Prioritas</p>
                <p className="mt-3 text-white text-lg font-semibold">Email</p>
                <p className="text-slate-400 mt-2">ardyansyahm492@gmail.com</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Ideal untuk</p>
                <p className="mt-3 text-white text-lg font-semibold">Project digital, kolaborasi, dan konsultasi TI</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.title !== "Email" && item.title !== "Phone" ? "_blank" : undefined}
                rel={item.title !== "Email" && item.title !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="group flex items-center gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-5 transition hover:border-cyan-400/30 hover:bg-slate-900"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 text-xl font-semibold">
                  {item.title.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.title}</p>
                  <p className="mt-2 text-white font-medium break-all">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-16 rounded-[2rem] border border-cyan-400/10 bg-slate-950/85 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-lg"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Siap memulai percakapan profesional?</h3>
              <p className="mt-3 text-slate-400 leading-7">
                Kirim pesan singkat untuk mendiskusikan kebutuhan teknologi Anda, atau atur panggilan untuk review solusi digital.
              </p>
            </div>
            <motion.a
              href="mailto:ardyansyahm492@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              Hubungi Saya
            </motion.a>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
}