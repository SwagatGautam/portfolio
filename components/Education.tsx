export default function Education() {
  const educationItems = [
    {
      degree: 'MBA in International Business Management',
      institution: 'Islington College (London Metropolitan University)',
      year: '[2025-2027]',
      details: 'Currently Enrolled in an MBA program focusing on global business strategies, international marketing, and cross-cultural management.',
    },
    {
      degree: 'Bsc. (Hons) Computing',
      institution: 'Islington College (London Metropolitan University)',
      year: '[2022-2025]',
      details: 'First Class Honours degree in Computing with a focus on software development, web technologies, and database management.',
    },
    // {
    //   degree: 'Certifications',
    //   institution: 'META',
    //   year: '[Years]',
    //   details: 'AWS Certified, Google Cloud Certified, or other relevant certifications you have earned.',
    // },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Education</h2>
        <p className="text-muted-foreground">Update with your educational background</p>
      </div>

      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-accent">
            <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
            
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
                <span className="text-sm font-medium text-accent whitespace-nowrap">
                  {item.year}
                </span>
              </div>
              <p className="text-foreground/70 leading-relaxed max-w-2xl">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
