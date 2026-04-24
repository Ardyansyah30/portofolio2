'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "./projectData";
import { useState } from "react";

export default function Projects() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-6 py-24 scroll-mt-24">

      <h2 className="text-3xl text-center mb-16">Projects</h2>

      <div className="relative max-w-4xl mx-auto">

        {/* GARIS TENAH (Hanya muncul di Desktop) */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/20 -translate-x-1/2 hidden md:block"></div>

        {projects.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => setSelected(item)}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className={`mb-12 flex cursor-pointer ${
              i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            } justify-center`}
          >
            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition p-6 rounded-xl w-full md:w-[45%]">
              <img src={item.image} className="rounded-lg mb-4 w-full h-48 object-cover" alt={item.title} />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL PROJECT (Sama dengan desain Experience) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/10 rounded-xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            >
              {/* Tombol Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white text-xl z-10"
              >
                ✕
              </button>

              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                src={selected.image} 
                className="rounded-lg mb-6 w-full h-64 object-cover border border-white/10" 
                alt={selected.title} 
              />

              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold mb-2"
              >
                {selected.title}
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-blue-400 mb-6 font-medium"
              >
                {selected.desc}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="prose prose-invert max-w-none"
              >
                <pre className="text-gray-400 whitespace-pre-wrap font-sans leading-relaxed">
                  {selected.content}
                </pre>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => router.push(`/projects/${selected.slug}`)}
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Lihat Detail Lengkap
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}