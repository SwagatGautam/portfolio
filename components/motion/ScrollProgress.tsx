'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--accent), var(--accent-3), var(--accent-2))',
      }}
    />
  );
}
