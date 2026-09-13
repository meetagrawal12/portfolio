import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ISL SMART GLOVE",
    category: "Indian Sign Language",
    tools: "ESP32, Flex Sensors, MPU6050, Python, OpenCV, YOLOv8, TensorFlow Lite, CNN, GRU, LSTM, Node.js, WebSocket, MongoDB, Flutter",
    image: "/images/isl_glove.png",
    points: [
      "Captured gesture data using 5 flex sensors, an MPU6050 IMU, and ESP32, combined with OpenCV and YOLOv8 for visual gesture correction.",
      "Trained CNN-GRU models for static gestures and GRU/LSTM models for dynamic gestures, achieving 90% classification accuracy, deployed via TensorFlow Lite for on-device inference.",
      "Built a Node.js/WebSocket backend with MongoDB to stream live sensor data to a companion Flutter app with text and speech output."
    ]
  },
  {
    title: "LAUNDRY MANAGEMENT SYSTEM",
    category: "Backend System",
    tools: "Java, Spring Boot, Hibernate/JPA, Spring Security, JWT, MySQL, REST APIs",
    image: "/images/laundry_app.png",
    points: [
      "Engineered the backend for a full order-to-delivery workflow using Java, Spring Boot, Hibernate, and MySQL.",
      "Delivered 20+ RESTful APIs with standardized response formats for customer, order, pickup & delivery, and service management.",
      "Implemented secure authentication & authorization using Spring Security & JWT, and reduced redundant queries and duplicate code by 42% via optimized Spring Data JPA persistence."
    ]
  },
  {
    title: "EXPENSES TRACKER DASHBOARD",
    category: "Web Dashboard",
    tools: "React.js, JavaScript, MongoDB",
    image: "/images/expense_dashboard.png",
    points: [
      "Modular dashboard with expense categorization, budget tracking, and analytics.",
      "Integrated AI-powered suggestions for budget optimization.",
      "Added utility tools: currency converter, calculator, Udhar Tracker, and QR scanner."
    ]
  },
  {
    title: "SILKI AI - INTELLIGENT ASSISTANT",
    category: "Full-Stack AI App",
    tools: "Python, FastAPI, LangChain, LangGraph, Groq API, Hugging Face API, RAG, Vector DB, MCP Server, JavaScript, HTML, CSS",
    image: "/images/Gemini_Generated_Image_tpoxgftpoxgftpox.png",
    points: [
      "Built a personal AI assistant delivering real-time chat, code generation, AI image generation, and document-based Q&A through a unified FastAPI backend.",
      "Orchestrated multi-step Agentic AI workflows using LangGraph and LangChain, integrating LLMs via the Groq API.",
      "Implemented RAG-based document Q&A with a vector database, integrated Hugging Face's FLUX.1-schnell API for image generation, and connected external AI tools via an MCP Server."
    ]
  },
  {
    title: "VIRTUAL ASSISTANT",
    category: "Full-Stack AI App",
    tools: "React, Node.js, Express, MongoDB, Grok AI, Hugging Face Model, Web Speech API, JWT, bcryptjs, Multer, Cloudinary, Render",
    image: "/images/virtual_assistant.png?v=3",
    link: "https://virtualassistant-2-tdg1.onrender.com",
    points: [
      "Built a JARVIS-style AI assistant with voice input/output using Web Speech API and Grok AI.",
      "Implemented secure login/signup with JWT + bcryptjs and custom assistant image upload via Cloudinary & Multer.",
      "Fully deployed on Render with custom assistant name, branding, and mobile-responsive design."
    ]
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.points && (
                          <ul className="carousel-points">
                            {project.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={(project as any).link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;