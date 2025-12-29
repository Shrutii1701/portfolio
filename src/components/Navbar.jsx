import { Home, Code2, FolderGit2, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#hero" className="nav-link">
                <Home />
                <span>Home</span>
            </a>
            <a href="#skills" className="nav-link">
                <Code2 />
                <span>Skills</span>
            </a>
            <a href="#projects" className="nav-link">
                <FolderGit2 />
                <span>Projects</span>
            </a>
            <a href="#contact" className="nav-link">
                <Mail />
                <span>Contact</span>
            </a>
        </nav>
    );
};

export default Navbar;
