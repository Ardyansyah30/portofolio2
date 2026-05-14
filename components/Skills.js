'use client';

import { motion } from "framer-motion";

const skills = [
  "IT Support",
  "Backend Development",
  "Android Development",
  "Project Management",
  "System Maintenance",
  "Troubleshooting",
];

export default function Skills() {
  return (
    <section className="py-24 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Keterampilan Utama</h2>
          <p className="mt-4 text-slate-400 leading-8">
            Keahlian lintas disiplin yang mendukung ketepatan dan kinerja setiap proyek.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/90 px-6 py-5 text-center shadow-lg shadow-slate-950/10"
            >
              <p className="text-lg font-semibold text-white">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
