'use client';

import React, { useState, useEffect } from 'react';
import { PROJECTS, Project } from '@/config';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, X, Check, Target, Lightbulb, Code } from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';

const CATEGORIES = ['All', 'AI/ML', 'Full Stack', 'Data Science', 'Utilities'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-card-bg/5 relative transition-colors duration-300">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">My Work</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Featured Projects & Case Studies
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4.5 py-2 text-sm font-semibold rounded-xl border transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-primary border-primary text-white shadow-md shadow-indigo-500/10'
                  : 'bg-card-bg border-border-custom text-foreground/75 hover:border-primary/45 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glow-card flex flex-col justify-between h-full bg-card-bg border border-border-custom rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="relative h-44 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-6 border-b border-border-custom/50">
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-background/80 backdrop-blur-sm border border-border-custom text-[10px] font-bold text-primary uppercase">
                    {project.category}
                  </div>
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-md">
                      <Code className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-sm tracking-tight text-foreground/80">{project.title}</span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground leading-snug">{project.title}</h3>
                    <p className="text-sm text-foreground/70 line-clamp-3 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-primary/5 text-primary border border-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2 text-xs font-semibold text-white bg-primary hover:bg-primary/95 active:scale-95 rounded-xl transition-all cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>
                      
                      <div className="flex items-center space-x-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl border border-border-custom hover:bg-card-bg transition-colors"
                          title="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        {project.demoUrl !== '#' && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl border border-border-custom hover:bg-card-bg transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-background/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-card-bg border border-border-custom rounded-3xl shadow-2xl z-10 flex flex-col"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-card-bg/90 backdrop-blur-md border-b border-border-custom/50 px-6 py-4 flex items-center justify-between z-20">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase">
                      {activeProject.category}
                    </span>
                    <span className="text-xs text-foreground/50 font-semibold">Case Study</span>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-1.5 rounded-xl border border-border-custom hover:bg-background/85 transition-colors cursor-pointer text-foreground/75"
                    aria-label="Close Case Study"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Title & Descriptors */}
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight">
                      {activeProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-primary/5 text-primary border border-primary/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Two Column details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    
                    {/* Column 1: Problem & Solution */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="flex items-center space-x-2 font-display font-bold text-lg text-rose-500">
                          <Target className="w-5 h-5" />
                          <span>The Problem</span>
                        </h4>
                        <p className="text-foreground/70 text-sm sm:text-base leading-relaxed bg-rose-500/5 dark:bg-rose-950/10 border border-rose-500/10 rounded-2xl p-4">
                          {activeProject.caseStudy.problem}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="flex items-center space-x-2 font-display font-bold text-lg text-emerald-500">
                          <Lightbulb className="w-5 h-5" />
                          <span>The Solution</span>
                        </h4>
                        <p className="text-foreground/70 text-sm sm:text-base leading-relaxed bg-emerald-500/5 dark:bg-emerald-950/10 border border-emerald-500/10 rounded-2xl p-4">
                          {activeProject.caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    {/* Column 2: Key Features */}
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-lg text-foreground">Key Features</h4>
                      <ul className="space-y-2">
                        {activeProject.caseStudy.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-foreground/70 bg-primary/5 border border-primary/5 rounded-xl p-3">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Results & Key Metrics */}
                  <div className="border-t border-border-custom/50 pt-6 space-y-2">
                    <h4 className="font-display font-bold text-lg text-foreground">Results & Deliverables</h4>
                    <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                      {activeProject.caseStudy.results}
                    </p>
                  </div>

                  {/* Challenges & Lessons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border-custom/50 pt-6">
                    <div className="space-y-2">
                      <h5 className="font-display font-bold text-sm sm:text-base text-foreground/80">Challenges Overcome</h5>
                      <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                        {activeProject.caseStudy.challenges}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-display font-bold text-sm sm:text-base text-foreground/80">Lessons Learned</h5>
                      <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                        {activeProject.caseStudy.lessons}
                      </p>
                    </div>
                  </div>

                  {/* Action buttons footer */}
                  <div className="flex items-center justify-end space-x-3 pt-6 border-t border-border-custom/50">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-border-custom hover:bg-card-bg text-sm font-semibold transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repository</span>
                    </a>
                    {activeProject.demoUrl !== '#' && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-white bg-primary hover:bg-primary/95 text-sm font-semibold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
