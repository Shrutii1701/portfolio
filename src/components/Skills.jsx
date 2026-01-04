import {
    Code2,
    FileCode,
    Palette,
    Github,
    Box,
    Server,
    Container,
    Shield,
    Bug,
    Lock,
    Network,
    Braces,
    Coffee,
    Scan
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Languages',
        color: 'purple',
        skills: [
            { name: 'Python', icon: Code2 },
            { name: 'C', icon: Braces },
            { name: 'C++', icon: Braces },
            { name: 'Java', icon: Coffee },
            { name: 'JavaScript', icon: FileCode },
        ]
    },
    {
        title: 'Web Technologies',
        color: 'purple',
        skills: [
            { name: 'HTML', icon: Code2 },
            { name: 'CSS', icon: Palette },
            { name: 'Tailwind CSS', icon: Palette },
        ]
    },
    {
        title: 'Tools & Platforms',
        color: 'purple',
        skills: [
            { name: 'GitHub', icon: Github },
            { name: 'VirtualBox', icon: Box },
            { name: 'Virtual Machines', icon: Server },
            { name: 'Podman', icon: Container },
            { name: 'Docker', icon: Container },
        ]
    },
    {
        title: 'Cyber Security',
        color: 'purple',
        skills: [
            { name: 'Penetration Testing', icon: Bug },
            { name: 'Network Security', icon: Network },
            { name: 'Vulnerability Assessment', icon: Scan },
            { name: 'Cryptography', icon: Lock },
            { name: 'Security Auditing', icon: Shield },
        ]
    },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
                A comprehensive toolkit for building modern, secure applications
            </p>
            <div className="skills-categories">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skill-category">
                        <div className={`category-header ${category.color}`}>
                            <span className="category-dot"></span>
                            <h3>{category.title}</h3>
                        </div>
                        <div className="category-skills">
                            {category.skills.map((skill, skillIndex) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div key={skillIndex} className={`skill-item ${category.color}`}>
                                        <IconComponent />
                                        <span>{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
