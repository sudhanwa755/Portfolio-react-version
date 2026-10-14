import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiHome, FiBriefcase, FiBook, FiCode, FiLayers, FiMail } from 'react-icons/fi';

const NAV_ITEMS = [
    { label: 'Home', href: '#home', icon: <FiHome /> },
    { label: 'Projects', href: '#projects', icon: <FiLayers /> },
    { label: 'Experience', href: '#experience', icon: <FiBriefcase /> },
    { label: 'Skills', href: '#skills', icon: <FiCode /> },
    { label: 'Education', href: '#education', icon: <FiBook /> },
    { label: 'Contact', href: '#contact', icon: <FiMail /> },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
    const { theme, toggleTheme } = useTheme();
    const navLinksRef = useRef<HTMLUListElement>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    // Update active index on scroll and handle bottom-of-page edge case
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
            
            // Check if user reached the bottom of the page
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.documentElement.scrollHeight - 60;
            if (scrollPosition >= threshold) {
                setActiveIndex(NAV_ITEMS.length - 1);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer to update active index on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = NAV_ITEMS.findIndex(item => item.href.substring(1) === entry.target.id);
                        if (index !== -1) setActiveIndex(index);
                    }
                });
            },
            { rootMargin: '-25% 0px -65% 0px' }
        );

        NAV_ITEMS.forEach((item) => {
            const section = document.getElementById(item.href.substring(1));
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Update pill position when activeIndex changes or on window resize
    useEffect(() => {
        const updatePill = () => {
            const el = linkRefs.current[activeIndex];
            if (el) {
                setPillStyle({
                    left: el.offsetLeft,
                    width: el.offsetWidth,
                });
            }
        };

        updatePill();
        window.addEventListener('resize', updatePill);
        // Small delay to recalculate after potential font/layout load
        const timer = setTimeout(updatePill, 100);

        return () => {
            window.removeEventListener('resize', updatePill);
            clearTimeout(timer);
        };
    }, [activeIndex]);

    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <ul
                    className="nav-links"
                    ref={navLinksRef}
                >
                    {/* Magnetic active pill */}
                    <div
                        className="nav-pill"
                        style={{
                            left: `${pillStyle.left}px`,
                            width: `${pillStyle.width}px`,
                        }}
                    />
                    {NAV_ITEMS.map((item, index) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`nav-link ${activeIndex === index ? 'active' : ''}`}
                                ref={(el) => { linkRefs.current[index] = el; }}
                                onClick={() => handleNavClick(index)}
                                aria-label={item.label}
                            >
                                <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                                <span className="nav-text">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-controls">
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};
