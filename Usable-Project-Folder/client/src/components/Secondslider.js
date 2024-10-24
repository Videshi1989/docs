import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, A11y,Autoplay } from './../../node_modules/swiper/modules';    //
import './../../node_modules/swiper/swiper-bundle.min.css'     //
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'
import img6 from './Images/img6.jpg'

export default function Secondslider()
{
    //for mobile view responsive
    var slidecount=4;
    var screenwidth = window.innerWidth;
    if(screenwidth >= 360 && screenwidth <= 767)
    {
        slidecount=1;
    }
    else
    {
        slidecount=4;
    }
    //

    return(
        <>
        <br/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                <Swiper   modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={20}
      slidesPerView={slidecount}
      navigation
      autoplay={true}
     
        >

            <SwiperSlide><img loading='lazy'  alt="img" src={img1} className='sliderimg'/></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img"  src={img2} className='sliderimg'/></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img" src={img3} className='sliderimg'/></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img" src={img4} className='sliderimg'/></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img" src={img5} className='sliderimg'/></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img" src={img6} className='sliderimg'/></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img" src={img3} className='sliderimg'/></SwiperSlide>
            <SwiperSlide><img loading='lazy'  alt="img" src={img4} className='sliderimg'/></SwiperSlide>
        
        </Swiper>
                </div>
            </div>
        </div>
       
        </>
    )
}