import React, { useRef } from 'react';
import ServiceCard from './ServiceCard';
import Pricing from './Pricing';
import { FaDumbbell, FaUsers, FaAppleAlt, FaHotTub } from 'react-icons/fa';

function Services() {
const carouselRef = useRef(null);


return (
    <section id="services" className="services-section">
        <h1>Our Services</h1>
        <p>Explore what we offer to boost your fitness journey.</p>

    <div className="carousel-wrapper">
        <div className="services-carousel" ref={carouselRef}>
            <ServiceCard
            icon={<FaDumbbell />}
            title="Personal Training"
            description="One-on-one sessions with expert trainers."
            image="/Personal-Training-1024x683.webp"
        />
        <ServiceCard
            icon={<FaUsers />}
            title="Group Classes"
            description="Fun & effective workouts in groups."
            image="/Group Classes.jpj.webp"
        />
        <ServiceCard
            icon={<FaAppleAlt />}
            title="Nutrition Coaching"
            description="Custom meal plans and healthy guidance."
            image="/Nutrition Coaching.jpj.webp"
        />
        <ServiceCard
            icon={<FaHotTub />}
            title="Sauna & Recovery"
            description="Relax and recharge after workouts."
            image="/Sauna & Recovery.jpg"
        />
        </div>
    </div>

    <Pricing />
    </section>
);
}

export default Services;
