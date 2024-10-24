import React,{useEffect, useState} from 'react'
//import {Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import loader from './Images/loader.png'
import downarrow from './Images/downarrow.png'
import summary from './Images/summary.png'
import phonepe from './Images/phonepe.png'
import upi from './Images/upi.png'
import card from './Images/card.png'
import bank from './Images/bank.png'
import cash from './Images/cash.png'
import paytm from './Images/paytm.png'
import closebtn from './Images/closebtn.png'
import add from './Images/add.png'
import update from './Images/update.png'
import placeorder from './Images/placeorder.png'
import deliveryaddress from './Images/deliveryaddress.png'

import { useAuth } from '../store/auth'
import { useNavigate } from 'react-router-dom'



export default function Placeorder()
{ 
    const[showloader,Setshowloader] = useState(true);     //loading effect
   
    function ShowAddAddress()
    {
      document.getElementById('addaddress').style='display:block';
    }
    function CloseAddAddress()
    {
      document.getElementById('addaddress').style='display:none';
    }
    /*function ShowEditAddress()
    {
      document.getElementById('editaddress').style='display:block';
    }*/
    function CloseEditAddress()
    {
      document.getElementById('editaddress').style='display:none';
    }
    function ShowPlaceOrder()
	{
	  document.getElementById('placeorderpopup').style='display:block';
	}
	function ClosePlaceOrder()
	{
	  document.getElementById('placeorderpopup').style='display:none';
	}

   /////
   const navigate = useNavigate();
   const {isLoggedIn} = useAuth(); 
   useEffect(()=>{checkLogin()},[])

   function checkLogin()
   {
        if(!isLoggedIn)
        {
            navigate("/signin");
        }
   }
    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            
        <div id="addaddress" className='overlay' style={{display:'none'}}>
    <div className="popupmanageadds animate-zoom">
          <div>
          <h5 className="cart-heading">Add New Delivery Address <i className="fa fa-address-book-o" aria-hidden="true"></i></h5>
          <hr className="cart-hrline" />
          <span onClick={CloseAddAddress}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
		  </div>
          <div className="add_address" id="add_address">
          <form>
                            <div className='row'>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your full name"  placeholder="Enter your full name" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your mobile no."  placeholder="Enter your mobile no." aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 1 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your address"  placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                           
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 2 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your emaddress"  placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Landmark </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter landmark"  placeholder="Enter landmark" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> Country </label>
                                    <select className="form-control box-control">
                                        <option>Select Country</option>
                                        <option>India</option>
                                        <option>America</option>
                                    </select>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                             
                            
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> State </label>
                                    <select className="form-control box-control">
                                        <option>Select State</option>
                                        <option>Madhyapradesh</option>
                                        <option>Bihar</option>
                                    </select>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> City </label>
                                    <select className="form-control box-control">
                                        <option>Select City</option>
                                        <option>Bhopal</option>
                                        <option>indore</option>
                                    </select>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-o" aria-hidden="true"></i> Pin Code </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your pincode"  placeholder="Enter your pincode" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                
                          
							<br/>
   <button type="button"  className="btn btn-success btn-bg w-100">Add <img loading='lazy'  src={add} alt='img' className='img-fluid' /></button><br/>
   
          </form>
          </div>
        </div>
    </div>
	 <div id="editaddress" className='overlay' style={{display:'none'}}>
    <div className="popupmanageadds animate-zoom">
          <h5 className="cart-heading">Update Your Address <i className="fa fa-pencil-square-o heading-icon" aria-hidden="true"></i></h5>
          <hr className="cart-hrline" />
          <span onClick={CloseEditAddress}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
		  <div className="add_address" id="add_address">
          <form>
                            <div className='row'>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your full name"  placeholder="Enter your full name" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your mobile no."  placeholder="Enter your mobile no." aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 1 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your address"  placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                           
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 2 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your emaddress"  placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Landmark </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter landmark"  placeholder="Enter landmark" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> Country </label>
                                    <select className="form-control box-control">
                                        <option>Select Country</option>
                                        <option>India</option>
                                        <option>America</option>
                                    </select>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                             
                            
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> State </label>
                                    <select className="form-control box-control">
                                        <option>Select State</option>
                                        <option>Madhyapradesh</option>
                                        <option>Bihar</option>
                                    </select>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> City </label>
                                    <select className="form-control box-control">
                                        <option>Select City</option>
                                        <option>Bhopal</option>
                                        <option>indore</option>
                                    </select>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-o" aria-hidden="true"></i> Pin Code </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your pincode"  placeholder="Enter your pincode" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                          
							<br/>
   <button type="button"  className="btn btn-success btn-bg w-100">Update <img loading='lazy'  src={update} alt='img' className='img-fluid' /></button><br/>
   
          </form>
          </div>
        </div>
    </div>
    <div id="placeorderpopup" className="overlay" style={{display:'none'}}>
  <div className="popup profile-bg animate-zoom">
    <div className="review-heading"><img loading='lazy'  src={placeorder} alt="img" className='placeimg' /> Place Order</div>
    <span onClick={ClosePlaceOrder}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <div className="container-fluid mobpadding0" >
	
		<div className="row mt-2">
			<div className="col">
				<span className="delete-review">Really want to place this Order ?</span>
				<br/><br/>
			</div>
			
		</div>
	
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <span onClick={ClosePlaceOrder} className="btn btn-secondary">Cancel</span>
				<button className="btn btn-success genderreview">Proceed</button>
			</div>
		</div>
	</div>
	</div>
  </div>
</div>

            <Header />


           <div className='cartslidersetup'>
            <div className='container'>
                <div className='row'>
                    <div className='col-8 mobwidth100'>
                     <div className='cart-dtls bdr-radius-top-div'>
                            <h6><i className="fa fa-map-marker" aria-hidden="true"></i> Choose delivery address <img loading='lazy'  src={downarrow} className='pull-right imgopacity' alt='img' /><span title="Add new address" onClick={ShowAddAddress} className="pull-right updtmargn"><i className="fa fa-user-plus fa-lg" aria-hidden="true"></i></span></h6>
                       </div>
                       <div className='cartdtl-address' id='placeorder-scroll'>
                       <div className='box-item'>
                       <div className='box'>
                           {/* Form is not used we can remove*/}
                            {/* <form>
                            <div className='row'>
                                <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your full name"  placeholder="Enter your full name" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your mobile no."  placeholder="Enter your mobile no." aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 1 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your address"  placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 2 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your emaddress"  placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Landmark </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter landmark"  placeholder="Enter landmark" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> Country </label>
                                    <select className="form-control box-control">
                                        <option>Select Country</option>
                                        <option>India</option>
                                        <option>America</option>
                                    </select>
                             </div>
                                </div>
                                
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> State </label>
                                    <select className="form-control box-control">
                                        <option>Select State</option>
                                        <option>Madhyapradesh</option>
                                        <option>Bihar</option>
                                    </select>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-globe" aria-hidden="true"></i> City </label>
                                    <select className="form-control box-control">
                                        <option>Select City</option>
                                        <option>Bhopal</option>
                                        <option>indore</option>
                                    </select>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-o" aria-hidden="true"></i> Pin Code </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your pincode"  placeholder="Enter your pincode" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                       
                            </form> */}
                            
                            {/* <div className='row'>
                                <div className='col'>
                                
                                <div className="mb-3">
                                    <div  className="form-label"><input type='radio' name='deliveryaddress' className='payment'  /><strong> Videshi Muduli <span className='delcontact'><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> 9770730985 </span></strong><span onClick={ShowEditAddress} className='editdelivraddress' title='update this address' ><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
                                    <div className='deliaddfont'>G1 Ground Floor, Jamna saraswati heights, Plot no.3, Sector-A, Raison road, Patel Nagar, Bhopal, Madhyapradesh - 462022</div>
                                </div>
                                <hr className='deliadshr'/>
                                <div className="mb-3">
                                    <div  className="form-label"><input type='radio' name='deliveryaddress' className='payment'  /><strong> Videshi Muduli <span className='delcontact'><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> 9770730985 </span></strong><span onClick={ShowEditAddress} className='editdelivraddress' title='update this address' ><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
                                    <div className='deliaddfont'>G1 Ground Floor, Jamna saraswati heights, Plot no.3, Sector-A, Raison road, Patel Nagar, Bhopal, Madhyapradesh - 462022</div>
                                </div>
                                <hr className='deliadshr'/>
                                <div className="mb-3">
                                    <div  className="form-label"><input type='radio' name='deliveryaddress' className='payment'  /><strong> Videshi Muduli <span className='delcontact'><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> 9770730985 </span></strong><span onClick={ShowEditAddress} className='editdelivraddress' title='update this address' ><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
                                    <div className='deliaddfont'>G1 Ground Floor, Jamna saraswati heights, Plot no.3, Sector-A, Raison road, Patel Nagar, Bhopal, Madhyapradesh - 462022</div>
                                </div>
                                <hr className='deliadshr'/>
                                <div className="mb-3">
                                    <div  className="form-label"><input type='radio' name='deliveryaddress' className='payment'  /><strong> Videshi Muduli <span className='delcontact'><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> 9770730985 </span></strong><span onClick={ShowEditAddress} className='editdelivraddress' title='update this address' ><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
                                    <div className='deliaddfont'>G1 Ground Floor, Jamna saraswati heights, Plot no.3, Sector-A, Raison road, Patel Nagar, Bhopal, Madhyapradesh - 462022</div>
                                </div>
                                <hr className='deliadshr'/>
                                <div className="mb-3">
                                    <div  className="form-label"><input type='radio' name='deliveryaddress' className='payment'  /><strong> Videshi Muduli <span className='delcontact'><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> 9770730985 </span></strong><span onClick={ShowEditAddress} className='editdelivraddress' title='update this address' ><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
                                    <div className='deliaddfont'>G1 Ground Floor, Jamna saraswati heights, Plot no.3, Sector-A, Raison road, Patel Nagar, Bhopal, Madhyapradesh - 462022</div>
                                </div>
                                <hr className='deliadshr'/>
                                <div className="mb-3">
                                    <div  className="form-label"><input type='radio' name='deliveryaddress' className='payment'  /><strong> Videshi Muduli <span className='delcontact'><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> 9770730985 </span></strong><span onClick={ShowEditAddress} className='editdelivraddress' title='update this address' ><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
                                    <div className='deliaddfont'>G1 Ground Floor, Jamna saraswati heights, Plot no.3, Sector-A, Raison road, Patel Nagar, Bhopal, Madhyapradesh - 462022</div>
                                </div>
                                <hr className='deliadshr'/>
                                <div className="mb-3">
                                    <div  className="form-label"><input type='radio' name='deliveryaddress' className='payment'  /><strong> Videshi Muduli <span className='delcontact'><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> 9770730985 </span></strong><span onClick={ShowEditAddress} className='editdelivraddress' title='update this address' ><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
                                    <div className='deliaddfont'>G1 Ground Floor, Jamna saraswati heights, Plot no.3, Sector-A, Raison road, Patel Nagar, Bhopal, Madhyapradesh - 462022</div>
                                </div>
                                
                                </div>
                                
                            </div> */}
                        
                            <div className='row'>
                                <div className='col'>
                                    <div className='delvyaddressdiv'>
                                        <img src={deliveryaddress} alt='img' loading='lazy' className='delvyaddress' />
                                    </div>
                                    <div>
                                        <span className='addresstxt'><i className="fa fa-exclamation-circle exclamtonmob" aria-hidden="true"></i> Please add delivery address</span>
                                        <div>
                                        <button onClick={ShowAddAddress} className='addressbtn' title='Add delivery address'><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                   
                     
                       
                           
                        </div>
                       </div>
                       
                      
                        </div>
                    
                       
                               
                                <div className='all-sum-pay-method'>
                            <div className='summary bdr-radius-top-div'><h6><i className="fa fa-credit-card fa-lg" aria-hidden="true"></i> Choose Payment Method <img loading='lazy'  src={downarrow} className='pull-right imgopacity' alt='img' /></h6></div>
                            <div className='payment-div'>
                                <ul>
                                    <li><span><input type="radio" name='paymentmethod' className='payment' /><img src={phonepe} alt='img' loading='lazy' className='payimg' /> Phonepe</span></li>
                                    <li><span><input type="radio" name='paymentmethod' className='payment' /><img src={paytm} alt='img' loading='lazy' className='payimg' /> PAYTM</span></li>
                                    <li><span><input type="radio" name='paymentmethod' className='payment' /><img src={upi} alt='img' loading='lazy' className='payimg' /> UPI</span></li>
                                    <li><span><input type="radio" name='paymentmethod' className='payment' /><img src={card} alt='img' loading='lazy' className='payimg' /> Credit / Debit / ATM Card</span></li>
                                    <li><span><input type="radio" name='paymentmethod' className='payment' /><img src={bank} alt='img' loading='lazy' className='payimg' /> Net Banking</span></li>
                                    <li><span><input type="radio" name='paymentmethod' className='payment' /><img src={cash} alt='img' loading='lazy' className='payimg' /> Cash on Delivery</span></li>
                                </ul>
                            </div>
                          
                        </div>
                        <div title="Place Order" className='checkoutmar'>
                           
                            <button onClick={ShowPlaceOrder} type="button" className="btn btn-success btn-bg w-100">Place Order <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                            
                        </div>
                                
                           

                     
                    </div>
                    <div className='col-4 mobdnone'>
                        <div className='all-sum-dtl'>
                            <div className='summary bdr-radius-top-div'><h6><img loading='lazy' className='imgopacity'  src={summary} alt='img' /> Summary <img loading='lazy'  src={downarrow} className='pull-right' alt='img' /></h6></div>
                            <div className='subtotal-div'>
                                <ul>
                                    <li><span>Sub Total</span> <span className='subtot-placeorder'>Rs.1,20,000</span></li>
                                    <li><span>Delivery Charges</span> <span className='subtot-placeorder'>Free</span></li>
                                    <li><span>Tax</span> <span className='subtot-placeorder'>Rs.100</span></li>
                                </ul>
                            </div>
                            <div className='total-div'>
                                <h6>TOTAL <span className='pull-right'>Rs.1,22,000</span></h6>
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