import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer (Team Lead)</h4>
                <h5>InfoTech Inc. (Dhule, India)</h5>
              </div>
              <h3>Dec 2024 - Feb 2025</h3>
            </div>
            <p>
              Designed modular UIs with React.js & Bootstrap 5 (100% mobile responsive). Integrated REST APIs reducing latency by 300ms. Architected scalable state management using React Hooks across 5+ core modules. Resolved 20+ critical anomalies ensuring flawless UX deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
