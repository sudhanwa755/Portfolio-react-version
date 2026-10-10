import './Projects.css';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiVite, SiKubernetes, SiPrometheus, SiGrafana, SiSupabase, SiPostgresql, SiSpringboot, SiMysql, SiPandas, SiScikitlearn } from 'react-icons/si';
import { FaGolang } from 'react-icons/fa6';
import { BsCpuFill } from 'react-icons/bs';

const getIconForTag = (tag: string) => {
    switch(tag.toLowerCase()) {
        case 'react': return <FaReact />;
        case 'typescript': return <SiTypescript />;
        case 'vite': return <SiVite />;
        case 'css modules': return <FaCss3Alt />;
        case 'kubernetes': return <SiKubernetes />;
        case 'go': return <FaGolang />;
        case 'python': return <FaPython />;
        case 'prometheus': return <SiPrometheus />;
        case 'grafana': return <SiGrafana />;
        case 'supabase': return <SiSupabase />;
        case 'postgresql': return <SiPostgresql />;
        case 'html': return <FaHtml5 />;
        case 'css': return <FaCss3Alt />;
        case 'javascript': return <FaJs />;
        case 'spring boot': return <SiSpringboot />;
        case 'bootstrap': return <FaBootstrap />;
        case 'php': return <FaPhp />;
        case 'mysql': return <SiMysql />;
        case 'pandas': return <SiPandas />;
        case 'scikit learn': return <SiScikitlearn />;
        case 'nodemcu': return <BsCpuFill />;
        default: return null;
    }
};

interface Project {
    title: string;
    description: string;
    tags: string[];
    demoLink: string;
    codeLink: string;
    image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="project-card">
            {/* MacOS Window Chrome */}
            <div className="window-chrome">
                <div className="chrome-dot dot-red" />
                <div className="chrome-dot dot-yellow" />
                <div className="chrome-dot dot-green" />
            </div>

            <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
            </div>

            <div className="project-content">
                <h3>{project.title}</h3>

                <div className="project-links">
                    {project.codeLink && project.codeLink !== '#' && (
                        <a href={project.codeLink} className="project-icon-link" target="_blank" rel="noopener noreferrer">Code ↗</a>
                    )}
                    {project.demoLink && project.demoLink !== '#' && (
                        <a href={project.demoLink} className="project-icon-link" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                    )}
                </div>

                <p>{project.description}</p>

                <div className="project-tags">
                    {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="project-tag">
                            {getIconForTag(tag)} {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Projects = () => {
    const projects: Project[] = [
        {
            title: "Interactive SQL Handbook",
            description: "A beautifully designed, distraction-free digital textbook built with pure HTML, CSS, and JS. Features dark mode, scroll-spy navigation, and interactive code copying to master SQL.",
            tags: ["HTML", "CSS", "JavaScript"],
            demoLink: "https://sql-handbook-beryl.vercel.app/",
            codeLink: "https://github.com/sudhanwa755/sql-handbook",
            image: "/images/sql_handbook.jpg"
        },
        {
            title: "Portfolio Website",
            description: "Engineered a high-performance portfolio featuring minimalist UI and theme-switching, leveraging React and Vite to achieve sub-second load times.",
            tags: ["React", "TypeScript", "Vite", "CSS Modules"],
            demoLink: "https://portfolio-react-version-eta.vercel.app/",
            codeLink: "https://github.com/sudhanwa755/Portfolio-react-version",
            image: "/images/Portfolio.png"
        },
        {
            title: "CloudWatchR",
            description: "Architected a Kubernetes-native cloud cost observability platform in Go and Python, enabling real-time infrastructure cost visibility and automated anomaly alerts.",
            tags: ["Kubernetes", "Go", "Python", "Prometheus", "Grafana"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/CloudWatchR",
            image: "/images/grafna admin.png"
        },
        {
            title: "AI-Enabled Examination System",
            description: "Developed a secure AI-driven assessment platform supporting 10+ question types and real-time proctoring, integrating a Monaco editor for live code evaluation.",
            tags: ["React", "TypeScript", "Supabase", "PostgreSQL"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/AI-Enabled-Examination-conducting-System",
            image: "/images/Exam system.png"
        },
        {
            title: "VoltNexus — Electricity Billing",
            description: "Built an enterprise electricity billing system handling real-time consumption tracking and RBAC, with automated PDF reporting and secure payment simulations.",
            tags: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL"],
            demoLink: "https://volt-nexus-ebs-git-main-sudhanwa-kulkarni-s-projects.vercel.app/",
            codeLink: "https://github.com/sudhanwa755/VoltNexus-EBS-",
            image: "/images/Voltnexus.png"
        },
        {
            title: "WattWise — Utility Billing",
            description: "Engineered a utility billing backend using Spring Boot and PostgreSQL, delivering real-time data synchronization and robust role-based authentication.",
            tags: ["Spring Boot", "Bootstrap", "PostgreSQL", "Supabase"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/ElectricityBilling-Springboot-supabase",
            image: "/images/Wattwise .png"
        },
        {
            title: "SurveyBoard — Survey Platform",
            description: "Designed and deployed a role-based survey platform facilitating complex form generation, real-time data collection, and dynamic result visualization.",
            tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/surveyboard_Advance_version",
            image: "/images/surveyboard.png"
        },
        {
            title: "Apple Stock Price Prediction",
            description: "Trained a machine learning model using Linear Regression to forecast AAPL stock trends based on historical market data.",
            tags: ["Python", "Pandas", "Scikit learn"],
            demoLink: "#",
            codeLink: "https://github.com/sudhanwa755/google-colab-project-",
            image: "/images/apple stock.png"
        },
        {
            title: "Biometric Attendance System",
            description: "Integrated NodeMCU with biometric sensors to construct an automated IoT attendance system, streamlining check-ins via a centralized web dashboard.",
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
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};
