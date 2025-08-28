"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Boxes } from "@/components/ui/shadcn-io/background-boxes";
import SkillsCarousel from "@/components/SkillsCarousel";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skills = [
    {
      title: "Frontend Development",
      items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      color: "border-blue-500/30"
    },
    {
      title: "Backend Development", 
      items: ["Node.js", "Express.js", "MongoDB", "MySQL", "Python", "Java"],
      color: "border-green-500/30"
    },
    {
      title: "Mobile Development",
      items: ["Kotlin", "Android Studio", "Firebase", "React Native"],
      color: "border-purple-500/30"
    },
    {
      title: "Development Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel"],
      color: "border-orange-500/30"
    }
  ];

  return (
    <>
      {/* About Section */}
      <section className="relative min-h-screen bg-background overflow-hidden">
  <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-blue-500/20 to-purple-500/20 dark:from-pink-400/30 dark:via-blue-400/30 dark:to-purple-400/30 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 dark:from-pink-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                ABOUT ME
              </h1>
            </div>
          </div>
        </motion.div>
        <div className="flex h-screen">
          {/* Left: Image block - smaller width, full height, cornered to left */}
          <div className="relative w-1/3 h-full overflow-hidden z-1">
            <Image
              src="/cv.jpg"
              alt="Luqman Booso"
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px]" />
          </div>

          {/* Right: Portfolio info with animated background boxes - takes remaining space */}
          <div className="relative flex-1 flex flex-col justify-center items-center px-12 py-12">
            <Boxes className="absolute inset-0" />
            <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            
            <div className="relative z-30 w-full max-w-2xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:text-5xl text-3xl font-bold text-foreground mb-6"
              >
                Luqman Booso
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Software Engineering Student @ SLIIT<br />
                <span className="text-primary font-semibold">Full-Stack Developer</span> | <span className="text-secondary font-semibold">UI/UX Enthusiast</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-primary/10 text-primary px-4 py-3 rounded-xl font-mono text-sm border border-primary/30 backdrop-blur-sm">
                  <div className="font-bold text-lg">3.9+</div>
                  <div className="text-xs opacity-80">GPA (Dean's List)</div>
                </div>
                <div className="bg-secondary/10 text-secondary px-4 py-3 rounded-xl font-mono text-sm border border-secondary/30 backdrop-blur-sm">
                  <div className="font-bold text-lg">6+</div>
                  <div className="text-xs opacity-80">Projects</div>
                </div>
                <div className="bg-green-500/10 text-green-500 px-4 py-3 rounded-xl font-mono text-sm border border-green-500/30 backdrop-blur-sm">
                  <div className="font-bold text-lg">7+</div>
                  <div className="text-xs opacity-80">Certifications</div>Syndrome. Mcdonald's. 
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto"
              >
                Passionate about building <span className="text-primary font-medium">scalable, user-centric solutions</span> with React, Next.js, Node.js, and cutting-edge technologies that make a real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="/LuqmanBooso_resume.pdf"
                  download
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  📄 Download CV
                </a>
                <a
                  href="#contact"
                  className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  💬 Get In Touch
                </a>
                <a
                  href="#projects"
                  className="bg-card text-foreground border border-border px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-card/80 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  🚀 View Projects
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Carousel */}
      <SkillsCarousel skills={skills} />
    </>
  );
}
