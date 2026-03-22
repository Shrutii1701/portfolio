"use client";

const SHAPES = [
  // ── Large ambient orbs ──
  { type: "orb", size: 350, x: -3,  y: 3,  color: "rgba(180,110,255,0.08)", dur: 32, delay: 0 },
  { type: "orb", size: 280, x: 82,  y: 5,  color: "rgba(96,165,250,0.07)",  dur: 27, delay: 4 },
  { type: "orb", size: 320, x: 35,  y: 55, color: "rgba(180,110,255,0.05)", dur: 36, delay: 9 },
  { type: "orb", size: 200, x: 70,  y: 72, color: "rgba(34,197,94,0.07)",   dur: 24, delay: 2 },
  { type: "orb", size: 180, x: 12,  y: 78, color: "rgba(245,158,11,0.06)",  dur: 30, delay: 7 },
  { type: "orb", size: 130, x: 55,  y: 90, color: "rgba(236,72,153,0.08)",  dur: 22, delay: 11 },
  { type: "orb", size: 110, x: 90,  y: 40, color: "rgba(20,184,166,0.07)",  dur: 19, delay: 5 },
  { type: "orb", size: 90,  x: 48,  y: 18, color: "rgba(251,146,60,0.07)",  dur: 17, delay: 13 },

  // ── Hollow rings ──
  { type: "ring", size: 140, x: 7,   y: 32, color: "rgba(180,110,255,0.18)", dur: 26, delay: 1 },
  { type: "ring", size: 90,  x: 86,  y: 50, color: "rgba(96,165,250,0.14)",  dur: 21, delay: 6 },
  { type: "ring", size: 180, x: 28,  y: 76, color: "rgba(34,197,94,0.10)",   dur: 34, delay: 10 },
  { type: "ring", size: 65,  x: 62,  y: 20, color: "rgba(236,72,153,0.14)",  dur: 18, delay: 3 },
  { type: "ring", size: 100, x: 94,  y: 84, color: "rgba(245,158,11,0.12)",  dur: 25, delay: 8 },
  { type: "ring", size: 55,  x: 22,  y: 14, color: "rgba(180,110,255,0.14)", dur: 23, delay: 12 },
  { type: "ring", size: 75,  x: 73,  y: 30, color: "rgba(20,184,166,0.12)",  dur: 20, delay: 0 },
  { type: "ring", size: 120, x: 42,  y: 92, color: "rgba(251,146,60,0.10)",  dur: 29, delay: 15 },

  // ── Rotating diamonds ──
  { type: "diamond", size: 32, x: 16,  y: 25, color: "rgba(180,110,255,0.25)", dur: 20, delay: 0 },
  { type: "diamond", size: 20, x: 74,  y: 15, color: "rgba(96,165,250,0.20)",  dur: 23, delay: 4 },
  { type: "diamond", size: 38, x: 90,  y: 58, color: "rgba(34,197,94,0.18)",   dur: 27, delay: 7 },
  { type: "diamond", size: 24, x: 38,  y: 85, color: "rgba(245,158,11,0.22)",  dur: 22, delay: 10 },
  { type: "diamond", size: 18, x: 5,   y: 62, color: "rgba(236,72,153,0.20)",  dur: 16, delay: 2 },
  { type: "diamond", size: 28, x: 57,  y: 6,  color: "rgba(180,110,255,0.18)", dur: 25, delay: 6 },
  { type: "diamond", size: 16, x: 82,  y: 90, color: "rgba(20,184,166,0.22)",  dur: 18, delay: 9 },
  { type: "diamond", size: 22, x: 30,  y: 45, color: "rgba(251,146,60,0.20)",  dur: 21, delay: 11 },
  { type: "diamond", size: 14, x: 65,  y: 68, color: "rgba(96,165,250,0.18)",  dur: 15, delay: 3 },

  // ── Small glowing dots ──
  { type: "dot", size: 7, x: 24, y: 48, color: "rgba(180,110,255,0.55)", dur: 15, delay: 0 },
  { type: "dot", size: 5, x: 68, y: 38, color: "rgba(96,165,250,0.50)",  dur: 13, delay: 2 },
  { type: "dot", size: 6, x: 52, y: 73, color: "rgba(34,197,94,0.55)",   dur: 17, delay: 5 },
  { type: "dot", size: 4, x: 80, y: 28, color: "rgba(245,158,11,0.50)",  dur: 14, delay: 7 },
  { type: "dot", size: 7, x: 10, y: 88, color: "rgba(236,72,153,0.55)",  dur: 19, delay: 1 },
  { type: "dot", size: 3, x: 97, y: 68, color: "rgba(180,110,255,0.45)", dur: 12, delay: 4 },
  { type: "dot", size: 5, x: 44, y: 10, color: "rgba(20,184,166,0.50)",  dur: 16, delay: 6 },
  { type: "dot", size: 4, x: 88, y: 15, color: "rgba(251,146,60,0.50)",  dur: 11, delay: 8 },

  // ── Plus / cross shapes ──
  { type: "cross", size: 20, x: 56,  y: 42, color: "rgba(180,110,255,0.25)", dur: 22, delay: 3 },
  { type: "cross", size: 14, x: 18,  y: 55, color: "rgba(96,165,250,0.22)",  dur: 18, delay: 7 },
  { type: "cross", size: 18, x: 78,  y: 70, color: "rgba(34,197,94,0.20)",   dur: 26, delay: 0 },
  { type: "cross", size: 12, x: 35,  y: 30, color: "rgba(245,158,11,0.23)",  dur: 20, delay: 5 },
];

export default function FloatingBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {SHAPES.map((shape, i) => {
        const even = i % 2 === 0;
        const base: React.CSSProperties = {
          position: "absolute",
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          animationName: shape.type === "diamond" || shape.type === "cross" ? "floatRotate" : "floatY",
          animationDuration: `${shape.dur}s`,
          animationDelay: `${shape.delay}s`,
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: even ? "alternate" : "alternate-reverse",
        };

        if (shape.type === "orb") {
          return (
            <div key={i} style={{
              ...base,
              width: shape.size,
              height: shape.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${shape.color}, transparent 68%)`,
              filter: "blur(3px)",
            }} />
          );
        }

        if (shape.type === "ring") {
          return (
            <div key={i} style={{
              ...base,
              width: shape.size,
              height: shape.size,
              borderRadius: "50%",
              border: `1.5px solid ${shape.color}`,
              background: "transparent",
            }} />
          );
        }

        if (shape.type === "diamond") {
          return (
            <div key={i} style={{
              ...base,
              width: shape.size,
              height: shape.size,
              background: shape.color,
              clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
            }} />
          );
        }

        if (shape.type === "cross") {
          return (
            <div key={i} style={{ ...base, width: shape.size, height: shape.size, position: "absolute" }}>
              <div style={{
                position: "absolute",
                top: "40%", left: 0, right: 0, height: "20%",
                background: shape.color,
                borderRadius: 2,
              }} />
              <div style={{
                position: "absolute",
                left: "40%", top: 0, bottom: 0, width: "20%",
                background: shape.color,
                borderRadius: 2,
              }} />
            </div>
          );
        }

        // dot
        return (
          <div key={i} style={{
            ...base,
            width: shape.size,
            height: shape.size,
            borderRadius: "50%",
            background: shape.color,
            boxShadow: `0 0 ${shape.size * 3}px ${shape.color}`,
          }} />
        );
      })}
    </div>
  );
}
