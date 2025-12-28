import { useState } from 'react';
import './Contact.css';

export const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "ce45e365-3156-41dc-8c0f-e3c5adbdb2a8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Message sent successfully! I'll get back to you soon.");
            event.currentTarget.reset();
            setTimeout(() => setResult(""), 5000);
        } else {
            setResult("Error sending message. Please try again.");
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Have a project in mind or just want to say hi? Feel free to send me a message!
                </p>

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

                    <button type="submit" className="submit-btn">Send Message</button>
                    {result && <p className="form-result">{result}</p>}
                </form>
            </div>
        </section>
    );
};
