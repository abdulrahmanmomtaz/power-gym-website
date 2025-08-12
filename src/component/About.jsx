import React from 'react';
import { FaDumbbell, FaUserCheck, FaClipboardList, FaClock, FaUsers } from 'react-icons/fa';
import { motion } from "framer-motion";

function About() {
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
            <motion.ul className="features-list"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                >
            <li><FaDumbbell /> Modern equipment</li>
            <li><FaUserCheck /> Certified personal trainers</li>
            <li><FaClipboardList /> Customized workout plans</li>
            <li><FaClock /> 24/7 access</li>
            <li><FaUsers /> Motivating fitness community</li>
            </motion.ul>
            <button className="cta-btn">Join Us Today</button>
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
