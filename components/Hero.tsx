export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
                Swagat Gautam
              </h2>
              <p className="text-xl text-muted-foreground">
                Fullstack Developer
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Building beautiful, scalable web applications with modern technologies. Passionate about creating seamless user experiences and robust backend systems.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                View My Work
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-3xl"></div>
              <img
  src="/swagat.png"
  alt="Swagat Gautam"
  className="relative w-full h-auto drop-shadow-lg"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
