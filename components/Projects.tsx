'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import TiltCard from './motion/TiltCard';

const projects = [
  {
    title: 'Dream Sailor Consulting',
    tag: 'Consultancy Platform',
    description:
      'A polished consultancy platform delivering business solutions and services, built with a .NET backend and an Angular front end.',
    technologies: ['.NET', 'Angular', 'TypeScript', 'MySQL'],
    links: {
      demo: 'https://dsailorgroup.com.au/',
      github: 'https://github.com/Freelancely/DreamsailorBackend',
    },
  },
  {
    title: 'Genx Intl',
    tag: 'E-Commerce',
    description:
      'A full-featured e-commerce experience for a leading tech-products provider — Angular + .NET, tuned for a seamless, fast shopping journey.',
    technologies: ['Angular', '.NET', 'PostgreSQL', 'Tailwind CSS'],
    links: {
      demo: 'https://genexintl.com',
      github: 'https://github.com',
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-24 md:px-6 md:py-32">
      <SectionHeading
        index="05"
        eyebrow="Selected work"
        title="Featured Projects"
        subtitle="A few products I've designed and engineered from the ground up."
      />

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-8 backdrop-blur transition-colors duration-300 hover:border-accent/50">
              {/* number watermark */}
              <span className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl font-bold text-foreground/[0.04] transition-colors group-hover:text-accent/10">
                0{i + 1}
              </span>

              <div className="relative z-10 flex h-full flex-col">
                <span className="mb-4 w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent">
                  {project.tag}
                </span>

                <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-background/60 px-2.5 py-1 text-xs text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-border/50 pt-5">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
