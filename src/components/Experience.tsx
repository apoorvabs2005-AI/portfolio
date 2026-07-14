'use client';

import React from 'react';
import { EXPERIENCE } from '@/config';
import { Briefcase, Calendar, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative transition-colors duration-300">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">History</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Professional Experience & Internships
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto relative border-l border-border-custom pl-6 sm:pl-8 space-y-12">
          {EXPERIENCE.map((exp, idx) => (
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
                <Briefcase className="w-3.5 h-3.5 text-primary" />
              </div>

              {/* Experience Card */}
              <div className="glow-card p-6 rounded-2xl bg-card-bg border border-border-custom shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground font-display">{exp.role}</h3>
                    <p className="text-sm font-semibold text-primary">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-card-bg border border-border-custom text-xs font-semibold text-foreground/60">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{exp.period}</span>
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      exp.type === 'internship' 
                        ? 'bg-accent/10 text-accent border border-accent/20' 
                        : 'bg-secondary/10 text-secondary border border-secondary/20'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description items */}
                <ul className="space-y-2">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2.5 text-sm sm:text-base text-foreground/75 leading-relaxed">
                      <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
