import React from "react";
import './index.scss'

export default function Skill({serviceName, serviceLogo, serviceWriteUp}){
    return(
        <div className="skill">
            <img src={serviceLogo} alt="service--logo" />
            <div>
                <h1>{serviceName}</h1>
                <div>{serviceWriteUp}</div>
            </div>
        </div>
    )
}