import React from 'react';

function ServiceCard({ icon, title, description, image }) {
return (
    <div className="service-card">
        <img src={image} alt={title} className="service-image" />
        <div className="service-content">
        <h3>{icon} {title}</h3>
        <p>{description}</p>
    </div>
    </div>
);
}

export default ServiceCard;


