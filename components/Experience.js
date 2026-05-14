'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experienceData = [
  {
    title: "IT Support",
    company: "Freelance",
    period: "2023 - Sekarang",
    icon: "IT",
    tools: ["Windows", "Linux", "Hardware"],
    detail: `- Instalasi sistem operasi\n- Perakitan & upgrade PC\n- Troubleshooting hardware/software\n- Maintenance perangkat client\n- Support user langsung`,
  },
  {
    title: "Project Manager",
    company: "Tim Internal",
    period: "2024 - Sekarang",
    icon: "PM",
    tools: ["Trello", "Agile", "Team Management"],
    detail: `- Mengatur timeline project\n- Koordinasi tim developer\n- Monitoring progress\n- Komunikasi dengan client\n- Quality control`,
  },
  {
    title: "Backend Developer",
    company: "Pengembangan Aplikasi",
    period: "2024",
    icon: "BE",
    tools: ["Node.js", "Database", "API"],
    detail: `- Membuat API backend\n- Mengelola database\n- Integrasi frontend-backend\n- Testing & deployment`,
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Experience</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Pengalaman Profesional</h2>
          <p className="mt-4 text-slate-400 leading-8">
            Setiap peran saya fokus pada hasil, kolaborasi tim, dan penyelesaian masalah yang berdampak positif bagi bisnis.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {experienceData.map((item, index) => (
            <motion.button
              type="button"
              key={item.title}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/90 p-8 text-left shadow-lg shadow-slate-950/20 transition-transform"
            >
              <div className="mb-4 rounded-2xl bg-slate-950/80 px-4 py-3 text-3xl">{item.icon}</div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.period}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-400">{item.company}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tools.map((tool, idx) => (
                  <span key={idx} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{tool}</span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl rounded-[2rem] border border-slate-800 bg-slate-950 p-8 shadow-2xl shadow-slate-950/60"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mb-6 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
              >
                Tutup
              </button>
              <div className="mb-4 flex items-center gap-4 text-white">
                <span className="text-4xl">{selected.icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold">{selected.title}</h3>
                  <p className="text-slate-400">{selected.period} � {selected.company}</p>
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {selected.tools.map((tool, i) => (
                  <span key={i} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{tool}</span>
                ))}
              </div>
              <pre className="whitespace-pre-wrap break-words text-slate-300 leading-7">{selected.detail}</pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
