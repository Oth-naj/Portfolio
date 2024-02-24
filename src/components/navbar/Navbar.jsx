import React, { useState } from 'react'
import Toggle from '../toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'



export default function Navbar() {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY > 10) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);


    return (
        <div className={color?"n-wrapper color":"n-wrapper"}>
            <div className="n-left">
                <div className="n-name">OTHMAN NAJIB</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
                            <li>About</li>
                        </Link>
                        <Link spy={true} to="Skills" smooth={true}>
                            <li>Skills</li>
                        </Link>
                        <Link spy={true} to="Portfolio" smooth={true}>
                            <li>Projects</li>
                        </Link>
                        <Link spy={true} to="Contact" smooth={true}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="n-social">
                    <Link spy={true} to="Contact" smooth={true}>
                        <button className='n-button button'>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
