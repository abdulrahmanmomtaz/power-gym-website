import React from 'react';
function Home() {
    return (
    <section id="home">
        <div className="container">
        <video autoPlay muted loop className="hero-video">
            <source src="/6388427-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="home-content">
            <h1>Build Your Power With Us!</h1>
            <p>Join Power Gym and change your life today.</p>
            <a href="#contact" className="cta-btn">Get Started</a>
        </div>
        </div>
    </section>
    );
} 

export default Home;
