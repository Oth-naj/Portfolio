import React from 'react'
import './Floating.css'


export default function FloatingDiv({image, txt1, txt2}) {

  return (
    <div className="floatingdiv">
        <img className='mern' src={image} alt="" />
        <span>
            {txt1} 
            <br />
            {txt2}
        </span>
    </div>
  )
}
