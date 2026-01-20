'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Dream Sailor Consulting',
      description: 'A consultancy website for Dream Sailor Consulting, offering business solutions and services.',
      technologies: ['.NET', 'Angular', 'TypeScript', 'MySQL'],
      links: {
        demo: 'https://dsailorgroup.com.au/',
        github: 'https://github.com/Freelancely/DreamsailorBackend',
      },
    },
    {
      title: 'Genx Intl',
      description: 'Ecommerce website for Genx International, a leading provider of tech products. Built using Angular and .NET for a seamless shopping experience.',
      technologies: ['Angular', '.NET', 'PostgreSQL', 'Tailwind CSS'],
      links: {
        demo: 'https://genexintl.com',
        github: 'https://github.com',
      },
    },
    // {
    //   title: 'Project Name 2',
    //   description: 'Another interesting project that showcases your fullstack capabilities. Describe the features and impact.',
    //   technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
    //   links: {
    //     demo: 'https://example.com',
    //     github: 'https://github.com',
    //   },
    // },
    // {
    //   title: 'Project Name 3',
    //   description: 'Share your most impressive projects here. Include details about your role, technologies, and outcomes.',
    //   technologies: ['React', 'Express', 'AWS', 'Firebase'],
    //   links: {
    //     demo: 'https://example.com',
    //     github: 'https://github.com',
    //   },
    // },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Featured Projects</h2>
        <p className="text-muted-foreground">Edit these with your actual projects</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 bg-card hover:bg-muted/30"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                    title="View Demo"
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-accent" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                    title="View Code"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-accent" />
                  </a>
                </div>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
