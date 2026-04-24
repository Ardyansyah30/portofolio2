'use client';

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "IT Support",
    "Backend Developer",
    "Android Developer",
    "Machine Learning",
    "Project Management",
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            {/* CARD */}
            <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-full cursor-pointer backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg">
              {s}
            </div>

            {/* POPUP */}
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2
                         opacity-0 group-hover:opacity-100
                         transition duration-300
                         bg-white text-black text-xs px-3 py-1 rounded-full shadow-md"
            >
              {s}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}