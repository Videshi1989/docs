import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, A11y,Autoplay } from './../../node_modules/swiper/modules';    //
import './../../node_modules/swiper/swiper-bundle.min.css'     //
import laptop1 from './../components/Images/laptop1.jpg'
import laptop2 from './../components/Images/laptop2.jpg'
import laptop3 from './../components/Images/laptop3.jpg'
import laptop4 from './../components/Images/laptop4.jpg'
import laptop5 from './../components/Images/laptop5.jpg'
import laptop6 from './../components/Images/laptop6.jpg'


export default function Relatedproducts()
{
      //for mobile view responsive
      var slidecount=4;
      var spaceBetween=20;
      var screenwidth = window.innerWidth;
      if(screenwidth >= 360 && screenwidth <= 767)
      {
          slidecount=1;
          spaceBetween=0;
      }
      else
      {
          slidecount=4;
          spaceBetween=20;
      }
      //

    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                <h5 className='prod-heading'>Related Products</h5>
                </div>
            </div>
        </div>
        
        <div className='container-fluid'>
            <div className='row'>
            
                <div className='col'>
                
                <Swiper   modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidecount}
      navigation
      autoplay={true}
      
        >

            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={laptop1} />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">HP Laptop</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>50,000</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>80,000</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={laptop2} />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Dell Laptop</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>40,000</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>50,000</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={laptop3} />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Dell Laptop</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>40,000</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>60,000</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={laptop4} />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Dell Laptop</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>55,000</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>70,000</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={laptop5} />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Apple Laptop</span>
                     <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>90,000</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>1,00,000</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={laptop6} />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Apple Laptop</span>
                     <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>80,000</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>1,00,000</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
           

        </Swiper>
                </div>
            </div>
        </div>
       
        </>
    )
}