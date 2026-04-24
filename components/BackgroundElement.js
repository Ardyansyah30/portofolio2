'use client';

import { motion } from 'framer-motion';

export default function BackgroundElement({
  color = 'blue',
  size = 300,
  top = 50,
  left = 50,
  duration = 8,
  blur = 8,
}) {
  const colorMap = {
    blue: 'rgba(59, 130, 246, 0.15)',
    purple: 'rgba(147, 51, 234, 0.15)',
    cyan: 'rgba(34, 211, 238, 0.15)',
    pink: 'rgba(236, 72, 153, 0.15)',
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        top: `${top}%`,
        left: `${left}%`,
        background: colorMap[color],
        borderRadius: '50%',
        filter: `blur(${blur}px)`,
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
      }}
      animate={{
        y: [0, 40, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}