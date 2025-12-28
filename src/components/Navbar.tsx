import { useState, useEffect } from 'react';
import './Navbar.css';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="logo">Portfolio</a>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    <li><a href="#education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Education</a></li>
                    <li><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>

                <div className="nav-controls">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <div className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? '✕' : '☰'}
                    </div>
                </div>
            </div>
        </nav>
    );
};
