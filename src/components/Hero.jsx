import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <h1 className="hero-title animate-in">Shruti</h1>
            <p className="hero-subtitle animate-in">Full Stack Developer</p>
            <p className="hero-description animate-in">
                Passionate developer with expertise in building modern web applications.
                I love creating clean, efficient, and user-friendly solutions that make a difference.
            </p>
            <div className="hero-buttons animate-in">
                <a href="#contact" className="btn btn-primary">
                    Get In Touch
                </a>
                <a href="#projects" className="btn btn-secondary">
                    View Projects
                    <ArrowDown size={18} />
                </a>
            </div>
            <div className="social-links" style={{ marginTop: '60px' }}>
                <a
                    href="https://github.com/Shrutii1701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <Github size={22} />
                </a>
                <a
                    href="https://linkedin.com/in/shruti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <Linkedin size={22} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
