'use client';

import { projects } from "../../../components/projectData";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProjectDetail({ params }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function load() {
      const resolved = await params;
      const found = projects.find((p) => p.slug === resolved.slug);
      setProject(found);
    }

    load();
  }, [params]);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  if (!project) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACK BUTTON */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 text-gray-400 hover:text-white"
      >
        ← Back
      </Link>

      {/* HERO */}
      <section className="relative h-screen sticky top-0 flex items-center justify-center overflow-hidden">

        <motion.div style={{ scale }} className="relative w-full h-full">
          <Image
            src={project.image}
            fill
            sizes="100vw"
            alt={project.title}
            className="object-cover"
          />
        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* TITLE */}
        <div className="absolute text-center z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            {project.title}
          </h1>
        </div>

      </section>

      {/* CONTENT (FIXED SPACING) */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-8 space-y-6 -mt-10">

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl mb-3">Deskripsi</h2>
          <p className="text-gray-400 leading-relaxed">
            {project.desc}
          </p>
        </motion.div>

        {/* DETAIL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl mb-3">Detail Project</h2>
          <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
            {project.content}
          </pre>
        </motion.div>

      </section>

    </main>
  );
}