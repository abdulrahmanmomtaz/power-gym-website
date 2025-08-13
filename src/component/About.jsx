import React from 'react';
import { FaDumbbell, FaUserCheck, FaClipboardList, FaClock, FaUsers } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  const features = [
    { icon: <FaDumbbell />, title: "Modern equipment" },
    { icon: <FaUserCheck />, title: "Certified personal trainers" },
    { icon: <FaClipboardList />, title: "Customized workout plans" },
    { icon: <FaClock />, title: "24/7 access" },
    { icon: <FaUsers />, title: "Motivating fitness community" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>About Power Gym</h1>
          <p>
            At Power Gym, we believe fitness is more than just lifting weights — it’s about building strength,
            confidence, and a better life. With top-notch equipment, expert trainers, and a supportive community,
            we’re here to help you reach your goals.
          </p>

          <div className="features-grid">
            {features.map((f, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
              </motion.div>
            ))}
          </div>
          <Link to="/src/component/AuthPage.jsx" className="cta-btn">Join us</Link>
        </div>

        <div className="about-video-container">
          <video autoPlay muted loop className="about-video">
            <source src="/6892543-uhd_2160_3840_25fps.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default About;
