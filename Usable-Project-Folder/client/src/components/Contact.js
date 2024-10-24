import React,{useState} from 'react'
import { useAuth } from '../store/auth'
import Header from './Header'
import Footer from './Footer'
import loaderouter from './Images/loader_outer.gif'
import toparrow from './Images/top_arrow.png'
import { toast } from "react-toastify";
import success from "../admincomponent/Images/success.svg";
import error from "../admincomponent/Images/error.svg";

export default function Contact()
{
    const[showloader,Setshowloader] = useState(true);     //loading effect
    const[loader,setLoader] = useState(false);
    const[popupsuccess,setpopupsuccess] = useState(false);
	const[popuperror,setpopuperror] = useState(false);
    const[responseheading,setresponseheading] = useState('');
	const[responsemsg,setresponsemsg] = useState('');

    const[resultcontact,setResultcontact] = useState('');
    const[contact,setContact] = useState({
        contactname:"",
        contactemail:"",
        contactmobileno:"",
        contactmsg:""
    });
    
    // const[userData,setUserData]=useState(true);
     const {USERAPI} = useAuth();             
    // if(userData && user)
    // {
    //     setContact({
    //         usernamecontact:user.usernamecontact,
    //         emailcontact:user.emailcontact,
    //         mobilenocontact:user.mobilenocontact,
    //         messagecontact:user.messagecontact
    //     });
    //     setUserData(false);
    // }

    const handleInputContact = (e)=>{ 
       // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]:value
        });

                //    OR

        // setUser((prev) => ({
        //     ...prev,
        //     [name]:value

        // }));
       

    };

    const handleSubmitContact = async (e) =>{
        setLoader(true);
        e.preventDefault();       //to stop page refresh
        setResultcontact('');
       // alert('chksubmit')
       // console.log(contact);

        try
        {
          const response = await fetch(`${USERAPI}/contactus`,{
              method:"POST",
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(contact)
          });

          const res_data = await response.json();
         // console.log("response data",res_data);

          if(response.ok)
          {
            setContact({ 
                contactname:"",
                contactemail:"",
                contactmobileno:"",
                contactmsg:""
              });
              //setResultsignup(res_data.msg);
              setpopupsuccess(true);
              setresponseheading('Congratulation!');
              setresponsemsg(res_data.msg);
              //toast.success(res_data.msg);
              setLoader(false);
           
          }
          else
          {
            //setResultsignup(res_data.msg);
            setLoader(false);
            toast.error(res_data.msg);
          }
         // console.log(response);
      }
      catch(error)
      {
        setpopuperror(true);
        setresponseheading('Error!');
        setresponsemsg('Server error');
          setLoader(false);
          //toast.error(error);
      }



    };


    return(
        <>
 { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }  
<div id="popupsuccess" className="overlayadmin" style={{ display: `${popupsuccess === true ? 'block' : 'none'}` }}>
  <div className="popupdelete animate-zoom" style={{top:'30%'}}>
  <div className='text-center'>
	<img loading='lazy' src={success} style={{width:'115px'}} />
  </div>
    <div className="view-success-heading text-center">{responseheading}</div>
    
   
    <div className="container-fluid padd_0" >
	
		<div className="row mt-2">
			<div className="col text-center">
				<span className="success-heading">{responsemsg}</span>
				<br/><br/>
			</div>
			
		</div>
	
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <button onClick={()=>{setpopupsuccess(false)}} className="btn btn-success f-weight">Ok</button>
				
			</div>
		</div>
	</div>
	</div>
    
  </div>
		</div>

		<div id="popuperror" className="overlayadmin" style={{ display: `${popuperror === true ? 'block' : 'none'}` }}>
  <div className="popupdelete animate-zoom" style={{top:'30%'}}>
  <div className='text-center'>
	<img loading='lazy' src={error} style={{width:'115px'}} />
  </div>
    <div className="view-error-heading text-center">{responseheading}</div>
    
   
    <div className="container-fluid padd_0" >
	
		<div className="row mt-2">
			<div className="col text-center">
				<span className="error-heading">{responsemsg}</span>
				<br/><br/>
			</div>
			
		</div>
	
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <button onClick={()=>{setpopuperror(false)}} className="btn btn-danger f-weight">Ok</button>
				
			</div>
		</div>
	</div>
	</div>
    
  </div>
		</div>
            <Header />

            
            <section>
            <div className='slidersetup'>
                <div className='container-fluid'>
            
                <div className="row">
                     <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4216267641746!2d77.44172987531886!3d23.19130027905587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c424e9ec09817%3A0x3ec777ec9af2847b!2sInfusAi!5e0!3m2!1sen!2sin!4v1693678178825!5m2!1sen!2sin" title="map" width="100%" height="450" style={{border:'0'}}  loading="lazy" ></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                            <span className='path'>Home / Contact us</span>
                        </div>

                    </div>
                </div>
              
                </div>
            </div>
            </section>

<section>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
                <div className='text-center mt-2 mb-2'>
                    <h2 className='prod-heading'>Contact Us</h2>
                    <span className='background'>Get in touch with us at info@test.com or fill the form below</span>
                </div>
            </div>
        </div>
    </div>
</section>


            <section>
              <div className='mt-4 mb-4'>
                <div className='container'>
                <form onSubmit={ handleSubmitContact }>
                    <div className='row'>
                        <div className='col mobwidth100flxunsetadmin'>
                        
                    
                    <div className="mb-4">
<label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Name </label>
<input name="contactname" id="contactname" value={contact.contactname} onChange={handleInputContact} type="text" autoComplete="nope"  className="form-control cart-f-control" title="Enter your name"  placeholder="Enter your name" aria-describedby="emailHelp"/>

</div>
                    <div className="mb-4">
<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
<input name="contactemail" id="contactemail" value={contact.contactemail} onChange={handleInputContact} type="text" autoComplete="nope"  className="form-control cart-f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>

</div>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
<input name="contactmobileno" id="contactmobileno" value={contact.contactmobileno} onChange={handleInputContact} type="text" autoComplete="nope" className="form-control cart-f-control" title="Enter your mobile no."  placeholder="Enter your mobile no."/>

</div>

</div>
                        <div className='col mobwidth100flxunsetadmin'>
                        <div className="mb-3">
<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Message </label>
<textarea name="contactmsg" id="contactmsg" value={contact.contactmsg} onChange={handleInputContact} autoComplete="nope" className="form-control cart-f-control msgheight" title="Type your message"  placeholder="Type your message"></textarea>

</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='text-center mt-3 mb-2'>
                            
<span>{resultcontact}</span>
{
    loader ? <button type="button"  className="btn btn-success btn-bg "><span>Please wait... <img src={loaderouter} className="loadersize" alt="loader"/></span></button>
    :
    <button type="submit"  className="btn btn-success btn-bg ">Submit <img loading='lazy'  src={toparrow} alt='img' className="uparrow" /></button>
}


                            </div>
                        </div>
                    </div>
                </form>
                </div>
              </div>
            </section>
            

            <Footer />
            { showloader ? Setshowloader(false) : null } 
        </>
    )
}