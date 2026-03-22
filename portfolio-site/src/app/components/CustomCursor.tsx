"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_LEN = 16;

interface Pt { x: number; y: number }

export default function CustomCursor() {
  const svgRef  = useRef<SVGSVGElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const pts   = useRef<Pt[]>(Array(TRAIL_LEN).fill({ x: -200, y: -200 }));
  const mouse = useRef<Pt>({ x: -200, y: -200 });
  const raf   = useRef(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setVis(true);
    };
    const hide = () => setVis(false);
    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", () => setVis(true));

    const loop = () => {
      // push new point
      pts.current = [{ ...mouse.current }, ...pts.current.slice(0, TRAIL_LEN - 1)];

      // move sharp dot
      if (dotRef.current) {
        const { x, y } = mouse.current;
        dotRef.current.style.transform = `translate(${x}px,${y}px)`;
        dotRef.current.style.opacity = vis ? "1" : "0";
      }

      // draw SVG ribbon path
      if (svgRef.current && pts.current.length > 1) {
        const ns = "http://www.w3.org/2000/svg";
        // clear old paths
        while (svgRef.current.firstChild) svgRef.current.removeChild(svgRef.current.firstChild);

        // build smooth catmull-rom-like path via bezier
        const p = pts.current;
        if (p.length < 2) { raf.current = requestAnimationFrame(loop); return; }

        // Draw segments as trapezoid ribbon with gradient + glow
        for (let i = 0; i < p.length - 1; i++) {
          const progress = i / (p.length - 1); // 0=head, 1=tail
          const alpha = Math.max(0, 1 - progress * 1.1);
          const width = Math.max(1, 10 * (1 - progress));

          // perpendicular to segment direction
          const dx = p[i + 1].x - p[i].x;
          const dy = p[i + 1].y - p[i].y;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const nx = (-dy / len) * width / 2;
          const ny = (dx / len) * width / 2;

          const poly = document.createElementNS(ns, "polygon");
          poly.setAttribute("points", `
            ${p[i].x + nx},${p[i].y + ny}
            ${p[i].x - nx},${p[i].y - ny}
            ${p[i + 1].x - nx * 0.5},${p[i + 1].y - ny * 0.5}
            ${p[i + 1].x + nx * 0.5},${p[i + 1].y + ny * 0.5}
          `);

          // colour cycling: head = cyan/white, mid = purple, tail = pink/transparent
          const hue = Math.round(180 + progress * 160); // 180(cyan)→340(pink)
          poly.setAttribute("fill", `hsla(${hue},90%,70%,${alpha * 0.85})`);
          svgRef.current.appendChild(poly);
        }

        // Outer glow circle at cursor
        const glow = document.createElementNS(ns, "circle");
        glow.setAttribute("cx", String(p[0].x));
        glow.setAttribute("cy", String(p[0].y));
        glow.setAttribute("r", "16");
        glow.setAttribute("fill", "rgba(180,110,255,0.08)");
        glow.setAttribute("stroke", "rgba(180,110,255,0.3)");
        glow.setAttribute("stroke-width", "1");
        svgRef.current.appendChild(glow);
      }

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, [vis]);

  return (
    <>
      {/* Full-viewport SVG for the ribbon trail */}
      <svg
        ref={svgRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ width: "100vw", height: "100vh", overflow: "visible", opacity: vis ? 1 : 0 }}
      />

      {/* Diamond cursor tip */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: 12,
          height: 12,
          marginLeft: -6,
          marginTop: -6,
          background: "#fff",
          clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
          boxShadow: "0 0 14px 4px rgba(180,110,255,0.9)",
          opacity: vis ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
