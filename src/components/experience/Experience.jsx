import React from 'react'
import './Experience.css'
import {themeContext} from '../../context';
import { useContext } from 'react';

export default function Experience() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle" style={{color: darkMode? 'var(--orange)' : ''}}>0</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">0</div>
        <span>Projects</span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div className="circle">0</div>
        <span>Freelance</span>
        <span>Work</span>
      </div>
    </div>
  )
}
