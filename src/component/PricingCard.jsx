import React from 'react';

function PricingCard({ title, price, features }) {
    return (
    <div className="pricing-card">
        <h3>{title}</h3>
        <p className="price">{price}</p>
    <ul>
        {features.map((item, index) => (
            <li key={index}>{item.icon} {item.text}</li>
        ))}
    </ul>
        <button className="cta-btn">Join Now</button>
    </div>
);
}

export default PricingCard;
