import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import loader from './Images/loader.png'
import { NavLink,Link } from 'react-router-dom'
import userimg from './Images/userimage.png'
import signup from './Images/signup.jpg'


export default function Signup()
{
    const[showloader,Setshowloader] = useState(true);     //loading effect



    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            
            <Header />

          <div className='forgotslidersetup mb-4'>
            <div className='container'>
                <div className='row'>
               
                    <div className='col'>
                    <div className='login-cartdtl-place-order new-parent'>
                    <div className='w-50 mobdnone'>
                       <img loading='lazy'  src={signup} alt="login" className='signup-img'/>
                    </div>
                    <div className="cart-login mw50 mobwidth100">
    <div className="cart-parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
    <h4 className="cart-heading">Sign up <i className="fa fa-pencil-square-o heading-icon" aria-hidden="true"></i></h4>
    <hr className="cart-hrline" />
   
    <form>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full name </label>
<input type="text" autoComplete="nope"  className="form-control cart-f-control" title="Enter your full name"  placeholder="Enter your full name" aria-describedby="emailHelp"/>

</div>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
<input type="email" autoComplete="nope"  className="form-control cart-f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>

</div>

<div className="row">
            <div className="col mobwidth100flxunset">
            <div className="mb-3">
                <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No.</label>
                <input type="email" autoComplete="nope" placeholder="Enter mobile no." className="form-control cart-f-control"  aria-describedby="emailHelp"/>

            </div>
            </div>
            <div className="col mobwidth100flxunset">
            <div className="mb-3">
                <label  className="form-label"><i className="fa fa-eye" aria-hidden="true"></i> OTP</label>
                <input type="password" autoComplete="nope" placeholder="Enter otp" className="form-control cart-f-control" />

            </div>
          </div>
        
        </div>
        <div className="row">
            <div className="col mobwidth100flxunset">
            <div className="mb-3">
                <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password</label>
                <input type="password" autoComplete="nope" placeholder="Enter password" className="form-control cart-f-control"  aria-describedby="emailHelp"/>

            </div>
            </div>
            <div className="col mobwidth100flxunset">
            <div className="mb-3">
                <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Confirm Password</label>
                <input type="password" autoComplete="nope" placeholder="Confirm password" className="form-control cart-f-control" />

            </div>
          </div>
          
        </div>
<br/>
<Link to="/placeorder">
<button type="button"  className="btn btn-success btn-bg w-100">Sign up <i className="fa fa-hand-pointer-o" aria-hidden="true"></i></button>
</Link>
<br/>


<br/>
<NavLink  title="Go to Sign up" to="/signin" className="cart-fgtpwd" style={{float:"left",textDecoration:"underline"}} >Already have an account? Sign in</NavLink>

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