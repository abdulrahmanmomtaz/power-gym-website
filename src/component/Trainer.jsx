import React from "react";
import trainercards from "./TrainerCards";
import { FaInstagram } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Trainers() {


return (
    <section id="trainers">
        <h1>Meet Our Trainers</h1>
        <p>Professional coaches to guide you on your journey.</p>

      {/* for small screens */}
    <div className="carousel-wrapper-trainers">

        <div className="pricing-carousel" id="carousel">
        {trainercards.map(({ id, coach, speciality, source, insta }) => (
            <div key={id} className="trainer-card">
                <img src={source} alt={coach} className="trainer-img" />
                <h3>{coach}</h3>
                <p>{speciality}</p>
            {insta?.instagram && (
                <a
                href={insta.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="insta-icon"
                >
                    <FaInstagram size={24} color="#E1306C" />
                </a>
            )}
            </div>
            
        ))}
        </div>
            <div className="scroll-hint">
        <span></span>
    </div>
    </div>

    <div className="trainers-grid">
        {trainercards.map(({ id, coach, speciality, source, insta }) => (
        <div key={id} className="trainer-card">
            <img src={source} alt={coach} className="trainer-img" />
            <h3>{coach}</h3>
            <p>{speciality}</p>
            {insta?.instagram && (
            <a
                href={insta.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="insta-icon"
            >
                <FaInstagram size={24} color="#E1306C" />
            </a>
            )}
        </div>
        ))}
    </div>
    </section>
);
}

export default Trainers;
