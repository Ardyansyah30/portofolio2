'use client';

import { motion } from "framer-motion";

const text = [
  "Lulusan Politeknik Negeri Padang tahun 2025.",
  "Berpengalaman dalam IT Support, maintenance, dan troubleshooting.",
  "Memiliki kemampuan dalam pengembangan web dan mobile.",
  "Pernah bekerja sebagai Project Manager dan Developer.",
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center text-center px-6 scroll-mt-24">
      
      <div className="max-w-3xl space-y-6">

        <h2 className="text-3xl font-semibold">Tentang Saya</h2>

        {text.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="text-gray-400 text-lg"
          >
            {line}
          </motion.p>
        ))}

      </div>
    </section>
  );
}