import React, { useEffect, useState } from 'react';
import './LegalModals.css';
import { VscTerminal } from 'react-icons/vsc';

export const NotFoundModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === '#404') {
                setIsOpen(true);
            }
        };
        checkHash();
        window.addEventListener('hashchange', checkHash);
        return () => window.removeEventListener('hashchange', checkHash);
    }, []);

    const handleReturn = () => {
        setIsOpen(false);
        window.location.hash = '#home';
    };

    if (!isOpen) return null;

    return (
        <div className="legal-modal-overlay" role="dialog" aria-modal="true">
            <div className="legal-modal-card">
                <div className="legal-modal-header">
                    <div className="legal-modal-title-wrap">
                        <VscTerminal className="legal-modal-icon" style={{ color: '#ef4444' }} />
                        <div>
                            <h3 style={{ color: '#ef4444' }}>404: Route Not Found</h3>
                            <span className="legal-modal-date">HTTP Status 404 · Resource Missing</span>
                        </div>
                    </div>
                </div>

                <div className="legal-modal-content" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <p style={{ color: '#ef4444' }}>&gt; Error: Destination unreachable in workspace.</p>
                    <p>The requested file or branch does not exist on this server.</p>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '6px', border: '1px solid #162032', color: '#94a3b8', fontSize: '0.78rem' }}>
                        <div>$ git checkout main</div>
                        <div>$ npm run start -- --resolve-anchor</div>
                        <div style={{ color: '#22c55e' }}>✓ Workspace synchronized with canonical origin.</div>
                    </div>
                </div>

                <div className="legal-modal-footer">
                    <button className="legal-modal-btn" onClick={handleReturn}>
                        Return to Headquarters ↗
                    </button>
                </div>
            </div>
        </div>
    );
};
