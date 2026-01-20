'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:col-span-1">
          <nav className="sticky top-24 space-y-6">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'projects', label: 'Projects' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-lg font-light transition-colors ${
                  activeSection === item.id
                    ? 'text-primary font-normal'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 space-y-20">
          {activeSection === 'about' && <About />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'education' && <Education />}
          {activeSection === 'projects' && <Projects />}
        </main>
      </div>

      <Contact />
    </div>
  );
}
