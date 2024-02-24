import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css'
import Profile1 from '../../img/profile1.jpg';
import Profile2 from '../../img/profile2.jpg';
import Profile3 from '../../img/profile3.jpg';
import Profile4 from '../../img/profile4.jpg';

export default function Testimonials() {
    const clients = [
        {
            img: Profile1,
            review: "Exceptional web developer! Their keen attention to detail and innovative designs truly set them apart. Timely delivery and seamless communication make working with them a pleasure. Highly recommend for any web project!",
        },
        {
            img: Profile2,
            review: "Outstanding experience! This web developer not only met but exceeded our expectations. Their professionalism and expertise shine through in every aspect of our project. Will definitely collaborate again!",
        },
        {
            img: Profile3,
            review: "Incredible talent! Working with this web developer was a breeze. They quickly grasped our vision and executed it flawlessly. Their dedication to quality and commitment to deadlines make them a top choice!",
        },
        {
            img: Profile4,
            review: "Highly impressed! From start to finish, this web developer demonstrated utmost professionalism and skill. They transformed our ideas into a stunning website, exceeding our expectations. Trustworthy, efficient, and highly recommended!",
        }
    ]


    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get </span>
                <span> Exeptional Work </span>
                <span>from Me ...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>

            <Swiper
                modules={[Pagination]}
                slidePerView={1}
                pagination={{ clickable: true }}
                grabCursor={true}
                loop={true}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>

                        </SwiperSlide>

                    )
                })}


            </Swiper>
        </div>
    )
}
