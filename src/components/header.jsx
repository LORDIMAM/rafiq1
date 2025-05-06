import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import slang from "../assets/images/slang.png";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showDownloadBtn] = useState(1); // State to toggle between showing the button or "stay" text

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu open/close state
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <div className="nav-logo">
                        <RouterLink to="/d">
                            <img src={slang} alt="logo" />
                        </RouterLink>
                    </div>
                    <div className={`nav-menu ${menuOpen ? 'mobile-active' : ''}`}>
                        <ul className="nav-list">
                            <li><ScrollLink to="home" className="nav-list-link" smooth={true} duration={600} offset={25}>Home</ScrollLink></li>
                            <li><ScrollLink to="services" className="nav-list-link" smooth={true} duration={600} offset={25}>Our Services</ScrollLink></li>
                            <li><ScrollLink to="about" className="nav-list-link" smooth={true} duration={600} offset={60}>About Us</ScrollLink></li>
                            <li><ScrollLink to="contact" className="nav-list-link" smooth={true} duration={600} offset={20}>Contact Us</ScrollLink></li>
                        </ul>
                    </div>
                    {showDownloadBtn === 0 ? (
                        <div className={`nav-download-btn ${menuOpen ? 'mobile-active' : ''}`}>
                            <RouterLink to="/" className="download-btn" style={{ textDecoration: "none" }}>
                                <span className="overlay1"></span>
                                <p className="download-btn-text">Download App</p>
                            </RouterLink>
                        </div>
                    ) : (
                        <p></p>
                    )}
                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </nav>
        </header>
    );
}
