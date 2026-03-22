"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeModalProps {
  visitorName: string;
  onClose: () => void;
}

interface ConfettiPiece {
  id: number;
  color: string;
  left: string;
  width: number;
  height: number;
  delay: number;
  duration: number;
  rotate: number;
}

const CONFETTI_COLORS = [
  "#a855f7", "#3b82f6", "#f59e0b", "#10b981",
  "#ef4444", "#ec4899", "#14b8a6", "#f97316",
];

export default function WelcomeModal({ visitorName, onClose }: WelcomeModalProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  useEffect(() => {
    const generated: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      left: `${(i * 1.7 + Math.random() * 5) % 100}%`,
      width: 6 + Math.random() * 6,
      height: 10 + Math.random() * 10,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 3,
      rotate: Math.random() * 360,
    }));
    setPieces(generated);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Confetti layer */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {pieces.map((p) => (
            <div
              key={p.id}
              className="confetti-piece"
              style={{
                left: p.left,
                width: p.width,
                height: p.height,
                backgroundColor: p.color,
                transform: `rotate(${p.rotate}deg)`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s, ${p.duration * 0.7}s`,
              }}
            />
          ))}
        </div>

        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: "#1a1a2e", border: "1px solid rgba(168,85,247,0.25)" }}
        >
          {/* Top gradient strip */}
          <div
            className="h-1 w-full"
            style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-blue))" }}
          />

          <div className="p-6">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors w-7 h-7 flex items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="text-3xl"
              >
                🎉
              </motion.span>
              <div>
                <h2 className="text-xl font-bold text-white">
                  Hi{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, var(--accent), var(--accent-blue))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {visitorName}
                  </span>
                </h2>
              </div>
            </div>

            {/* Body */}
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Thanks for stopping by! I&apos;m really excited to share my work
              with you.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Just scroll through to dive into my projects, skills, and
              experiences. Take your time, explore, and have fun! 🚀
            </p>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                }
              >
                Close ✕
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-blue))",
                  boxShadow: "0 4px 20px var(--accent-glow)",
                }}
              >
                🚀 Start Exploring
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
