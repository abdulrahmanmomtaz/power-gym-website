import React, { useRef } from "react";

function Gallery() {
const carouselRef = useRef(null);


return (
    <section id="gallery">
    <h2>Our Facilities</h2>
    <p>Check out some shots from our gym and training areas.</p>

    <div className="gallery-wrapper">
        <div className="gallery-grid" ref={carouselRef}>
        <img src="/gym1.jpg" alt="Gym equipment" />
        <img src="/gym2.jpg" alt="Training area" />
        <img src="/gym3.jpg" alt="Group workout" />
        </div>
    </div>
        <div className="scroll-hint">
        <span></span>
    </div>

    <div className="gallery-note">
        <h3>🔥 Looks good? It’s even better in real life!</h3>
        <p>Come and visit us to experience it yourself 👀</p>
        <p>Your <strong>first class</strong> is completely <strong>FREE</strong> 💪</p>
        <button className="cta-btn">Book Now</button>
    </div>
    </section>
  );
}

export default Gallery;
