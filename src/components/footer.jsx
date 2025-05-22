import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Layer_1.png";
import googlePlay from "../assets/images/google_play.webp";
import appStore from "../assets/images/apple_store.webp";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const [value] = useState(0);
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-left">
                        <img src={logo} alt="" className="footer-logo" />
                    </div>
                    <div className="footer-right">
                        {value === 1 ? (
                            <>
                                <p className="get-app">Get the App</p>
                                <div className="store-buttons">
                                    <Link><img src={googlePlay} alt="Google Play" className="store-badge" /></Link>
                                    <Link><img src={appStore} alt="App Store" className="store-badge" /></Link>
                                </div>
                            </>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>

                <hr className="footer-line" />

                <div className="footer-bottom">
                    <p className="copyright">© 2025 Rafiq.studio</p>
                    <div className="social-icons">
                        <Link className="social-icon insta-icon"><FaInstagram /></Link>
                        <Link className="social-icon x-icon"><FaXTwitter /></Link>
                        <Link className="social-icon face-icon"><FaFacebookF /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
