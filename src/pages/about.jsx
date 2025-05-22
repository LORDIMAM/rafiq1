import React from "react";
import manager from "../assets/images/Manager 2.png";
import doctor from "../assets/images/Doctor Rafiq 2.png";
import big from "../assets/images/Big Rafiq.png";
import sheikh from "../assets/images/Muslim Rafiq.png";
import rafiqx from "../assets/images/RafiqX.png";

export default function About() {
    return (
        <section className="about-hero" id="about" name="about">
            <div className="about-container">
                <div className="rafiq-card">
                    <div className="card-top">
                        <div className="rafiq-image">
                            <img src={manager} alt="Manager Rafiq" className="manager-img" />
                        </div>
                        <div className="rafiq-header">
                            <h3>Manager Rafiq</h3>
                            <p className="role">your personal task manager</p>
                        </div>
                    </div>
                    <p className="desc">
                        Together, we will conquer your to-do list and keep your routines on track.
                        From setting priorities to managing your daily schedule, I am here to help
                        you stay organized, productive, and stress-free.
                    </p>
                </div>

                <div className="rafiq-card">
                    <div className="card-top">
                        <div className="rafiq-image">
                            <img src={doctor} alt="Doctor Rafiq" className="doctor-img" />
                        </div>
                        <div className="rafiq-header">
                            <h3>Doctor Rafiq</h3>
                            <p className="role">your health companion</p>
                        </div>
                    </div>
                    <p className="desc">
                        I will make sure you never miss a medication, and keep your wellness on track.
                        From gentle reminders to helpful tips, I am here to support your journey
                        to better health every step of the way.
                    </p>
                </div>

                <div className="rafiq-card">
                    <div className="card-top">
                        <div className="rafiq-image">
                            <img src={big} alt="Big Rafiq" className="big-img" />
                        </div>
                        <div className="rafiq-header">
                            <h3>Big Rafiq</h3>
                            <p className="role">your workout buddy</p>
                        </div>
                    </div>
                    <p className="desc">
                        Whether it is tracking your steps, reminding you to hydrate, or guiding
                        your daily workouts, I am here to keep you energized and on track. Let's
                        smash those fitness goals together, one rep at a time.
                    </p>
                </div>

                <div className="rafiq-card">
                    <div className="card-top">
                        <div className="rafiq-image">
                            <img src={sheikh} alt="Sheikh Rafiq" className="sheikh-img" />
                        </div>
                        <div className="rafiq-header">
                            <h3>Sheikh Rafiq</h3>
                            <p className="role">your faith companion</p>
                        </div>
                    </div>
                    <p className="desc">
                        From prayer reminders to daily adhkar and Quran readings, I am here to help
                        you stay connected with your faith. Let's walk this path together,
                        strengthening your soul and uplifting your heart.
                    </p>
                </div>

                <div className="rafiq-card">
                    <div className="card-top">
                        <div className="rafiq-image">
                            <img src={rafiqx} alt="Rafiq X" className="rafiqx-img" />
                        </div>
                        <div className="rafiq-header">
                            <h3>Rafiq X</h3>
                            <p className="role">your 24/7 assistant</p>
                        </div>
                    </div>
                    <p className="desc">
                        Got a question? Need a tip? I am here to guide you, remind you, and make
                        your journey smoother. Let's chat and get things done together!
                    </p>
                </div>
            </div>
        </section>
    );
}
