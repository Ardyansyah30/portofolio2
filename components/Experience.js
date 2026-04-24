'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const data = [
  {
    title: "IT Support (Freelance)",
    short: "Maintenance hardware & troubleshooting",
    icon: "🖥️",
    tools: ["Windows", "Linux", "Hardware"],
    detail: `
- Instalasi sistem operasi
- Perakitan & upgrade PC
- Troubleshooting hardware/software
- Maintenance perangkat client
- Support user langsung
    `,
  },
  {
    title: "Project Manager",
    short: "Mengelola proyek software",
    icon: "📊",
    tools: ["Trello", "Agile", "Team Management"],
    detail: `
- Mengatur timeline project
- Koordinasi tim developer
- Monitoring progress
- Komunikasi dengan client
- Quality control
    `,
  },
  {
    title: "Backend Developer",
    short: "Pengembangan sistem web",
    icon: "⚙️",
    tools: ["Node.js", "Database", "API"],
    detail: `
- Membuat API backend
- Mengelola database
- Integrasi frontend-backend
- Testing & deployment
    `,
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen px-6 py-24">

      <h2 className="text-3xl text-center mb-16">Experience</h2>

      <div className="relative max-w-2xl mx-auto">

        {/* LINE */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/20 -translate-x-1/2"></div>

        {data.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => setSelected(item)}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className={`mb-12 flex cursor-pointer ${
              i % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition p-6 rounded-xl w-[45%]">

              <div className="text-3xl mb-2">{item.icon}</div>

              <h3 className="font-semibold">{item.title}</h3>

              <p className="text-gray-400 mt-2">{item.short}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/10 px-2 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>

      {/* MODAL PREMIUM */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 border border-white/10 rounded-xl max-w-lg w-full p-6 relative"
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-xl"
              >
                ✕
              </button>

              <div className="text-4xl mb-4">{selected.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {selected.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-2 py-1 rounded text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <pre className="text-gray-400 whitespace-pre-wrap">
                {selected.detail}
              </pre>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}