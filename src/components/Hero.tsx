'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/config';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import CanvasParticles from './ui/CanvasParticles';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, KaggleIcon } from './ui/SocialIcons';

const ROLES = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Python Developer",
  "Data Science Enthusiast",
  "Full Stack Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = ROLES[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          // Pause at the end of typing
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setDisplayText((prev) => currentRole.slice(0, prev.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Canvas Particles Background */}
      <CanvasParticles />

      {/* Blurry glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -100, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/15 dark:bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 80, 0],
            y: [0, 80, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/15 dark:bg-accent/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.3, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/15 dark:bg-secondary/10 rounded-full blur-[90px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-center lg:self-start px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase backdrop-blur-sm"
            >
              🚀 Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-none text-foreground"
            >
              Hello, I&apos;m <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent text-glow">Apoorva B S</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 text-xl sm:text-2xl font-semibold text-foreground/80"
            >
              <span>I am a </span>
              <span className="text-primary font-bold">
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-foreground/70 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              {PERSONAL_INFO.headline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 active:scale-95 transition-all cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-foreground bg-card-bg hover:bg-card-bg/85 border border-border-custom active:scale-95 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-4 pt-6"
            >
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-custom hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-custom hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="p-2.5 rounded-xl border border-border-custom hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-sm"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-custom hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-sm flex items-center justify-center"
                title="LeetCode"
              >
                <LeetcodeIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-custom hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-sm flex items-center justify-center"
                title="Kaggle"
              >
                <KaggleIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Right Avatar Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Spinning outline border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary via-purple-500 to-accent opacity-30 animate-spin-slow blur-md" />
              
              {/* Glass container for layout profile */}
              <div className="absolute inset-2 rounded-3xl bg-card-bg border border-border-custom flex items-center justify-center overflow-hidden shadow-2xl z-10">
                <div className="flex flex-col items-center justify-center p-8 space-y-4">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white font-display text-4xl font-extrabold">
                    AB
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold tracking-tight text-foreground">{PERSONAL_INFO.name}</h2>
                    <p className="text-xs text-primary font-semibold mt-1 uppercase tracking-widest">{PERSONAL_INFO.title}</p>
                  </div>
                  {/* Subtle code blocks snippet */}
                  <div className="rounded-xl bg-background/50 border border-border-custom p-3.5 text-left w-full font-mono text-[10px] sm:text-xs text-foreground/70 space-y-1">
                    <p className="text-accent"><span className="text-purple-500">import</span> tensorflow <span className="text-purple-500">as</span> tf</p>
                    <p className="text-accent"><span className="text-purple-500">import</span> numpy <span className="text-purple-500">as</span> np</p>
                    <p className="text-foreground/80"><span className="text-primary">model</span> = tf.keras.Sequential([</p>
                    <p className="pl-4 text-foreground/60">tf.keras.layers.Dense(<span className="text-amber-500">128</span>, activation=<span className="text-teal-500">&apos;relu&apos;</span>),</p>
                    <p className="pl-4 text-foreground/60">tf.keras.layers.Dense(<span className="text-amber-500">1</span>)</p>
                    <p className="text-foreground/80">])</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          onClick={() => handleScrollTo('about')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer z-10"
        >
          <span className="text-xs text-foreground/40 font-medium tracking-widest uppercase">Scroll Down</span>
          <div className="w-5 h-9 rounded-full border-2 border-foreground/20 flex justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
