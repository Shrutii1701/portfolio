import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Award, Briefcase, FileText } from 'lucide-react';



const Hero = () => {
    return (
        <section id="hero" className="hero">
            <h1 className="hero-title animate-in">
                Hi, I'm <span className="gradient-text">Shruti Mishra</span>
            </h1>
            <p className="hero-subtitle animate-in">
                <span className="typing-text">Cyber Security Engineer & Developer</span>
            </p>
            <p className="hero-description animate-in">
                Passionate about securing digital infrastructure and identifying vulnerabilities before they become threats.
                I specialize in <span className="highlight">Penetration Testing, Network Security, and Vulnerability Assessment</span>,
                combined with strong development skills in <span className="highlight">Python and Linux</span> to build
                security-focused applications and automated security tools.
            </p>

            {/* Stats Section */}


            <div className="hero-buttons animate-in">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    <FileText size={18} />
                    View Resume
                </a>
                <a href="#projects" className="btn btn-secondary">
                    View My Work
                    <ArrowDown size={18} />
                </a>
            </div>
            <div className="social-links" style={{ marginTop: '40px' }}>
                <a
                    href="https://github.com/Shrutii1701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                >
                    <Github size={22} />
                </a>
                <a
                    href="https://www.linkedin.com/in/shrutiimishraa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={22} />
                </a>
                <a
                    href="mailto:mishraa.shrutii17@gmail.com"
                    className="social-link"
                    aria-label="Email"
                >
                    <Mail size={22} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
