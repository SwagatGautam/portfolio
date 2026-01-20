'use client';

import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'GuardWare Australia Pty. Ltd.',
      position: 'Fullstack Developer',
      duration: 'Jan 2025 - Present',
      description:
        'Worked on Creating Data Leak Prevention System.',
      technologies: ['Laravel', 'Angular', 'MySQL'],
    },
    {
      id: 2,
      company: 'Brkchya Solutions',
      position: 'Fullstack Developer',
      duration: '2023 - 2025',
      description:
        'Built and maintained web applications. Implemented real-time features and optimized database queries.',
      technologies: ['React', 'Express', 'MongoDB', 'Docker'],
    },
    {
      id: 3,
      company: 'MySecondTeacher',
      position: 'Graphic Designer',
      duration: 'Jan 2024 - Jun 2024',
      description:
        'Created visually appealing graphics and layouts for educational materials, ensuring alignment with brand guidelines and enhancing user engagement.',
      technologies: ['Adobe Indesign', 'Adobe Illustrator', 'Adobe Photoshop'],
    },
    {
      id: 4,
      company: 'MySecondTeacher',
      position: 'Voiceover Artist',
      duration: '2023-2025',
      description:
        'Provided voiceover services for educational content for EBooks, enhancing the learning experience for students.',
      technologies: ['Communication', 'Confidence', 'Time Management'],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3 text-balance">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and roles throughout my career
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 border-l-2 border-accent"
            >
              <div className="absolute left-[-17px] top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-accent-foreground" />
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
