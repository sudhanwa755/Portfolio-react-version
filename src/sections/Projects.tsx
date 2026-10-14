import { useState } from 'react';
import './Projects.css';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import {
    SiTypescript, SiKubernetes, SiPrometheus, SiGrafana,
    SiSupabase, SiPostgresql, SiSpringboot, SiMysql,
    SiPandas, SiScikitlearn, SiArduino, SiGo, SiVite,
} from 'react-icons/si';
import { VscCloud, VscFolder, VscFolderOpened, VscChevronRight, VscFiles } from 'react-icons/vsc';
import { TbCircuitDiode } from 'react-icons/tb';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Metric {
    label: string;
    value: string;
    unit?: string;
}

interface TagEntry {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface Project {
    id: string;
    title: string;
    filename: string;
    year: string;
    extIcon: React.ReactNode;
    extIconColor: string;
    category: string;
    role: string;
    description: string;
    image: string;
    tags: TagEntry[];
    demoLink: string;
    codeLink: string;
    isLive: boolean;
    metrics: Metric[];
    problem?: string;
    solution?: string;
    advantages: string[];
}

interface Folder {
    id: string;
    label: string;
    folderIcon: React.ReactNode;
    projects: Project[];
}

// ─── Tag helpers ──────────────────────────────────────────────────────────────

const t = (name: string, icon: React.ReactNode, color: string): TagEntry => ({ name, icon, color });

const T = {
    React:      t('React',       <FaReact />,      '#61DAFB'),
    TS:         t('TypeScript',  <SiTypescript />, '#3178C6'),
    Vite:       t('Vite',        <SiVite />,       '#646CFF'),
    CSS:        t('CSS',         <FaCss3Alt />,    '#1572B6'),
    HTML:       t('HTML',        <FaHtml5 />,      '#E34F26'),
    JS:         t('JavaScript',  <FaJs />,         '#F7DF1E'),
    Python:     t('Python',      <FaPython />,     '#3776AB'),
    Go:         t('Go',          <SiGo />,         '#00ACD7'),
    K8s:        t('Kubernetes',  <SiKubernetes />, '#326CE5'),
    Prometheus: t('Prometheus',  <SiPrometheus />, '#E6522C'),
    Grafana:    t('Grafana',     <SiGrafana />,    '#F46800'),
    Supabase:   t('Supabase',    <SiSupabase />,   '#3ECF8E'),
    Postgres:   t('PostgreSQL',  <SiPostgresql />, '#4169E1'),
    SpringBoot: t('Spring Boot', <SiSpringboot />, '#6DB33F'),
    MySQL:      t('MySQL',       <SiMysql />,      '#4479A1'),
    PHP:        t('PHP',         <FaPhp />,        '#777BB4'),
    Pandas:     t('Pandas',      <SiPandas />,     '#E70488'),
    Sklearn:    t('Scikit-learn',<SiScikitlearn />, '#F7931E'),
    Arduino:    t('NodeMCU',     <SiArduino />,    '#00979D'),
};

// ─── Data (newest → oldest) ───────────────────────────────────────────────────

const folders: Folder[] = [
    {
        id: 'full-stack',
        label: 'full-stack-apps',
        folderIcon: <FaReact />,
        projects: [
            // ── 2025 ──
            {
                id: 'sql-handbook',
                title: 'Interactive SQL Handbook',
                filename: 'sql-handbook.html',
                year: '2025',
                extIcon: <FaHtml5 />,
                extIconColor: '#E34F26',
                category: 'Frontend',
                role: 'Frontend Developer',
                description:
                    'A distraction-free digital textbook built with zero-dependency HTML/CSS/JS. Features dark mode, scroll-spy navigation, and one-click code copying to master SQL interactively.',
                image: '/images/sql_handbook.jpg',
                tags: [T.HTML, T.CSS, T.JS],
                demoLink: 'https://sql-handbook-beryl.vercel.app/',
                codeLink: 'https://github.com/sudhanwa755/sql-handbook',
                isLive: true,
                metrics: [
                    { label: 'Bundle Size', value: '0 KB', unit: 'frameworks' },
                    { label: 'Chapters', value: '12+', unit: 'interactive' },
                    { label: 'Load Time', value: '<0.5s', unit: 'TTFB' },
                ],
                problem: 'SQL learners faced cluttered, ad-heavy reference sites with no offline support, poor mobile UX, and no interactive copy-paste examples.',
                solution: 'Hand-crafted a zero-dependency digital textbook with a scroll-spy TOC, dark mode toggle, and one-click code copying — no build tools required.',
                advantages: [
                    'Zero framework overhead — loads instantly on any device',
                    'Scroll-spy sidebar keeps readers oriented through 12+ chapters',
                    'Dark mode persisted via localStorage for returning visitors',
                ],
            },
            {
                id: 'portfolio',
                title: 'Portfolio Website',
                filename: 'portfolio.tsx',
                year: '2025',
                extIcon: <FaReact />,
                extIconColor: '#61DAFB',
                category: 'Frontend Engineering',
                role: 'Designer & Developer',
                description:
                    'High-performance personal portfolio featuring minimalist UI, theme-switching, and scroll-reveal animations, leveraging React + Vite for sub-second load times.',
                image: '/images/Portfolio.png',
                tags: [T.React, T.TS, T.Vite, T.CSS],
                demoLink: 'https://portfolio-react-version-eta.vercel.app/',
                codeLink: 'https://github.com/sudhanwa755/Portfolio-react-version',
                isLive: true,
                metrics: [
                    { label: 'Load Time', value: '<1s', unit: 'TTFB' },
                    { label: 'Build Tool', value: 'Vite 7', unit: 'optimized' },
                    { label: 'Theming', value: 'CSS Vars', unit: 'dark/light' },
                ],
                problem: 'Static HTML portfolio templates lacked interactivity, real-time theme switching, and the performance optimizations expected from a senior engineering role.',
                solution: 'Built from scratch in React + Vite with CSS custom properties for theming, component-level scroll-reveal, and deployed on Vercel edge.',
                advantages: [
                    'CSS variable theming — zero JS overhead for dark/light switch',
                    'Vite code-splitting keeps each section lazily loaded',
                    'Accessible keyboard navigation and ARIA-labeled sections',
                ],
            },
            // ── 2024 ──
            {
                id: 'wattwise',
                title: 'WattWise — Utility Billing',
                filename: 'wattwise.java',
                year: '2024',
                extIcon: <SiSpringboot />,
                extIconColor: '#6DB33F',
                category: 'Backend Engineering',
                role: 'Backend Developer',
                description:
                    'Engineered a utility billing backend using Spring Boot and PostgreSQL, delivering real-time data sync and role-based authentication for multi-tenant operations.',
                image: '/images/Wattwise .png',
                tags: [T.SpringBoot, T.Postgres, T.Supabase],
                demoLink: '',
                codeLink: 'https://github.com/sudhanwa755/ElectricityBilling-Springboot-supabase',
                isLive: false,
                metrics: [
                    { label: 'Data Sync', value: 'Real-time', unit: 'WebSocket' },
                    { label: 'Auth', value: 'JWT RBAC', unit: 'multi-tenant' },
                    { label: 'Framework', value: 'Spring Boot', unit: '3.x' },
                ],
                problem: 'The frontend billing system lacked a server-side layer — no authentication, no data validation, no concurrent session handling.',
                solution: 'Re-architected with Spring Boot 3 REST APIs, JWT-based RBAC, and Supabase PostgreSQL, enabling multi-tenant billing at scale.',
                advantages: [
                    'JWT stateless auth scales horizontally without session storage',
                    'Spring Data JPA reduces boilerplate query code by ~60%',
                    'Supabase RLS policies enforce row-level tenant isolation',
                ],
            },
            {
                id: 'voltnexus',
                title: 'VoltNexus — Electricity Billing',
                filename: 'voltnexus.js',
                year: '2024',
                extIcon: <FaJs />,
                extIconColor: '#F7DF1E',
                category: 'Full-Stack Application',
                role: 'Full-Stack Developer',
                description:
                    'Enterprise electricity billing system handling real-time consumption tracking, RBAC, automated PDF reporting, and secure payment simulations for utility management.',
                image: '/images/Voltnexus.png',
                tags: [T.HTML, T.CSS, T.JS, T.Supabase, T.Postgres],
                demoLink: 'https://volt-nexus-ebs-git-main-sudhanwa-kulkarni-s-projects.vercel.app/',
                codeLink: 'https://github.com/sudhanwa755/VoltNexus-EBS-',
                isLive: true,
                metrics: [
                    { label: 'Billing Accuracy', value: '99.9%', unit: 'uptime' },
                    { label: 'Report Gen', value: 'Auto PDF', unit: 'on demand' },
                    { label: 'Access Control', value: 'RBAC', unit: '3-role' },
                ],
                problem: 'Utility billing was entirely manual — error-prone spreadsheets, no audit trail, and no on-demand invoice generation.',
                solution: 'Designed a Supabase-backed full-stack system with RBAC, real-time consumption meters, automated PDF invoicing, and payment simulation.',
                advantages: [
                    'Supabase Row Level Security ensures tenants see only their data',
                    'PDF reports auto-generated on billing cycle close — zero manual effort',
                    'Real-time meter readings via Supabase Realtime subscriptions',
                ],
            },
            {
                id: 'exam-system',
                title: 'AI-Enabled Examination System',
                filename: 'exam-system.tsx',
                year: '2024',
                extIcon: <SiTypescript />,
                extIconColor: '#3178C6',
                category: 'Full-Stack Application',
                role: 'Lead Developer',
                description:
                    'Secure AI-driven assessment platform supporting 10+ question types, real-time proctoring, and Monaco editor for live code evaluation across concurrent sessions.',
                image: '/images/Exam system.png',
                tags: [T.React, T.TS, T.Supabase, T.Postgres],
                demoLink: '',
                codeLink: 'https://github.com/sudhanwa755/AI-Enabled-Examination-conducting-System',
                isLive: false,
                metrics: [
                    { label: 'Question Types', value: '10+', unit: 'supported' },
                    { label: 'Proctoring', value: 'Real-time', unit: 'AI-backed' },
                    { label: 'Code Eval', value: 'Monaco', unit: 'in-browser' },
                ],
                problem: 'Manual examinations lacked scalability, integrity enforcement, and the ability to evaluate live code in a tamper-proof environment.',
                solution: 'Built a React + Supabase platform with Monaco editor, AI proctoring hooks, and role-based access for invigilators and students.',
                advantages: [
                    'Monaco editor enables syntax-highlighted live code submission in-browser',
                    'Supabase Auth + RLS prevents cross-candidate data leakage',
                    'Real-time proctoring flags anomalies within milliseconds',
                ],
            },
            {
                id: 'surveyboard',
                title: 'SurveyBoard — Survey Platform',
                filename: 'surveyboard.php',
                year: '2023',
                extIcon: <FaPhp />,
                extIconColor: '#777BB4',
                category: 'Full-Stack Application',
                role: 'Full-Stack Developer',
                description:
                    'Role-based survey platform facilitating complex form generation, real-time data collection, and dynamic result visualization for institutional research.',
                image: '/images/surveyboard.png',
                tags: [T.PHP, T.MySQL, T.HTML, T.CSS, T.JS],
                demoLink: '',
                codeLink: 'https://github.com/sudhanwa755/surveyboard_Advance_version',
                isLive: false,
                metrics: [
                    { label: 'Form Types', value: 'Dynamic', unit: 'multi-type' },
                    { label: 'Data Viz', value: 'Real-time', unit: 'charts' },
                    { label: 'Access', value: '3-role', unit: 'RBAC' },
                ],
                problem: 'Institutional surveys relied on static Google Forms — no custom branding, no role control, and no live analytics dashboard.',
                solution: 'Built a PHP/MySQL platform with role-separated dashboards, complex form builders, and real-time Chart.js result visualizations.',
                advantages: [
                    'Role-separated dashboards give admins, researchers, and respondents tailored views',
                    'Dynamic form builder supports 6 question types with conditional branching',
                    'Real-time chart updates as responses arrive via AJAX polling',
                ],
            },
        ],
    },
    {
        id: 'systems-cloud',
        label: 'systems-and-cloud',
        folderIcon: <VscCloud />,
        projects: [
            {
                id: 'cloudwatchr',
                title: 'CloudWatchR',
                filename: 'cloudwatchr.go',
                year: '2024',
                extIcon: <SiGo />,
                extIconColor: '#00ACD7',
                category: 'Systems & Cloud',
                role: 'Architect & Engineer',
                description:
                    'Kubernetes-native cloud cost observability platform in Go and Python enabling real-time infrastructure cost visibility and automated anomaly alerts across distributed workloads.',
                image: '/images/grafna admin.png',
                tags: [T.K8s, T.Go, T.Python, T.Prometheus, T.Grafana],
                demoLink: '',
                codeLink: 'https://github.com/sudhanwa755/CloudWatchR',
                isLive: false,
                metrics: [
                    { label: 'Cost Visibility', value: '100%', unit: 'real-time' },
                    { label: 'Alert Latency', value: '<2s', unit: 'p99' },
                    { label: 'Workloads', value: 'Multi-pod', unit: 'K8s native' },
                ],
                problem: 'Teams had zero visibility into which Kubernetes workloads were driving infrastructure cost spikes — optimization was guesswork.',
                solution: 'Built a Go exporter that scrapes per-pod resource metrics, ships to Prometheus, and surfaces Grafana dashboards with automated alert rules.',
                advantages: [
                    'Go exporter adds <5ms per-scrape latency — zero impact on workloads',
                    'Grafana alerts fire in <2s for cost anomaly detection',
                    'Prometheus remote-write enables long-term cost trend analysis',
                ],
            },
        ],
    },
    {
        id: 'machine-learning',
        label: 'machine-learning',
        folderIcon: <FaPython />,
        projects: [
            {
                id: 'apple-stock',
                title: 'Apple Stock Prediction',
                filename: 'aapl-prediction.ipynb',
                year: '2023',
                extIcon: <FaPython />,
                extIconColor: '#3776AB',
                category: 'Machine Learning',
                role: 'ML Engineer',
                description:
                    'Linear Regression model for AAPL stock trend forecasting using feature engineering on OHLCV historical data with scikit-learn and full visualization pipeline.',
                image: '/images/apple stock.png',
                tags: [T.Python, T.Pandas, T.Sklearn],
                demoLink: '',
                codeLink: 'https://github.com/sudhanwa755/google-colab-project-',
                isLive: false,
                metrics: [
                    { label: 'Algorithm', value: 'Lin Reg', unit: 'regression' },
                    { label: 'Features', value: 'OHLCV', unit: 'engineered' },
                    { label: 'Notebook', value: 'Colab', unit: 'reproducible' },
                ],
                problem: 'Retail investors lacked accessible, code-driven tools to model and visualize historical stock price trends for informed decision-making.',
                solution: 'Applied feature engineering on OHLCV data, trained scikit-learn Linear Regression, and visualized prediction accuracy vs actual close prices.',
                advantages: [
                    'OHLCV feature set captures market momentum beyond raw price alone',
                    'Fully reproducible Colab notebook — runs in-browser with zero setup',
                    'Matplotlib visualization overlays predictions on actuals for clear accuracy readout',
                ],
            },
        ],
    },
    {
        id: 'iot',
        label: 'iot-and-hardware',
        folderIcon: <TbCircuitDiode />,
        projects: [
            {
                id: 'biometric',
                title: 'Biometric Attendance System',
                filename: 'attendance.ino',
                year: '2023',
                extIcon: <SiArduino />,
                extIconColor: '#00979D',
                category: 'IoT & Embedded',
                role: 'Embedded Systems Engineer',
                description:
                    'NodeMCU integrated with biometric fingerprint sensors for automated IoT attendance, streaming check-in events to a PHP/MySQL backend with a real-time web dashboard.',
                image: '/images/biometric.png',
                tags: [T.Arduino, T.PHP, T.MySQL, T.HTML, T.CSS, T.JS],
                demoLink: '',
                codeLink: 'https://github.com/HaridasKhambe/Biometric-Attendance-Management-System',
                isLive: false,
                metrics: [
                    { label: 'Hardware', value: 'ESP8266', unit: 'NodeMCU' },
                    { label: 'Accuracy', value: '99%+', unit: 'fingerprint' },
                    { label: 'Latency', value: '<500ms', unit: 'check-in' },
                ],
                problem: 'Manual attendance in educational institutions was error-prone, easy to forge, and produced no structured data for auditing.',
                solution: 'Wired fingerprint sensors to NodeMCU ESP8266, posted HTTP events to PHP/MySQL backend, and built an admin dashboard for real-time attendance tracking.',
                advantages: [
                    'Hardware biometrics eliminate proxy attendance entirely',
                    'HTTP POST pipeline sends verified check-ins to backend in <500ms',
                    'Admin dashboard provides live headcount and exportable reports',
                ],
            },
        ],
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export const Projects = () => {
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
        new Set(['full-stack'])
    );
    const [activeProjectId, setActiveProjectId] = useState<string>('sql-handbook');

    const toggleFolder = (folderId: string) => {
        setExpandedFolders(prev => {
            const next = new Set(prev);
            if (next.has(folderId)) next.delete(folderId);
            else next.add(folderId);
            return next;
        });
    };

    const selectProject = (project: Project, folderId: string) => {
        // Ensure folder is open when a project inside it is selected
        setExpandedFolders(prev => new Set([...prev, folderId]));
        setActiveProjectId(project.id);
    };

    const allProjects = folders.flatMap(f => f.projects);
    const activeProject = allProjects.find(p => p.id === activeProjectId)!;
    const totalProjects = allProjects.length;

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Featured Projects</h2>

            <div className="ide-container">

                {/* ── Window Title Bar ── */}
                <div className="ide-titlebar">
                    <div className="ide-titlebar-left">
                        <span className="ide-dot ide-dot--red" />
                        <span className="ide-dot ide-dot--yellow" />
                        <span className="ide-dot ide-dot--green" />
                    </div>
                    <div className="ide-titlebar-center">
                        <span className="ide-path">
                            <span className="ide-path-dim">sudhanwa755</span>
                            <span className="ide-path-sep"> / </span>
                            <span className="ide-path-bright">workspace</span>
                            <span className="ide-path-sep"> / </span>
                            <span className="ide-path-active">projects</span>
                        </span>
                    </div>
                    <div className="ide-titlebar-right">
                        <span className="ide-meta-badge">
                            <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                            {totalProjects} repos
                        </span>
                        <span className="ide-meta-badge ide-meta-badge--branch">
                            <span className="ide-branch-dot" />
                            main
                        </span>
                    </div>
                </div>

                {/* ── Split View Body ── */}
                <div className="ide-body">

                    {/* ── Left: Modern File Explorer ── */}
                    <aside className="ide-sidebar">
                        <div className="ide-sidebar-header">
                            <div className="ide-sidebar-header-left">
                                <VscFiles className="ide-sidebar-header-icon" />
                                <span className="ide-sidebar-title">WORKSPACE</span>
                            </div>
                            <span className="ide-sidebar-count">{totalProjects} projects</span>
                        </div>
                        <nav className="ide-tree">
                            {folders.map((folder) => {
                                const isOpen = expandedFolders.has(folder.id);
                                return (
                                    <div key={folder.id} className="ide-tree-folder-wrap">
                                        {/* Folder row */}
                                        <button
                                            className={`ide-tree-folder-row ${isOpen ? 'ide-tree-folder-row--open' : ''}`}
                                            onClick={() => toggleFolder(folder.id)}
                                            aria-expanded={isOpen}
                                        >
                                            <VscChevronRight className={`ide-chevron-icon ${isOpen ? 'ide-chevron-icon--open' : ''}`} />
                                            <span className="ide-folder-icon">
                                                {isOpen ? <VscFolderOpened /> : <VscFolder />}
                                            </span>
                                            <span className="ide-folder-name">{folder.label}</span>
                                            <span className="ide-folder-count">{folder.projects.length}</span>
                                        </button>

                                        {/* File rows */}
                                        {isOpen && (
                                            <ul className="ide-tree-files">
                                                {folder.projects.map((project) => {
                                                    const isActive = activeProjectId === project.id;
                                                    return (
                                                        <li key={project.id} className="ide-tree-file-item">
                                                            <button
                                                                className={`ide-tree-file-row ${isActive ? 'ide-tree-file-row--active' : ''}`}
                                                                onClick={() => selectProject(project, folder.id)}
                                                            >
                                                                <span
                                                                    className="ide-file-ext-icon"
                                                                    style={{ color: project.extIconColor }}
                                                                >
                                                                    {project.extIcon}
                                                                </span>
                                                                <span className="ide-file-name">{project.filename}</span>
                                                                <span className="ide-file-year">{project.year}</span>
                                                                {project.isLive && (
                                                                    <span className="ide-live-dot" title="Live deployment" />
                                                                )}
                                                            </button>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>
                    </aside>

                    {/* ── Right: Project Inspector ── */}
                    <div className="ide-inspector">
                        {activeProject && (
                            <>
                                {/* Tab Bar */}
                                <div className="ide-tab-bar">
                                    <div className="ide-tab ide-tab--active">
                                        <span
                                            className="ide-tab-icon"
                                            style={{ color: activeProject.extIconColor }}
                                        >
                                            {activeProject.extIcon}
                                        </span>
                                        <span className="ide-tab-label">README.md — {activeProject.title}</span>
                                        <span className="ide-tab-close">×</span>
                                    </div>
                                </div>

                                {/* Inspector Body */}
                                <div className="ide-inspector-body">

                                    {/* ── Project Header ── */}
                                    <div className="insp-header">
                                        <div className="insp-meta-row">
                                            <span className="insp-category">{activeProject.category}</span>
                                            <span className="insp-sep">·</span>
                                            <span className="insp-role">{activeProject.role}</span>
                                            <span className="insp-sep">·</span>
                                            <span className="insp-year">{activeProject.year}</span>
                                            {activeProject.isLive && (
                                                <span className="insp-live-pill">
                                                    <span className="ide-live-dot" /> Live Deploy
                                                </span>
                                            )}
                                        </div>

                                        <div className="insp-title-row">
                                            <h3 className="insp-title">{activeProject.title}</h3>
                                            
                                            {/* High-Impact Project Action Buttons */}
                                            <div className="insp-hero-actions">
                                                {activeProject.demoLink && (
                                                    <a
                                                        href={activeProject.demoLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="insp-hero-btn insp-hero-btn--live"
                                                    >
                                                        <span className="insp-hero-pulse" />
                                                        <FiExternalLink />
                                                        <span>Live Deployment</span>
                                                    </a>
                                                )}
                                                {activeProject.codeLink && (
                                                    <a
                                                        href={activeProject.codeLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="insp-hero-btn insp-hero-btn--code"
                                                    >
                                                        <FaGithub />
                                                        <span>GitHub Repo</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="insp-description">{activeProject.description}</p>

                                        {/* Tech Stack Tags immediately in Header */}
                                        <div className="insp-stack-tags">
                                            {activeProject.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="insp-stack-tag"
                                                    style={{ '--tag-color': tag.color } as React.CSSProperties}
                                                >
                                                    <span className="insp-stack-tag-icon" style={{ color: tag.color }}>
                                                        {tag.icon}
                                                    </span>
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ── Preview Window with Screenshot (DIRECTLY VISIBLE!) ── */}
                                    <div className="insp-preview-wrap">
                                        <div className="insp-browser-chrome">
                                            <div className="insp-chrome-dots">
                                                <span className="insp-chrome-dot insp-chrome-dot--r" />
                                                <span className="insp-chrome-dot insp-chrome-dot--y" />
                                                <span className="insp-chrome-dot insp-chrome-dot--g" />
                                            </div>
                                            <div className="insp-chrome-url">
                                                <span className="insp-chrome-url-lock" title="HTTPS Secure">
                                                    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
                                                </span>
                                                <a
                                                    href={activeProject.demoLink || activeProject.codeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="insp-chrome-url-text"
                                                    title={`Open ${activeProject.demoLink || activeProject.codeLink}`}
                                                >
                                                    {activeProject.demoLink
                                                        ? activeProject.demoLink.replace('https://', '')
                                                        : activeProject.codeLink.replace('https://', '')}
                                                </a>
                                            </div>

                                        </div>
                                        <div className="insp-preview">
                                            <img
                                                src={activeProject.image}
                                                alt={`${activeProject.title} - ${activeProject.category} interface preview`}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    </div>

                                    {/* ── Key Highlights & Advantages ── */}
                                    <div className="insp-advantages">
                                        <div className="insp-section-label">
                                            <span className="insp-section-label-text">KEY HIGHLIGHTS & ARCHITECTURE</span>
                                            <span className="insp-section-label-line" />
                                        </div>
                                        <ul className="insp-advantages-list">
                                            {activeProject.advantages.map((adv, i) => (
                                                <li key={i} className="insp-advantage-item">
                                                    <span className="insp-advantage-bullet">✦</span>
                                                    <span>{adv}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* ── Audited Metrics ── */}
                                    <div className="insp-metrics-wrap">
                                        <div className="insp-section-label">
                                            <span className="insp-section-label-text">AUDITED METRICS</span>
                                            <span className="insp-section-label-line" />
                                        </div>
                                        <div className="insp-metrics">
                                            {activeProject.metrics.map((m, i) => (
                                                <div key={i} className="insp-metric-card">
                                                    <span className="insp-metric-value">{m.value}</span>
                                                    <span className="insp-metric-unit">{m.unit}</span>
                                                    <span className="insp-metric-label">{m.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
