'use client';

import React, { useState } from 'react';
import { CERTIFICATIONS } from '@/config';
import { Award, ExternalLink, Search, Calendar, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Certificates() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = CERTIFICATIONS.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="certificates" className="py-24 relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Credentials</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Professional Certifications
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/45" />
            <input
              type="text"
              placeholder="Search certificates or issuers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 text-sm rounded-2xl border border-border-custom bg-card-bg/60 focus:outline-none focus:border-primary/70 transition-colors"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.title}
                className="glow-card flex flex-col justify-between h-full bg-card-bg border border-border-custom rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Certificate placeholder card header */}
                <div className="relative h-40 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-6 border-b border-border-custom/50 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="absolute top-2.5 right-2.5 p-1 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Award className="w-4 h-4" />
                  </div>
                  
                  {/* Visual representation */}
                  <div className="flex flex-col items-center space-y-1.5 text-center z-10">
                    <FileCheck className="w-8 h-8 text-primary/75" />
                    <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Certificate Badge</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-foreground font-display leading-snug line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary/95">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-border-custom/50 pt-3">
                    <span className="inline-flex items-center space-x-1 text-xs text-foreground/50">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{cert.date}</span>
                    </span>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-bold text-primary hover:text-accent transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/50 text-base">No certificates found matching your search query.</p>
          </div>
        )}

      </div>
    </section>
  );
}
