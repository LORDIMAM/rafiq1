import React, { useState } from "react";
import { Link } from "react-router-dom";
import rafiqbg from "../assets/images/bg (1).png";
import dot1 from "../assets/images/dot 1.png";
import dot2 from "../assets/images/dot 2.png";
import dot3 from "../assets/images/dot 3.png";
import rafiqOwl from "../assets/images/Rafiq.png";
import googlePlay from "../assets/images/google_play.webp";
import appStore from "../assets/images/apple_store.webp";
import Stay from "../components/stay";
import Header from "../components/header";

export default function Home() {
    const [value] = useState(0);
    return (
        <>
            <section className="home" id="home" name="home">
                <Header />
                <div className="home-hero">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1>Your Companion for a <br />Balanced and Focused Life</h1>
                                <h2 className="highlight"><span></span></h2>
                                <p>Rafiq is a groundbreaking mobile app designed to empower Generation Z to overcome distractions and achieve their goals. With features like task management,
                                    spiritual guidance, and health tracking, Rafiq seamlessly integrates productivity and well-being. Using AI-powered personalization and gamification,
                                    Rafiq transforms daily routines into meaningful progress, helping users stay focused, motivated, and balanced.</p>

                                {value === 1 ? (
                                    <div className="download-buttons">
                                        <div className="download-button1">
                                            <Link to="/"><img src={googlePlay} alt="Google Play" /></Link>
                                        </div>
                                        <div className="download-button2">
                                            <Link to="/"><img src={appStore} alt="App Store" /></Link>
                                        </div>
                                    </div>
                                ) : (
                                    <Stay />
                                )}
                            </div>
                            <div className="hero-image">
                                <img src={rafiqbg} alt="Rafiq bg" className="rafiqbg" />
                                <div className="dot-wrapper">
                                    <img src={dot1} alt="Dot 1" className="dot dot1" />
                                    <img src={dot2} alt="Dot 2" className="dot dot2" />
                                    <img src={dot3} alt="Dot 3" className="dot dot3" />
                                </div>
                                <img src={rafiqOwl} alt="Rafiq Owl" className="rafiqowl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
