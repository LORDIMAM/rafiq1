import React, { useState } from 'react';
import contact from '../assets/images/contact.png';
import { FaEnvelope, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        const nameRegex = /^[A-Za-z\s'-]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (!nameRegex.test(formData.name.trim())) {
            newErrors.name = 'Name must contain only letters, spaces';
        } else if (formData.name[0] === ' ') {
            newErrors.name = 'Name cannot start with a space';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters long';
        } else if (formData.name.length > 50) {
            newErrors.name = 'Name must not exceed 50 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email is not valid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 8 || formData.message.length > 255) {
            newErrors.message = 'Message must be 8 to 255 characters long';
        } else if (!nameRegex.test(formData.message.trim())) {
            newErrors.message = 'Special characters are not allowed';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Message sent successfully!');
            console.log(formData);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    return (
        <section className='contact-hero' id='contact' name='contact'>
            <div className="contact-container">
                <div className='contact-hero-image'>
                    <img src={contact} alt='Contact Us' />
                </div>
                <div className='contact-hero-text'>
                    <p>Stay connected with Rafiq for the latest tips, reminders, and tools to boost your focus, health, and spirituality!</p>
                </div>

                <div className='contact-hero-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="input-row">
                            <div className="input-wrapper">
                                <FaUser className="input-icon" />
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="error user-error">{errors.name}</span>}
                            </div>
                            <div className="input-wrapper">
                                <FaEnvelope className="input-icon" />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error email-error">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <MdMessage className="input-icon" />
                            <textarea
                                name='message'
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                minLength={8}
                                maxLength={255}
                            />
                            {errors.message && <span className="error user-error">{errors.message}</span>}
                        </div>
                        <button type='submit'><span className='overlay1'></span>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}