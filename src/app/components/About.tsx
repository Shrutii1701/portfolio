"use client";

import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function About() {
  return (
    <section id="about" className="py-24 px-4" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Avatar + decorative */}
          <motion.div variants={fadeUp(0)} className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-30 blur-xl"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-blue))" }}
              />
              {/* Main circle */}
              <div
                className="relative w-52 h-52 rounded-full flex items-center justify-center float shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-blue) 100%)",
                }}
              >
                <span className="text-6xl font-extrabold text-white tracking-tighter">SM</span>
              </div>
              {/* Decorative badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-3 -right-3 glass px-3 py-1.5 rounded-xl text-xs font-semibold"
                style={{ color: "var(--accent)", border: "1px solid rgba(168,85,247,0.3)" }}
              >
                🎓 B.Tech CSE · LPU
              </motion.div>
            </div>
          </motion.div>

          {/* Right: text content */}
          <div className="flex flex-col gap-5">
            <motion.div variants={fadeUp(0)}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--fg)" }}>
                Building with curiosity,
                <br />
                <span className="gradient-text">shipping with purpose.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp(1)} className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              I&apos;m Shruti Mishra, a Computer Science Engineering student at Lovely Professional
              University, Punjab. I love blending{" "}
              <span style={{ color: "var(--fg)" }}>AI/ML concepts</span> with hands-on full-stack
              development to create tools that actually solve problems.
            </motion.p>

            <motion.p variants={fadeUp(2)} className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              From building an{" "}
              <span style={{ color: "var(--accent)" }}>AI interview simulator</span> to a{" "}
              <span style={{ color: "var(--accent-blue)" }}>personalized perfume recommender</span>,
              I love exploring the intersection of intelligent systems and delightful user experiences.
            </motion.p>

            {/* Quick stats */}
            <motion.div variants={fadeUp(3)} className="grid grid-cols-3 gap-4 mt-2">
              {[
                { num: "100+", label: "Problems Solved" },
                { num: "3+", label: "Projects Built" },
                { num: "5+", label: "Certifications" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="text-xl font-bold gradient-text">{stat.num}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
