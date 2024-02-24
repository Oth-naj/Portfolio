import React from 'react'
import './Skills.css'
import HeartMojie from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../card/Card'
import Resume from './MERN CV.pdf'
import {themeContext} from '../../context';
import { useContext } from 'react';


export default function Skills() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div id='Skills' className="skills">
            <div className="left-skill">
                <span style={{color: darkMode? 'white' : ''}}>Hard Skills</span>
                <span>Services</span>
                <span>
                    As a MERN stack developer, I excel in MongoDB for efficient database design, Express.js for robust server-side applications, React.js for dynamic user interfaces, and Node.js for high-performance server development.
                    <br />
                    My skills encompass the entire web development process, ensuring I can create seamless and engaging applications that meet modern business requirements.
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <div style={{ left: '14rem', }}>
                    <Card
                        emoji={HeartMojie}
                        heading={"BackEnd"}
                        detail={"Rest API, CRUD app, Security, MongoDB, SQL, MySQL"}
                    />
                </div>
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"FrontEnd"}
                        detail={"ReactJs, JQuery, Bootstrap, Tailwind, Responsive"}
                    />
                </div>
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"Other"}
                        detail={"Git & Github, Documentation, Collaboration and Continuous Learning "}
                    />
                </div>
                <div className="blur s-blur1" ></div>
                <div className="blur s-blur2"></div>
            </div>
        </div>
    )
}
