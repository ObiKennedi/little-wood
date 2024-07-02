import React from "react";
import { useRef } from "react";
import './index.scss';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();
    
    const redirectSuccess = () =>{
        window.location.replace('/successful')
    }
    const redirectError = () =>{
        window.location.replace('/error')
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_mytu8oo', 'template_9i2ro9', form.current, {
            publicKey: 'UjaMzNxMWujdCWimq',
          })
          .then(
            () => {
              redirectSuccess();
            },
            (error) => {
              redirectError();
            },
          );
      };

    return (
        <div className="contact--us">
            <div>
                <h1>Get in touch</h1>
                <div>Write your reviews and suggestions, and request our services.</div>
            </div>
            <form className="contact--us--form" onSubmit={sendEmail}>
                <div className="name--container">
                    <span className="first--name--container">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName" required/>
                    </span>
                    <span className="last--name--container">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" required/>
                    </span>
                </div>
                <div className="contact--container">
                    <span className="email--container">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" id="email" name="email"/>
                    </span>
                    <span className="phone--number--container">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="text" id="phone-number" name="phoneNumber"/>
                    </span>
                </div>
                <div className="message--container">
                    <label htmlFor="message">Write your message</label>
                    <textarea type="text" id="message" name="message" required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
