import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import loader from './Images/loader.png'
import { NavLink,Link } from 'react-router-dom'
import userimg from './Images/userimage.png'
import forgot from './Images/forgot.jpg'
import update from './../components/Images/update.png'


export default function Reset()
{
    const[showloader,Setshowloader] = useState(true);     //loading effect



    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            
            <Header />
          <div className='forgotslidersetup mb-5'>
            <div className='container'>
                <div className='row'>
               
                    <div className='col'>
                    <div className='login-cartdtl-place-order new-parent'>
                    <div className='w-60 mobdnone'>
                       <img loading='lazy'   src={forgot} alt="login" className='login-img'/>
                    </div>
                    <div className="cart-login w-40 mobwidth100">
    <div className="cart-parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
    <h4 className="cart-heading">Reset Password  <i className="fa fa-eye-slash heading-icon" aria-hidden="true"></i></h4>
    <hr className="cart-hrline" />
   
    <form>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> New Password </label>
<input type="password" autoComplete="nope"  className="form-control cart-f-control" title="Enter new password"  placeholder="Enter new password" aria-describedby="emailHelp"/>

</div>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Confirm Password </label>
<input type="password" autoComplete="nope" className="form-control cart-f-control" title="Confirm your password"  placeholder="Confirm your password"/>

</div>
<br/>
<Link href="/placeorder">
<button type="button"  className="btn btn-success btn-bg w-100">Update <img loading='lazy'  src={update} alt='img' className='img-fluid' /></button>
</Link>
<br/>


<br/>
<NavLink title="Forgot Password" to="/signin" className="cart-fgtpwd" style={{textDecoration:"underline"}} >Sign in</NavLink>
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