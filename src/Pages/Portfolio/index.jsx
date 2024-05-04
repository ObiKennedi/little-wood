import React from "react";
import './index.scss'

export default function Portfolio(){
    return(
        <div className="portfolio">
            <div>
                <h1>Our Subsidiaries</h1>  
            </div>
            <div>
                <div>
                    <div>
                        <img src={require('../../Assets/recruitment--company.jpg')} alt="logo" />
                    </div>
                    <h1>LITTLEWOOD Recruitment Services</h1>
                    <div>
                        <p>Connecting Talent, Crafting Futures</p>
                        <p>“Empowering businesses with exceptional talent, fostering career growth, and shaping the workforce of tomorrow through innovative and personalized recruitment solutions</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={require('../../Assets/training--institute.jpg')} alt="logo" />
                    </div>
                    <h1>CGTII care-givers training and internship institute.</h1>
                    <div>
                        <p>Compassion in Action, Excellence in Care</p>
                        <p>“Nurturing compassionate care through excellence in training, empowering caregivers to provide outstanding service and support in every community.”</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={require('../../Assets/newspaper.jpg')} alt="logo" />
                    </div>
                    <h1>MEZIEIMO surveillance newspaper</h1>
                    <div>
                        <p>Integrity in Every Story, Clarity in Every Word.</p>
                        <p>“To be the beacon of truth, providing insightful and reliable news that informs, educates, and inspires a global community towards positive change.”</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={require('../../Assets/communication--network.jpg')} alt="logo" />
                    </div>
                    <h1>Peace 73223 communications</h1>
                    <div>
                        <p>Connecting Worlds, Uniting Voices.</p>
                        <p>“Empowering businesses with exceptional talent, fostering career growth, and shaping the workforce of tomorrow through innovative and personalized recruitment solutions</p>
                    </div>
            </div>
                <div>
                    <div>
                        <img src={require('../../Assets/tourism--company.jpg')} alt="logo" />
                    </div>
                    <h1>LITTLEWOOD GLOBAL TRAVELS AND TOURS LIMITED</h1>
                    <div>
                        <p>Adventure Awaits, Memories Await.</p>
                        <p>“Exploring new horizons, we commit to creating unforgettable journeys, fostering cultural exchange, and making the world accessible, one unique travel experience at a time.”</p>
                    </div>
            </div>
            </div>
        </div>
    )
}