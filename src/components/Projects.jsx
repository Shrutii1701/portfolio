import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/Shrutii1701',
        live: '#',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.',
        technologies: ['React', 'Firebase', 'Tailwind'],
        github: 'https://github.com/Shrutii1701',
        live: '#',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
        technologies: ['React', 'CSS', 'Vite'],
        github: 'https://github.com/Shrutii1701',
        live: '#',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
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
                                    <Github size={18} />
                                    Code
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
