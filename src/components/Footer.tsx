import React from 'react';
import '../sections/Contact.css';

interface FooterProps {
    onOpenPrivacy: () => void;
    onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <button type="button" onClick={onOpenPrivacy} className="footer-link">
                        Privacy Policy
                    </button>
                    <span className="footer-sep">·</span>
                    <button type="button" onClick={onOpenTerms} className="footer-link">
                        Terms &amp; Conditions
                    </button>
                    <span className="footer-sep">·</span>
                    <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Sitemap
                    </a>
                    <span className="footer-sep">·</span>
                    <a href="#home" className="footer-link">
                        Back to Top ↑
                    </a>
                </div>
                <p className="footer-copy">
                    © {new Date().getFullYear()} Sudhanwa Kulkarni. Crafted with React, TypeScript &amp; Vite.
                </p>
            </div>
        </footer>
    );
};
