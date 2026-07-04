'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import Magnetic from './motion/Magnetic';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/SwagatGautam' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/swagat-gautam-ab0b03185/' },
  { icon: Mail, label: 'Email', href: 'mailto:swagatgautamm32@gmail.com' },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative scroll-mt-28 overflow-hidden pt-24 md:pt-32">
      {/* glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-2xl rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
        >
          06 — Let's build something
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-bold leading-[1] tracking-tight sm:text-7xl"
        >
          Let's create
          <br />
          <span className="text-gradient-animated">something great.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
        >
          I'm always open to new projects, collaborations, or just a good conversation.
          Have an idea? My inbox is open — I usually reply within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <a
              href="mailto:swagatgautamm32@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-lg font-medium text-background transition-transform hover:scale-105"
            >
              Say hello
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <a
            href="mailto:swagatgautamm32@gmail.com"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            swagatgautamm32@gmail.com
          </a>
        </motion.div>

        <div className="mt-14 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <Magnetic key={s.label} strength={0.5}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-accent hover:text-accent"
              >
                <s.icon className="h-5 w-5" />
              </a>
            </Magnetic>
          ))}
        </div>
      </div>

      {/* giant name mark */}
      <div className="relative mt-20 overflow-hidden">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="select-none whitespace-nowrap text-center font-display text-[12.5vw] font-bold leading-none tracking-tighter text-foreground/[0.04]"
        >
          SWAGAT GAUTAM
        </motion.h3>
      </div>

      <div className="border-t border-border/50 py-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Swagat Gautam · Designed & built with Next.js and Motion.
        </p>
      </div>
    </footer>
  );
}
