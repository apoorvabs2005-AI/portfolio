'use client';

import React from 'react';
import { EDUCATION } from '@/config';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-card-bg/5 relative transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Qualifications</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Academic Education
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto relative border-l border-border-custom pl-6 sm:pl-8 space-y-12">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={idx}
              className="relative"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[39px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
              </div>

              {/* Education Card */}
              <div className="glow-card p-6 sm:p-8 rounded-2xl bg-card-bg border border-border-custom shadow-sm space-y-6">
                
                {/* Header block */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground font-display leading-tight">{edu.degree}</h3>
                    <p className="text-sm sm:text-base font-semibold text-foreground/70">{edu.institution}</p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-card-bg border border-border-custom text-xs font-semibold text-foreground/60">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{edu.period}</span>
                    </span>
                    {edu.grade && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 text-center">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>

                {/* Coursework & Achievements block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border-custom/50">
                  
                  {/* Coursework */}
                  <div className="space-y-3">
                    <h4 className="flex items-center space-x-2 font-display font-bold text-sm uppercase tracking-wider text-foreground/80">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span>Key Coursework</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-card-bg border border-border-custom text-foreground/75"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="flex items-center space-x-2 font-display font-bold text-sm uppercase tracking-wider text-foreground/80">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Academic Milestones</span>
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="text-xs sm:text-sm text-foreground/75 flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
