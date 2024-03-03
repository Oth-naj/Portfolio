import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Place1 from '../../img/Portfolio-pic.png'
import Place2 from '../../img/place2.png'
import Place3 from '../../img/place3.png'
import Place4 from '../../img/place4.png'
import 'swiper/css'
import 'swiper/css/autoplay'
import {themeContext} from '../../context';
import { useContext } from 'react';


export default function Portfolio() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

  return (
    <div id='Portfolio' className="portfolio">
        <span style={{color: darkMode? 'white' : ''}}>Resent Projects</span>
        <span>Portfolio</span>

        <Swiper className= "portfolio-slider"
            spaceBetween= {30}
            slidesPerView= {3}
            grabCursor= {true}
            loop= {true}
        >
            <SwiperSlide>
                <img src={Place1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Place2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Place3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Place4} alt="" />
            </SwiperSlide>
        </Swiper>

    </div>

    )
}
