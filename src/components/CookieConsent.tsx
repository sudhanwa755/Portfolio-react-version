import React, { useState, useEffect } from 'react';
import './CookieConsent.css';
import { FaCookieBite } from 'react-icons/fa';

interface CookieConsentProps {
    onOpenPrivacy: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPrivacy }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'essential_only');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner" role="region" aria-label="Cookie Consent Banner">
            <div className="cookie-banner-inner">
                <div className="cookie-banner-content">
                    <div className="cookie-banner-icon-wrap">
                        <FaCookieBite className="cookie-banner-icon" />
                    </div>
                    <div className="cookie-banner-text">
                        <p className="cookie-banner-title">Privacy &amp; Cookie Preferences</p>
                        <p className="cookie-banner-desc">
                            We use local storage strictly to preserve your visual theme preference (Dark/Light mode) and secure form sessions. No third-party tracking or advertising cookies are used.{' '}
                            <button type="button" onClick={onOpenPrivacy} className="cookie-learn-more">
                                Read Privacy Policy
                            </button>
                        </p>
                    </div>
                </div>

                <div className="cookie-banner-actions">
                    <button type="button" onClick={handleDecline} className="cookie-btn cookie-btn--secondary">
                        Essential Only
                    </button>
                    <button type="button" onClick={handleAccept} className="cookie-btn cookie-btn--primary">
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};
