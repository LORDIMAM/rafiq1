import React from "react";
import spiritual from "../assets/images/moon.png";
import routine from "../assets/images/time-management 1.png";
import health from "../assets/images/heart-beat 1.png";
import workout from "../assets/images/dumbbell (1) 1.png";
import chatbot from "../assets/images/bot 1.png";


export default function Services() {
    return (
        <>
            <section className="services" id="services" name="services">
                {/* <h3 className="services-subtitle">Unique and Different</h3> */}
                <h2 className="services-title">Our Services</h2>
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-card-img">
                                <img src={spiritual} alt="Spiritual Practices" className="services-img spiritual-img" />
                                <span className="sevice-img-bg"></span>
                            </div>
                            <h4>Spiritual Practices</h4>
                            <p>Tailored tips to suit your interests.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-img">
                                <img src={routine} alt="Routine Management" className="services-img routine-img" />
                                <span className="sevice-img-bg routine-bg"></span>
                            </div>
                            <h4>Routine Management</h4>
                            <p>Explore with professional local guides.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-img">
                                <img src={health} alt="Health Care" className="services-img health-img" />
                                <span className="sevice-img-bg"></span>
                            </div>
                            <h4>Health Care</h4>
                            <p>Comfortable and hassle-free travel options.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-img workout-img">
                                <img src={workout} alt="Workout and Fitness" className="services-img workout-img" />
                                <span className="sevice-img-bg"></span>
                            </div>
                            <h4>Workout and Fitness</h4>
                            <p>Expert tips for unforgettable experiences.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-img">
                                <img src={chatbot} alt="Chatbot" className="services-img" />
                                <span className="sevice-img-bg"></span>
                            </div>
                            <h4>Chatbot</h4>
                            <p>Expert tips for unforgettable experiences.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}