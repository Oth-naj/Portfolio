import React from 'react'
import './Work.css'
import Placeholder from '../../img/Placeholder1.png'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import {themeContext} from '../../context';
import { useContext } from 'react';


export default function Works() {
    
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className="works">
            <div className="left-skill">
                <span  style={{color: darkMode? 'white' : ''}}>Freelance Work</span>
                <span>Clients & Brands</span>
                <span>
                    As a MERN stack developer, I excel in MongoDB for efficient database design,
                    <br />
                    Express.js for robust server-side applications, React.js for dynamic user interfaces,
                    <br />
                    and Node.js for high-performance server development.
                    <br />
                    My skills encompass the entire web development process, ensuring I can create seamless and engaging applications that meet modern business requirements.
                </span>
                <button className='button s-button'>Open To Work</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Placeholder} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Placeholder} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Placeholder} alt="" />
                    </div>
                </div>
                <div className="w-backCircle blueCircle" style={{color: darkMode? 'blue' : ''}}></div>
                <div className="w-backCircle yellowCircle" style={{color: darkMode? 'orange' : ''}}></div>
            </div>
        </div>
    )
}
