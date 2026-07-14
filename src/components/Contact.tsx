'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/config';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(4, { message: 'Subject must be at least 4 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' }
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Submitted contact message details:", data);
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Simulate API call for form submission
      await new Promise(resolve => setTimeout(resolve, 1800));
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();

      // Trigger Confetti Celebration on Success!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#06b6d4', '#a855f7']
      });

    } catch (error) {
      setIsSubmitting(false);
      console.error("Form submit error", error);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-card-bg/5 transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Connect</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Get In Touch With Me
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-card-bg border border-border-custom p-6 sm:p-8 rounded-3xl shadow-sm">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground leading-tight">
                Let&apos;s Build Something Intelligent Together
              </h3>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                I am actively seeking internship opportunities, research collaborations, and open-source project initiatives. Feel free to reach out via the form or my social channels!
              </p>
            </div>

            {/* Contacts list */}
            <div className="space-y-4.5">
              <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-background/50 border border-border-custom">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">Email Address</p>
                  <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="text-sm sm:text-base font-semibold text-foreground/80 hover:text-primary transition-colors">
                    {PERSONAL_INFO.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-background/50 border border-border-custom">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">LinkedIn</p>
                  <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-semibold text-foreground/80 hover:text-primary transition-colors">
                    apoorvabs
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-background/50 border border-border-custom">
                <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">GitHub Profile</p>
                  <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-semibold text-foreground/80 hover:text-primary transition-colors">
                    apoorvabs
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-background/50 border border-border-custom">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">Location</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground/80">
                    {PERSONAL_INFO.socials.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-card-bg border border-border-custom p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-center">
            
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-display text-foreground">Message Sent Successfully!</h4>
                <p className="text-sm sm:text-base text-foreground/60 max-w-sm mx-auto">
                  Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 text-xs font-semibold rounded-xl border border-border-custom hover:bg-card-bg cursor-pointer transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-background/30 focus:outline-none focus:bg-background/80 transition-all ${
                      errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-border-custom focus:border-primary'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 flex items-center space-x-1 font-semibold pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-background/30 focus:outline-none focus:bg-background/80 transition-all ${
                      errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-border-custom focus:border-primary'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 flex items-center space-x-1 font-semibold pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register('subject')}
                    placeholder="Subject of message"
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-background/30 focus:outline-none focus:bg-background/80 transition-all ${
                      errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-border-custom focus:border-primary'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 flex items-center space-x-1 font-semibold pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject.message}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    placeholder="Type your message details here..."
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-background/30 focus:outline-none focus:bg-background/80 transition-all resize-none ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-border-custom focus:border-primary'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 flex items-center space-x-1 font-semibold pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent hover:opacity-95 active:scale-[0.98] disabled:opacity-50 disabled:scale-100 transition-all rounded-xl shadow-md cursor-pointer pt-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
