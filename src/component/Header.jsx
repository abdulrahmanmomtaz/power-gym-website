import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

return (
    <header id="header">
    <nav className="navbar">
        <a href="#" className="logo">
            POWER <span>GYM</span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Facilities</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            <li className="mobile-join"><a href="#" className="btn-join">Join Us</a></li>
        </ul>

        <div className="account desktop-only">
            <a href="#" className="btn-join">Join us</a>
        </div>
    </nav>
    </header>
);
}

export default Header;
