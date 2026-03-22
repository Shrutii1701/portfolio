"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface WelcomePageProps {
  onEnter: (name: string) => void;
  theme: "dark" | "light";
}

export default function WelcomePage({ onEnter, theme }: WelcomePageProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(true);
      setTimeout(() => setError(false), 600);
      return;
    }
    onEnter(name.trim());
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Ambient gradient blobs */}
      <div
        className="blob absolute w-96 h-96 rounded-full opacity-20 -top-20 -left-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className="blob absolute w-80 h-80 rounded-full opacity-15 -bottom-10 -right-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-blue), transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative z-10 rounded-3xl px-8 py-12 sm:px-12 sm:py-14 w-full max-w-md mx-4 text-center shadow-2xl"
      >
        {/* Logo / Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="relative w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center float"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-blue))",
          }}
        >
          <span className="text-2xl font-bold text-white tracking-tight">SM</span>
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: "var(--accent)", animationDuration: "2.5s" }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--fg)" }}
        >
          Welcome! 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-sm mb-8"
          style={{ color: "var(--fg-muted)" }}
        >
          Before we begin, I&apos;d love to know who I&apos;m talking to.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col gap-4"
        >
          <motion.input
            animate={error ? { x: [-8, 8, -8, 8, 0] } : {}}
            transition={{ duration: 0.35 }}
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-glow w-full rounded-xl px-5 py-3.5 text-base font-medium transition-all duration-200"
            style={{
              backgroundColor: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              border: error
                ? "1px solid #ef4444"
                : "1px solid var(--border)",
              color: "var(--fg)",
            }}
            autoFocus
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-blue))",
              boxShadow: "0 4px 24px var(--accent-glow)",
            }}
          >
            Enter Portfolio ✦
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-xs"
          style={{ color: "var(--fg-muted)" }}
        >
          Shruti Mishra · CS Student · AI Enthusiast · Builder
        </motion.p>
      </motion.div>
    </div>
  );
}
