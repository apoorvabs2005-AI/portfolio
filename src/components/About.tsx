'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/config';
import { Target, Eye, User, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'vision'>('story');

  const tabContents = {
    story: {
      title: "My Personal Story",
      icon: <User className="w-5 h-5" />,
      text: "Ever since I ran my first Python script, I have been captivated by the potential of writing code to solve complex, real-world problems. Transitioning into the AI & Machine Learning space was a natural path; it allows me to combine statistical algorithms with frontend design, making models tangible and interactive. As an engineering student, I prioritize writing clean, type-safe code, training explainable classifiers, and designing layouts that feel smooth and responsive."
    },
    mission: {
      title: "My Mission",
      icon: <Target className="w-5 h-5" />,
      text: "To bridge the gap between complex machine learning theoretical frameworks and intuitive, accessible software solutions. I aim to write algorithms that don't just reside in CLI scripts but are deployed into production environments where they create actual value for users."
    },
    vision: {
      title: "My Vision",
      icon: <Eye className="w-5 h-5" />,
      text: "To contribute to the future of AI alignment and web scaling, creating intelligent systems that prioritize user privacy, absolute clarity, and performance. I believe the future is multi-modal and fast, and I am preparing myself to lead engineering efforts in that direction."
    }
  };

  return (
    <section id="about" className="py-24 bg-card-bg/10 relative transition-colors duration-300">
      {/* Subtle light spots */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">About Me</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            My Journey, Purpose, & Fun Facts
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal tabs and bio */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-foreground font-display">
              AI & Machine Learning Engineering Student
            </h3>
            <p className="text-foreground/75 leading-relaxed text-base">
              {PERSONAL_INFO.bio}
            </p>

            {/* Interactive Tab Switcher */}
            <div className="border border-border-custom rounded-2xl bg-card-bg overflow-hidden shadow-sm">
              <div className="flex border-b border-border-custom bg-background/50">
                {(Object.keys(tabContents) as Array<keyof typeof tabContents>).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center space-x-2 px-5 py-4 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-transparent text-foreground/60 hover:text-foreground hover:bg-card-bg/50'
                    }`}
                  >
                    {tabContents[tab].icon}
                    <span className="capitalize">{tab}</span>
                  </button>
                ))}
              </div>
              <div className="p-6 min-h-[140px]">
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span>{tabContents[activeTab].title}</span>
                </h4>
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                  {tabContents[activeTab].text}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stats and tags */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glow-card p-5 rounded-2xl bg-card-bg border border-border-custom text-center transition-all duration-300 shadow-sm"
                >
                  <p className="text-3xl sm:text-4xl font-display font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/60 font-semibold mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Areas of Interest */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold tracking-wider uppercase text-foreground/80">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-border-custom bg-card-bg text-foreground/80 hover:border-primary/45 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold tracking-wider uppercase text-foreground/80">Fun Facts</h4>
              <div className="space-y-2">
                {PERSONAL_INFO.funFacts.map((fact, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-2.5 p-3 rounded-xl border border-border-custom bg-card-bg/40 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
