import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
    const { theme, toggleTheme } = useTheme();
    const navLinksRef = useRef<HTMLUListElement>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
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
            { rootMargin: '-30% 0px -70% 0px' }
        );

        NAV_ITEMS.forEach((item) => {
            const section = document.getElementById(item.href.substring(1));
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Update pill position when activeIndex changes
    useEffect(() => {
        const el = linkRefs.current[activeIndex];
        const container = navLinksRef.current;
        if (el && container) {
            const containerRect = container.getBoundingClientRect();
            const elRect = el.getBoundingClientRect();
            setPillStyle({
                left: elRect.left - containerRect.left,
                width: elRect.width,
            });
        }
    }, [activeIndex]);

    const handleNavClick = (index: number) => {
        setActiveIndex(index);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <ul
                    className={`nav-links ${isMenuOpen ? 'open' : ''}`}
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
                            >
                                {item.label}
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

                    <div
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        role="button"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </div>
                </div>
            </div>
        </nav>
    );
};
