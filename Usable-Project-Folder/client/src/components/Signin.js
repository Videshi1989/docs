import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import loaderimg from './Images/loader.png'
import loaderouter from './Images/loader_outer.gif'
import { NavLink, useNavigate } from 'react-router-dom'
import userimg from './Images/userimage.png'
import login from './Images/login.jpg'
import google from './Images/google.png'
import facebook from './Images/facebook.png'

import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export default function Signin()
{
    const[resultsignincart,setResultsignincart] = useState('');
    const[loader,setLoader] = useState(false);
    const navigate = useNavigate();
    const {authorizationToken,storeTokenInLS, USERAPI} = useAuth();

    const[showloader,Setshowloader] = useState(true);     //loading effect

    //sign in
    const[usersignincart,setUsersignincart] = useState({    //calling on pageload
        emailsignincart:"",
        passwordsignincart:""
    });
    
    const handleInputSignincart = (e)=>{        //calling on typing
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUsersignincart({
            ...usersignincart,
            [name]:value
        })
    
    };
    
    const handleSubmitSignincart = async (e) =>{      //calling on submit
        setLoader(true);
        e.preventDefault();       //to stop page refresh
       // console.log(usersignincart);
        setResultsignincart('');
    
        try
        {
          const response = await fetch(`${USERAPI}/logincart`,{
              method:"POST",
              headers:{
                  Authorization : authorizationToken,
                  'Content-Type':'application/json'
                  
              },
              body:JSON.stringify(usersignincart)
          });
    
          const res_data = await response.json();
          //console.log("response data",res_data);
       
          if(response.ok && res_data.isAdmin === true)
            {
              setUsersignincart({ 
                    emailsignincart:"",
                    passwordsignincart:""
                  });
                //setResultsignincart(res_data.msg);
                setLoader(false);
                toast.success(res_data.msg);
                storeTokenInLS(res_data.token);
                //setUserData(res_data);
                navigate("/admindashboard");
            }
          else if(response.ok && res_data.isAdmin !== true)
          {
            setUsersignincart({ 
                  emailsignincart:"",
                  passwordsignincart:""
                });
              //setResultsignincart(res_data.msg);
              setLoader(false);
              toast.success(res_data.msg);
              storeTokenInLS(res_data.token);
              //setUserData(res_data);
              navigate("/placeorder");
          }
          else
          {
            //setResultsignincart(res_data.msg);
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
    
  
    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loaderimg} alt="loader" /></div></div> : null }
            
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
   
    <form onSubmit={handleSubmitSignincart}>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
<input name="emailsignincart" id="emailsignincart" value={usersignincart.emailsignincart} onChange={handleInputSignincart} type="text" autoComplete="nope"  className="form-control cart-f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>

</div>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password </label>
<input name="passwordsignincart" id="passwordsignincart" value={usersignincart.passwordsignincart} onChange={handleInputSignincart} type="password" autoComplete="nope" className="form-control cart-f-control" title="Enter your password"  placeholder="Enter your password"/>

</div>

<span className='background'>{ resultsignincart }</span><br/>
{
    loader ?  <button type="submit"  className="btn btn-success btn-bg w-100"><span>Please wait... <img src={loaderouter} className="loadersize" alt="loader"/></span></button>
    :
    <button type="submit"  className="btn btn-success btn-bg w-100">Sign in <i className="fa fa-sign-in" aria-hidden="true"></i></button>
}


<br/>
<br/>
<button type="button" className="login-with-google-btn mobwidth100 gle" ><img src={google} alt="img" loading="lazy" className='google' /> Sign in with Google</button>
<button type="button" className="login-with-google-btn mobwidth100 fb" ><img src={facebook} alt="img" loading="lazy" className='google' /> Sign in with Facebook</button>
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