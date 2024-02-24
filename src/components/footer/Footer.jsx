import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'


export default function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <div className="f-address">
              <span> &copy; OTHMAN NAJIB </span>
            <span>najjibo@outlook.com</span>
            </div>
            <div className="f-icons">
                <a href=""><Insta color='white' size='3rem'/></a>
                <a href="https://www.linkedin.com/in/othman-najib/" target="_blank"><Linkedin color='white' size='3rem'/></a>
                <a href="https://github.com/Oth-naj" target="_blank"><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}
