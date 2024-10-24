import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import loader from './Images/loader.png'
import { NavLink,Link } from 'react-router-dom'
import userimg from './Images/userimage.png'
import login from './Images/login.jpg'
import google from './Images/google.png'
import facebook from './Images/facebook.png'


export default function Signin()
{
    const[showloader,Setshowloader] = useState(true);     //loading effect



    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            
            <Header />

          <div className='forgotslidersetup'>
            <div className='container'>
                <div className='row'>
               
                    <div className='col'>
                    <div className='login-cartdtl-place-order new-parent'>
                    <div className='w-60 mobdnone'>
                       <img loading='lazy'  src={login} alt="login" className='login-img'/>
                    </div>
                    <div className="cart-login w-40 mobwidth100">
    <div className="cart-parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
    <h4 className="cart-heading">Sign in <i className="fa fa-pencil-square-o heading-icon" aria-hidden="true"></i></h4>
    <hr className="cart-hrline" />
   
    <form>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
<input type="email" autoComplete="nope"  className="form-control cart-f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>

</div>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password </label>
<input type="password" autoComplete="nope" className="form-control cart-f-control" title="Enter your password"  placeholder="Enter your password"/>

</div>
<br/>
<Link to="/placeorder">
<button type="button"  className="btn btn-success btn-bg w-100">Sign in <i className="fa fa-sign-in" aria-hidden="true"></i></button>
</Link>
<br/>
<br/>
<button type="button" class="login-with-google-btn mobwidth100 gle" ><img src={google} alt="img" loading="lazy" className='google' /> Sign in with Google</button>
<button type="button" class="login-with-google-btn mobwidth100 fb" ><img src={facebook} alt="img" loading="lazy" className='google' /> Sign in with Facebook</button>
<NavLink title="Forgot Password" className="cart-fgtpwd" style={{textDecoration:"underline"}} to="/forgot" >Forgot Password</NavLink>
<br style={{display:'none'}} className='mobdblock' />
<NavLink  title="Go to Sign up" to="/signup" className="cart-fgtpwd" style={{float:"left",textDecoration:"underline"}} >New user? Don't have an account</NavLink>

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