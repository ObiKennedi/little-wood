import React from "react";
import './index.scss'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
           <div>
            <img src={require('../../Assets/logo.png')} alt="" />
           </div>
           <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Portfolio</Link></li>
                <li><Link to={'/'}>About Us</Link></li>
                <li><Link to={'/'}>Testimonials</Link></li>
            </ul>
           </div>
           <div>
            <button>
                <Link to={'/'}>Contact Us</Link>
            </button>
           </div>
        </div>
    )
}