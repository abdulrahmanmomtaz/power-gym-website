import React from 'react';
import PricingCard from './PricingCard';
import {
    FaDumbbell,
    FaUserCheck,
    FaClock,
    FaUtensils,
    FaBan,
    FaLeaf,
} from 'react-icons/fa';

function Pricing() {
const plans = [
    {
        title: 'Basic',
        price: '$29/month',
        features: [
        { icon: <FaDumbbell />, text: 'Gym Access' },
        { icon: <FaBan />, text: 'No Personal Trainer' },
        { icon: <FaClock />, text: 'Limited Time Access' },
        { icon: <FaBan />, text: 'No Diet Plan' },
    ],
    },
    {
        title: 'Standard',
        price: '$49/month',
        features: [
        { icon: <FaDumbbell />, text: 'Full Gym Access' },
        { icon: <FaUserCheck />, text: '2 Trainer Sessions' },
        { icon: <FaLeaf />, text: 'Diet Consultation' },
        { icon: <FaClock />, text: '24/7 Access' },
    ],
    },
    {
        title: 'Premium',
        price: '$79/month',
        features: [
        { icon: <FaDumbbell />, text: 'Full Gym + Group Classes' },
        { icon: <FaUserCheck />, text: 'Unlimited Trainer Sessions' },
        { icon: <FaUtensils />, text: 'Custom Diet & Workout Plan' },
        { icon: <FaLeaf />, text: 'Free Supplements' },
    ],
    },
];

return (
    <section id="pricing" className="pricing-section">
        <h2 className="section-title">Our Pricing Plans</h2>
        <p className="section-subtitle">Choose the plan that suits your goals</p>

      {/* Carousel for small screens */}
        <div className="carousel-wrapper-pricing">
        <div className="pricing-carousel" id="carousel">
        {plans.map((plan, index) => (
            <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
            />
        ))}
        </div>
        <div className="scroll-hint">
  <span></span>
</div>

    </div>

      {/* Grid for large screens */}
    <div className="pricing-grid">
        {plans.map((plan, index) => (
            <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
        />
        ))}
    </div>
    </section>
);
}

export default Pricing;
