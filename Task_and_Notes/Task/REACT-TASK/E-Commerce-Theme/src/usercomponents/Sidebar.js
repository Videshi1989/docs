import React from 'react'
import user from './../components/Images/user.png'
import { NavLink,Link } from 'react-router-dom'



const Sidebar = () => {
  	return (
    <>
        	<div className="user-parent">
				<div className="user-left">
					<Link to='/myprofile'><img loading='lazy'  src={user} alt="img" className='img-fluid'/></Link>
				</div>
				<div className="user-right">
					<h6>Hi,</h6>
					<h6 className='user-name'>Mr. Rajkumar Chouksey</h6>
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
					<div className="side-menu">
						<span title="Sign out"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</span>
					</div>
					
				</div>
			</div>
    </>
  )
}

export default Sidebar