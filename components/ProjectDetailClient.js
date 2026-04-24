'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ProjectDetailClient({ project }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  if (!project) {
    return <div className="text-white p-10">Project not found</div>;
  }

  return (
    <main
      ref={ref}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >

      {/* BACK */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 text-gray-400 hover:text-white"
      >
        ← Back
      </Link>

      {/* HERO */}
      <section className="relative h-[120vh] sticky top-0 flex items-center justify-center overflow-hidden">

        <motion.div style={{ scale }} className="relative w-full h-full">
          <Image
            src={project.image}
            fill
            sizes="100vw"
            alt={project.title}
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute text-center z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            {project.title}
          </h1>
        </div>

      </section>

      {/* CONTENT */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 space-y-20">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl mb-4">Deskripsi</h2>
          <p className="text-gray-400">{project.desc}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl mb-4">Detail Project</h2>
          <pre className="text-gray-300 whitespace-pre-wrap">
            {project.content}
          </pre>
        </motion.div>

      </section>

    </main>
  );
}