"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Shrutii1701",
    icon: Github,
    color: "#a855f7",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shrutiimishraa/",
    icon: Linkedin,
    color: "#3b82f6",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Background blobs */}
      <div
        className="blob absolute w-96 h-96 rounded-full opacity-10 -bottom-20 -right-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 65%)" }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-5" style={{ color: "var(--fg)" }}>
            Let&apos;s build something
            <br />
            <span className="gradient-text">amazing together.</span>
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--fg-muted)" }}>
            Whether you have an opportunity, a project idea, or just want to say hi —
            my inbox is always open. I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Email button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <motion.a
            href="mailto:mishraa.shrutii17@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px var(--accent-glow)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white text-base transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-blue))",
            }}
          >
            <Mail size={18} />
            Say Hello →
          </motion.a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center gap-2 mt-6"
        >
          <a
            href="mailto:mishraa.shrutii17@gmail.com"
            className="text-sm transition-colors duration-150"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
          >
            mishraa.shrutii17@gmail.com
          </a>
          <span className="text-xs" style={{ color: "var(--fg-muted)" }}>+91-9918859703</span>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-4 mt-8"
        >
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.93 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--fg-muted)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = social.color;
                  el.style.color = social.color;
                  el.style.background = `${social.color}10`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--fg-muted)";
                  el.style.background = "var(--bg-card)";
                }}
              >
                <Icon size={16} />
                {social.label}
                <ArrowUpRight size={12} className="opacity-50" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div
            className="w-full h-px mb-6"
            style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
          />
          <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
            Designed &amp; Built by{" "}
            <span className="gradient-text font-semibold">Shruti Mishra</span>
            {" · "}
            {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
