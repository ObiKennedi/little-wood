import React from "react";
import './index.scss';
import { useState } from "react";

export default function ContactUs() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="contact--us">
            <div>
                <h1>Get in touch</h1>
                <div>Write your reviews and suggestions, and request our services.</div>
            </div>
            <form className="contact--us--form" onSubmit={handleSubmit}>
                <div className="name--container">
                    <span className="first--name--container">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName" onChange={handleChange} required/>
                    </span>
                    <span className="last--name--container">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" onChange={handleChange} required/>
                    </span>
                </div>
                <div className="contact--container">
                    <span className="email--container">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="text" id="email" name="email"/>
                    </span>
                    <span className="phone--number--container">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="text" id="phone-number" name="phoneNumber" onChange={handleChange}/>
                    </span>
                </div>
                <div className="message--container">
                    <label htmlFor="message">Write your message</label>
                    <textarea type="text" id="message" name="message" onChange={handleChange} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
