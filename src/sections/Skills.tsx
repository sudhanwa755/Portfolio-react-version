import './Skills.css';

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
                                    <div key={sIndex} className={`tech-item stagger-${staggerIndex}`} style={{ animationDelay: `${sIndex * 50}ms` }}>
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
