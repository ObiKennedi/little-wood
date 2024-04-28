import React from "react";
import './index.scss'
import Herosection from "../../Components/Hero Section";
import OurServices from "../../Components/Our Services";
import AboutUs from "../About Us";
import Portfolio from "../Portfolio";
import ContactUs from "../Contact Us";

export default function Home(){
    return(
        <div className="home">
            <Herosection/>
            <OurServices/>
            <AboutUs/>
            <Portfolio/>
            <ContactUs/>
        </div>
    )
}