import React, { useEffect } from 'react'
import userimg from './../components/Images/user.png'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'


const Sidebar =  () => {
	const navigate = useNavigate();
	const {isLoggedIn} = useAuth();
	const {user} = useAuth(); 
	
	useEffect(()=>{checkLogin()},[])
	
	function checkLogin() 
	{ //alert(user)
    	if(!isLoggedIn)
        {
             navigate("/signin");
        }
		 
	}
	
	return (
    <>
        	<div className="user-parent">
				<div className="user-left">
					<Link to='/myprofile'><img loading='lazy'  src={userimg} alt="img" className='img-fluid'/></Link>
				</div>
				<div className="user-right">
					<h6>Hi,</h6>
					<h6 className='user-name'>{ isLoggedIn ? user.fullname : "..." }</h6>					
				</div>
			</div>
			
			<div className="user-parent-outer outermar">
				<div className="user-parent-inner">
					<NavLink  className="anch-side"  exact="true" to="/myorders">
					<div className="side-menu brdr-bot">
						<span title="My Orders"><i className="fa fa-shopping-cart" aria-hidden="true"></i> My Orders <i className="fa fa-caret-right pull-right mt-1" aria-hidden="true"></i></span>
					</div>
					</NavLink>
					<NavLink  className="anch-side"  exact="true" to="/mywishlist">
					<div className="side-menu brdr-bot">
						<span title="My Wishlist"><i className="fa fa-heart" aria-hidden="true"></i> My Wishlist <i className="fa fa-caret-right pull-right mt-1" aria-hidden="true"></i></span>
					</div>
					</NavLink>
					<NavLink className="anch-side" exact="true" to="/myprofile">
					<div className="side-menu brdr-bot">
						<span title="My Profile"><i className="fa fa-user" aria-hidden="true"></i> My Profile <i className="fa fa-caret-right pull-right mt-1" aria-hidden="true"></i></span>
					</div>
					</NavLink>
					<NavLink  className="anch-side" exact="true" to="/myreview">
					<div className="side-menu brdr-bot">
						<span title="My Reviews"><i className="fa fa-star" aria-hidden="true"></i> My Reviews <i className="fa fa-caret-right pull-right mt-1" aria-hidden="true"></i></span>
					</div>
					</NavLink>
					<NavLink  className="anch-side" exact="true" to="/manageaddress">
					<div className="side-menu brdr-bot">
						<span title="Manage Adresses"><i className="fa fa-map-marker" aria-hidden="true"></i> Manage Adresses <i className="fa fa-caret-right pull-right mt-1" aria-hidden="true"></i></span>
					</div>
					</NavLink>
					<NavLink  className="anch-side" exact="true" to="/changepassword">
					<div className="side-menu brdr-bot">
						<span title="Change Password"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Change Password <i className="fa fa-caret-right pull-right mt-1" aria-hidden="true"></i></span>
					</div>
					</NavLink>
					<NavLink className="anch-side" exact="true" to="/logout">
					<div className="side-menu">
						<span title="Sign out"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</span>
					</div>
					</NavLink>
					
				</div>
			</div>
		
    </>
	 
  )
}

export default Sidebar