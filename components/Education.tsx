'use client';

import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const educationItems = [
  {
    degree: 'MBA in International Business Management',
    institution: 'Islington College · London Metropolitan University',
    year: '2025 — 2027',
    status: 'In Progress',
    details:
      'Focusing on global business strategy, international marketing, and cross-cultural management.',
  },
  {
    degree: 'BSc (Hons) Computing',
    institution: 'Islington College · London Metropolitan University',
    year: '2022 — 2025',
    status: 'First Class Honours',
    details:
      'First Class Honours in Computing, specializing in software development, web technologies, and database management.',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-24 md:px-6 md:py-32">
      <SectionHeading
        index="04"
        eyebrow="What I studied"
        title="Education"
        subtitle="My academic foundation in computing and business."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {educationItems.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-3/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {item.status}
              </span>
            </div>
            <p className="mb-1 font-mono text-sm text-muted-foreground">{item.year}</p>
            <h3 className="font-display text-xl font-semibold leading-snug">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-accent">{item.institution}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
