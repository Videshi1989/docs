import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, A11y,Autoplay } from './../../node_modules/swiper/modules';    //
import './../../node_modules/swiper/swiper-bundle.min.css'     //
import slider1 from './Images/slider1.jpg'
import slider2 from './Images/slider2.jpg'
import slider3 from './Images/slider3.jpg'
import slider4 from './Images/slider4.jpg'

export default function Firstslider()
{
    return(
        <>
        <div className='slidersetup'>
        <Swiper   modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={true}
      
        >

            <SwiperSlide><img loading='lazy'  alt="img" src={slider1} className='topimg'/></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img"  src={slider2} className='topimg' /></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img" src={slider3} className='topimg' /></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img" src={slider4} className='topimg' /></SwiperSlide>

        </Swiper>
        </div>
        </>
    )
}