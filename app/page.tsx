import Aurora from '@/components/motion/Aurora';
import CustomCursor from '@/components/motion/CustomCursor';
import ScrollProgress from '@/components/motion/ScrollProgress';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ChatWidget from '@/components/chat/ChatWidget';

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Aurora />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <ChatWidget />
    </div>
  );
}
