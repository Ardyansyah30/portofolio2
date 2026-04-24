'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function ParallaxSection({ 
  children, 
  id,
  intensity = 0.3, 
  className = '' 
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollY } = useScroll();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(scrollY, 'change', () => {
    if (isInView && ref.current && !isMobile) {
      const rect = ref.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollProgress = window.scrollY - sectionTop;
      setOffsetY(scrollProgress * intensity);
    }
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative overflow-hidden py-24 ${className}`}
      style={{
        y: isMobile ? 0 : offsetY,
      }}
    >
      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {children}
      </div>
    </motion.section>
  );
}