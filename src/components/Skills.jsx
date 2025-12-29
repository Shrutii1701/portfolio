import {
    Code2,
    Database,
    Layout,
    Server,
    GitBranch,
    Terminal,
    Palette,
    Blocks
} from 'lucide-react';

const skills = [
    { name: 'JavaScript', icon: Code2 },
    { name: 'React', icon: Blocks },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Terminal },
    { name: 'MongoDB', icon: Database },
    { name: 'HTML/CSS', icon: Layout },
    { name: 'Git', icon: GitBranch },
    { name: 'UI/UX', icon: Palette },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="section-title">Skills</h2>
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
