import React,{useState} from 'react'
import Headeruser from './Headeruser'
import Footer from '../components/Footer'
import './../components/css/index.scss'
import loader from './../components/Images/loader.png'
import Sidebar from './Sidebar'
import update from './../components/Images/update.png'

export const Changepassword = () => {
    const[showloader,Setshowloader] = useState(true);     //loading effect

  return (
    <>
     { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
    
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
					<h5 className="mt-3"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Change Your Password <i className="fa fa-long-arrow-down pull-right" aria-hidden="true"></i></h5>
				</div>
				
				<div className="user-parent-profile mt-4">
				      
					  <div className="user-info">
					  <form>
            <div className="container">
           	    <div className="row">
                  <div className="col">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Old Password </label>
                      <input type="email" autoComplete="nope" placeholder="Enter your old password" className="form-control cart-f-control"  aria-describedby="emailHelp"/>
                      
                  </div>
                  </div>
                </div>
				  <div className="row"> 
				  <div className="col">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> New Password</label>
                      <input type="password" autoComplete="nope" placeholder="Enter your new password" className="form-control cart-f-control" />
    
                  </div>
                </div>
             
              </div>
              <div className="row">
                  <div className="col">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Confirm New Password</label>
                      <input type="email" autoComplete="nope"  placeholder="Confirm your new password" className="form-control cart-f-control"  aria-describedby="emailHelp"/>
    
                  </div>
                  </div>
				    </div>
				  
			  
			  <div className="row">
			      <div className="col">
					<button type="button" className="btn btn-success btn-bg w-100 mt-3">UPDATE <img loading='lazy'  src={update} alt='img' className='img-fluid' /></button>
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
