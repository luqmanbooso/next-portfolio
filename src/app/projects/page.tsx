"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  technologies: string[];
  description: string;
  image: string;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "EduCharity",
      subtitle: "Online Learning Management System",
      technologies: ["MERN Stack", "Tailwind CSS", "AI Integration"],
      description: "Built a MERN stack LMS for online course management and student engagement, featuring AI essay scoring and certificate generation.",
      image: "/educarity.png", // You'll need to add these images
      category: "Full-Stack",
      liveUrl:"https://eduedu-dh5w.vercel.app/",
      githubUrl: "https://github.com/luqmanbooso/eduedu",
      features: ["AI Essay Scoring", "Certificate Generation", "Course Management", "Student Dashboard"]
    },
    {
      id: 2,
      title: "MoodTracker",
      subtitle: "Mood & Habit Tracking Platform",
      technologies: ["MERN Stack", "Tailwind CSS", "AI Support"],
      description: "Built a full-stack wellness app for mood logging, habit tracking, and personalized insights with AI support and gamification.",
      image: "/moodx.png",
      category: "Full-Stack",
      githubUrl: "https://github.com/luqmanbooso/MoodTracker",
      liveUrl: "https://mood-tracker-demo.vercel.app",
      features: ["Mood Analytics", "Habit Tracking", "AI Insights", "Gamification"]
    },
    {
      id: 3,
      title: "Spendly",
      subtitle: "Mobile Finance Tracker App",
      technologies: ["Android Studio", "Kotlin", "Firebase"],
      description: "Developed a Kotlin-based Android app to track expenses with Firebase backup, budget alerts & visual spending reports.",
      image: "/spendly.jpeg",
      category: "Mobile",
      githubUrl: "https://github.com/luqmanbooso/Spendly",
      features: ["Expense Tracking", "Budget Alerts", "Visual Reports", "Firebase Sync"]
    },
    {
      id: 4,
      title: "BuildMart",
      subtitle: "Construction Bidding & Procurement System",
      technologies: ["MERN Stack", "Tailwind CSS", "Vercel"],
      description: "Built a MERN stack web app for contractor bidding & inventory tracking using dynamic dashboards; deployed via Vercel.",
      image: "/buildmart.png",
      category: "Full-Stack",
      githubUrl: "https://github.com/luqmanbooso/BuildMart",
      liveUrl: "https://buildmart-system.vercel.app/",
      features: ["Contractor Bidding", "Inventory Tracking", "Dynamic Dashboards", "Real-time Updates"]
    },
    {
      id: 5,
      title: "Boutique",
      subtitle: "Hotel Management System",
      technologies: ["Java", "HTML/CSS", "JavaScript", "Bootstrap", "SQL"],
      description: "Created a Java & SQL backend for managing bookings and room inventory with a responsive Bootstrap UI.",
      image: "/Boutique.png",
      category: "Backend",
      githubUrl: "https://github.com/luqmanbooso/Boutique",
      features: ["Booking Management", "Room Inventory", "Responsive UI", "SQL Database"]
    },
    {
      id: 6,
      title: "Urban Nestle",
      subtitle: "Apartment Booking System",
      technologies: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
      description: "Built a PHP-MySQL system for listing and booking apartments; streamlined user & admin workflows with JS-enhanced UI.",
      image: "/urbannestle.webp",
      githubUrl: "https://github.com/luqmanbooso/Urban-nestle",
      category: "Web Development",
      features: ["Apartment Listings", "Booking System", "Admin Dashboard", "User Management"]
    }
  ];

  const categories = ["All", "Full-Stack", "Mobile", "Backend", "Web Development"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-background py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(120,200,255,0.1),transparent_60%)]"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Projects
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
         
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.02, transition: { duration: 0.05 } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.03 } }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-100 backdrop-blur-sm border ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-white/10 dark:bg-black/20 text-foreground border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15, delay: index * 0.02 }}
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.1 } }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-150">
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-150 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Overlay with project category */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border border-primary/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-100">
                      {project.title}
                    </h3>
                    <p className="text-secondary font-semibold text-sm mb-3">
                      {project.subtitle}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground px-3 py-1 rounded-lg text-xs font-medium border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-muted/20 text-muted-foreground px-3 py-1 rounded-lg text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features Preview */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.1 }}
                          className="mb-4 overflow-hidden"
                        >
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, transition: { duration: 0.05 } }}
                          whileTap={{ scale: 0.98, transition: { duration: 0.03 } }}
                          className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-100 hover:bg-primary/90 text-center"
                        >
                          🔗 Live Demo
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, transition: { duration: 0.05 } }}
                          whileTap={{ scale: 0.98, transition: { duration: 0.03 } }}
                          className={`bg-secondary/20 text-foreground border border-secondary/50 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-100 hover:bg-secondary/30 text-center ${
                            project.liveUrl ? 'flex-1' : 'w-full'
                          }`}
                        >
                          📋 GitHub
                        </motion.a>
                      )}
                      {!project.liveUrl && !project.githubUrl && (
                        <div className="w-full bg-muted/10 text-muted-foreground px-4 py-2 rounded-lg text-sm text-center border border-muted/20">
                          🔒 Private Project
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl px-8 py-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s collaborate on your next project and bring your ideas to life!
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                🚀 Let&apos;s Connect
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}