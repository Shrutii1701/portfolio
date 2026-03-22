"use client";

import { motion } from "framer-motion";

interface NavbarProps {
  theme: "dark" | "light";
  onThemeToggle: () => void;
}

export default function Navbar({ theme, onThemeToggle }: NavbarProps) {
  return (
    <div className="fixed top-4 right-4 z-40">
      <motion.button
        whileTap={{ scale: 0.88 }}
        onClick={onThemeToggle}
        className="relative w-14 h-7 rounded-full flex items-center px-1 transition-all duration-300"
        style={{
          background: theme === "dark" ? "rgba(6,182,212,0.15)" : "rgba(253,224,71,0.2)",
          border: "1px solid var(--border)",
        }}
        aria-label="Toggle theme"
      >
        <motion.div
          layout
          animate={{ x: theme === "dark" ? 0 : 26 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
          style={{
            background: theme === "dark"
              ? "linear-gradient(135deg,#0891b2,#06b6d4)"
              : "linear-gradient(135deg,#fbbf24,#f59e0b)",
          }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </motion.div>
      </motion.button>
    </div>
  );
}
