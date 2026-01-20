export default function About() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            I'm a full-stack developer with a passion for building web applications
            that are not only functional but also visually appealing and
            user-friendly. I enjoy turning complex ideas into reliable, scalable
            digital solutions.
          </p>
          <p>
            I specialize in modern frontend and backend technologies including
            Angular, React, Next.js, TypeScript, Node.js, Laravel, and .NET.
            I have solid experience in database design, RESTful API development,
            authentication systems, and cloud-ready application architecture.
            My work focuses on clean code, performance, and long-term
            maintainability.
          </p>
          <p>
            When I'm not coding, I explore new frameworks, work on side projects,
            and continuously sharpen my skills by experimenting with different
            architectures and technologies—often with a cup of coffee nearby.
          </p>
        </div>
      </div>

      <div className="pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-primary mb-4">Quick Facts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="font-medium">Based in Kathmandu, Nepal</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Experience</p>
            <p className="font-medium">2+ Years in Web Development</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <p className="font-medium">swagatgautamm32@gmail.com</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Languages</p>
            <p className="font-medium">English, Nepali</p>
          </div>
        </div>
      </div>
    </section>
  );
}
