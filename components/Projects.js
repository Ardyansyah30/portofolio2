'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "./projectData";
import { useState } from "react";

export default function Projects() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Proyek Pilihan</h2>
          <p className="mt-4 text-slate-400 leading-8">
            Pilihan proyek dengan fokus pada implementasi solusi digital, optimasi proses, dan pengalaman pengguna yang lebih baik.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((item, index) => (
            <motion.button
              type="button"
              key={item.slug}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 30px 60px rgba(15, 23, 42, 0.18)" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 p-6 text-left transition"
            >
              <div className="mb-5 overflow-hidden rounded-3xl bg-slate-800">
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">{item.category || "Web App"}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-400 leading-7">{item.desc}</p>
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
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-2xl shadow-slate-950/60"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mb-6 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
              >
                Tutup
              </button>

              <img
                src={selected.image}
                alt={selected.title}
                className="h-64 w-full rounded-[1.5rem] object-cover"
              />

              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-semibold text-white">{selected.title}</h3>
                    <p className="text-slate-400">{selected.desc}</p>
                  </div>
                </div>

                <div className="grid gap-4 text-slate-300">
                  <pre className="whitespace-pre-wrap rounded-3xl bg-slate-900/90 p-5 text-sm leading-7">{selected.content}</pre>
                </div>

                <button
                  type="button"
                  onClick={() => router.push(`/projects/${selected.slug}`)}
                  className="w-full rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Lihat Detail Lengkap
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
