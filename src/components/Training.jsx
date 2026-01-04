import { GraduationCap, Calendar, ExternalLink, Server, Container, Network, Users } from 'lucide-react';

const training = [
    {
        title: 'Linux Fundamentals',
        organization: 'Centre for Professional Enhancement',
        period: 'Jun 2025 – Jul 2025',
        highlights: [
            'Learned core Linux concepts including basic commands, file creation, and file management',
            'Progressed to advanced topics like user/group management, storage configuration (LVM), firewall & networking',
            'Gained hands-on experience with Podman and applied both theoretical and practical skills',
        ],
        techStacks: ['User & Group Management', 'LVM Storage', 'Networking', 'Podman'],
        link: '#',
        color: 'purple'
    }
];

const Training = () => {
    return (
        <section id="training">
            <h2 className="section-title">Training & Experience</h2>
            <p className="section-subtitle">
                Professional development and hands-on learning experiences
            </p>
            <div className="training-container">
                {training.map((item, index) => (
                    <div key={index} className={`training-card ${item.color}`}>
                        <div className={`training-icon ${item.color}`}>
                            <GraduationCap size={32} />
                        </div>
                        <div className="training-content">
                            <div className="training-header">
                                <h3 className="training-title">{item.title}</h3>
                                <span className="training-period">
                                    <Calendar size={14} />
                                    {item.period}
                                </span>
                            </div>
                            <p className="training-org">{item.organization}</p>
                            <ul className="training-highlights">
                                {item.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                            <div className="training-tech">
                                {item.techStacks.map((tech, i) => (
                                    <span key={i} className={`tech-tag ${item.color}`}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Training;
