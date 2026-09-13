import { useState, useRef } from "react";
import "./styles/Achievements.css";
import { MdArrowOutward } from "react-icons/md";

const achievementsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Earned the AWS Cloud Practitioner certification, demonstrating an overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
  },

  {
    title: "Smart India Hackathon (SIH) 2024",
    issuer: "SIH",
    date: "2024",
    description: "Internal Campus Winner",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/1oAbCLo7mEIpW5GI_2p8Ka1HghCC84jjH/view",
    date: "2025",
    description: "Demonstrates expertise in data science concepts and Oracle Cloud Infrastructure services.",
  },
  {
    title: "Copyright Registration - AI Powered Indian Sign Language Recognition Glove System",
    issuer: "Government of India",
    link: "https://drive.google.com/file/d/1ox0fjSpD1J3Rzb9OfGtQXdgI24SVH8pe/view?usp=sharing",
    date: "2026",
    description: "Registered a copyright (Certificate No. SW-2026023577) for an AI-powered wearable system that translates Indian Sign Language into real-time text and speech.",
  }
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!gridRef.current) return;
    const scrollLeft = gridRef.current.scrollLeft;
    const cardWidth = gridRef.current.children[0].clientWidth + 40; // card width + gap
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    if (!gridRef.current) return;
    const cardWidth = gridRef.current.children[0].clientWidth + 40;
    gridRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    setCurrentIndex(index);
  };

  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements <span>&</span>
          <br /> Certifications
        </h2>
        <div 
          className="achievements-grid" 
          ref={gridRef}
          onScroll={handleScroll}
        >
          {achievementsData.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-header">
                <h3>{item.title}</h3>
                <h4>{item.issuer}</h4>
              </div>
              <div className="achievement-body">
                <span className="achievement-date">{item.date}</span>
                <p>{item.description}</p>
                {(item as any).link && (
                  <a href={(item as any).link} target="_blank" rel="noreferrer" className="achievement-link" data-cursor="disable">
                    View Certificate <MdArrowOutward />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots" style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "30px" }}>
          {achievementsData.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;