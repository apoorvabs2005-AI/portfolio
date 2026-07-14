'use client';

import React from 'react';
import { ACHIEVEMENTS } from '@/config';
import { Trophy, Code, BookOpen, Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORY_ICONS = {
  hackathon: <Trophy className="w-5 h-5 text-amber-500" />,
  milestone: <Code className="w-5 h-5 text-indigo-500" />,
  academic: <Star className="w-5 h-5 text-purple-500" />,
  other: <BookOpen className="w-5 h-5 text-cyan-500" />
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-card-bg/5 relative transition-colors duration-300">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Milestones</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Key Achievements & Awards
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="glow-card flex items-start space-x-4 p-6 rounded-2xl bg-card-bg border border-border-custom shadow-sm"
            >
              {/* Left Side: Icon badge */}
              <div className="p-3 rounded-2xl bg-card-bg border border-border-custom shadow-inner shrink-0">
                {CATEGORY_ICONS[ach.category] || <Trophy className="w-5 h-5 text-primary" />}
              </div>

              {/* Right Side: Info content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug font-display">
                    {ach.title}
                  </h3>
                  
                  {ach.stat && (
                    <span className="shrink-0 px-2.5 py-0.5 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                      {ach.stat}
                    </span>
                  )}
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">
                  {ach.description}
                </p>

                <div className="flex items-center space-x-1 text-xs text-foreground/40 font-semibold pt-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{ach.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
