"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillGroup {
  title: string;
  items: string[];
  color: string;
}

interface SkillsCarouselProps {
  skills: SkillGroup[];
}

export default function SkillsCarousel({ skills = [] }: SkillsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality with safety check
  useEffect(() => {
    if (!skills || skills.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [skills?.length]);

  // Safety check - return null if no skills
  if (!skills || skills.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-foreground"
        >
          Technical Skills
        </motion.h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className={`bg-card/30 backdrop-blur-lg border border-border/30 rounded-2xl p-8 ${skills[currentIndex]?.color || ''}`}>
                  <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
                    {skills[currentIndex]?.title || 'Loading...'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {(skills[currentIndex]?.items || []).map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center font-medium border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/30 text-primary p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/30 text-primary p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}