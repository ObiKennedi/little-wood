import React from "react";
import './index.scss'
import Herosection from "../../Components/Hero Section";
import OurServices from "../../Components/Our Services";
import AboutUs from "../About Us";
import Portfolio from "../Portfolio";
import ContactUs from "../Contact Us";
import Testimonials from "../Testimonials";

export default function Home(){
    return(
        <div className="home">
            <Herosection/>
            <OurServices/>
            <AboutUs/>
            <Portfolio/>
            <Testimonials/>
            <ContactUs/>
        </div>
    )
}