import './Skills.css';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaPhp } from 'react-icons/fa';
import { SiCplusplus, SiSpringboot, SiPostgresql, SiSupabase, SiGit, SiIntellijidea, SiApache, SiXampp } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const getIconForSkill = (skill: string) => {
    switch(skill.toLowerCase()) {
        case 'c++': return <SiCplusplus />;
        case 'java': return <FaJava />;
        case 'python': return <FaPython />;
        case 'html': return <FaHtml5 />;
        case 'css': return <FaCss3Alt />;
        case 'javascript': return <FaJs />;
        case 'php': return <FaPhp />;
        case 'spring boot': return <SiSpringboot />;
        case 'sql': return <SiPostgresql />;
        case 'supabase': return <SiSupabase />;
        case 'git': return <SiGit />;
        case 'vs code': return <VscVscode />;
        case 'intellij': return <SiIntellijidea />;
        case 'apache': return <SiApache />;
        case 'xampp': return <SiXampp />;
        default: return null;
    }
};

interface SkillCategory {
    title: string;
    skills: string[];
}

export const Skills = () => {
    const definitions: SkillCategory[] = [
        {
            title: "Programming Languages",
            skills: ["C++", "Java", "Python"]
        },
        {
            title: "Web Technologies",
            skills: ["HTML", "CSS", "JavaScript", "PHP"]
        },
        {
            title: "Frameworks & Databases",
            skills: ["Spring Boot", "SQL", "Supabase"]
        },
        {
            title: "Developer Tools",
            skills: ["Git", "VS Code", "IntelliJ", "Apache", "XAMPP"]
        },
        {
            title: "Core Skills",
            skills: ["OOP", "Computer Networks", "Operating Systems"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <h2 className="section-title">Tech Stack</h2>

                {definitions.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3>{category.title}</h3>
                        <div className="skills-grid">
                            {category.skills.map((skill, sIndex) => {
                                // Calculate stagger index based on overall position or just rotate 1-5
                                const staggerIndex = (sIndex % 5) + 1;
                                return (
                                    <div key={sIndex} className={`tech-item stagger-${staggerIndex}`} style={{ animationDelay: `${sIndex * 50}ms`, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getIconForSkill(skill)}
                                        <span className="tech-name">{skill}</span>
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
