'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    id: 1,
    company: 'GuardWare Australia Pty. Ltd.',
    position: 'Fullstack Developer · Systems Engineer',
    duration: 'Jan 2025 — Present',
    description:
      'Building an enterprise Data Leak Prevention system — designing secure architecture and full-stack features that protect sensitive data at scale.',
    technologies: ['Laravel', 'Angular', 'MySQL'],
  },
  {
    id: 2,
    company: 'Brkchya Solutions',
    position: 'Fullstack Developer',
    duration: '2023 — 2025',
    description:
      'Built and maintained web applications end-to-end. Implemented real-time features and optimized database queries for performance.',
    technologies: ['React', 'Express', 'MongoDB', 'Docker'],
  },
  {
    id: 3,
    company: 'MySecondTeacher',
    position: 'Graphic Designer',
    duration: 'Jan 2024 — Jun 2024',
    description:
      'Crafted visually compelling graphics and layouts for educational materials, aligning with brand guidelines and boosting engagement.',
    technologies: ['InDesign', 'Illustrator', 'Photoshop'],
  },
  {
    id: 4,
    company: 'MySecondTeacher',
    position: 'Voiceover Artist',
    duration: '2023 — 2025',
    description:
      'Provided voiceover for educational e-book content, enhancing the learning experience for students.',
    technologies: ['Communication', 'Confidence', 'Time Management'],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 60%'],
  });
  const height = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-24 md:px-6 md:py-32">
      <SectionHeading
        index="03"
        eyebrow="Where I've worked"
        title="Experience"
        subtitle="My professional journey across engineering, design, and creative roles."
      />

      <div ref={ref} className="relative mt-4 pl-10 sm:pl-14">
        {/* track */}
        <div className="absolute left-3 top-2 h-full w-px bg-border sm:left-[26px]" />
        {/* animated progress */}
        <motion.div
          style={{ scaleY: height }}
          className="absolute left-3 top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent-3 to-accent-2 sm:left-[26px]"
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* node */}
              <motion.div
                className="absolute -left-[34px] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-background sm:-left-[42px]"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent/30 [animation-duration:2.5s]" />
                <Briefcase className="h-3.5 w-3.5 text-accent" />
              </motion.div>

              <div className="cursor-hover relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{exp.position}</h3>
                    <p className="font-medium text-accent">{exp.company}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.duration}
                  </span>
                </div>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
