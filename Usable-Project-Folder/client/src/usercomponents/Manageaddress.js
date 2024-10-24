import React,{useState} from 'react'
import Headeruser from './Headeruser'
import Footer from '../components/Footer'
import './../components/css/index.scss'
import closebtn from './../components/Images/closebtn.png'
import loader from './../components/Images/loader.png'
import add from './../components/Images/add.png'
import update from './../components/Images/update.png'
import exclamation from "./../components/Images/exclamation.svg";
import Sidebar from './Sidebar'

export const Manageaddress = () => {
    const[showloader,Setshowloader] = useState(true);     //loading effect
    function ShowAddAddress()
    {
      document.getElementById('addaddress').style='display:block';
    }
    function CloseAddAddress()
    {
      document.getElementById('addaddress').style='display:none';
    }
    function ShowEditAddress()
    {
      document.getElementById('editaddress').style='display:block';
    }
    function CloseEditAddress()
    {
      document.getElementById('editaddress').style='display:none';
    }
    function ShowDeleteAddress()
    {
      document.getElementById('deleteaddress').style='display:block';
    }
    function CloseDeleteAddress()
    {
      document.getElementById('deleteaddress').style='display:none';
    }
   
  return (
    <>
     { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
	 
	 <div id="addaddress" className='overlay' style={{display:'none'}}>
    <div className="popupmanageadds animate-zoom">
          <div>
          <h5 className="cart-heading">Add New Address <i className="fa fa-address-book-o" aria-hidden="true"></i></h5>
          <hr className="cart-hrline" />
          <span onClick={CloseAddAddress}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
		  </div>
          <div className="add_address" id="add_address">
          <form>
                            <div className='row'>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your full name" id="exampleInputEmail1" placeholder="Enter your full name" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your mobile no." id="exampleInputEmail1" placeholder="Enter your mobile no." aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 1 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your address" id="exampleInputEmail1" placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                           
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 2 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your emaddress" id="exampleInputEmail1" placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Landmark </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter landmark" id="exampleInputEmail1" placeholder="Enter landmark" aria-describedby="emailHelp"/>
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
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your pincode" id="exampleInputEmail1" placeholder="Enter your pincode" aria-describedby="emailHelp"/>
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
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your full name" id="exampleInputEmail1" placeholder="Enter your full name" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your mobile no." id="exampleInputEmail1" placeholder="Enter your mobile no." aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                <div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 1 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your address" id="exampleInputEmail1" placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                           
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Address Line 2 </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your emaddress" id="exampleInputEmail1" placeholder="Enter your address" aria-describedby="emailHelp"/>
                                </div>
                                </div>
								<div className='col mobwidth100flxunset'>
                                <div className="mb-3">
                                    <label  className="form-label"><i className="fa fa-map-marker" aria-hidden="true"></i> Landmark </label>
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter landmark" id="exampleInputEmail1" placeholder="Enter landmark" aria-describedby="emailHelp"/>
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
                                    <input type="text" autofill="nope" className="form-control box-control" title="Enter your pincode" id="exampleInputEmail1" placeholder="Enter your pincode" aria-describedby="emailHelp"/>
                                </div>
                                </div>
                                
                            </div>
                          
							<br/>
   <button type="button"  className="btn btn-success btn-bg w-100">Update <img loading='lazy'  src={update} alt='img' className='img-fluid' /></button><br/>
   
          </form>
          </div>
        </div>
    </div>
	<div id="deleteaddress" className="overlay" style={{display:'none'}}>
  <div className="popup profile-bg animate-zoom popuppadd_top">
    {/* <div className="review-heading"><i className="fa fa-trash-o" aria-hidden="true"></i> Delete Address</div>
    <span onClick={CloseDeleteAddress}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span> */}
    <div className="container-fluid mobpadding0" >
	
		<div className="row mt-2">
			<div className="col">
                <div className='text-center'>
                    <img src={exclamation} style={{width:'125px'}}/>
                    <div className="view-delete-heading-user">Delete Address ?</div>
                    <span className="delete-review">Really want to delete this Address ?</span>
                </div>
				
				<br/>
			</div>
			
		</div>
		
	
		
   
	<div className="row">
		<div className="col">
			<div className="text-center">
			    <span onClick={CloseDeleteAddress} className="btn btn-secondary">Cancel</span>
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
					<h5 className="mt-3"><i className="fa fa-map-marker" aria-hidden="true"></i> Manage Address <span className='pull-right'><i className="fa fa-long-arrow-down" aria-hidden="true"></i></span><span onClick={ShowAddAddress} title="Add new address" className='pull-right updtmargn'><i className="fa fa-user-plus" aria-hidden="true"></i></span></h5>
				</div>
				
				<div className="user-parent-outer mt-4" id="address-scroll">
				    <div className="repeat user-parent-inner user-address mb-1">
						
						<div className="address-font">
							<h6>Rajesh Verma <span className="pull-right updtaddress"> <span onClick={ShowDeleteAddress}><i title="Delete Address" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="pull-right updtaddress updtmargn"> <span onClick={ShowEditAddress}><i title="Edit Address" className="fa fa-pencil" aria-hidden="true"></i></span></span></h6>
						
							<div className='addresscolor'>
								61 West Nepal gate, Churcha Collierry, Dist-Korea, C.G. - 497339
							</div>
							<div className='addresscolor'><i className="fa fa-phone" aria-hidden="true"></i> 9826098260</div>
							
						</div>
						
					</div>
					<hr className='sepaabout mar-0'/>
					 <div className="repeat user-parent-inner user-address mb-1">
						
                     <div className="address-font">
							<h6>Rajesh Verma <span className="pull-right updtaddress"> <span onClick={ShowDeleteAddress}><i title="Delete Address" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="pull-right updtaddress updtmargn"> <span onClick={ShowEditAddress}><i title="Edit Address" className="fa fa-pencil" aria-hidden="true"></i></span></span></h6>
						
							<div className='addresscolor'>
								61 West Nepal gate, Churcha Collierry, Dist-Korea, C.G. - 497339
							</div>
							<div className='addresscolor'><i className="fa fa-phone" aria-hidden="true"></i> 9826098260</div>
							
						</div>
					</div>
					<hr className='sepaabout mar-0'/>
					 <div className="repeat user-parent-inner user-address mb-1">
						
                     <div className="address-font">
							<h6>Rajesh Verma <span className="pull-right updtaddress"> <span onClick={ShowDeleteAddress}><i title="Delete Address" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="pull-right updtaddress updtmargn"> <span onClick={ShowEditAddress}><i title="Edit Address" className="fa fa-pencil" aria-hidden="true"></i></span></span></h6>
						
							<div className='addresscolor'>
								61 West Nepal gate, Churcha Collierry, Dist-Korea, C.G. - 497339
							</div>
							<div className='addresscolor'><i className="fa fa-phone" aria-hidden="true"></i> 9826098260</div>
							
						</div>
					</div>
					<hr className='sepaabout mar-0'/>
					 <div className="repeat user-parent-inner user-address mb-1">
						
                     <div className="address-font">
							<h6>Rajesh Verma <span className="pull-right updtaddress"> <span onClick={ShowDeleteAddress}><i title="Delete Address" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="pull-right updtaddress updtmargn"> <span onClick={ShowEditAddress}><i title="Edit Address" className="fa fa-pencil" aria-hidden="true"></i></span></span></h6>
						
							<div className='addresscolor'>
								61 West Nepal gate, Churcha Collierry, Dist-Korea, C.G. - 497339
							</div>
							<div className='addresscolor'><i className="fa fa-phone" aria-hidden="true"></i> 9826098260</div>
							
						</div>
					</div>
                    <hr className='sepaabout mar-0'/>
					 <div className="repeat user-parent-inner user-address mb-1">
						
                     <div className="address-font">
							<h6>Rajesh Verma <span className="pull-right updtaddress"> <span onClick={ShowDeleteAddress}><i title="Delete Address" className="fa fa-trash-o" aria-hidden="true"></i></span></span> <span className="pull-right updtaddress updtmargn"> <span onClick={ShowEditAddress}><i title="Edit Address" className="fa fa-pencil" aria-hidden="true"></i></span></span></h6>
						
							<div className='addresscolor'>
								61 West Nepal gate, Churcha Collierry, Dist-Korea, C.G. - 497339
							</div>
							<div className='addresscolor'><i className="fa fa-phone" aria-hidden="true"></i> 9826098260</div>
							
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
