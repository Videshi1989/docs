import React,{useState} from 'react'
import Headeruser from './Headeruser'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './../components/css/index.scss'
import loader from './../components/Images/loader.png'
import closebtn from './../components/Images/closebtn.png'
import camera from './../components/Images/camera.jpg'
import download from './../components/Images/download.png'
import cancelorder from './../components/Images/cancelorder.png'
import returnproduct from './../components/Images/returnproduct.png'
import exclamation from "./../components/Images/exclamation.svg";
//import logo from './../components/Images/logo.png'




import Sidebar from './Sidebar'

export const Orderdetails = () => {
    const[showloader,Setshowloader] = useState(true);     //loading effect

  function ShowCancelOrder()
	{
	  document.getElementById('cancelproduct').style='display:block';
	}	
	function CloseCancelOrder()
	{
	  document.getElementById('cancelproduct').style='display:none';
	}
  /*function ShowReturnOrder()
	{
	  document.getElementById('returnproduct').style='display:block';
	}*/	
	function CloseReturnOrder()
	{
	  document.getElementById('returnproduct').style='display:none';
	}
  function ShowSecondStep()
  {
    document.getElementById('first-step').style='display:none';
    document.getElementById('second-step').style='display:block';
  }
  function CloseSecondStep()
  {
    document.getElementById('first-step').style='display:block';
    document.getElementById('second-step').style='display:none';
    document.getElementById('cancelproduct').style='display:none';
  }
  function ShowSecondStepReturn()
  {
    document.getElementById('first-step-return').style='display:none';
    document.getElementById('second-step-return').style='display:block';
  }
  function CloseSecondStepReturn()
  {
    document.getElementById('first-step-return').style='display:block';
    document.getElementById('second-step-return').style='display:none';
    document.getElementById('returnproduct').style='display:none';
  }
  return (
    <>
     { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
	 
     <div id="cancelproduct" className="overlay" style={{display:'none'}}>
  <div className="popup profile-bg  animate-zoom popuppadd_top"  id='first-step'>
    {/* <div className="review-heading"><img loading='lazy'  src={cancelorder} alt="img" /> Cancel Order</div>
    <span onClick={CloseCancelOrder}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span> */}
    <div className="container-fluid mobpadding0" >
	
    <div>
		<div className="row mt-2">
			<div className="col">
      <div className='text-center'>
                    <img src={exclamation} style={{width:'125px'}}/>
                    <div className="view-delete-heading-user">Cancel Order ?</div>
                    <span className="delete-review">Really want to cancel this order ?</span>
                </div>
				
				<br/>

				
				
			</div>
			
		</div>
		</div>

	
		
   
	<div className="row">
		<div className="col">
			<div className="text-center">
			    <span onClick={CloseCancelOrder} className="btn btn-secondary">No</span>
				<button onClick={ShowSecondStep} className="btn btn-warning genderreview">Yes</button>
			</div>
		</div>
	</div>
	</div>
  </div>
  <div className="popup profile-bg popup-signup"  id='second-step' style={{display:'none'}}>
    <div className="review-heading"><img loading='lazy'  src={cancelorder} alt="img" /> Cancel Order</div>
    <span onClick={CloseSecondStep}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <div className="container-fluid mobpadding0" >
	
    <div>
		<div className="row mt-2">
			<div className="col">
      <form>
  <div className="mb-3">
  <div className="mb-3">
                                    <label  className="form-label">Select Reason </label>
                                    <select className="form-control box-control">
                                        <option>Select Reason</option>
                                        <option>Reason1</option>
                                        <option>Reason2</option>
                                    </select>
                                </div>
</div>
  <div>
    <label  className="form-label"> Comment </label>
    <textarea className='form-control cart-f-control review-height' placeholder='Wrire your comment...'></textarea>
    
  </div>
  
  
   

</form>
				<br/><br/>
			</div>
			
		</div>
		</div>

	
		
   
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <span onClick={CloseSecondStep} className="btn btn-secondary">Cancel</span>
				<button className="btn btn-dark genderreview">Proceed</button>
			</div>
		</div>
	</div>
	</div>
  </div>
</div>

  <div id="returnproduct" className="overlay" style={{display:'none'}}>
  <div className="popup profile-bg  animate-zoom"  id='first-step-return'>
    {/* <div className="review-heading"><img loading='lazy'  src={returnproduct} alt="img" className='returnimg' /> Return Product</div>
    <span onClick={CloseReturnOrder}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span> */}
    <div className="container-fluid mobpadding0" >
	
    <div>
		<div className="row mt-2">
			<div className="col">
      <div className='text-center'>
                    <img src={exclamation} style={{width:'125px'}}/>
                    <div className="view-delete-heading-user">Return Product ?</div>
                    <span className="delete-review">Really want to return this order ?</span>
                </div>
				
				<br/>
				
			</div>
			
		</div>
		</div>

	
		
   
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <span onClick={CloseReturnOrder} className="btn btn-secondary">No</span>
				<button onClick={ShowSecondStepReturn} className="btn btn-warning genderreview">Yes</button>
			</div>
		</div>
	</div>
	</div>
  </div>
  <div className="popup profile-bg "  id='second-step-return' style={{display:'none'}}>
    <div className="review-heading"><img loading='lazy'  src={returnproduct} alt="img" className='returnimg' /> Return Product</div>
    <span onClick={CloseSecondStepReturn}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <div className="container-fluid mobpadding0" >
	
    <div>
		<div className="row mt-2">
			<div className="col">
      <form>
  <div className="mb-3">
  <div className="mb-3">
                                    <label  className="form-label">Select Reason </label>
                                    <select className="form-control box-control">
                                        <option>Select Reason</option>
                                        <option>Reason1</option>
                                        <option>Reason2</option>
                                    </select>
                                </div>
</div>
  <div>
    <label  className="form-label"> Comment </label>
    <textarea className='form-control cart-f-control review-height' placeholder='Wrire your comment...'></textarea>
    
  </div>
  
  
   

</form>
				<br/><br/>
			</div>
			
		</div>
		</div>

	
		
   
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <span onClick={CloseSecondStepReturn} className="btn btn-secondary">Cancel</span>
				<button className="btn btn-dark genderreview">Proceed</button>
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
					<h5 className="mt-3"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Order Details <i className="fa fa-long-arrow-down pull-right" aria-hidden="true"></i> <span className='doldinvoice' title='Download Invoice'><a href="invoicedetails" className='getinvoice' target='_blank'><img src={download} alt='img' loading='lazy' /> Invoice</a></span></h5>
				</div>
				
				<div className="user-parent-order mt-4" id="address-scroll">
				<div className='repeat-prod'>
                        <div className='row'>             
                            <div className='col-3 mobwidth100'>
                               <div className='prod-details'>
                               <Link to="/productdetails">
                                    <img loading='lazy'  title="Product Name" src={camera} alt="Product Name" className='view1img' />
                                    </Link>
                                  
                               </div>
                            </div>
                            <div className='col-5 mobdnone'>
                             <div>   
                            <h5><Link to="/productdetails" title="Product Name" className='productname'>Patanjali Divya Coronil Kit</Link></h5>
                            <div className="pd-view1">3.7 <i className="fa fa-star" aria-hidden="true"></i>
                            
                            </div>
                            <div>
                            <span>580 ratings & 79 Reviews</span>
                            </div>
                            <br/>
                            <ul className='par-circle'>
                            <li>Dual Pixel CMOS AF - AF is possible over an area of approx. </li>
                                <li>80% Vertical x 80% Horizontal of the frame or 100% vertical x 88% horizontal, depending on lens used.</li>
                                <li>Peripheral Cross type AF points will not function as a cross type AF points with the following lenses.</li>
                                <li>Maximum number of AF frame is dependent on selected image aspect ratio.</li>
                                
                            </ul>
                            </div>
                            </div>
                            <div className='col-4 mobwidth100'>
                                <div className='price-div'>
                                    <h5>Rs.1,990</h5>
                                    <span className='right-span mobdnone'><strong>Order Date:</strong> 10 Oct, 2023</span> <br/>
                                    <span className='right-span mobdnone'><strong>Delivery Date:</strong> 15 Oct, 2023</span><br/>
									<span className='right-span mobdnone'><strong>Order Number:</strong> ONH1254BHYUG78</span><br/>
									<span className='right-span mobdnone'><strong>Status:</strong> In-Process</span>
									
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className='parent-cancel-order'>
					 <button onClick={ShowCancelOrder} className='cancelorderbtn' title='cancel order'>Cancel Order</button>
					 </div>

            {/* Cancel order button will visible if order has placed but did not receive */}

           {/* <div className='parent-cancel-order'>
					 <button onClick={ShowReturnOrder} className='cancelorderbtn' title='cancel order'>Return</button>
					 </div> */}

           {/* Return button will visible  if product has been delivered and seven days is not complete */}

				</div>

        <div className="user-parent-order mt-4" >
				            <div className=''>
                        <div className='row'>             
                           <div className='col'>
                           <div className="orderdetailaddress mb-3">
                           <h5 ><i className="fa fa-address-book-o" aria-hidden="true"></i> Delivery Address </h5>
                                    <div  className="form-label mt-4"><strong> Videshi Muduli <span className='delcontact'><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> 9770730985 </span></strong></div>
                                    <div className='deliaddfont'>G1 Ground Floor, Jamna saraswati heights, Plot no.3, Sector-A, Raison road, Patel Nagar, Bhopal, Madhyapradesh - 462022</div>
                                </div>
                           
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
