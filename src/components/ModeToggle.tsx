"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.div
      whileTap={{ rotate: 360 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-4 w-4 text-blue-400" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-4 w-4 text-yellow-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  )
}
