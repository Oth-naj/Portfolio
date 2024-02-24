import React, { useEffect } from 'react'
import './Home.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Othman from '../../img/othman.png'
import JavaScript from '../../img/JavaScript.png'
import Problem from '../../img/problem.png'
import MERN from '../../img/mern-stack.png'
import FloatingDiv from '../floating/FloatingDiv'
import { themeContext } from '../../context';
import { useContext } from 'react';
import Typed from 'typed.js';




export default function Home() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        var typed = new Typed('.element', {
            strings: ["Full Stack Web Developer", "Freelancer", "& a Problem Solver"],
            typeSpeed: 50,
            backDelay: 500,
            startDelay: 1000,
            fadeOut: true,
            loop: true
        });
    }, [])

    return (
        <div id='Home' className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hello, I Am a</span>
                    <span className='element'></span>
                    <span>Welcome to my personal portfolio,I am a Full stack Web/Mobile developer with a passion for crafting seamless web and mobile applications. Proficient in MongoDB, ExpressJs, ReactJs and NodeJs, I bring a strong foundation in full-stack development. Skilled in creating responsive and dynamic user interfaces, optimizing performance, and implementing robust backend functionalities. Committed to staying current with emerging technologies and delivering high-quality, user-centric solutions.
                    </span>
                </div>
                <button className='button i-button'>Hire Me! </button>
                <div className="i-icons">
                    <a href="https://github.com/Oth-naj" target="_blank"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/othman-najib/" target="_blank"><img src={LinkedIn} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Othman} alt="" />
                <img
                    src={MERN} alt="" />
                <div className='title1'>
                    <FloatingDiv image={JavaScript} txt1='Web' txt2='Developer' />
                </div>
                <div className="title2">
                    <FloatingDiv image={Problem} txt1='Problem' txt2='Solver' />
                </div>
                <div className="blur1"></div>
                <div className="blur2"></div>
            </div>
        </div>
    )
}
