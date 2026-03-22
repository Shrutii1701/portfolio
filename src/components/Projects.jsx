import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'AI Perfume Recommendation System',
<<<<<<< HEAD
        period: 'Feb 2025 – Apr 2025',
        description: 'A fully functional web-based Perfume Recommendation System that provides personalized fragrance suggestions based on user inputs such as gender, occasion, mood, liking, and price range.',
        highlights: [
            'Designed an interactive and responsive UI ensuring smooth experience across all devices',
            'Integrated Gemini API to enhance recommendation accuracy by analyzing user preferences',
            'Built personalized fragrance suggestions using AI-powered matching algorithms',
        ],
        technologies: ['HTML', 'JavaScript', 'Gemini API', 'Data Processing'],
        github: 'https://github.com/Shrutii1701/Perfume-Recommendation-System',
        live: '#',
        color: 'purple'
=======
        description: 'An intelligent recommendation system that suggests perfumes based on user preferences using machine learning algorithms and collaborative filtering.',
        technologies: ['Python', 'ML', 'Flask', 'React'],
        github: 'https://github.com/Shrutii1701/Perfume-Recommendation-System',
        live: 'https://veloura-eight.vercel.app/',
        icon: Fingerprint
>>>>>>> 280c040 (live link)
    },
    {
        title: 'Social Network – Book Sharing Platform',
        period: 'Aug 2023 – Dec 2023',
        description: 'A dedicated platform where book lovers can connect, share their reads, and engage in a vibrant reading community.',
        highlights: [
            'Developed features for easy book search and discovery based on preferred genres',
            'Created a space for readers with similar tastes to discuss and discover new titles',
            'Built user-friendly interface for effortless navigation for book enthusiasts',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Shrutii1701/Social-Network',
        live: '#',
        color: 'purple'
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
                Real-world applications built with passion and purpose
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card ${project.color}`}>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <ul className="project-highlights">
                                {project.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                            <div className="project-tech">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className={`tech-tag ${project.color}`}>{tech}</span>
                                ))}
                            </div>
<<<<<<< HEAD
                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <Github size={16} />
                                    View Code
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link live"
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
=======
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
                                        Live Demo
                                    </a>
                                </div>
>>>>>>> 280c040 (live link)
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
