import React from "react";
import './index.scss'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        };
    }, []);
    useEffect(()=>{
        if (window.innerWidth <= 800){
            setHeaderClass('header-small-class')
        }else{
            setHeaderClass('header-class')
        }
    }, [headerWidth])

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    const menuClass = isMenuVisible ? 'toggle--visible' : 'toggle--not--visible';

    return(
        <div className={headerClass}>
           <div>
            <img src={require('../../Assets/logo.png')} alt="" />
           </div>
           <div onClick={toggleMenu} className="toggle--menu">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/>
                </svg>
            </div>
            <div className={menuClass}>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/portfolio'} className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink>
                    </li>
                    <li><NavLink to={'about--us'}>About Us</NavLink></li>
                    <li><NavLink to={'/testimonials'}>Testimonials</NavLink></li>
                </ul>
                <button>
                    <NavLink to={'/contact--us'}>Contact Us</NavLink>
                </button>
            </div>
        </div>
    )
}