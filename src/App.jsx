import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

// Global floating background decoration
const BackgroundDecoration = () => (
  <div className="global-decoration">
    <div className="bg-shape bg-shape-1"></div>
    <div className="bg-shape bg-shape-2"></div>
    <div className="bg-shape bg-shape-3"></div>
    <div className="bg-shape bg-shape-4"></div>
    <div className="bg-shape bg-shape-5"></div>
    <div className="bg-shape bg-shape-6"></div>
  </div>
);

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
};

// Mouse Spotlight (subtle glow following cursor)
const MouseSpotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="mouse-spotlight"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

function App() {
  return (
    <>
      <ScrollProgress />
      <MouseSpotlight />
      <BackgroundDecoration />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;



