import React from 'react'
import {Link} from 'react-router-dom'
import {Swiper,SwiperSlide} from 'swiper/react'

import { Navigation, Pagination, A11y,Autoplay } from './../../node_modules/swiper/modules';    //
import './../../node_modules/swiper/swiper-bundle.min.css'     //

import closebtn from './Images/closebtn.png'
import grocery from './Images/grocery.png'
import offer from './Images/offer.png'
import desktop from './Images/desktop.png'
import laptop from './Images/laptop.png'
import toy from './Images/toy.png'
import mobile from './Images/mobile.png'
import fashion from './Images/fashion.png'
import electronincs from './Images/electronincs.png'
import furniture from './Images/furniture.png'
import appliences from './Images/appliences.png'
import beauty from './Images/beauty.png'
import category from './Images/category.png'
import footwear from './Images/footwear.png'
import watch from './Images/watch.png'



export default function Categoryslider()
{
        //for mobile view responsive
        var slidecount=4;
        var spaceBetween=20;
        var screenwidth = window.innerWidth;
        if(screenwidth >= 360 && screenwidth <= 767)
        {
            slidecount=6;
            spaceBetween=0;
        }
        else
        {
            slidecount=13;
            spaceBetween=10;
        }

        // To show subcategory
        function ShowSubCategory()
        {
          document.getElementById('popupsubcategory').style='display:block';
         
        }
        function CloseSubCategory()
        {
          document.getElementById('popupsubcategory').style='display:none';
        }

    return(
        <>
        <br/>
        
        <div id="popupsubcategory" className="overlay" style={{display:'none'}}>

<div className="popup-subcategory animate-zoom">
 
  
  <span onClick={CloseSubCategory}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
  <div className="side-nav-categories">
<div className="title"><strong>Electronincs</strong></div>
      <div className='subcatheight' id='subcat-scroll'>
        <ul className="sub-category-tabs">
            <li><Link to="/allproductview1"><i class="fa fa-circle crclesub" aria-hidden="true"></i> Refrizrator</Link></li>
            <li><hr /></li>
            <li><Link to="/allproductview2"><i class="fa fa-circle crclesub" aria-hidden="true"></i> Cooler</Link></li>
            <li><hr /></li>
            <li><Link to="/allproductview1"><i class="fa fa-circle crclesub" aria-hidden="true"></i> Table Fan</Link></li>
            <li><hr /></li>
            <li><Link to="/allproductview1"><i class="fa fa-circle crclesub" aria-hidden="true"></i> Celling Fan</Link></li>
            <li><hr /></li>
            <li><Link to="/allproductview1"><i class="fa fa-circle crclesub" aria-hidden="true"></i> Mixer</Link></li>
            <li><hr /></li>
            <li><Link to="/allproductview1"><i class="fa fa-circle crclesub" aria-hidden="true"></i> Iron</Link></li>
        </ul>
      </div>
</div>
</div> 

</div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-1 mobdnone'>
                <div className="category-image text-center" style={{border:'none'}}>
                     <div title="Grocery">
                        <img loading='lazy'  src={category} alt="img" />
                     </div>
                     <span>Category</span>
                   </div>
                </div>
                <div className='col-11 mobwidth100'>
                <Swiper className='sswp'  modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidecount}
      navigation
      autoplay={false}
      
        >

            <SwiperSlide className='parentcat' >
                <div className="category-image text-center">
                     <div title="Grocery">
                        <img loading='lazy'  src={grocery} alt="grocery" />
                     </div>
                     <span>Grocery</span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat' onClick={ShowSubCategory}>
                    <div className="category-image text-center">
                     <div title="Electronics">
                        <img loading='lazy'  src={electronincs} alt="Electronics" />
                     </div>
                     <span>Electronics <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                     </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Appliances">
                        <img loading='lazy'  src={appliences} alt="Appliances" />
                     </div>
                     <span>Appliances</span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Laptops">
                        <img loading='lazy'  src={laptop} alt="Laptops" />
                     </div>
                     <span>Laptops</span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Beauty">
                        <img loading='lazy'  src={beauty} alt="Beauty" />
                     </div>
                     <span>Beauty</span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Mobiles">
                        <img loading='lazy'  src={mobile} alt="Mobiles" />
                     </div>
                     <span>Mobiles</span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat' onClick={ShowSubCategory}>
                    <div className="category-image text-center">
                     <div title="Fashion">
                        <img loading='lazy'  src={fashion} alt="Fashion" />
                     </div>
                     <span>Fashion <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Furniture">
                        <img loading='lazy'  src={furniture} alt="Furniture" />
                     </div>
                     <span>Furniture <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                   </div>

            </SwiperSlide>
            <SwiperSlide className='parentcat' onClick={ShowSubCategory}>
            <div className="category-image text-center">
                     <div title="Toys">
                        <img loading='lazy'  src={toy} alt="Toys" />
                     </div>
                     <span>Toys <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Computers">
                        <img loading='lazy'  src={desktop} alt="Computers" />
                     </div>
                     <span>Computers</span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Watch">
                        <img loading='lazy'  src={watch} alt="Watch" />
                     </div>
                     <span>Watch</span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Footwear">
                        <img loading='lazy'  src={footwear} alt="Footwear" />
                     </div>
                     <span>Footwear</span>
                   </div>
            </SwiperSlide>
            <SwiperSlide className='parentcat'>
            <div className="category-image text-center">
                     <div title="Offers">
                        <img loading='lazy'  src={offer} alt="Offers" />
                     </div>
                     <span>Offers</span>
                   </div>
            </SwiperSlide>
         </Swiper>
                </div>
            </div>
        </div>
       
        </>
    )
}