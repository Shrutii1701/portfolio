import {
    Shield,
    Bug,
    Lock,
    Network,
    Terminal,
    Code2,
    Database,
    Globe,
    Server,
    FileCode
} from 'lucide-react';

const skills = [
    { name: 'Penetration Testing', icon: Bug },
    { name: 'Network Security', icon: Network },
    { name: 'Vulnerability Assessment', icon: Shield },
    { name: 'Cryptography', icon: Lock },
    { name: 'Python', icon: Terminal },
    { name: 'JavaScript', icon: Code2 },
    { name: 'SQL/NoSQL', icon: Database },
    { name: 'Linux', icon: Server },
    { name: 'Web Security', icon: Globe },
    { name: 'Scripting', icon: FileCode },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
                Tools and technologies I use to secure and build applications
            </p>
            <div className="skills-grid">
                {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <div key={index} className="skill-item">
                            <IconComponent />
                            <span>{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
