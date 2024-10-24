import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import logo from './Images/logo.png'
import toparrow from './Images/top_arrow.png'
import loaderouter from './Images/loader_outer.gif'
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

import { useAuth } from "../store/auth";
import { toast } from "react-toastify";



import './css/index.scss'

 const Header = () => {
  const[resultsignup,setResultsignup] = useState('');
  const[resultsignin,setResultsignin] = useState('');
  const[loader,setLoader] = useState(false);

 
  const {isLoggedIn, USERAPI} = useAuth();   
///////// fixed header
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  function trimSpaces(value) 
	{
		if(typeof value === 'string') 
		{
		  return value.trim();
		} 
		else if(Array.isArray(value)) 
		{
		  return value.map(item => trimSpaces(item));
		} 
		else if(typeof value === 'object' && value !== null) 
		{
		  const trimmedObject = {};
		  Object.keys(value).forEach(key => {
			trimmedObject[key] = trimSpaces(value[key]);
		  });
		  return trimmedObject;
		}
		return value;
	}

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

  //////
  //const{user} = useAuth();
  //////for signup
    const[usersignup,setUsersignup] = useState({    //calling on pageload
        fullname:"",
        email:"",
        mobileno:"",
        otp:"",
        password:"",
        cnfpassword:""
    });
    
    const handleInputSignup = (e)=>{        //calling on typing
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUsersignup({
            ...usersignup,
            [name]:value
        })

    };
    const {storeTokenInLS} = useAuth();
    const navigate = useNavigate();

    const handleSubmitSignup = async (e) =>{      //calling on submit
        setLoader(true);
        e.preventDefault();       //to stop page refresh
        //console.log(usersignup);
        setResultsignup('');
   
        try
        {
          const response = await fetch(`${USERAPI}/register`,{
              method:"POST",
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(trimSpaces(usersignup))
          });

          const res_data = await response.json();
          //console.log("response data",res_data);

          if(response.ok)
          {
            setUsersignup({ 
                  fullname:"",
                  email:"",
                  mobileno:"",
                  otp:"",
                  password:"",
                  cnfpassword:""
              });
              //setResultsignup(res_data.msg);
              toast.success(res_data.msg);
              setLoader(false);
              storeTokenInLS(res_data.token);
              setTimeout(() => { navigate("/myorders") }, 5000);

          }
          else
          {
            //setResultsignup(res_data.msg);
            toast.error(res_data.msg);
            setLoader(false);
          }
          console.log(response);
      }
      catch(error)
      {
          //console.log("Register:", error)
          setLoader(false);
          toast.error(error);
      }

    }

  //////for signin
  const[usersignin,setUsersignin] = useState({    //calling on pageload
    emailsignin:"",
    passwordsignin:""
});

const handleInputSignin = (e)=>{        //calling on typing
    //console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUsersignin({
        ...usersignin,
        [name]:value
    })

};

const handleSubmitSignin = async (e) =>{      //calling on submit
    setLoader(true);
    e.preventDefault();       //to stop page refresh
    //console.log(usersignin);
    setResultsignin('');

    try
    {
      const response = await fetch(`${USERAPI}/login`,{
          method:"POST",
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(usersignin)
      });

      const res_data = await response.json();
      console.log("response data",res_data);

      if(response.ok && res_data.isAdmin === true)
      {
        setUsersignin({ 
              emailsignin:"",
              passwordsignin:""
            });
          //setResultsignin(res_data.msg);
          setLoader(false);
          toast.success(res_data.msg);
          storeTokenInLS(res_data.token);
          navigate("/admindashboard");
      }
      else if(response.ok && res_data.isAdmin !== true)
      {
          setUsersignin({ 
                emailsignin:"",
                passwordsignin:""
              });
            //setResultsignin(res_data.msg);
            setLoader(false);
            toast.success(res_data.msg);
            storeTokenInLS(res_data.token);
            navigate("/myorders");
      }
      else
      {
        //setResultsignin(res_data.msg);
        setLoader(false);
        toast.error(res_data.msg);
      }
      //console.log(response);
    }
    catch(error)
    {
      //console.log("Login:", error)
      setLoader(false);
      toast.error(error);
    }

}

