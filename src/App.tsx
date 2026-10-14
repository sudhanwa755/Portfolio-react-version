import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';
import { PrivacyPolicyModal, TermsModal } from './components/LegalModals';
import { CookieConsent } from './components/CookieConsent';
import { NotFoundModal } from './components/NotFoundModal';
import './index.css';

function App() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    return (
        <div className="app">
            {/* Spatial Ambient Background */}
            <div className="global-background">
                <div className="gradient-orb orb-1" />
                <div className="gradient-orb orb-2" />
            </div>

            <Navbar />
            <main>
                <Hero />
                <Reveal><Projects /></Reveal>
                <Reveal><Experience /></Reveal>
                <Reveal><Skills /></Reveal>
                <Reveal><Education /></Reveal>
                <Reveal><Contact /></Reveal>
            </main>
            <Footer
                onOpenPrivacy={() => setIsPrivacyOpen(true)}
                onOpenTerms={() => setIsTermsOpen(true)}
            />

            {/* Legal Modals & Utilities */}
            <PrivacyPolicyModal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
            />
            <TermsModal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
            />
            <CookieConsent
                onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
            <NotFoundModal />
        </div>
    );
}

export default App;
