import './Experience.css';

export const Education = () => {
    return (
        <section id="education" className="experience">
            <div className="experience-container">

                <h2 className="section-title">Education</h2>

                <div className="timeline">

                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <span className="timeline-date">2023 — 2025</span>
                            <h3>B.Tech in Computer Engineering</h3>
                            <h4>G.H. Raisoni College of Engineering and Management, Wagholi</h4>
                            <p>CGPA: 8.35</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <span className="timeline-date">2021 — 2023</span>
                            <h3>Diploma in Computer Engineering</h3>
                            <h4>Government Polytechnic, Ratnagiri</h4>
                            <p>Percentage: 86.51%</p>
                        </div>
                    </div>

                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <span className="timeline-date">2015 — 2020</span>
                            <h3>10th Grade (SSC)</h3>
                            <h4>Janana Prabodhini Navanagar Vidyalaya, Nigdi, Pune</h4>
                            <p>Percentage: 86.20%</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
