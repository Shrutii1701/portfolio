"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "SMIRRA",
    subtitle: "AI Interview Practice Arena",
    period: "Dec '25 – Feb '26",
    description:
      "AI-driven platform simulating real interview scenarios with progressive difficulty levels. Features gamification with ranks, combo bonuses, timers, and Gemini-powered answer evaluation.",
    tech: ["React", "JavaScript", "Gemini API"],
    color: "#a855f7",
    github: "https://github.com/Shrutii1701/SMIRRA",
    live: "https://vercel.com/shrutii1701s-projects/smirra-server",
    emoji: "🤖",
  },
  {
    title: "VELOURA",
    subtitle: "AI Perfume Recommendation System",
    period: "Feb '25 – Apr '25",
    description:
      "Personalized fragrance suggestions powered by Gemini API. Tailors recommendations based on gender, occasion, mood, and price range with a fully responsive UI.",
    tech: ["HTML", "JavaScript", "Gemini API"],
    color: "#3b82f6",
    github: "https://github.com/Shrutii1701/Social-Network",
    live: "https://veloura-eight.vercel.app/",
    emoji: "🌸",
  },
  {
    title: "Social Network",
    subtitle: "Book Sharing Platform",
    period: "Aug '23 – Dec '23",
    description:
      "Community platform for book lovers to share, discover, and discuss books by genre and interest. User-friendly interface with smooth browsing and categorization.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#10b981",
    github: "https://github.com/Shrutii1701/Social-Network",
    live: null,
    emoji: "📚",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4" style={{ backgroundColor: "var(--bg)" }}>
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
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--fg)" }}>
            Featured Projects
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)" }}>
            Things I&apos;ve built that I&apos;m proud of.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="card-glow rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = project.color + "66";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
              />

              <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Emoji + period */}
                <div className="flex items-start justify-between">
                  <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}
                  >
                    {project.emoji}
                  </span>
                  <span className="text-[10px] font-medium" style={{ color: "var(--fg-muted)" }}>
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-lg" style={{ color: "var(--fg)" }}>
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium mt-0.5" style={{ color: project.color }}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--fg-muted)" }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                      style={{
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}30`,
                        color: project.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                    style={{ color: "var(--fg-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                      style={{ color: "var(--fg-muted)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
