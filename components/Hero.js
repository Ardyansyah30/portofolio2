'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import CVViewer from "./CVViewer";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen pt-24 pb-20">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Portofolio Profesional
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Muhammad Ardy Ansyah</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              IT Support - Project Manager - Developer
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Saya membantu perusahaan membangun solusi aplikasi yang handal dan proses proyek yang efisien, dari perencanaan sampai peluncuran.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "IT Support",
              "Project Management",
              "Aplikasi & Infrastruktur",
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700 bg-slate-900/75 px-4 py-2 text-sm text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/90 p-4 shadow-2xl shadow-slate-900/40">
            <Image
              src="/profile.jpg"
              width={560}
              height={560}
              alt="Profile"
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-7 shadow-xl shadow-slate-950/40">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Ringkasan Profesional</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Lulusan Politeknik Negeri Padang dengan pengalaman di IT Support, manajemen proyek, dan pengembangan aplikasi. Saya terampil dalam troubleshooting sistem, koordinasi tim, serta penerapan solusi yang stabil dan berdampak bagi operasional bisnis.
            </p>
            <div className="mt-6">
              <CVViewer />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
