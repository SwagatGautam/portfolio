'use client';

import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="border-t border-border bg-muted/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Let's Connect</h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Contact Information</h3>
              <div className="space-y-3">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-foreground/80 group-hover:text-foreground">
                    swagatgautamm32@gmail.com
                  </span>
                </a>
                <div className="text-sm text-foreground/60 px-8">
                  <p>Response time: Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SwagatGautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/swagat-gautam-ab0b03185/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
            <a
              href="mailto:swagatgautamm32@gmail.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
            >
              Send Me an Email
            </a>
            <a
              href="https://www.linkedin.com/in/swagat-gautam-ab0b03185/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Swagat Gautam. Crafted with React & Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
