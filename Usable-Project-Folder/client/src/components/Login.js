import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import loader from './Images/loader.png'
import { Link } from 'react-router-dom'
import userimg from './Images/userimage.png'



export default function Login()
{
    const[showloader,Setshowloader] = useState(true);     //loading effect
    const[showlogin,Setshowlogin] = useState(true);
    const[showreg,Setshowreg] = useState(false);
  
function ShowForgotPassword()
{
  showlogin ? Setshowlogin(false)  : Setshowlogin(true)
  
}
function Showreg()
{
    showreg ? Setshowreg(false) : Setshowreg(true)
   
}


    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            
            <Header />

       
          <div className='forgotslidersetup mb-4'>
            <div className='container'>
                <div className='row'>
                <div className='login-cartdtl-place-order'>
                  
                    <div className='col'>
             { showreg ? null :    <div>

{ showlogin ?  

    
  
    <div className="cart-login">
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
<span onClick={Showreg} title="Go to Sign up" className="cart-fgtpwd" style={{float:"left",textDecoration:"underline"}} >New user? Don't have an account</span>
<br style={{display:'none'}}  className='mobdblock'  />
<Link title="Forgot Password" className="cart-fgtpwd cartfpedmob" onClick={ShowForgotPassword} >Forgot Password</Link>


</form>
  </div> :  <div className="cart-login">
    <div className="cart-parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
    <h4 className="cart-heading">Forgot Password <i className="fa fa-eye-slash" aria-hidden="true"></i></h4>
    <hr className="cart-hrline" />
   
    <form>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
<input type="email" autoComplete="nope" className="form-control cart-f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>

</div>

<br/>
<button type="button" className="btn btn-success btn-bg w-100">Submit <i className="fa fa-hand-pointer-o" aria-hidden="true"></i></button><br/>
<br/><Link title="Go to login" className="cart-fgtpwd" onClick={ShowForgotPassword} >Login</Link>

</form>
  </div>}
 
                    </div> }       
                


{ showreg ? <div className="cart-login">
    <div className="cart-parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
    <h4 className="cart-heading">Sign up <i className="fa fa-pencil-square-o heading-icon" aria-hidden="true"></i></h4>
    <hr className="cart-hrline" />
    
    <form>
      <div className="container">
        <div className="row">
            <div className="col">
            <div className="mb-3">
                <label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name</label>
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
        
   
   
    
  

      </div>


<br/>
<button type="button" className="btn btn-success btn-bg w-100">Sign up <i className="fa fa-hand-pointer-o" aria-hidden="true"></i></button><br/>
<br/>
<span title="Go to login" aria-current="page" className="cart-fgtpwd" onClick={Showreg} >Login</span>
</form>
  </div> : null }
  

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