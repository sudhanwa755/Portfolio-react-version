import './About.css';

export const About = () => {
    // User's actual skills from provided info
    const skills = ["Java", "Spring Boot", "JavaScript", "PHP", "MySQL", "Python", "Git", "Supabase"];

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src="/images/SDK professional profile.JPG" alt="Sudhanwa Kulkarni" />
                </div>

                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        I am a Full Stack Developer giving strong emphasis on scalability, maintainability, and user-centric design.
                    </p>
                    <p>
                        Successfully engineered systems such as SurveyBoard and a Biometric Attendance Management System, demonstrating technical proficiency and innovation in both frontend and backend development.
                    </p>

                    <div className="skills-tags">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
