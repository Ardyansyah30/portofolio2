'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "./projectData";

export default function Projects() {
  const router = useRouter();

  return (
    <section id="projects" className="min-h-screen px-6 py-24 scroll-mt-24">

      <h2 className="text-3xl text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => router.push(`/projects/${item.slug}`)}
            whileHover={{ scale: 1.08 }}
            className="bg-white/5 p-4 rounded-xl cursor-pointer"
          >
            <img src={item.image} className="rounded mb-4" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}