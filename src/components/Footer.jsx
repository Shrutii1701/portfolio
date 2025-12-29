import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">S</span>
                    <span className="footer-name">Shruti</span>
                </div>
                <div className="footer-links">
                    <a
                        href="https://github.com/Shrutii1701"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shrutiimishraa/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:shruti@example.com">
                        <Mail size={18} />
                    </a>
                </div>
                <p className="footer-text">
                    Made with <Heart size={14} className="heart-icon" /> by Shruti © {currentYear}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
