import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Headeruser from './Headeruser'
import Footer from '../components/Footer'
import './../components/css/index.scss'
import loader from './../components/Images/loader.png'
import closebtn from './../components/Images/closebtn.png'
import review from './../components/Images/review.png'
import camera from './../components/Images/camera.jpg'
import product1 from './../components/Images/product1.jpg'
import product2 from './../components/Images/product2.jpg'
import ele1 from './../components/Images/ele1.jpg'
import ele2 from './../components/Images/ele2.jpg'

import Sidebar from './Sidebar'

export const Myorders = () => {
	const[showloader,Setshowloader] = useState(true);     //loading effect

	function ShowpopRating()
	{
	  document.getElementById('popuprating').style='display:block';
	}
	function ClosepopRating()
	{
	  document.getElementById('popuprating').style='display:none';
	}
  return (
    <>
     { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
	 <Headeruser />
    
	<div id="popuprating" className='overlay' style={{display:'none'}}>
    <div className="popup popup-signup profile-bg animate-zoom">
          <h5 className="cart-heading">Rate & Review this Product <img loading='lazy'  src={review} alt='img' className='img-fluid' /></h5>
          <hr className="cart-hrline" />
          <span onClick={ClosepopRating}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
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
  
   
   <button type="button"  className="btn btn-success btn-bg w-100">Submit <i className="fa fa-hand-pointer-o" aria-hidden="true"></i></button><br/>
  
  
   

</form>
        </div>
    </div>
	
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
					<h5 className="mt-3"><i className="fa fa-shopping-cart" aria-hidden="true"></i> My Orders <i className="fa fa-long-arrow-down pull-right" aria-hidden="true"></i> </h5>
				</div>
				
				<div className="user-parent-outer mt-4" id="address-scroll">
				    <div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
							<img loading='lazy'  src={camera} alt="img" className='img-fluid'/>
						</div>
						<div className="order-name">
							<h6>Canon Camera 34999CNY000 Digital Camera </h6>
						</div>
						<div className="order">
							<span className="prod-txt">Rs.18,500</span>
						</div>
						<div className="order posnrelv  mobwidth100">
						<span><i className="fa fa-circle ordr-size orderview" aria-hidden="true"></i> <span className="order-txt">Orderd on 05 Apr 2023</span></span>
						<br/>
								<span><i className="fa fa-circle ordr-size del" aria-hidden="true"></i> <span className="del-txt">Delivery expected by Oct 08, 2023</span></span>
								<br/>
								<span onClick={ShowpopRating} className='rating'><span title="Rate & Review This Product"><i className="fa fa-star ordr-size ratereview" aria-hidden="true"></i> <span className="ratereview-txt">Rate & Review Product</span></span>
								</span>
								<br/>
								<Link to='/orderdetails'>
								<span  className='viewdetails' title='View Order Details'><i className="fa fa-eye" aria-hidden="true"></i></span>
								</Link>
								
						</div>
						
					</div>
					
					
				    <div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
							<img loading='lazy'  src={product1} alt="img" className='img-fluid' />
						</div>
						<div className="order-name">
							<h6>Patanjali Divya Coronil Kit Patanjali Divya Coronil Kit</h6>
						</div>
						<div className="order">
							<span className="prod-txt">Rs.700</span>
						</div>
						<div className="order posnrelv mobwidth100">
						<span><i className="fa fa-circle ordr-size orderview" aria-hidden="true"></i> <span className="order-txt">Orderd on 05 Apr 2023</span></span>
						<br/>
								<span><i className="fa fa-circle ordr-size cancel" aria-hidden="true"></i> <span className="cancel-txt">Cancelled on 06 Apr 2023</span></span>
								<br/>
								<span onClick={ShowpopRating} className='rating'><span title="Rate & Review This Product"><i className="fa fa-star ordr-size ratereview" aria-hidden="true"></i> <span className="ratereview-txt">Rate & Review Product</span></span>
								</span>
								<br/>
								<Link to='/orderdetails'>
								<span  className='viewdetails' title='View Order Details'><i className="fa fa-eye" aria-hidden="true"></i></span>
								</Link>
						</div>
					</div>
					
				    <div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
						<img loading='lazy'  src={product2} alt="img" className='img-fluid' />
						</div>
						<div className="order-name">
							<h6>Patanjali Divya Cardigrit GoldPatanjali </h6>
						</div>
						<div className="order">
							<span className="prod-txt">Rs.800</span>
						</div>
						<div className="order posnrelv mobwidth100">
						<span><i className="fa fa-circle ordr-size orderview" aria-hidden="true"></i> <span className="order-txt">Orderd on 05 Apr 2023</span></span>
						<br/>
								<span><i className="fa fa-circle ordr-size cancel" aria-hidden="true"></i> <span className="cancel-txt">Returned on 10 Apr 2023</span></span>
								<br/>
								<span onClick={ShowpopRating} className='rating'><span title="Rate & Review This Product"><i className="fa fa-star ordr-size ratereview" aria-hidden="true"></i> <span className="ratereview-txt">Rate & Review Product</span></span>
								</span>
								<br/>
								<Link to='/orderdetails'>
								<span  className='viewdetails' title='View Order Details'><i className="fa fa-eye" aria-hidden="true"></i></span>
								</Link>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
						<img loading='lazy'  src={ele1} alt="img" className='img-fluid' />
						</div>
						<div className="order-name">
							<h6>Havells Table Fan</h6>
						</div>
						<div className="order">
							<span className="prod-txt">Rs.8,000</span>
						</div>
						<div className="order posnrelv mobwidth100">
						<span><i className="fa fa-circle ordr-size orderview" aria-hidden="true"></i> <span className="order-txt">Orderd on 05 Apr 2023</span></span>
						<br/>
								<span><i className="fa fa-circle ordr-size del" aria-hidden="true"></i> <span className="del-txt">Delivered on 10 Apr 2023</span></span>
								<br/>
								<span onClick={ShowpopRating} className='rating'><span title="Rate & Review This Product"><i className="fa fa-star ordr-size ratereview" aria-hidden="true"></i> <span className="ratereview-txt">Rate & Review Product</span></span>
								</span>
								<br/>
								<Link to='/orderdetails'>
								<span  className='viewdetails' title='View Order Details'><i className="fa fa-eye" aria-hidden="true"></i></span>
								</Link>
						</div>
					</div>
					
					<div className="repeat user-parent-inner user-product mb-1">
						<div className="order-img">
						<img loading='lazy'  src={ele2} alt="img" className='img-fluid' />
						</div>
						<div className="order-name">
							<h6>Havells Table Fan</h6>
						</div>
						<div className="order">
							<span className="prod-txt">Rs.10,000</span>
						</div>
						<div className="order posnrelv mobwidth100">
						<span><i className="fa fa-circle ordr-size orderview" aria-hidden="true"></i> <span className="order-txt">Orderd on 05 Apr 2023</span></span>
						<br/>
								<span><i className="fa fa-circle ordr-size cancel" aria-hidden="true"></i> <span className="cancel-txt">Cancelled on 06 Apr 2023</span></span>
								<br/>
								<span onClick={ShowpopRating} className='rating'><span title="Rate & Review This Product"><i className="fa fa-star ordr-size ratereview" aria-hidden="true"></i> <span className="ratereview-txt">Rate & Review Product</span></span>
								</span>
								<br/>
								<Link to='/orderdetails'>
								<span  className='viewdetails' title='View Order Details'><i className="fa fa-eye" aria-hidden="true"></i></span>
								</Link>
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
