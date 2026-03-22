"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Languages",
    emoji: "💻",
    color: "#a855f7",
    skills: ["Python", "C", "C++", "Java", "JavaScript"],
  },
  {
    category: "Frameworks & UI",
    emoji: "🎨",
    color: "#3b82f6",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    emoji: "🛠️",
    color: "#10b981",
    skills: ["GitHub", "Docker", "Podman", "VirtualBox", "Linux", "Gemini API"],
  },
  {
    category: "Soft Skills",
    emoji: "🌟",
    color: "#f59e0b",
    skills: ["Empathy", "Leadership", "Adaptability", "Problem Solving"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4" style={{ backgroundColor: "var(--bg-card)" }}>
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
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--fg)" }}>
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)" }}>
            Things I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: gi * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                  style={{
                    background: `${group.color}20`,
                    border: `1px solid ${group.color}40`,
                  }}
                >
                  {group.emoji}
                </span>
                <span className="font-semibold text-sm" style={{ color: "var(--fg)" }}>
                  {group.category}
                </span>
              </div>

              {/* Pills */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="skill-pill cursor-default"
                    style={
                      {
                        "--skill-accent": group.color,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = group.color;
                      e.currentTarget.style.background = `${group.color}18`;
                      e.currentTarget.style.color = group.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "var(--bg-card)";
                      e.currentTarget.style.color = "var(--fg)";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
