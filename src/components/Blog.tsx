'use client';

import React from 'react';
import { BLOG_POSTS } from '@/config';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative transition-colors duration-300">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Publications</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Featured Technical Articles
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="glow-card flex flex-col justify-between h-full bg-card-bg border border-border-custom rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Header Visual */}
              <div className="h-40 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-6 border-b border-border-custom/50 flex flex-col justify-between">
                <span className="self-start px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase">
                  {post.category}
                </span>
                
                <div className="flex items-center space-x-2 text-foreground/40">
                  <BookOpen className="w-8 h-8 opacity-55" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Tech Article</span>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground font-display leading-snug hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Footer data bar */}
                  <div className="flex items-center justify-between text-xs text-foreground/50 border-t border-border-custom/50 pt-4">
                    <span className="inline-flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{post.date}</span>
                    </span>

                    <span className="inline-flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Read Article trigger */}
                  <a
                    href={post.url}
                    className="flex items-center justify-center space-x-1.5 w-full py-2.5 rounded-xl border border-border-custom bg-card-bg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-xs font-semibold text-foreground/80 group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
