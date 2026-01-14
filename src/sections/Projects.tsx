import './Projects.css';

interface Project {
    title: string;
    description: string;
    tags: string[];
    demoLink: string;
    codeLink: string;
    image: string;
}

export const Projects = () => {
    const projects: Project[] = [
        {
            title: "Portfolio Website",
            description: "A premium, responsive portfolio website built with React, TypeScript, and modern web technologies. Features smooth animations, glassmorphism design, theme switching, and a functional contact form.",
            tags: ["React", "TypeScript", "Vite", "CSS Modules", "Context API", "Web3Forms"],
            demoLink: "https://portfolio-react-version-eta.vercel.app/",
            codeLink: "https://github.com/sudhanwa755/Portfolio-react-version",
            image: "/images/Portfolio.png"
        },
        {
            title: "AI-Enabled Examination System",
            description: "Next-generation assessment platform with AI-powered code analysis, 10+ question types, and enterprise-grade anti-cheating protocols. Features Monaco editor for coding exams, real-time violation monitoring, and automated grading with detailed feedback.",
            tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "AI/ML", "Monaco Editor"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/AI-Enabled-Examination-conducting-System",
            image: "/images/Exam system.png"
        },
        {
            title: "VoltNexus - Enterprise Electricity Billing System",
            description: "Robust electricity billing system with real-time consumption tracking, RBAC, and Glassmorphism UI. Features admin analytics, PDF reporting, and secure payment simulation.",
            tags: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL"],
            demoLink: "https://volt-nexus-ebs-git-main-sudhanwa-kulkarni-s-projects.vercel.app/",
            codeLink: "https://github.com/sudhanwa755/VoltNexus-EBS-",
            image: "/images/Voltnexus.png"
        },
        {
            title: "WattWise - Modern Utility Billing Solution",
            description: "Efficient utility billing solution with modern UI, secure authentication, and real-time data synchronization using Spring Boot and PostgreSQL.",
            tags: ["Spring Boot", "Thymeleaf", "Bootstrap", "PostgreSQL", "Supabase"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/ElectricityBilling-Springboot-supabase",
            image: "/images/Wattwise .png"
        },
        {
            title: "SurveyBoard - Survey & Exam Platform",
            description: "Role-based survey system with complex creation tools, real-time data collection, and result visualization.",
            tags: ["PHP", "PDO", "MySQL", "HTML", "CSS", "JavaScript"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/surveyboard_Advance_version",
            image: "/images/surveyboard.png"
        },
        {
            title: "Apple Stock Price Prediction",
            description: "ML project predicting AAPL stock prices using Linear Regression. Analyzes historical data to forecast trends with comprehensive visualization.",
            tags: ["Python", "Machine Learning", "Pandas", "Scikit learn"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/google-colab-project-",
            image: "/images/apple stock.png"
        },
        {
            title: "Biometric Attendance System",
            description: "IoT integration using NodeMCU and fingerprint sensors for automated attendance tracking with a web management interface.",
            tags: ["NodeMCU", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            demoLink: "#",
            codeLink: "https://github.com/HaridasKhambe/Biometric-Attendance-Management-System",
            image: "/images/biometric.png"
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card stagger-${(index % 5) + 1}`}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.codeLink && project.codeLink !== '#' && (
                                    <a href={project.codeLink} className="project-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                )}
                                {project.demoLink && project.demoLink !== '#' && (
                                    <a href={project.demoLink} className="project-icon-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
