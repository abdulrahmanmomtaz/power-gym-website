import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function footer (){
    return (
    <footer id="footer">
    <div className="footer-content">
        <h2 className="logo">Fitness Club</h2>

        <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
        </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
        </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
        </a>
        </div>
    </div>

    <p className="copyright">
        &copy; {new Date().getFullYear()} Fitness Club. All rights reserved.
    </p>
    </footer>
  );
}

export default footer;