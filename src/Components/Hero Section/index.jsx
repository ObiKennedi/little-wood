import React from "react";
import './index.scss'

export default function Herosection(){
    return(
        <div className="herosection">
        <div>
            <div>Welcome to</div>
            <h1>LITTLEWOOD GLOBAL SERVICES</h1>
            <div>A leading group of companies that has been empowering individuals to explore the world and unlock new opportunities for the past 15 years</div>
            <button>
                <a href="mailto:">Get in touch</a>
            </button>
        </div>
        <div>
            <img src={require('../../Assets/logo.png')} alt="logo"/>
        </div>
       </div>
    )
}