"use client";

import { motion } from "framer-motion";
import { Star, Code2 } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: "🏅",
    title: "100+ Coding Problems Solved",
    description: "Solved over 100 problems across HackerRank and CodeChef platforms.",
    color: "#f59e0b",
  },
  {
    icon: "🥈",
    title: "Silver Badge – HackerRank",
    description: "Earned Silver Badge for consistent performance and quality solutions.",
    color: "#a855f7",
  },
  {
    icon: "⭐",
    title: "4-Star Rating in C & Python",
    description: "Achieved 4-star rating in both C and Python on HackerRank.",
    color: "#3b82f6",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4" style={{ backgroundColor: "var(--bg-card)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
            Honours
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--fg)" }}>
            Achievements
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="card-glow text-center rounded-2xl p-6 flex flex-col items-center gap-4"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = ach.color + "55")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")
              }
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{
                  background: `${ach.color}15`,
                  border: `1px solid ${ach.color}30`,
                }}
              >
                {ach.icon}
              </div>

              <div>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--fg)" }}>
                  {ach.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {ach.description}
                </p>
              </div>

              {/* Accent line */}
              <div
                className="w-12 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${ach.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Platform tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-4 mt-10 flex-wrap"
        >
          {[
            { name: "HackerRank", emoji: "🟢", color: "#10b981" },
            { name: "CodeChef", emoji: "👨‍🍳", color: "#f59e0b" },
          ].map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
              style={{
                background: `${platform.color}12`,
                border: `1px solid ${platform.color}25`,
                color: platform.color,
              }}
            >
              <span>{platform.emoji}</span>
              {platform.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
