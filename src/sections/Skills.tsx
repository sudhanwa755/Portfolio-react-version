import './Skills.css';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaCode, FaNetworkWired, FaDesktop } from 'react-icons/fa';
import { SiCplusplus, SiSpringboot, SiPostgresql, SiSupabase, SiGit, SiIntellijidea, SiApache, SiXampp, SiTypescript, SiReact } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const getIconForSkill = (skill: string) => {
    switch(skill.toLowerCase()) {
        case 'c++': return <SiCplusplus />;
        case 'java': return <FaJava />;
        case 'python': return <FaPython />;
        case 'html': return <FaHtml5 />;
        case 'css': return <FaCss3Alt />;
        case 'javascript': return <FaJs />;
        case 'typescript': return <SiTypescript />;
        case 'react': return <SiReact />;
        case 'php': return <FaPhp />;
        case 'spring boot': return <SiSpringboot />;
        case 'sql': return <SiPostgresql />;
        case 'supabase': return <SiSupabase />;
        case 'git': return <SiGit />;
        case 'vs code': return <VscVscode />;
        case 'intellij': return <SiIntellijidea />;
        case 'apache': return <SiApache />;
        case 'xampp': return <SiXampp />;
        case 'oop': return <FaCode />;
        case 'computer networks': return <FaNetworkWired />;
        case 'operating systems': return <FaDesktop />;
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
            skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"]
        },
        {
            title: "Web Technologies",
            skills: ["HTML", "CSS", "React", "PHP"]
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
            title: "Core Concepts",
            skills: ["OOP", "Computer Networks", "Operating Systems"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <h2 className="section-title">Tech Stack</h2>

                <div className="skills-categories-grid">
                    {definitions.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, sIndex) => {
                                    const icon = getIconForSkill(skill);
                                    return (
                                        <div key={sIndex} className="tech-item">
                                            {icon}
                                            <span className="tech-name">{skill}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
