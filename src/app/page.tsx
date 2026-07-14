import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      {/* Custom Cursor Trailing Effect */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Full-screen Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Grid Section */}
        <Projects />

        {/* Education Timeline */}
        <Education />

        {/* Experience Timeline */}
        <Experience />

        {/* Certificates Showcase */}
        <Certificates />

        {/* Key Achievements Grid */}
        <Achievements />

        {/* Technical Blog list */}
        <Blog />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Footer minimal links */}
      <Footer />
    </>
  );
}
