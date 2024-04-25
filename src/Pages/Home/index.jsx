import React from "react";
import './index.scss'
import Herosection from "../../Components/Hero Section";
import OurServices from "../../Components/Our Services";

export default function Home(){
    return(
        <div className="home">
            <Herosection/>
            <OurServices/>
        </div>
    )
}