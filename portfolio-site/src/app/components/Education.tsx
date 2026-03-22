"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.Tech – Computer Science Engineering",
    institution: "Lovely Professional University, Punjab",
    period: "2023–2027",
    color: "#a855f7",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "",
    period: "2022",
    color: "#3b82f6",
  },
  {
    degree: "Matriculation (Class X)",
    institution: "",
    period: "2020",
    color: "#10b981",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4" style={{ backgroundColor: "var(--bg-card)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--fg)" }}>
            Education
          </h2>
        </motion.div>

        <div className="relative pl-6">
          {/* Timeline line */}
          <div className="timeline-line rounded-full" />

          <div className="flex flex-col gap-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-[29px] w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{
                    background: "var(--bg)",
                    borderColor: edu.color,
                    boxShadow: `0 0 8px ${edu.color}60`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: edu.color }}
                  />
                </div>

                <div
                  className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = edu.color + "66")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")
                  }
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}30` }}
                      >
                        <GraduationCap size={16} color={edu.color} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm" style={{ color: "var(--fg)" }}>
                          {edu.degree}
                        </h3>
                        {edu.institution && (
                          <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                            {edu.institution}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${edu.color}18`, color: edu.color }}
                      >
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
