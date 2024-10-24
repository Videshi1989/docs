import React,{useState} from 'react'
import Headeruser from './Headeruser'
import Footer from '../components/Footer'
import './../components/css/index.scss'
import loader from './../components/Images/loader.png'
import update from './../components/Images/update.png'
import closebtn from './../components/Images/closebtn.png'
import user from './../components/Images/user.png'
import Sidebar from './Sidebar'

export const Myprofile = () => {
    const[showloader,Setshowloader] = useState(true);     //loading effect
    function ShowProfile()
    {
      document.getElementById('editprofile').style='display:block';
    }
    function CloseProfile()
    {
      document.getElementById('editprofile').style='display:none';
    }
  return (
    <>
     { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
    
    <div id="editprofile" className='overlay' style={{display:'none'}}>
    <div className="popup profile-bg profile-bg-mob animate-zoom">
          <h4 className="cart-heading">Update Your Profile <i className="fa fa-pencil-square-o heading-icon" aria-hidden="true"></i></h4>
          <hr className="cart-hrline" />
          <span onClick={CloseProfile}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form>
  <div className="mb-3">
  <label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Full Name </label>
    <input type="email" autoComplete="nope"  className="form-control cart-f-control" title="Enter full name"  placeholder="Enter your full name" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Email </label>
    <input type="password" autoComplete="nope" className="form-control cart-f-control" title="Enter your email"  placeholder="Enter your email"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
    <input type="password" autoComplete="nope" className="form-control cart-f-control" title="Enter your mobile no"  placeholder="Enter your mobile no"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label"><i className="fa fa-user" aria-hidden="true"></i> Profile Picture </label>
    <input type="file" className="form-control f-cont-myprof" />
    
  </div>
   <br/>
   <button type="button"  className="btn btn-success btn-bg w-100">Update <img loading='lazy'  src={update} alt='img' className='img-fluid' /></button><br/>
   

</form>
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
					<h5 className="mt-3"><i className="fa fa-user" aria-hidden="true"></i> My Profile <i className="fa fa-long-arrow-down pull-right" aria-hidden="true"></i></h5>
				</div>
				
				<div className="user-parent-profile mt-4">
				      
					  <div className="user-info">
					  <form>
            <div className="container">
              <div className="row">
                  <div className="col">
                  <div className="mb-3">
                      <div><span onClick={ShowProfile} className='editprofile'><i title="Edit" className="fa fa-pencil-square-o fa-lg pull-right edit-info" aria-hidden="true"></i></span></div>
                      
                  </div>
                  </div>
                  </div>
				    <div className="row">
                  <div className="col">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name </label>
                      <input type="email" autoComplete="nope" placeholder="Enter your full name" className="form-control cart-f-control"  aria-describedby="emailHelp"/>
                      
                  </div>
                  </div>
                  </div>
				  <div className="row"> 
				  <div className="col">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email</label>
                      <input type="password" autoComplete="nope" placeholder="Enter your email" className="form-control cart-f-control" />
    
                  </div>
                </div>
             
              </div>
              <div className="row">
                  <div className="col">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No.</label>
                      <input type="email" autoComplete="nope"  placeholder="Enter mobile no." className="form-control cart-f-control"  aria-describedby="emailHelp"/>
    
                  </div>
                  </div>
				    </div>
			      <div className="row">
                  <div className="col">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Profile Picture</label>
                        <div className='mt-4 text-center'>
																				<img loading='lazy'  src={user} alt='img' className='userchange' />
											</div>
    
                  </div>
                  </div>
				    </div>
			           
            </div>
 
</form>
					
				
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
