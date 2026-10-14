import React, { useEffect } from 'react';
import './LegalModals.css';
import { FiX, FiShield, FiFileText } from 'react-icons/fi';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="legal-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="privacy-title">
            <div className="legal-modal-card" onClick={(e) => e.stopPropagation()}>
                <div className="legal-modal-header">
                    <div className="legal-modal-title-wrap">
                        <FiShield className="legal-modal-icon" />
                        <div>
                            <h3 id="privacy-title">Privacy Policy</h3>
                            <span className="legal-modal-date">Last updated: October 2026</span>
                        </div>
                    </div>
                    <button className="legal-modal-close" onClick={onClose} aria-label="Close Privacy Policy">
                        <FiX />
                    </button>
                </div>

                <div className="legal-modal-content">
                    <section>
                        <h4>1. Overview</h4>
                        <p>
                            Welcome to the personal developer portfolio of <strong>Sudhanwa Kulkarni</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting any personal information you choose to share with us while visiting this website.
                        </p>
                    </section>

                    <section>
                        <h4>2. Information We Collect</h4>
                        <p>
                            We do not collect personal data merely for browsing this site. The only personal information collected is provided directly and voluntarily by you through our Contact Form:
                        </p>
                        <ul>
                            <li><strong>Name:</strong> To address you properly in our reply.</li>
                            <li><strong>Email Address:</strong> To respond to your inquiry, freelance proposal, or career opportunity.</li>
                            <li><strong>Message Content:</strong> The details of your inquiry or feedback.</li>
                        </ul>
                    </section>

                    <section>
                        <h4>3. How Your Information is Used</h4>
                        <p>
                            Information submitted through the contact form is solely used to communicate with you regarding your message. We <strong>never sell, rent, or share</strong> your information with advertisers or marketing third parties.
                        </p>
                    </section>

                    <section>
                        <h4>4. Third-Party Services</h4>
                        <p>This portfolio utilizes standard, privacy-conscious infrastructure services:</p>
                        <ul>
                            <li><strong>Web3Forms:</strong> Contact form submissions are processed securely through Web3Forms API to deliver emails directly to our inbox.</li>
                            <li><strong>Vercel Edge Hosting:</strong> Provides secure HTTPS content delivery, DDoS protection, and performance optimization.</li>
                            <li><strong>Google Fonts:</strong> High-performance web typography loaded via secure CDN.</li>
                        </ul>
                    </section>

                    <section>
                        <h4>5. Local Storage &amp; Cookies</h4>
                        <p>
                            This website uses browser <code>localStorage</code> strictly to remember your preferred visual theme (Dark/Light mode) and your cookie consent preference. We do not use third-party tracking or advertising cookies.
                        </p>
                    </section>

                    <section>
                        <h4>6. Your Rights (GDPR &amp; CCPA)</h4>
                        <p>
                            You have the right to request access to any communications you have sent us, or to request the immediate deletion of your contact records from our email archives. To do so, email us at <a href="mailto:Sudhanwa.kulkarni.work@gmail.com">Sudhanwa.kulkarni.work@gmail.com</a>.
                        </p>
                    </section>
                </div>

                <div className="legal-modal-footer">
                    <button className="legal-modal-btn" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="legal-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="terms-title">
            <div className="legal-modal-card" onClick={(e) => e.stopPropagation()}>
                <div className="legal-modal-header">
                    <div className="legal-modal-title-wrap">
                        <FiFileText className="legal-modal-icon" />
                        <div>
                            <h3 id="terms-title">Terms &amp; Conditions</h3>
                            <span className="legal-modal-date">Last updated: October 2026</span>
                        </div>
                    </div>
                    <button className="legal-modal-close" onClick={onClose} aria-label="Close Terms">
                        <FiX />
                    </button>
                </div>

                <div className="legal-modal-content">
                    <section>
                        <h4>1. Acceptance of Terms</h4>
                        <p>
                            By accessing and using this portfolio website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, you should discontinue using this site.
                        </p>
                    </section>

                    <section>
                        <h4>2. Intellectual Property</h4>
                        <p>
                            Unless otherwise explicitly stated, all portfolio designs, custom illustrations, interactive UI layouts, and written content are the intellectual property of <strong>Sudhanwa Kulkarni</strong>.
                        </p>
                        <p>
                            Source code for public projects linked on GitHub is governed by the respective open-source licenses (MIT, Apache 2.0, or GPL) indicated in each repository.
                        </p>
                    </section>

                    <section>
                        <h4>3. Live Demos &amp; External Links</h4>
                        <p>
                            This website links to third-party services and live deployment environments (e.g., Vercel, Supabase, Google Colab, GitHub). We are not responsible for the availability, uptime, content, or privacy practices of external websites.
                        </p>
                    </section>

                    <section>
                        <h4>4. Disclaimer of Warranties</h4>
                        <p>
                            This website and its demonstrative projects are provided &ldquo;as is&rdquo; without warranty of any kind, either express or implied.
                        </p>
                    </section>

                    <section>
                        <h4>5. Contact</h4>
                        <p>
                            For inquiries regarding these Terms or commercial licensing, reach out via <a href="mailto:Sudhanwa.kulkarni.work@gmail.com">Sudhanwa.kulkarni.work@gmail.com</a>.
                        </p>
                    </section>
                </div>

                <div className="legal-modal-footer">
                    <button className="legal-modal-btn" onClick={onClose}>
                        I Understand
                    </button>
                </div>
            </div>
        </div>
    );
};