//////

    return(
        <> 

       <div id="popupsignin" className="overlay" style={{display:'none'}}>

        <div className="popup-signin animate-zoom">
          <div className="parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
          <h4 className="heading">Sign in <i className="fa fa-pencil heading-icon" aria-hidden="true"></i></h4>
          <hr className="hrline" />
          <span onClick={CloseSignIn}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form onSubmit={handleSubmitSignin}>
  <div className="mb-3">
  <label  className="form-label-header"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
    <input name="emailsignin" id="emailsignin" value={usersignin.emailsignin} onChange={handleInputSignin} type="text" autoComplete="nope"  className="form-control f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label-header"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password </label>
    <input name="passwordsignin" id="passwordsignin" value={usersignin.passwordsignin} onChange={handleInputSignin} type="password" autoComplete="nope" className="form-control f-control" title="Enter your password"  placeholder="Enter your password"/>
    
  </div>
  <span>{resultsignin}</span>
  {
    loader ? <button type="button"  className="btn  outerdbtn w-100 mb-2"><span>Please wait... <img src={loaderouter} className="loadersize" alt="loader"/></span></button>
    :
    <button type="submit"  className="btn  outerdbtn w-100 mb-2">Sign in <i className="fa fa-sign-in" aria-hidden="true"></i></button>
  }
   
   

   {/* <Link to="/myprofile"  className="btn btn-success btn-bg w-100">Sign in <i className="fa fa-sign-in" aria-hidden="true"></i></Link><br/> */}
   
   
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
    <label  className="form-label-header"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
    <input type="text" autoComplete="nope" className="form-control f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>
    
  </div>
 
 
   <button type="button" className="btn outerdbtn w-100 mb-3">Submit <i class="fa fa-arrow-up" aria-hidden="true"></i></button><br/>
   <span title="Go to login" className="fgtpwd" onClick={ShowSignIn} >Sign in</span>

</form>
        </div>
        </div>


      <div id="popupsignup" className="overlay" style={{display:'none'}}>
        <div className="popup popup-signup animate-zoom">
          <div className="parentuser"><img loading='lazy'  src={userimg} alt="User" className="usericon"/></div>
          <h4 className="heading">Sign up <i className="fa fa-pencil-square-o heading-icon" aria-hidden="true"></i></h4>
          <hr className="hrlinesignup mb-3" />
          <span onClick={CloseSignUp}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form onSubmit={handleSubmitSignup}>
            <div className="container padd-0 signinscrollcontrol">
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin ">
                  <div className="mb-3">
                      <label  className="form-label-header"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name</label>
                      <input name="fullname" id="fullname" value={usersignup.fullname} onChange={handleInputSignup} type="text" autoComplete="nope" placeholder="Enter your full name" className="form-control f-control"  aria-describedby="emailHelp"/>
                      
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label-header"><i className="fa fa-envelope" aria-hidden="true"></i> Email</label>
                      <input name="email" id="email" value={usersignup.email} onChange={handleInputSignup} type="text" autoComplete="nope" placeholder="Enter your email" className="form-control f-control" />
    
                  </div>
                </div>
             
              </div>
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label-header"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No.</label>
                      <input name="mobileno" id="mobileno" value={usersignup.mobileno} onChange={handleInputSignup} type="text" autoComplete="nope"  placeholder="Enter mobile no." className="form-control f-control"  aria-describedby="emailHelp"/>
    
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label-header"><i className="fa fa-eye" aria-hidden="true"></i> OTP</label>
                      <input name="otp" id="otp" value={usersignup.otp} onChange={handleInputSignup} type="password" autoComplete="nope" placeholder="Enter otp" className="form-control f-control" />
    
                  </div>
                </div>
              
              </div>
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label-header"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password</label>
                      <input name="password" id="password" value={usersignup.password} onChange={handleInputSignup} type="password" autoComplete="nope" placeholder="Enter password" className="form-control f-control"  aria-describedby="emailHelp"/>
    
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label-header"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Confirm Password</label>
                      <input name="cnfpassword" id="cnfpassword" value={usersignup.cnfpassword} onChange={handleInputSignup} type="password"  autoComplete="nope" placeholder="Confirm password" className="form-control f-control" />
    
                  </div>
                </div>
                
              </div>
              
            </div>
 
 
  <span>{resultsignup}</span>
  {
    loader ?  
    <button type="button" className="btn outerdbtn w-100 mb-2"><span>please wait... <img src={loaderouter} className="loadersize" alt="loader"/></span> </button> 
    : 
    <button type="sumit" className="btn outerdbtn w-100 mb-2"><span>Sign up <i class="fa fa-sign-in" aria-hidden="true"></i></span></button>
  }
  
   <span onClick={ShowSignIn}  title="Go to login" className="fgtpwd" >Already have an account? Sign in</span>
   
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
        <div className={"item"}>
                    
                </div>
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
                              {
                                isLoggedIn ? <li  title="Sign out"><Link to='/logout'>Sign out</Link></li>  :  <li  title="Sign in"><span  onClick={ShowSignIn}>Sign in</span></li> 
                              } 
                                
                              {
                                isLoggedIn ? null :  <li  title="Sign up"><span  onClick={ShowSignUp}>Sign up</span></li> 
                              }
                           
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