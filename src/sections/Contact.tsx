import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import './Contact.css';

export const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget; // Capture form reference immediately
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
                form.reset(); // Use captured reference
                setTimeout(() => setResult(""), 5000);
            } else {
                setResult("Error sending message. Please try again.");
            }
        } catch (error) {
            setResult("Something went wrong. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <Reveal>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-description">
                        Have a project in mind or just want to connect?
                        I'm always open to discussing new opportunities and ideas.
                    </p>
                </Reveal>

                <div className="contact-content-wrapper">
                    <Reveal>
                        <form className="contact-form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    placeholder="Your Name"
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
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {result && <p className={`form-result ${result.includes('Error') ? 'error' : 'success'}`}>{result}</p>}
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
