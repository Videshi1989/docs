import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, A11y,Autoplay } from './../../node_modules/swiper/modules';    //
import './../../node_modules/swiper/swiper-bundle.min.css'     //
import { Link } from 'react-router-dom';
import ayurvedic from './Images/ayurvedic.png'
import product1 from './Images/product1.jpg'
import product2 from './Images/product2.jpg'
import product3 from './Images/product3.jpg'
import product4 from './Images/product4.jpg'
import product5 from './Images/product5.jpg'
import product6 from './Images/product6.jpg'

export default function Thirdslider()
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
      <div className='parentoffer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 mobwidth100'>
                    <div className='text-center category-name'>
                        <div className='child-category-name'>
                        <Link to="/allproductview2"><img loading='lazy'  title="View all product" src={ayurvedic} alt="Ayurvedic" className='catsymblimg mobheadingimg'/></Link>
                        <h2 className='prod-heading'>Ayurvedic Medicine</h2><br className='mobdnone'/>
                        <Link to="/allproductview2" title="View all product">View all product <i className="fa fa-eye" aria-hidden="true"></i></Link>
                        </div>
                        
                    </div>
                </div>
                <div className='col-10 mobwidth100 padd-0 firstproduct'>
                <Swiper   modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidecount}
      navigation
      autoplay={true}
      
        >

            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={product1} className='img-fluid' />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Patanjali divya swastik koronil kit</span>
                     <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='off-span'>13% off</span></p>
                     {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div> 
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div>  */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={product2} className='img-fluid' />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Patanjali divya cardiogrit gold</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={product3} className='img-fluid' />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Patanjali divya madhu grit</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={product4} className='img-fluid' />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Patanjali divya immunogrit</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={product5} className='img-fluid' />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Patanjali divya lavo grit</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='parent-items-div'>
                <div className='items-div'>
                    <img loading='lazy'  alt="img" title="product name" src={product6} className='img-fluid' />
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <span className='sp spmobile' title="product name">Patanjali divya bp grit</span>
                    <p><span className="left-span spmobile"><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='price right-span spmobile'><i className="fa fa-inr " aria-hidden="true"></i>100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
            </SwiperSlide>
           

        </Swiper>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}