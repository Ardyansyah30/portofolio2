'use client';

import { motion } from "framer-motion";

const aboutPoints = [
  "Ahli di IT Support, pemeliharaan sistem, dan troubleshooting end-to-end.",
  "Berpengalaman mengelola proyek dev siklus penuh dengan tim lintas fungsi.",
  "Membangun solusi web dan aplikasi yang stabil dengan fokus pada kualitas.",
  "Terbiasa berkomunikasi dengan klien, melakukan analisis teknis, dan menyiapkan dokumentasi.",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Tentang Saya</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Profesional dengan pendekatan terstruktur dan nilai hasil.</h2>
          <p className="mt-4 text-slate-400 leading-8">
            Saya mengambil pendekatan yang jelas, terukur, dan kolaboratif untuk setiap proyek. Prioritas saya adalah membangun sistem yang efisien, dapat diandalkan, dan mudah dipelihara.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/85 p-8 shadow-lg shadow-slate-950/40"
            >
              <p className="text-slate-200 leading-7">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
