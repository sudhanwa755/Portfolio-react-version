import './Contact.css';

export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Have a project in mind or just want to say hi? Feel free to send me a message!
                </p>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-input" placeholder="Your Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="your@email.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="form-textarea" placeholder="Your message..."></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};
