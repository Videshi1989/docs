import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import Headeruser from './Headeruser'
import Footer from '../components/Footer'
import Sidebar from './Sidebar'
import './../components/css/index.scss'
import closebtn from './../components/Images/closebtn.png'
import loader from './../components/Images/loader.png'
import review from './../components/Images/review.png'
import update from './../components/Images/update.png'
import camera from './../components/Images/camera.jpg'
import product1 from './../components/Images/product1.jpg'
import product2 from './../components/Images/product2.jpg'
import exclamation from "./../components/Images/exclamation.svg";
import ele1 from './../components/Images/ele1.jpg'
import ele2 from './../components/Images/ele2.jpg'

export const Myreview = () => {
    const[showloader,Setshowloader] = useState(true);     //loading effect
	function ShowEditReview()
	{
	  document.getElementById('editreview').style='display:block';
	}
	function CloseEditReview()
	{
	  document.getElementById('editreview').style='display:none';
	}
	function ShowDeleteReview()
	{
	  document.getElementById('deletereview').style='display:block';
	}
	function CloseDeleteReview()
	{
	  document.getElementById('deletereview').style='display:none';
	}
  return (
    <>
     { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
	 
	 <div id="editreview" className='overlay' style={{display:'none'}}>
	 <div className="popup popup-signup profile-bg animate-zoom">
          <h5 className="cart-heading">Update Rate & Review this Product <img loading='lazy'  src={review} alt='img' className='img-fluid' /></h5>
          <hr className="cart-hrline" />
          <span onClick={CloseEditReview}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
		    <form>
  <div className="mb-3">
  <label  className="form-label">Rate </label>
  <div className='start-rating hover'>
  		<i className="fa fa-star fa-lg rate-right" aria-hidden="true"></i><i className="fa fa-star fa-lg rate" aria-hidden="true"></i><i className="fa fa-star fa-lg rate" aria-hidden="true"></i><i className="fa fa-star fa-lg rate" aria-hidden="true"></i><i className="fa fa-star fa-lg rate" aria-hidden="true"></i>
   </div>
</div>
  <div className="mb-3">
    <label  className="form-label"> Review </label>
    <textarea className='form-control cart-f-control review-height' placeholder='Wrire your review...'></textarea>
    
  </div>
  
  
   <button type="button"  className="btn btn-success btn-bg w-100">Update <img loading='lazy'   src={update} alt='img' className='img-fluid' /></button><br/>
   
  
   

</form>
        </div>
    </div>
	<div id="deletereview" className="overlay" style={{display:'none'}}>
  <div className="popup profile-bg animate-zoom popuppadd_top">
    {/* <div className="review-heading"><i className="fa fa-trash-o" aria-hidden="true"></i> Delete Review</div>
    <span onClick={CloseDeleteReview}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span> */}
    <div className="container-fluid mobpadding0" >
	
		<div className="row mt-2">
			<div className="col">
			<div className='text-center'>
                    <img src={exclamation} style={{width:'125px'}}/>
                    <div className="view-delete-heading-user">Delete Review ?</div>
                    <span className="delete-review">Really want to delete this Review ?</span>
                </div>
				
				<br/>
				
				
			</div>
			
		</div>
		
	
		
   
	<div className="row">
		<div className="col">
			<div className="text-center">
			    <span onClick={CloseDeleteReview} className="btn btn-secondary">Cancel</span>
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
					<h5 className="mt-3"><i className="fa fa-star" aria-hidden="true"></i> My Review <i className="fa fa-long-arrow-down pull-right" aria-hidden="true"></i></h5>
				</div>
				
				<div className="user-parent-outer mt-4" id="address-scroll">
			
			
					<div className="repeat user-parent-inner user-product user-productmob mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={camera} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Canon Camera 34999UIYY00 Digital Camera </h6>
							<span className="date-dtl">22 July 2023</span>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div>
							<span className="prod-txt">Very Good</span>
						    </div>
							<div>
							<span className="prod-txt hover"><span onClick={ShowEditReview}><i title="Edit" className="fa fa-pencil" aria-hidden="true"></i></span></span> <span className="del-rev hover"> <span onClick={ShowDeleteReview}><i title="Delete" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="prod-txt hover"><i title="Share" className="fa fa-share" aria-hidden="true"></i></span>
						    </div>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product user-productmob mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={product1} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Patanjali Divya Koronil Kit</h6>
							<span className="date-dtl">22 July 2023</span>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div>
							<span className="prod-txt">Very Good</span>
						    </div>
							<div>
							<span className="prod-txt hover"><span onClick={ShowEditReview}><i title="Edit" className="fa fa-pencil" aria-hidden="true"></i></span></span> <span className="del-rev hover"> <span onClick={ShowDeleteReview}><i title="Delete" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="prod-txt hover"><i title="Share" className="fa fa-share" aria-hidden="true"></i></span>
						    </div>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product user-productmob mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={product2} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Patanjali Divya Kardia Grit Gold</h6>
							<span className="date-dtl">22 July 2023</span>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div>
							<span className="prod-txt">Very Good</span>
						    </div>
							<div>
							<span className="prod-txt hover"><span onClick={ShowEditReview}><i title="Edit" className="fa fa-pencil" aria-hidden="true"></i></span></span> <span className="del-rev hover"> <span onClick={ShowDeleteReview}><i title="Delete" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="prod-txt hover"><i title="Share" className="fa fa-share" aria-hidden="true"></i></span>
						    </div>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product user-productmob mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={ele1} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Havells Table Fan</h6>
							<span className="date-dtl">22 July 2023</span>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div>
							<span className="prod-txt">Very Good</span>
						    </div>
							<div>
							<span className="prod-txt hover"><span onClick={ShowEditReview}><i title="Edit" className="fa fa-pencil" aria-hidden="true"></i></span></span> <span className="del-rev hover"> <span onClick={ShowDeleteReview}><i title="Delete" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="prod-txt hover"><i title="Share" className="fa fa-share" aria-hidden="true"></i></span>
						    </div>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product user-productmob mb-1">
						<div className="order-img">
						<Link to="/productdetails"><img loading='lazy'  src={ele2} alt='img' className='img-fluid'/></Link>
						</div>
						<div className="order-name-wishlist">
							<h6>Havells Table Fan</h6>
							<span className="date-dtl">22 July 2023</span>
							<div className="star-rating">3.5 <i className="fa fa-star" aria-hidden="true"></i></div>
							<div>
							<span className="prod-txt">Very Good</span>
						    </div>
							<div>
							<span className="prod-txt hover"><span onClick={ShowEditReview}><i title="Edit" className="fa fa-pencil" aria-hidden="true"></i></span></span> <span className="del-rev hover"> <span onClick={ShowDeleteReview}><i title="Delete" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="prod-txt hover"><i title="Share" className="fa fa-share" aria-hidden="true"></i></span>
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
