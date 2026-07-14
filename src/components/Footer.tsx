'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/config';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-border-custom bg-card-bg/30 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-border-custom/50 pb-8 mb-8">
          
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="font-display font-bold text-xl tracking-wide flex items-center space-x-2"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm">
                AB
              </span>
              <span>Apoorva B S</span>
            </a>
            <p className="text-sm text-foreground/60 text-center md:text-left max-w-xs">
              Building intelligent systems using AI, Machine Learning, and Modern Web Tech.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="flex justify-center space-x-6">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
              className="text-sm text-foreground/75 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleLinkClick(e, '#skills')}
              className="text-sm text-foreground/75 hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, '#projects')}
              className="text-sm text-foreground/75 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-sm text-foreground/75 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Socials Column */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border-custom hover:bg-primary/5 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border-custom hover:bg-primary/5 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.socials.email}`}
              className="p-2.5 rounded-xl border border-border-custom hover:bg-primary/5 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-foreground/50 space-y-4 sm:space-y-0">
          <p>© {currentYear} Apoorva B S. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Built with ❤️ and Next.js by</span>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground/75 hover:text-primary transition-colors"
            >
              Apoorva B S
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
