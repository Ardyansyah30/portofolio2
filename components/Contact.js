'use client';

import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import BackgroundElement from "./BackgroundElement";

export default function Contact() {
  return (
    <ParallaxSection id="contact" className="mt-20 text-center pb-10 relative">
      <BackgroundElement color="blue" size={250} top={20} left={20} duration={9} />
      <BackgroundElement color="cyan" size={200} top={50} left={70} duration={11} />

      <h2 className="text-3xl font-semibold">Contact</h2>

      <motion.p 
        className="mt-4 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Email: ardyansyahm492@gmail.com
      </motion.p>

      <motion.p 
        className="text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Phone: 082283864119
      </motion.p>
    </ParallaxSection>
  );
}