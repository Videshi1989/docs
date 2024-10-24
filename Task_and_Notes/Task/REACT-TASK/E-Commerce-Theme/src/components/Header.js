import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
import toparrow from './Images/top_arrow.png'
import userimg from './Images/userimage.png'
import closebtn from './Images/closebtn.png'
import emptycart from './Images/emptycart.png'
import product1 from './Images/product1.jpg'
import product2 from './Images/product2.jpg'
import ele1 from './Images/ele1.jpg'
import ele2 from './Images/ele2.jpg'
import laptop1 from './Images/laptop1.jpg'
import camera from './Images/camera.jpg'
import Categoryslider from './Categoryslider'




import './css/index.scss'

 const Header = () => {
 
///////// fixed header
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

/////////showing menu for mobile
  

  function Showmenu()
  {
    document.getElementById('mobdnone').classList.remove('mobdnone');
    document.getElementById('showbar').classList.add('mobdnone');
    document.getElementById('showbar').classList.remove('toggle');
    document.getElementById('hidebar').classList.add('toggle');
    document.getElementById('hidebar').classList.remove('toggleclose');
  }

  function Hidemenu()
  {
    document.getElementById('mobdnone').classList.add('mobdnone');
    document.getElementById('showbar').classList.add('toggle');
    document.getElementById('showbar').classList.remove('mobdnone');
    document.getElementById('hidebar').classList.remove('toggle');
    document.getElementById('hidebar').classList.add('toggleclose');
  }
  function ShowSignIn()
  {
    document.getElementById('popupsignin').style='display:block';
    document.getElementById('popupsignup').style='display:none';
    document.getElementById('popupforgot').style='display:none';
  }
  function CloseSignIn()
  {
    document.getElementById('popupsignin').style='display:none';
  }
  function ShowSignUp()
  {
    document.getElementById('popupsignup').style='display:block';
    document.getElementById('popupsignin').style='display:none';
    document.getElementById('popupforgot').style='display:none';
  }
  function CloseSignUp()
  {
    document.getElementById('popupsignup').style='display:none';
  }
  function ShowForgot()
  {
    document.getElementById('popupforgot').style='display:block';
    document.getElementById('popupsignin').style='display:none';
    document.getElementById('popupsignup').style='display:none';
  }
  function CloseForgot()
  {
    document.getElementById('popupforgot').style='display:none';

  }
  function ShowCartDetails()
  {
    document.getElementById('popupcartdetails').style='display:block';
  }
  function CloseCartDetails()
  {
    document.getElementById('popupcartdetails').style='display:none';
  }


    return(
        <>
     
    

      <div id="popupsignin" className="overlay" style={{display:'none'}}>

        <div className="popup-signin animate-zoom">
          <div className="parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
          <h4 className="heading">Sign in <i className="fa fa-pencil heading-icon" aria-hidden="true"></i></h4>
          <hr className="hrline" />
          <span onClick={CloseSignIn}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form>
  <div className="mb-3">
  <label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
    <input type="email" autoComplete="nope"  className="form-control f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password </label>
    <input type="password" autoComplete="nope" className="form-control f-control" title="Enter your password"  placeholder="Enter your password"/>
    
  </div>
  <br/>
   {/* <button type="button"  className="btn btn-success btn-bg w-100">Sign in <i className="fa fa-sign-in" aria-hidden="true"></i></button><br/> */}
   <Link to="/myprofile"  className="btn btn-success btn-bg w-100">Sign in <i className="fa fa-sign-in" aria-hidden="true"></i></Link><br/>
   
   <br/>
   <span title="Forgot Password" className="fgtpwd" onClick={ShowForgot} >Forgot Password</span>
   <span onClick={ShowSignUp} className="fgtpwd" style={{float:"left",textDecoration:"underline"}} >New user? Don't have an account</span>

</form>
        </div> 
       
      </div>

        <div id="popupforgot" className="overlay" style={{display:'none'}}>
        <div className="popup-forgot animate-zoom">
          <div className="parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
          <h4 className="heading">Forgot Password <i className="fa fa-eye-slash" aria-hidden="true"></i></h4>
          <hr className="hrline" />
          <span onClick={CloseForgot}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form>
  <div className="mb-3">
    <label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
    <input type="email" autoComplete="nope" className="form-control f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>
    
  </div>
 
  <br/>
   <button type="button" className="btn btn-success btn-bg w-100">Submit <img loading='lazy'  src={toparrow} alt='img' className="uparrow" /></button><br/>
   <br/><span title="Go to login" className="fgtpwd" onClick={ShowSignIn} >Sign in</span>

</form>
        </div>
        </div>


      <div id="popupsignup" className="overlay" style={{display:'none'}}>
        <div className="popup animate-zoom">
          <div className="parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
          <h4 className="heading">Sign up <i className="fa fa-pencil-square-o heading-icon" aria-hidden="true"></i></h4>
          <hr className="hrlinesignup " />
          <span onClick={CloseSignUp}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form>
            <div className="container padd-0 signinscrollcontrol">
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin">
                  <div>
                      <label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name</label>
                      <input type="email" autoComplete="nope" placeholder="Enter your full name" className="form-control f-control"  aria-describedby="emailHelp"/>
                      
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div>
                      <label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email</label>
                      <input type="password" autoComplete="nope" placeholder="Enter your email" className="form-control f-control" />
    
                  </div>
                </div>
             
              </div>
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin">
                  <div>
                      <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No.</label>
                      <input type="email" autoComplete="nope"  placeholder="Enter mobile no." className="form-control f-control"  aria-describedby="emailHelp"/>
    
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div>
                      <label  className="form-label"><i className="fa fa-eye" aria-hidden="true"></i> OTP</label>
                      <input type="password" autoComplete="nope" placeholder="Enter otp" className="form-control f-control" />
    
                  </div>
                </div>
              
              </div>
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password</label>
                      <input type="password" autoComplete="nope" placeholder="Enter password" className="form-control f-control"  aria-describedby="emailHelp"/>
    
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Confirm Password</label>
                      <input type="password" autoComplete="nope" placeholder="Confirm password" className="form-control f-control" />
    
                  </div>
                </div>
                
              </div>
              
         
         
          
        

            </div>
 
 
  <br/>
   <button type="button" className="btn btn-success btn-bg w-100">Sign up <i className="fa fa-hand-pointer-o" aria-hidden="true"></i></button><br/>
   <br/>
   <span onClick={ShowSignIn}  title="Go to login" className="fgtpwd" >Sign in</span>
   
</form>
        </div>
      </div>

      <div id="popupcartdetails" className="overlay" style={{display:'none'}}>
        <div className="popup-cart animate-zoom" >
              <span onClick={CloseCartDetails}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
              <div className="container" style={{display:"block"}}>
                <div className="cartheight" id="style-scroll">
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={product1} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                          <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={product2} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={ele1} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name"src={ele2} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={laptop1} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={camera} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                 
                  </div>
                  <div className="row">
                    <div className="col">
                    <div className="parentsubtot">
                      <p className="subtot"><span><b>Sub Total : </b></span><span><b>Rs.5000</b></span></p>
                     
                  </div>
                    </div>
                  </div>
                  
             
              </div>

              <div className="container emptycart" >
                  <div className="row">
                      <div className="col">
                          <div className="blankcart" style={{display:"none"}}>
                            <img loading='lazy' alt='img'  src={emptycart} style={{width:"40%"}} />
                            <br/><br/>
                            <h6><b>Your cart is empty!!!</b></h6>
                            <small className="emptytext">Looks like you have not added any thing to you cart. Go ahead & explore top categories.</small>
                            
                          </div>
                      </div>
                  </div>
              </div>


        </div>
      </div>

        <header className={`header ${scrollPosition > 200 ? "fixed slide-in" : ""}`}>
          <div className="header-div">
          <div className="container-fluid">
          <div className="row">
            <div className="col-2 mobwidth100">
                  <div>
                  <Link to="/home" style={{border:"none!important"}}>
                      <img loading='lazy'  src={logo} alt="Logo" className="header-logo" />
                  </Link>
                  <span onClick={Showmenu} id="showbar" className="toggle" style={{display:'none'}}>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                  </span>
                  <span onClick={Hidemenu} id="hidebar" className="toggleclose" style={{display:'none'}}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                  </span>
                  </div>

            </div>
                 <div className="col-7 mobwidth100 padd-0">
                  <div className="search-area">
                                            <input type="text" className="form-control search-product f-control f-control-mob" autoComplete="none" placeholder="Search"   />
                         <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                         
                         
                  </div>
                       
                  </div>
                  <div className="col mobwidth100 mobpadding0"> 
                  <div className="mobdnone outermobilemenu animate-right" id="mobdnone">
                         <ul className="top-menu">
                         <li title="More" className="parent-li ">More <i className="fa fa-caret-down" aria-hidden="true"></i>
                                <ul className="category">
                                    <li title="Home"><Link to='/home'>Home</Link></li>
                                    <li title="About us"><Link to="/about">About us</Link></li>
                                    <li title="Contact us"><Link to="/contact">Contact us</Link></li>
                                </ul>
                              </li>  
                             <li  title="Sign in">
                             <span  onClick={ShowSignIn}>Sign in</span>
                             </li>   
                             <li  title="Sign up"><span  onClick={ShowSignUp}>Sign up</span></li> 
                           
                         </ul>
                         
                     </div>
                     <div  className="cart-div"><span onClick={ShowCartDetails} className="cart-anch"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true" title="Cart Details"></i><span className="cart-span">1</span></span></div>
                     
                  </div>
           

             </div>


          </div>
         </div>

        <div className="category-parent">  
                     
        <div className="container-fluid">
           <div className="row">
               <Categoryslider  />
            </div>
        </div>  
        </div>

       
              
          </header>
        </>
    )
}

export default Header