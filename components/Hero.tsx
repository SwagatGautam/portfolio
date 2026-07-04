'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Magnetic from './motion/Magnetic';

const roles = ['Fullstack Developer', 'Systems Engineer', 'UI Craftsman', 'Problem Solver'];

const name = 'Swagat Gautam';

export default function Hero() {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImg = useTransform(scrollY, [0, 600], [1, 1.08]);

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <motion.div
        style={{ y: yContent, opacity }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:px-6"
      >
        {/* Left: text */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="sr-only">{name}</span>
            <span aria-hidden className="block">
              {name.split(' ').map((word, wi) => (
                <span key={wi} className="mr-[0.25em] inline-block">
                  {word.split('').map((char, ci) => (
                    <motion.span
                      key={ci}
                      className="inline-block text-gradient-animated"
                      initial={{ opacity: 0, y: '0.5em', rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        delay: 0.15 + (wi * 6 + ci) * 0.04,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          {/* Rotating role */}
          <div className="mt-5 flex h-9 items-center overflow-hidden text-xl text-muted-foreground sm:text-2xl">
            <span className="mr-2 text-foreground/40">{'//'}</span>
            <div className="relative h-9 flex-1">
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  className="absolute left-0 font-medium text-foreground"
                  initial={false}
                  animate={{
                    y: i === roleIndex ? 0 : i < roleIndex ? -36 : 36,
                    opacity: i === roleIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-7 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I build beautiful, scalable web applications end-to-end — from pixel-perfect
            interfaces to robust backend systems. Currently engineering data-leak
            prevention at GuardWare Australia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <button
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3.5 font-medium text-background transition-transform"
              >
                <span className="relative z-10">View my work</span>
                <Sparkles className="relative z-10 h-4 w-4 transition-transform group-hover:rotate-12" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent via-accent-3 to-accent-2 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="absolute inset-0 z-[5] flex items-center justify-center gap-2 font-medium text-accent-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  View my work <Sparkles className="h-4 w-4" />
                </span>
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => scrollTo('contact')}
                className="rounded-full border border-border bg-card/30 px-7 py-3.5 font-medium backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: scaleImg }}
            className="relative"
          >
            {/* orbiting conic ring */}
            <div
              className="absolute -inset-6 animate-spin-slow rounded-full opacity-60 blur-md"
              style={{
                background:
                  'conic-gradient(from 0deg, var(--accent), var(--accent-3), var(--accent-2), var(--accent))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 14px), #000 calc(100% - 12px))',
                WebkitMask:
                  'radial-gradient(farthest-side, transparent calc(100% - 14px), #000 calc(100% - 12px))',
              }}
            />
            <div className="glow relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 backdrop-blur">
              <motion.img
                src="/swagat.png"
                alt="Swagat Gautam"
                className="relative z-10 w-64 select-none sm:w-72 lg:w-80"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                draggable={false}
              />
              {/* shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                <div
                  className="absolute inset-y-0 w-1/3 -skew-x-12 bg-white/10"
                  style={{ animation: 'shimmer 5s ease-in-out infinite' }}
                />
              </div>
            </div>

            {/* floating chips */}
            {[
              { label: 'React', cls: 'left-[-3rem] top-8' },
              { label: 'Angular', cls: 'left-1/2 -translate-x-1/2 top-[-1.5rem]' },
              { label: 'Next.js', cls: 'right-[-2.5rem] top-24' },
              { label: '.NET', cls: 'left-[-2rem] bottom-16' },
              { label: 'Laravel', cls: 'right-[-3rem] bottom-6' },
            ].map((chip, i) => (
              <motion.div
                key={chip.label}
                className={`absolute ${chip.cls} rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-xs font-medium backdrop-blur`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { delay: 1 + i * 0.15, duration: 0.5 },
                  scale: { delay: 1 + i * 0.15, duration: 0.5 },
                  y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                {chip.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
