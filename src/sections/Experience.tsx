import './Experience.css';

export const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="experience-container">

                <h2 className="section-title">Professional Experience</h2>

                <div className="timeline">

                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <span className="timeline-date">June 2025 — December 2025</span>
                            <h3>Internship</h3>
                            <h4>Empower You</h4>
                            <p>
                                Contributing to core application modules using Java. Writing clean, efficient, and well-documented code following object-oriented principles. Collaborating with senior developers to implement functionalities.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <span className="timeline-date">July 2022 — August 2022</span>
                            <h3>Internship</h3>
                            <h4>Shree Computers</h4>
                            <p>
                                Assisted in troubleshooting hardware and software issues. Gained hands-on experience in system maintenance. Worked on basic network setup and troubleshooting.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
