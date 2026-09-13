import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:meetagrawal36760@gmail.com" data-cursor="disable">
                meetagrawal36760@gmail.com
              </a>
            </p>
            <h4>Contact</h4>
            <p>+91 8275506760</p>
            <h4>Address</h4>
            <p>Plot no 11 Madhav Colony Behind Niramay Hospital
              <br />Dhule-424001, Maharashtra, India</p>
              
            {/* <h4>Education</h4>
            <p>B.E. in AI and Data Science</p> */}
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/meetagrawal12"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/meet-agrawal36760/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Meet Manish Agrawal</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
