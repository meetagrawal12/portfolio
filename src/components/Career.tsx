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
                <h4>Java Backend Developer Intern</h4>
                <h5>InfoTech Inc. (Dhule, India)</h5>
              </div>
              <h3>Dec 2024 - Feb 2025</h3>
            </div>
            <p>
              Engineered the backend for a Laundry Management System using Java, Spring Boot, Hibernate, and MySQL, supporting the full order-to-delivery workflow. Delivered 20+ RESTful APIs with standardized response formats to automate customer management, order lifecycle, pickup & delivery scheduling, and service management. Implemented secure authentication & authorization using Spring Security & JWT, enabling role-based access for Admin & Customer modules. Optimized data persistence through Spring Data JPA/Hibernate with normalized database relationships and centralized exception handling, reducing redundant queries and duplicate controller code by 42% while ensuring transactional integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;