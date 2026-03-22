"use client";

import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    date: "Oct '25",
    color: "#a855f7",
    emoji: "🔒",
    href: "https://drive.google.com/file/d/1efxyp59WdHdjpfMH9-z6uEBqoO_Ns6UO/view?usp=drive_link",
  },
  {
    title: "Master Generative AI & GenAI Tools",
    issuer: "Infosys Springboard",
    date: "Aug '25",
    color: "#3b82f6",
    emoji: "🤖",
    href: "https://drive.google.com/file/d/1WhneC1TPxn3r1ju70aESxAWgHgpKQ7-H/view?usp=drive_link",
  },
  {
    title: "Build GenAI Apps with No-Code Tools",
    issuer: "Infosys Springboard",
    date: "Aug '25",
    color: "#3b82f6",
    emoji: "⚡",
    href: "https://drive.google.com/file/d/16tJ6ZBADF3_by54JZ6Hsx6xdPCuHvPG-/view?usp=drive_link",
  },
  {
    title: "Canva for Social Media",
    issuer: "Udemy",
    date: "Oct '24",
    color: "#f59e0b",
    emoji: "🎨",
    href: "https://drive.google.com/file/d/1l0PVNe_epnMgEcN93PCjNciuUgG-22or/view?usp=drive_link",
  },
  {
    title: "Legacy Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov '23",
    color: "#10b981",
    emoji: "🌐",
    href: "https://drive.google.com/file/d/1AMMLQsfPeCOWj0m6UBGhSmLFgpNZ5vQA/view?usp=drive_link",
  },
];

const TRAINING = {
  title: "Linux Fundamentals",
  organization: "Centre for Professional Enhancement",
  period: "Jun – Jul '25",
  topics: [
    "Linux Commands & Shell Scripting",
    "File Management & Permissions",
    "LVM Storage Management",
    "Networking Essentials",
    "Container Technology (Podman)",
  ],
  color: "#a855f7",
  href: "https://drive.google.com/file/d/155aLEFTu6v-vhkpOQWzl0xjQOv1_atGg/view?usp=drive_link",
};

export default function TrainingCerts() {
  return (
    <section id="certs" className="py-24 px-4" style={{ backgroundColor: "var(--bg)" }}>
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
            Learning
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--fg)" }}>
            Training &amp; Certifications
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)" }}>
            Continuous learning, continuously growing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Training */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} color="var(--accent)" />
              <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                Training
              </h3>
            </div>

            <a
              href={TRAINING.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 h-full card-glow block transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor = TRAINING.color + "55")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)")
              }
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: `${TRAINING.color}18`,
                    border: `1px solid ${TRAINING.color}30`,
                  }}
                >
                  🐧
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: "var(--fg)" }}>
                    {TRAINING.title}
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                    {TRAINING.organization} · {TRAINING.period}
                  </p>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--fg-muted)" }}>
                Topics Covered
              </p>
              <ul className="flex flex-col gap-2">
                {TRAINING.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: TRAINING.color }}
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </a>
          </motion.div>

          {/* Right: Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award size={16} color="var(--accent-blue)" />
              <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--accent-blue)" }}>
                Certifications
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.a
                  key={cert.title}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 rounded-xl p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.borderColor = cert.color + "55")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)")
                  }
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}28`,
                    }}
                  >
                    {cert.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: "var(--fg)" }}>
                      {cert.title}
                    </p>
                    <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: `${cert.color}15`, color: cert.color }}
                  >
                    {cert.date}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
