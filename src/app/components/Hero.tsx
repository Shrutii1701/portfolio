"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

// ── 3D-flip tile helper ──────────────────────────────────────────────────────
const FLIP = {
  whileHover: {
    rotateX: -8,
    rotateY: 10,
    scale: 1.04,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
  },
  whileTap: { scale: 0.97 },
  style: { transformPerspective: 900, transformStyle: "preserve-3d" as const },
};

const t = (delay: number) => ({
  initial: { opacity: 0, y: 18, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { delay, duration: 0.55, ease: "easeOut" as const },
});

const CONTACT_LINKS = [
  { icon: Github,   href: "https://github.com/Shrutii1701",             bg: "#0e7490" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shrutiimishraa/", bg: "#1d4ed8" },
  { icon: Mail,     href: "mailto:mishraa.shrutii17@gmail.com",           bg: "#0891b2" },
  { icon: Phone,    href: "tel:+919918859703",                            bg: "#f43f5e" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 sm:px-4"
      style={{ paddingTop: "24px", paddingBottom: "32px" }}
    >
      {/* Ambient blobs */}
      <div className="blob absolute w-[500px] h-[500px] rounded-full opacity-10 -top-32 -left-32 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 65%)" }} />
      <div className="blob absolute w-[380px] h-[380px] rounded-full opacity-10 -bottom-20 right-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-blue), transparent 65%)", animationDelay: "3.5s" }} />

      {/* ── BENTO GRID ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-4 gap-3 items-stretch">

        {/* ── Col 1, Row 1: Projects ── */}
        <motion.div {...t(0.05)} {...FLIP}
          onClick={() => scrollTo("#projects")}
          className="col-span-1 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 card-glow cursor-pointer select-none"
          style={{ ...FLIP.style, background: "var(--bg-card)", border: "1px solid var(--border)", minHeight: 160 }}>
          <div className="relative w-20 h-20">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(6,182,212,0.12)" strokeWidth="8"/>
              <circle cx="40" cy="40" r="34" fill="none" stroke="#22C55E" strokeWidth="8"
                strokeDasharray={`${2*Math.PI*34*0.82} ${2*Math.PI*34*0.18}`} strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color:"#22C55E" }}>82%</div>
          </div>
          <div className="text-2xl font-extrabold" style={{ color:"var(--fg)" }}>3+</div>
          <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color:"#22C55E" }}>Projects Built</div>
        </motion.div>

        {/* ── Col 2, Row 1: Certifications ── */}
        <motion.div {...t(0.08)} {...FLIP}
          onClick={() => scrollTo("#certs")}
          className="col-span-1 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 card-glow cursor-pointer select-none"
          style={{ ...FLIP.style, background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div className="text-4xl">🏅</div>
          <div className="text-2xl font-extrabold" style={{ color:"var(--fg)" }}>5+</div>
          <div className="text-[11px]" style={{ color:"var(--fg-muted)" }}>Certifications</div>
          <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color:"#f59e0b" }}>Achievements</div>
        </motion.div>

        {/* ── Col 3, Row 1: Problems Solved ── */}
        <motion.div {...t(0.1)} {...FLIP}
          onClick={() => scrollTo("#achievements")}
          className="col-span-1 rounded-2xl p-5 flex flex-col items-center justify-center gap-1 card-glow cursor-pointer select-none"
          style={{ ...FLIP.style, background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div className="text-3xl">❤️</div>
          <div className="text-2xl font-extrabold" style={{ color:"var(--fg)" }}>100+</div>
          <div className="text-[11px] text-center" style={{ color:"var(--fg-muted)" }}>Problems Solved</div>
        </motion.div>

        {/* ── Col 4, Row 1: Full Name → #about (removed) scrolls to skills now ── */}
        <motion.div {...t(0.06)} {...FLIP}
          onClick={() => scrollTo("#skills")}
          className="col-span-1 rounded-2xl p-5 card-glow cursor-pointer"
          style={{ ...FLIP.style, background: "linear-gradient(135deg,#0891b2 0%,#0e7490 100%)" }}>
          <div className="text-xs font-semibold opacity-70 mb-1 text-white">Full Name</div>
          <div className="text-xl sm:text-2xl font-extrabold text-white leading-tight">Shruti<br/>Mishra</div>
        </motion.div>

        {/* ── Col 1, Row 2: Headline ── */}
        <motion.div {...t(0.1)} {...FLIP}
          onClick={() => scrollTo("#skills")}
          className="col-span-1 rounded-2xl p-5 card-glow cursor-pointer"
          style={{ ...FLIP.style, background: "linear-gradient(135deg,#06b6d4 0%,#f43f5e 100%)" }}>
          <div className="text-xs font-semibold opacity-70 mb-2 text-white">Headline</div>
          <div className="text-base font-extrabold text-white leading-tight">CS Student<br/>&amp; AI Builder</div>
        </motion.div>

        {/* ── Col 2-3, Row 2-3: Photo (center, 2×2) ── */}
        <motion.div {...t(0.14)}
          className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative"
          style={{ minHeight: 340 }}>
          <Image
            src="/shruti.png"
            alt="Shruti Mishra"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center"
            priority
            style={{ background: "transparent" }}
          />
          {/* Badge sits INSIDE the tile, higher up so it overlaps with neighbour tiles visually */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, ease: "easeOut" }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold text-white whitespace-nowrap"
            style={{ background: "rgba(6,182,212,0.88)", backdropFilter: "blur(8px)", border: "1px solid rgba(6,182,212,0.4)" }}>
            🟢 Open to Opportunities
          </motion.div>
        </motion.div>

        {/* ── Col 4, Row 2: Tagline ── */}
        <motion.div {...t(0.07)} {...FLIP}
          className="col-span-1 rounded-2xl p-5 flex flex-col justify-between card-glow"
          style={{ ...FLIP.style, background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color:"var(--fg-muted)" }}>Tagline</div>
          <div className="text-sm font-bold leading-tight" style={{ color:"var(--accent)" }}>"Building with AI,<br/>shipping with purpose."</div>
        </motion.div>

        {/* ── Col 4, Row 3: Contact 2×2 grid ── */}
        <motion.div {...t(0.09)} {...FLIP}
          className="col-span-1 rounded-2xl p-4 card-glow"
          style={{ ...FLIP.style, background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color:"var(--fg-muted)" }}>Contact</div>
          <div className="grid grid-cols-2 gap-2">
            {CONTACT_LINKS.map((c) => {
              const Icon = c.icon;
              return (
                <motion.a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
                  className="rounded-xl flex items-center justify-center h-10"
                  style={{ background: c.bg }}>
                  <Icon size={16} color="white"/>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* ── Col 1, Row 3: Education ── */}
        <motion.div {...t(0.16)} {...FLIP}
          onClick={() => scrollTo("#education")}
          className="col-span-1 rounded-2xl p-5 card-glow cursor-pointer"
          style={{ ...FLIP.style, background: "linear-gradient(135deg,#f59e0b 0%,#f97316 100%)" }}>
          <div className="text-xs font-semibold opacity-70 mb-1 text-white">Education</div>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-extrabold text-white">B</span>
            <span className="text-xl font-bold text-white mb-1 opacity-80">.Tech</span>
          </div>
          <div className="text-xs text-white opacity-70 mt-1">CSE · LPU</div>
        </motion.div>

        {/* ── Bottom row: Skills + CTA (col 2-4) ── */}
        <motion.div {...t(0.18)} {...FLIP}
          onClick={() => scrollTo("#skills")}
          className="col-span-1 rounded-2xl p-5 card-glow cursor-pointer"
          style={{ ...FLIP.style, background: "linear-gradient(135deg,#22C55E 0%,#16a34a 100%)" }}>
          <div className="text-xs font-semibold opacity-70 mb-1 text-white">Skills</div>
          <div className="text-5xl font-extrabold text-white">14</div>
          <div className="text-xs text-white opacity-70 mt-1">Technologies</div>
        </motion.div>

        <motion.div {...t(0.2)}
          className="col-span-2 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 card-glow"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div>
            <div className="font-bold text-base" style={{ color:"var(--fg)" }}>Ready to Collaborate?</div>
            <div className="text-xs mt-0.5" style={{ color:"var(--fg-muted)" }}>Let&apos;s build something amazing together.</div>
          </div>
          <div className="flex gap-3 flex-shrink-0 flex-wrap justify-center">
            <motion.a
              href="/Shruti_Mishra_CV.docx"
              download="Shruti_Mishra_CV.docx"
              whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
              className="px-5 py-2.5 rounded-xl font-semibold text-white text-sm flex items-center gap-2"
              style={{ background:"linear-gradient(135deg,var(--accent),var(--accent-blue))" }}>
              ⬇ Download CV
            </motion.a>
            <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2.5 rounded-xl font-semibold text-sm"
              style={{ background:"var(--bg)", border:"1px solid var(--border)", color:"var(--fg)" }}
              onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.color="var(--accent)"; }}
              onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--fg)"; }}>
              Contact ✉
            </motion.button>
          </div>
        </motion.div>

        {/* ── Col 4 bottom: empty filler balancing the grid ── */}
        <motion.div {...t(0.22)} {...FLIP}
          className="col-span-1 rounded-2xl p-5 flex flex-col items-center justify-center gap-1 card-glow"
          style={{ ...FLIP.style, background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div className="text-3xl">🚀</div>
          <div className="text-xs font-semibold text-center" style={{ color:"var(--accent)" }}>B.Tech CSE</div>
          <div className="text-[10px] text-center" style={{ color:"var(--fg-muted)" }}>Aug '23 – Present</div>
        </motion.div>

      </div>
    </section>
  );
}
