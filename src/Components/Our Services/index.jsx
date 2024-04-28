import React from "react";
import './index.scss'
import Skill from "../Skill";

export default function OurServices(){
    return(
        <div className="our--services">
            <h1>Our Services</h1>
            <div>
                <Skill serviceName={'Traveling and Tourism'} serviceLogo={require('../../Assets/tourism--logo.jpg')} serviceWriteUp={'Embark on an adventure of a lifetime with Littlewood, your trusted companion in travel. Our passion for exploration and commitment to excellence ensures that every trip you take with us is not just a journey, but a tapestry of vivid experiences and cherished memories.'}/>
                <Skill serviceName={'Recruitment services'} serviceLogo={require('../../Assets/recruitment--logo.jpg')} serviceWriteUp={'At Littlewood global services, we specialize in opening doors to international career opportunities. Our mission is to seamlessly connect ambitious professionals with leading global organizations.'}/>
                <Skill serviceName={'Caregivers training'} serviceLogo={require('../../Assets/training--logo.jpg')} serviceWriteUp={'At Littlewood global services, we are dedicated to cultivating a community of skilled and empathetic caregivers. Our programs are designed to empower individuals with the knowledge and compassion needed to provide exceptional care.'}/>
            </div>
        </div>
    )
}