"use client"
import { PrismBackground } from "@/components/ui/shadcn-io/prism-background"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      <PrismBackground className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center z-10 px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="bg-black/80 border border-blue-500/30 rounded-lg p-4 mb-6 font-mono text-sm inline-block">
            <span className="text-green-400">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-300">~</span>
            <span className="text-white">$</span>
            <span className="text-green-300"> whoami</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-code text-white">
            Hello, I'm <span className="text-green-400">Luqman Booso</span>
          </h1>
          <div className="flex items-center mb-6">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500 via-green-400 to-transparent ml-2"></div>
          </div>
          <div className="bg-gray-900/70 border border-blue-500/20 rounded p-3 mb-6 overflow-hidden">
            <h2 className="text-xl md:text-2xl font-mono text-green-400">
              Software Developer | IT Undergraduate | Problem Solver
            </h2>
          </div>
          <div className="text-gray-300 mb-8 max-w-lg font-mono text-sm leading-relaxed">
            <div className="text-gray-500">/*</div>
            <div className="ml-3 text-gray-300">
              * <span className="text-blue-400">@description</span> IT undergraduate at SLIIT<br />
              * <span className="text-green-400">@specializes</span> Efficient, user-centric solutions<br />
              * <span className="text-purple-400">@status</span> Ready to code and innovate!
            </div>
            <div className="text-gray-500">*/</div>
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="px-6 py-3 bg-teal-600 text-white font-mono rounded border border-teal-400 hover:bg-teal-500 transition-all duration-300">
              viewWork()
            </a>
            <a href="#contact" className="px-6 py-3 bg-black text-green-400 font-mono rounded border border-green-500 hover:bg-gray-900 hover:text-green-300 transition-all duration-300">
              connect now :)
            </a>
          </div>
        </div>
   <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative group"
  >
    <Image
      src="/cv.jpg"
      alt="Luqman Booso"
      width={320}
      height={320}
      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg border-2 border-gray-700 group-hover:border-green-500 shadow-2xl"
      priority
    />
  </motion.div>
</div>
        <br /><br />
      </div>
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
            fill="currentColor"
            className="text-gray-950 dark:text-white"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  )
}