import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <h1 className="hero-title animate-in">Hi, I'm Shruti</h1>
            <p className="hero-subtitle animate-in">Cyber Security Enthusiast</p>
            <p className="hero-description animate-in">
                Passionate about securing digital infrastructure and building resilient systems.
                I specialize in vulnerability assessment, penetration testing, and developing
                security-focused applications that protect users and data.
            </p>
            <div className="hero-buttons animate-in">
                <a href="#contact" className="btn btn-primary">
                    Let's Connect
                </a>
                <a href="#projects" className="btn btn-secondary">
                    View My Work
                    <ArrowDown size={18} />
                </a>
            </div>
            <div className="social-links" style={{ marginTop: '50px' }}>
                <a
                    href="https://github.com/Shrutii1701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/shrutiimishraa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <Linkedin size={20} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
