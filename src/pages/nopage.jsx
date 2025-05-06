import React from "react";
import { Link } from "react-router-dom";
import dizzyrafiq from "../assets/images/dizzy Rafiq 1.png";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Error404() {
    return (
        <>
            <div className="error404-container">
                <Header />
                <div className="not-found-container">
                    <div className="not-found-content">
                        <div className="not-found-image">
                            <img src={dizzyrafiq} alt="Injured Owl" />
                        </div>
                        <div className="not-found-text">
                            <h1 className="not-found-title">PAGE NOT FOUND!</h1>
                            <h2 className="not-found-subtitle">Rafiq Lost His Way!</h2>
                            <p className="not-found-message">
                                Uh-oh! It looks like Rafiq took a wrong turn while trying to guide you.
                                Don't worry, he's just a little dizzy from all the exploring. Our friendly
                                assistant will be back on track soon!
                            </p>
                            <div className="back-home-btn">
                                <Link to="/" className="back-home-link">
                                    <span className="overlay2"></span>
                                    <p className="back-btn-text">Back home</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
