"use client";

import { useState, useEffect } from "react";
import WelcomePage from "./components/WelcomePage";
import WelcomeModal from "./components/WelcomeModal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import TrainingCerts from "./components/TrainingCerts";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import FloatingBackground from "./components/FloatingBackground";

type Phase = "welcome" | "modal" | "portfolio";
type Theme = "dark" | "light";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("welcome");
  const [visitorName, setVisitorName] = useState("");
  const [theme, setTheme] = useState<Theme>("dark");

  // Apply theme class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
    }
    localStorage.setItem("sm-portfolio-theme", theme);
  }, [theme]);

  // Read saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("sm-portfolio-theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    }
  }, []);

  const handleEnter = (name: string) => {
    setVisitorName(name);
    setPhase("modal");
  };

  const handleModalClose = () => {
    setPhase("portfolio");
  };

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  // ── Welcome page ──
  if (phase === "welcome") {
    return (
      <>
        <CustomCursor />
        <WelcomePage onEnter={handleEnter} theme={theme} />
      </>
    );
  }

  // ── Modal (blurred portfolio behind) ──
  if (phase === "modal") {
    return (
      <div className="relative" style={{ backgroundColor: "var(--bg)" }}>
        <CustomCursor />
        <WelcomeModal visitorName={visitorName} onClose={handleModalClose} />
        <div className="filter blur-sm pointer-events-none select-none overflow-hidden max-h-screen">
          <Navbar theme={theme} onThemeToggle={toggleTheme} />
          <Hero />
        </div>
      </div>
    );
  }

  // ── Main portfolio ──
  return (
    <div style={{ backgroundColor: "var(--bg)", position: "relative" }}>
      <CustomCursor />
      <FloatingBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar theme={theme} onThemeToggle={toggleTheme} />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <TrainingCerts />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}
