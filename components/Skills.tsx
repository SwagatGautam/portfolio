export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['Angular','React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['Laravel','.NET', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
    },
    {
      category: 'Other Skills',
      skills: ['Performance Optimization', 'Testing', 'Agile', 'Problem Solving'],
    },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Skills & Expertise</h2>
        <p className="text-muted-foreground">Edit these categories with your actual skills</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.category} className="space-y-4">
            <h3 className="text-lg font-semibold text-primary border-b border-accent/30 pb-3">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
