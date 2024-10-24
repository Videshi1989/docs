import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import Headeruser from './Headeruser'
import Footer from '../components/Footer'
import './../components/css/index.scss'
import closebtn from './../components/Images/closebtn.png'
import loader from './../components/Images/loader.png'
import camera from './../components/Images/camera.jpg'
import product1 from './../components/Images/product1.jpg'
import product2 from './../components/Images/product2.jpg'
import exclamation from "./../components/Images/exclamation.svg";
import ele1 from './../components/Images/ele1.jpg'
import ele2 from './../components/Images/ele2.jpg'

import Sidebar from './Sidebar'

export const Mywishlist = () => {
    const[showloader,Setshowloader] = useState(true);     //loading effect
  
	function ShowDeleteWishlist()
	{
	  document.getElementById('deletewishlist').style='display:block';
	}	
	function CloseDeleteWishlist()
	{
	  document.getElementById('deletewishlist').style='display:none';
	}
	
	
	return (
    <>
     { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
	 
	 <div id="deletewishlist" className="overlay" style={{display:'none'}}>
  <div className="popup profile-bg animate-zoom popuppadd_top">
    {/* <div className="review-heading"><i className="fa fa-trash-o" aria-hidden="true"></i> Delete Wishlist</div>
    <span onClick={CloseDeleteWishlist}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span> */}
    <div className="container-fluid mobpadding0" >
	
		<div className="row mt-2">
			<div className="col">
				<div className='text-center'>
                    <img src={exclamation} style={{width:'125px'}}/>
                    <div className="view-delete-heading-user">Delete Wishlist ?</div>
                    <span className="delete-review">Really want to delete this item from your wishlist ?</span>
                </div>
				
				<br/>
				
				
			</div>
			
		</div>
		
	
		
   
	<div className="row">
		<div className="col">
			<div className="text-center">
			    <span onClick={CloseDeleteWishlist} className="btn btn-secondary">Cancel</span>
				<button className="btn btn-warning genderreview">Delete</button>
			</div>
		</div>
	</div>
	</div>
  </div>
</div>
	 
	 <Headeruser />
    <div className='cartslidersetup'>
    <div className="container-fluid">
		<div className="row">
		<div className="col-3 mobwidth100">
			<div className='mobdnone animate-right' id='mobilemenu'>
      <Sidebar />
      </div>
      </div>
			<div className="col-9 mobwidth100">
				<div className="menu-heading">
					<h5 className="mt-3"><i className="fa fa-heart" aria-hidden="true"></i> My Wishlist <i className="fa fa-long-arrow-down pull-right" aria-hidden="true"></i></h5>
				</div>
				
				<div className="user-parent-outer mt-4" id="address-scroll">
			
					<div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
							<Link to="/productdetails"><img loading='lazy'  src={camera} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Canon Camera 34999UIYY0 Digital Camera </h6>
							<span className="date-dtl">22 July 2023</span>
							
							<div className='deletewishlistmob'>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div> 
								<span className="pull-right updtaddress"> 
									<span className='dltwlist' onClick={ShowDeleteWishlist}><i title="Delete Wishlist" className="fa fa-trash-o" aria-hidden="true"></i></span>
								</span>
							</div>
							</div>

							<div>
							<span className="prod-txt prod-txtmob">Rs.5,000</span> <span className="mrp-txt"> Rs.7,000</span> <span className="prod-txt prod-txtmob">7% off</span>
						
							</div>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={product1} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Patanjali Divya Coronil Gold</h6>
							<span className="date-dtl">22 July 2023</span>
							<div className='deletewishlistmob'>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div> 
								<span className="pull-right updtaddress"> 
									<span className='dltwlist' onClick={ShowDeleteWishlist}><i title="Delete Wishlist" className="fa fa-trash-o" aria-hidden="true"></i></span>
								</span>
							</div>
							</div>

							<div>
							<span className="prod-txt prod-txtmob">Rs.5,000</span> <span className="mrp-txt"> Rs.7,000</span> <span className="prod-txt prod-txtmob">7% off</span>
						
							</div>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={product2} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Patanjali Divya Kardiogrit Gold</h6>
							<span className="date-dtl">22 July 2023</span>
							<div className='deletewishlistmob'>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div> 
								<span className="pull-right updtaddress"> 
									<span className='dltwlist' onClick={ShowDeleteWishlist}><i title="Delete Wishlist" className="fa fa-trash-o" aria-hidden="true"></i></span>
								</span>
							</div>
							</div>

							<div>
							<span className="prod-txt prod-txtmob">Rs.5,000</span> <span className="mrp-txt"> Rs.7,000</span> <span className="prod-txt prod-txtmob">7% off</span>
						
							</div>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={ele1} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Havells Table Fan</h6>
							<span className="date-dtl">22 July 2023</span>
							<div className='deletewishlistmob'>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div> 
								<span className="pull-right updtaddress"> 
									<span className='dltwlist' onClick={ShowDeleteWishlist}><i title="Delete Wishlist" className="fa fa-trash-o" aria-hidden="true"></i></span>
								</span>
							</div>
							</div>

							<div>
							<span className="prod-txt prod-txtmob">Rs.5,000</span> <span className="mrp-txt"> Rs.7,000</span> <span className="prod-txt prod-txtmob">7% off</span>
						
							</div>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={ele2} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Havells Table Fan</h6>
							<span className="date-dtl">22 July 2023</span>
							<div className='deletewishlistmob'>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div> 
								<span className="pull-right updtaddress"> 
									<span className='dltwlist' onClick={ShowDeleteWishlist}><i title="Delete Wishlist" className="fa fa-trash-o" aria-hidden="true"></i></span>
								</span>
							</div>
							</div>

							<div>
							<span className="prod-txt prod-txtmob">Rs.5,000</span> <span className="mrp-txt"> Rs.7,000</span> <span className="prod-txt prod-txtmob">7% off</span>
						
							</div>
						</div>
					</div>
				
				</div>
				
			</div>
		</div>
	  </div>
    </div>

    <Footer />
    { showloader ? Setshowloader(false) : null } 
    </>
  )
}
