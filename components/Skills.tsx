'use client';

import { motion } from 'motion/react';
import { Layers, Server, Wrench, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { StaggerGroup, StaggerItem } from './motion/Reveal';

const categories = [
  {
    icon: Layers,
    category: 'Frontend',
    skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    icon: Server,
    category: 'Backend',
    skills: ['Laravel', '.NET', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    icon: Wrench,
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
  },
  {
    icon: Sparkles,
    category: 'Other',
    skills: ['Performance', 'Testing', 'Agile', 'Problem Solving'],
  },
];

const marqueeRow = [
  'React', 'Next.js', 'Angular', 'TypeScript', '.NET', 'Laravel', 'Node.js',
  'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Tailwind', 'GraphQL', 'Figma',
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <SectionHeading
          index="02"
          eyebrow="What I use"
          title="Skills & Expertise"
          subtitle="A toolkit refined across production apps — from pixel-level UI to resilient backend systems."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <StaggerItem key={cat.category}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/30 p-6 backdrop-blur transition-all duration-300 hover:border-accent/40">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="cursor-hover rounded-full border border-border/70 bg-background/50 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Infinite marquee */}
      <div className="marquee relative mt-16 overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-track" style={{ ['--marquee-duration' as string]: '32s' }}>
          {[...marqueeRow, ...marqueeRow].map((item, i) => (
            <span
              key={i}
              className="mx-5 font-display text-2xl font-semibold text-foreground/25 transition-colors hover:text-accent sm:text-3xl"
            >
              {item}
              <span className="mx-5 text-accent/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
