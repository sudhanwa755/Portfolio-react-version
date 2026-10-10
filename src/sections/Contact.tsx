import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import './Contact.css';

export const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setIsSubmitting(true);
        setResult("Sending....");
        const formData = new FormData(form);
        formData.append("access_key", "ce45e365-3156-41dc-8c0f-e3c5adbdb2a8");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("Message sent successfully! I'll get back to you soon.");
                form.reset();
                setTimeout(() => setResult(""), 5000);
            } else {
                setResult("Error sending message. Please try again.");
            }
        } catch {
            setResult("Something went wrong. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <Reveal>
                    <div className="contact-grid">
                        
                        {/* ── Left Side: Info ── */}
                        <div className="contact-info">
                            <h2 className="contact-heading">Let's build something amazing together.</h2>
                            <p className="contact-description">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form or connect via my socials.
                            </p>

                            <div className="contact-pills-vertical">
                                <a href="mailto:Sudhanwa.kulkarni.work@gmail.com" className="contact-pill-modern">
                                    <div className="pill-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                        </svg>
                                    </div>
                                    <div className="pill-text">
                                        <span>Email</span>
                                        <strong>Sudhanwa.kulkarni.work@gmail.com</strong>
                                    </div>
                                </a>
                                
                                <a href="https://linkedin.com/in/sudhanwa-kulkarni-b15437214" className="contact-pill-modern" target="_blank" rel="noopener noreferrer">
                                    <div className="pill-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <div className="pill-text">
                                        <span>LinkedIn</span>
                                        <strong>sudhanwa-kulkarni</strong>
                                    </div>
                                </a>

                                <a href="https://github.com/sudhanwa755" className="contact-pill-modern" target="_blank" rel="noopener noreferrer">
                                    <div className="pill-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div className="pill-text">
                                        <span>GitHub</span>
                                        <strong>sudhanwa755</strong>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* ── Right Side: Form ── */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="Enter your Name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="Enter your E-Mails"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        placeholder="How can I help you?"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`submit-btn-modern ${isSubmitting ? 'loading' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                                
                                {result && (
                                    <p className={`form-result ${result.includes('Error') || result.includes('went wrong') ? 'error' : 'success'}`}>
                                        {result}
                                    </p>
                                )}
                            </form>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    );
};
