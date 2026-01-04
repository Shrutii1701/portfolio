import { Trophy, Award, Star, Medal, Calendar, ExternalLink, Code2, Shield, Lock, Brain, Bot, Cpu, Palette, Layout } from 'lucide-react';

const achievements = [
    {
        title: '100+ Coding Problems Solved',
        description: 'Solved across HackerRank & Codechef, sharpening problem-solving skills',
        date: 'May 2025',
        icon: Code2,
        color: 'coral'
    },
    {
        title: 'Silver Badge on HackerRank',
        description: '4-star rating in C for consistent performance and dedication',
        date: 'Dec 2024',
        icon: Medal,
        color: 'cyan'
    },
    {
        title: '4-Star Python on HackerRank',
        description: 'Attained by solving various coding questions in Python language',
        date: 'Sept 2024',
        icon: Star,
        color: 'purple'
    }
];

const certificates = [
    {
        title: 'Privacy and Security in Online Social Media',
        issuer: 'NPTEL',
        date: 'Oct 2025',
        color: 'cyan',
        icon: Lock
    },
    {
        title: 'Master Generative AI & Generative AI Tools',
        issuer: 'Infosys',
        date: 'Aug 2025',
        color: 'purple',
        icon: Brain
    },
    {
        title: 'Build Generative AI Apps with No-Code Tools',
        issuer: 'Infosys',
        date: 'Aug 2025',
        color: 'pink',
        icon: Bot
    },
    {
        title: 'Computational Theory & Finite Automata',
        issuer: 'Infosys',
        date: 'Aug 2025',
        color: 'coral',
        icon: Cpu
    },
    {
        title: 'Canva for Social Media',
        issuer: 'Udemy',
        date: 'Oct 2024',
        color: 'cyan',
        icon: Palette
    },
    {
        title: 'Legacy Responsive Web Designing',
        issuer: 'FreeCodeCamp',
        date: 'Nov 2023',
        color: 'purple',
        icon: Layout
    }
];

const Achievements = () => {
    return (
        <section id="achievements">
            <h2 className="section-title">Achievements & Certifications</h2>
            <p className="section-subtitle">
                Recognition of continuous learning and problem-solving excellence
            </p>

            {/* Achievements */}
            <div className="achievements-grid">
                {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                        <div key={index} className={`achievement-card ${achievement.color}`}>
                            <div className={`achievement-icon ${achievement.color}`}>
                                <IconComponent size={28} />
                            </div>
                            <div className="achievement-content">
                                <h3>{achievement.title}</h3>
                                <p>{achievement.description}</p>
                                <span className="achievement-date">
                                    <Calendar size={12} />
                                    {achievement.date}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Certifications */}
            <h3 className="subsection-title">
                <Award size={20} />
                Certifications
            </h3>
            <div className="certificates-grid">
                {certificates.map((cert, index) => {
                    const IconComponent = cert.icon;
                    return (
                        <div key={index} className={`certificate-card ${cert.color}`}>
                            <div className={`certificate-badge ${cert.color}`}>
                                <IconComponent size={16} />
                            </div>
                            <div className="certificate-info">
                                <h4>{cert.title}</h4>
                                <div className="certificate-meta">
                                    <span className="certificate-issuer">{cert.issuer}</span>
                                    <span className="certificate-date">{cert.date}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Achievements;
