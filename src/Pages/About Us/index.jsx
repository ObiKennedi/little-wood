import React from "react";
import './index.scss'

export default function AboutUs(){
    return(
        <div className="about--us">
            <div>
                <img src={require('../../Assets/About.png')} alt="" />
            </div>
            <div>
                <h1>About Us</h1>
                <div>
                    <p>Littlewood Global is a leading group of companies that has been empowering individuals to explore the world and unlock new opportunities for the past 15 years. As a trusted partner, we specialize in facilitating international travel, overseas employment, and skill development programs.</p>
                    <p>At the core of our business activities, we offer a comprehensive suite of services that cater to the diverse needs of our clients. From organizing enriching tourism experiences abroad to securing rewarding work placements overseas, our team of experts is dedicated to opening up the global landscape for our customers.</p>
                    <p>To date, Littlewood Global has proudly sent over 300 individuals on transformative journeys. Some have embarked on unforgettable travel adventures, while others have found fulfilling career paths in international markets. Additionally, we have equipped numerous clients with valuable skills and qualifications, equipping them with the tools to thrive in the global workforce.</p>
                    <p>Our undiluted commitment to client success, coupled with our extensive industry knowledge and global network, has solidified Littlewood Global's reputation as a trusted partner for those seeking to expand their horizons. As we continue to grow and innovate, our mission remains steadfast - to inspire and enable individuals to embrace the world beyond their borders and unlock their full potential.</p>
                </div>
            </div>
        </div>
    )
}