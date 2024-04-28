import React from "react";
import './index.scss'

export default function ContactUs(){
    return(
        <div className="contact--us">
            <div>
                <h1>Get in touch</h1>
                <div>Write your reviews and suggestions, you can also request for our services</div>
            </div>
            <form className="contact--us--form">
                <div className="name--container">
                    <span className="first--name--container">
                        <label htmlFor="first--name">First Name</label>
                        <input type="text"/>
                    </span>
                    <span className="last--name--container">
                        <label htmlFor="last--name">Last Name</label>
                        <input type="text"/>
                    </span>
                </div>
                <div className="contact--container">
                    <span className="email--container">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="text"/>
                    </span>
                    <span className="phone--number--container">
                        <label htmlFor="phoone--numer">Phone number</label>
                        <input type="text"/>
                    </span>
                </div>
                <div className="message--container">
                    <label htmlFor="message">Write your message</label>
                    <textarea type="text"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}