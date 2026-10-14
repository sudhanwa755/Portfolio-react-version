import { useState, useRef } from 'react';
import { Reveal } from '../components/Reveal';
import './Contact.css';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRenderTimeRef = useRef<number>(Date.now());
    const lastSubmitTimeRef = useRef<number>(0);

    const validate = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Please provide your name.';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Please provide your email address.';
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address (e.g., name@domain.com).';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Please provide a brief message.';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // 1. Bot spam protection: honeypot check
        if (formData._gotcha) {
            console.warn("Spam detected via honeypot trap.");
            setResult("Message submitted.");
            return;
        }

        // 2. Bot spam protection: submission speed check (< 1.5s is usually automated script)
        const timeElapsed = Date.now() - formRenderTimeRef.current;
        if (timeElapsed < 1500) {
            console.warn("Submission too fast, suspected automated bot.");
            setResult("Please take a moment before submitting.");
            return;
        }

        // 3. Bot spam protection: rate limiting (30s cooldown between messages)
        const timeSinceLastSubmit = Date.now() - lastSubmitTimeRef.current;
        if (lastSubmitTimeRef.current > 0 && timeSinceLastSubmit < 30000) {
            setResult("Please wait 30 seconds before sending another message.");
            return;
        }

        // 4. Form validation
        if (!validate()) {
            setResult("Please fix the errors above before submitting.");
            return;
        }

        setIsSubmitting(true);
        setResult("Sending message...");

        const form = event.currentTarget;
        const payload = new FormData(form);
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "ce45e365-3156-41dc-8c0f-e3c5adbdb2a8";
        payload.append("access_key", accessKey);
        payload.append("subject", `Portfolio Contact: ${formData.name}`);
        payload.append("from_name", "Portfolio Inquiry");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: payload
            });

            const data = await response.json();
            if (data.success) {
                lastSubmitTimeRef.current = Date.now();
                setResult("Message sent successfully! I'll get back to you soon.");
                setFormData({ name: '', email: '', message: '', _gotcha: '' });
                form.reset();
                setTimeout(() => setResult(""), 6000);
            } else {
                setResult("Error sending message. Please try again or reach out directly via email.");
            }
        } catch {
            setResult("Network error. Please check your internet connection and try again.");
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
                                I'm always open to discussing new projects, creative ideas, or engineering opportunities. Feel free to reach out using the secure form or connect via my socials.
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
                            <form className="contact-form" onSubmit={onSubmit} noValidate>
                                {/* Spam honeypot fields */}
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    style={{ display: 'none' }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                                <input
                                    type="text"
                                    name="_gotcha"
                                    value={formData._gotcha}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                                        placeholder="Enter your Name"
                                        required
                                    />
                                    {errors.name && <span className="form-field-error">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                                        placeholder="Enter your Email (e.g. name@domain.com)"
                                        required
                                    />
                                    {errors.email && <span className="form-field-error">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <label htmlFor="message">Message</label>
                                        <span style={{ fontSize: '0.72rem', color: formData.message.length >= 10 ? '#22c55e' : 'var(--text-muted)' }}>
                                            {formData.message.length} characters (min 10)
                                        </span>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`form-textarea ${errors.message ? 'form-input--error' : ''}`}
                                        placeholder="How can I help you? Project inquiries, collaborations, or career discussions..."
                                        rows={4}
                                        required
                                    />
                                    {errors.message && <span className="form-field-error">{errors.message}</span>}
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
                                    <p className={`form-result ${result.includes('Error') || result.includes('wrong') || result.includes('errors') || result.includes('wait') ? 'error' : 'success'}`}>
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
