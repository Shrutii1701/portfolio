import { Github, ExternalLink, Network, Fingerprint } from 'lucide-react';

const projects = [
    {
        title: 'Perfume Recommendation System',
        description: 'An intelligent recommendation system that suggests perfumes based on user preferences using machine learning algorithms and collaborative filtering.',
        technologies: ['Python', 'ML', 'Flask', 'React'],
        github: 'https://github.com/Shrutii1701/Perfume-Recommendation-System',
        live: '#',
        icon: Fingerprint
    },
    {
        title: 'Social Network Platform',
        description: 'A secure social networking application with encrypted messaging, user authentication, and privacy-focused features.',
        technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
        github: 'https://github.com/Shrutii1701/Social-Network',
        live: '#',
        icon: Network
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
                A selection of my recent work in cybersecurity and development
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                        <div key={index} className="project-card">
                            <div className="project-icon">
                                <IconComponent />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <ExternalLink size={16} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
