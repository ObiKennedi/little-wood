import React from "react";
import './index.scss'

export default function Footer(){
    return(
        <div className="footer">
            <div>
                <div>
                    <img src={require('../../Assets/logo.png')} alt="logo"/>
                </div>
                <div>
                    <a href="https://x.com/Littlewood77?t=147zx1TkJNj8GInP--Clwg&s=09">
                      <img src={require('../../Assets/twitter--logo.png')} alt="twitter"/>                          
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100089231755013&mibextid=ZbWKwL">
                        <img src={require('../../Assets/facebook--logo.png')} alt="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/littlewood_global?igsh=YzljYTk1ODg3Zg==">
                        <img src={require('../../Assets/instagram--logo.png')} alt="instagram"/>   
                    </a>
                    <a href="https://wa.me/2349164712004">
                        <img src={require('../../Assets/whatsapp--logo.png')} alt="whatsapp"/>
                    </a>
                </div>
                <a href="mailto:littlewoodglobal@gmail.com">
                    <button>Contact Us</button>
                </a>
            </div>
            <div>
                <a href="icons-8.com">Link to icons</a> |
                <a href="mailto:littlewoodglobal@gmail.com"> Customer care</a>
            </div>
            <div>
                <a href="https://wa.me/message/QAY2TEBYCEVIN1">Built by Obi Kennedy</a>
            </div>
        </div>
    )
}