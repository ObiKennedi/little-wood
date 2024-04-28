import React from "react";
import './index.scss'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(){

    const [headerWidth, setHeaderWidth] = useState(window.innerWidth);
    const [headerClass, setHeaderClass] = useState('header-class')
    useEffect(()=>{
        const handleResize = () =>{
            setHeaderWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () =>{
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    useEffect(()=>{
        if (window.innerWidth <= 700){
            setHeaderClass('header-small-class')
        }else{
            setHeaderClass('header-class')
        }
    }, [headerWidth])

    return(
        <div className={headerClass}>
           <div>
            <img src={require('../../Assets/logo.png')} alt="" />
           </div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/portfolio'}>Portfolio</Link></li>
                <li><Link to={'about--us'}>About Us</Link></li>
                <li><Link to={'/'}>Testimonials</Link></li>
            </ul>
            <div>
            </div>
            <button>
                <Link to={'/'}>Contact Us</Link>
            </button>
        </div>
    )
}