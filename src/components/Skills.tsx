'use client';

import React from 'react';
import { SKILLS } from '@/config';
import { Code, Cpu, Layout, Database, BarChart2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-5 h-5 text-indigo-500" />,
  "Machine Learning & AI": <Cpu className="w-5 h-5 text-purple-500" />,
  "Frontend Development": <Layout className="w-5 h-5 text-cyan-500" />,
  "Backend & Databases": <Database className="w-5 h-5 text-emerald-500" />,
  "Data Visualization & Cloud": <BarChart2 className="w-5 h-5 text-amber-500" />,
  "Developer Tools": <Terminal className="w-5 h-5 text-rose-500" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative transition-colors duration-300">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            My Tech Stack & Expertise
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, groupIdx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              key={group.category}
              className="glow-card p-6 rounded-2xl bg-card-bg border border-border-custom shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-border-custom/50">
                  <div className="p-2.5 rounded-xl bg-card-bg border border-border-custom shadow-inner">
                    {CATEGORY_ICONS[group.category] || <Code className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground font-display">{group.category}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-foreground/80">{skill.name}</span>
                        <span className="text-xs font-bold text-primary/80">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar container */}
                      <div className="h-2 w-full rounded-full bg-border-custom/50 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
