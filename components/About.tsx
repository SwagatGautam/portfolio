'use client';

import { MapPin, Clock, Mail, Languages } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';
import Counter from './motion/Counter';

const facts = [
  { icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal' },
  { icon: Clock, label: 'Experience', value: '2+ Years Building' },
  { icon: Mail, label: 'Email', value: 'swagatgautamm32@gmail.com' },
  { icon: Languages, label: 'Languages', value: 'English · Nepali' },
];

const stats = [
  { to: 15, suffix: '+', label: 'Projects shipped' },
  { to: 2, suffix: '+', label: 'Years experience' },
  { to: 10, suffix: '+', label: 'Technologies' },
  { to: 100, suffix: '%', label: 'Passion' },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-24 md:px-6 md:py-32">
      <SectionHeading index="01" eyebrow="Who I am" title="About Me" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-3">
          <Reveal>
            <p>
              I'm a full-stack developer with a passion for building web applications
              that are not only <span className="font-medium text-foreground">functional</span> but
              also <span className="font-medium text-foreground">visually striking</span> and
              genuinely enjoyable to use. I love turning complex ideas into reliable,
              scalable digital products.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              I specialize in modern frontend and backend technologies including
              Angular, React, Next.js, TypeScript, Node.js, Laravel, and .NET. My
              experience spans database design, RESTful API development, authentication
              systems, and cloud-ready architecture — all with a focus on clean code,
              performance, and long-term maintainability.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              When I'm not coding, I explore new frameworks and sharpen my craft by
              experimenting with different architectures — usually with a cup of coffee
              nearby.
            </p>
          </Reveal>
        </div>

        {/* stats card */}
        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold text-gradient">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <StaggerItem key={fact.label}>
            <div className="group cursor-hover relative h-full overflow-hidden rounded-xl border border-border/60 bg-card/30 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent/10 blur-xl transition-opacity group-hover:opacity-100" />
              <fact.icon className="mb-3 h-5 w-5 text-accent" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-1 truncate font-medium">{fact.value}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
