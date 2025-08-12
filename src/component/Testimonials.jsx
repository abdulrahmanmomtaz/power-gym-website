import FeedbackCards from "./FeedbackCards";
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
function Testimonials(){
    const renderStars = (count) => {
    return [...Array(5)].map((_, i) =>
        i < count ? <FaStar key={i} color="#FFD700" /> : <FaRegStar key={i} color="#ccc" />
    );
    };
    return (
        <section  id="testimonials">
            <h1>What Our Clients Say</h1>
            <p>Real experiences from our fitness community.</p>
            <div className="testimonials-grid">
                {
                    FeedbackCards.map(({ id, Name, photo, stars, message }) => {
                        return (
                            <div className="testimonial-card" key={id} >
                                <img src={photo} alt={Name} className="testimonial-img" />
                                <h3>{Name}</h3>
                                <div className="testimonial-stars" >
                                    {renderStars(stars)}
                                </div>
                                <p>{message}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Testimonials ;