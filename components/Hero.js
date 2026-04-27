'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CVViewer from "./CVViewer";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={ref} className="h-[200vh] relative">

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center">

        <motion.div style={{ scale }} className="w-32 h-32 md:w-44 md:h-44 relative mb-6">
          <Image
            src="/profile.jpg"
            fill
            sizes="(max-width: 768px) 128px, 176px"
            alt="Profile"
            className="rounded-full object-cover border-4 border-gray-800"
          />
        </motion.div>

        <motion.h1 style={{ opacity, y }} className="text-3xl md:text-5xl font-bold px-4">
          Muhammad Ardy Ansyah
        </motion.h1>

        <motion.p style={{ opacity }} className="mt-4 text-gray-400">
          IT Support • Project Manager • Developer
        </motion.p>

        {/* ✅ TAMBAHAN CV */}
        <CVViewer />

      </div>
    </section>
  );
}