"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950/95 dark:via-blue-950/80 dark:to-slate-950/95"></div>
        
        {/* Large animated orbs with better positioning */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-blue-300/50 dark:from-blue-700/15 dark:to-blue-800/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-200/40 to-blue-200/50 dark:from-purple-700/15 dark:to-blue-700/20 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        <div className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-cyan-200/40 to-blue-100/50 dark:from-blue-800/15 dark:to-cyan-700/20 rounded-full blur-3xl animate-float-slow delay-2000"></div>
        
        {/* Medium sized moving orbs */}
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/40 dark:from-blue-700/10 dark:to-purple-800/15 rounded-full blur-2xl animate-orbit"></div>
        <div className="absolute top-3/4 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-100/30 to-blue-200/40 dark:from-indigo-800/10 dark:to-blue-900/15 rounded-full blur-2xl animate-orbit-reverse"></div>
        
        {/* Floating particles with varied sizes */}
        <div className="absolute inset-0">
          {[
            { size: 2, left: 10, top: 20, delay: 0, duration: 12 },
            { size: 1.5, left: 80, top: 15, delay: 2, duration: 15 },
            { size: 3, left: 25, top: 60, delay: 4, duration: 10 },
            { size: 2.5, left: 90, top: 40, delay: 1, duration: 18 },
            { size: 1, left: 5, top: 80, delay: 6, duration: 14 },
            { size: 4, left: 70, top: 25, delay: 3, duration: 11 },
            { size: 1.8, left: 45, top: 90, delay: 5, duration: 16 },
            { size: 2.2, left: 60, top: 5, delay: 7, duration: 13 },
            { size: 3.5, left: 15, top: 45, delay: 2.5, duration: 19 },
            { size: 1.2, left: 95, top: 70, delay: 8, duration: 9 },
            { size: 2.8, left: 35, top: 30, delay: 4.5, duration: 17 },
            { size: 1.6, left: 75, top: 85, delay: 1.5, duration: 12 },
            { size: 3.2, left: 50, top: 10, delay: 6.5, duration: 14 },
            { size: 2.1, left: 20, top: 75, delay: 3.5, duration: 15 },
            { size: 1.4, left: 85, top: 50, delay: 7.5, duration: 11 }
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute bg-slate-400/30 dark:bg-slate-300/20 rounded-full animate-float"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.06]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--foreground)/0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,hsl(var(--foreground)/0.05)_50%,transparent_51%)] bg-[size:60px_60px]"></div>
        </div>
        
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/20"></div>
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto min-h-[80vh]">
        
        {/* Content Section */}
        <div className="lg:w-[55%] text-center lg:text-left order-2 lg:order-1">
          
          {/* Greeting Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 dark:bg-blue-600/20 backdrop-blur-sm border border-blue-300/30 dark:border-blue-500/30 rounded-full mb-4 text-blue-700 dark:text-blue-300">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            <span className="text-foreground">Hello, I&apos;m</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Luqman Booso
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="mb-6">
            <div className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-600 dark:text-blue-400 min-h-[2rem] flex items-center justify-center lg:justify-start">
              <Typewriter
                options={{
                  strings: [
                    'Software Developer',
                    'SE Undergraduate', 
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursor: '|'
                }}
              />
            </div>
          </div>

          {/* Description */}
          <div className="text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
            <p className="text-base lg:text-lg leading-relaxed">
              Passionate about creating innovative digital solutions that make a real impact. 
              Currently pursuing my IT degree at SLIIT while building meaningful projects.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 shadow-lg text-sm lg:text-base"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-50/80 dark:bg-blue-950/50 backdrop-blur-sm text-blue-700 dark:text-blue-300 font-semibold rounded-xl border border-blue-200 dark:border-blue-700 hover:bg-blue-100/80 dark:hover:bg-blue-900/50 transition-colors duration-200 shadow-lg text-sm lg:text-base"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[40%] flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative">
            {/* Animated glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-2xl blur-2xl animate-pulse"></div>
            <Image
              src="/cv.jpg"
              alt="Luqman Booso"
              width={350}
              height={350}
              className="relative z-10 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl border-2 border-blue-200/50 dark:border-blue-700/50 shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C360,120 1080,0 1440,96 L1440,120 L0,120 Z"
            fill="hsl(var(--background))"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  )
}