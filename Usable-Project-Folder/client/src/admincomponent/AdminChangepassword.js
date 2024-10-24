import React,{useState} from 'react'
import AdminSideBar from './AdminSideBar'
import AdminTopbar from './AdminTopbar'
import loader from './../components/Images/loader.png'
import './css/admin.scss'
import success from "./Images/success.svg";
import error from "./Images/error.svg";
import loadergif from "./Images/loader.gif";
import updateicon from "./Images/update_icon.svg"
import { useAuth } from '../store/auth'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const AdminChangepassword = () => {


	const[showloader,Setshowloader] = useState(true);     //loading effect
	const Pageheading = 'Change password';
	const Pagesubheading = 'Home / Change password';


		//////for update admin password
		const {user} = useAuth();
		const { authorizationToken, ADMINAPI } = useAuth(); 
		const[loader,setLoader] = useState(false);
		const[popupwait,setpopupwait] = useState(false);
		const[popupsuccess,setpopupsuccess] = useState(false);
		const[popuperror,setpopuperror] = useState(false);
		const[responseheading,setresponseheading] = useState('');
		const[responsemsg,setresponsemsg] = useState('');
		const navigate = useNavigate();

		const[editadmindata,Seteditadmindata] = useState({oldpassword:"", newpassword:"", confirmnewpassword:""});
		const handlePasswordEdit = (e)=>{        //calling on typing
			//console.log(e);
			let name = e.target.name;
			let value = e.target.value;
	
			Seteditadmindata({
				...editadmindata,
				[name]:value
			})
	
		};
	 
		const handleSubmitAdminChangePassword = async (e) =>{      //calling on submit
			e.preventDefault();       //to stop page refresh
			setLoader(true);
			setpopupwait(true);
			//console.log("useradmineditdata",editadmindata);
				
			try
			{
			  const response = await fetch(`${ADMINAPI}/geteditadminpassword/${user._id}`,{
				  method:"PATCH",
				  headers:{
					  'Content-Type': 'application/json',
					  Authorization : authorizationToken 
	
				  },
				  body:JSON.stringify(editadmindata)
			  });
	
			  const res_data = await response.json();
			 // console.log("response data",res_data);
	
			  if(response.ok)
			  { 
				Seteditadmindata({ 
					oldpassword:"",
					newpassword:"",
					confirmnewpassword:""
				  });
				//toast.success(res_data.msg);
				setLoader(false);
				setpopupsuccess(true);
				setresponseheading(process.env.REACT_APP_SUCCESS_HEADING_UPDATE);
				setresponsemsg(res_data.msg);
				setpopupwait(false);
				//navigate("/admindashboard");
			  }
			  else
			  {
				toast.error(res_data.msg);
				setLoader(false);
				setpopupwait(false);
			  }
			
		  }
		  catch(error)
		  {
			//console.log("update-error",error)
			//toast.error(error);
			setpopuperror(true);
			setresponseheading(process.env.REACT_APP_ERROR_HEADING);
			setresponsemsg(process.env.REACT_APP_ERROR_MESSAGE);
			setLoader(false);
			setpopupwait(false);
		  }
	
		}


	return (
		<>
		 { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy' src={loader} alt="loader" /></div></div> : null }
			
		 <div id="popupwait" className="overlayadmin" style={{ display: `${popupwait === true ? 'block' : 'none'}` }}
>
  <div className="popupwait animate-zoom">
    <div className="text-center">
	
	<img src={loadergif} style={{width:'50px'}} />
	</div>
   
  
    <div className="container-fluid padd_0" >
	
		<div className="row mt-2">
			<div className="text-center">
				<span className="delete-heading">Please wait...</span>
				
			</div>
			
		</div>
	

	</div>
  
  </div>
		</div>
	 
	    <div id="popupsuccess" className="overlayadmin" style={{ display: `${popupsuccess === true ? 'block' : 'none'}` }}>
  <div className="popupdelete animate-zoom">
  <div className='text-center'>
	<img  src={success} style={{width:'115px'}} />
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
			    <button onClick={()=>{setpopupsuccess(false);navigate("/admindashboard");}} className="btn btn-success f-weight">Ok</button>
				
			</div>
		</div>
	</div>
	</div>
    
  </div>
		</div>

		<div id="popuperror" className="overlayadmin" style={{ display: `${popuperror === true ? 'block' : 'none'}` }}>
  <div className="popupdelete animate-zoom">
  <div className='text-center'>
	<img  src={error} style={{width:'115px'}} />
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
			
			<div className='container-fluid'>
				<div className='row'>


				<div className='col-2 left-bg padd_0 mobwidth100admin' > 
                    <div className='mobmenuadmin mobdnoneadmin animate-rightadmin'   id='mobilemenuadmin'>
					<AdminSideBar />
					</div>
					
                </div>

					<div className='col-10 padding_0 mobwidth100admin'>
						<AdminTopbar />

						<div className="container ">
							<div className="parent-row-top">
								<div className="row w-100 mt-2 mb-0">
									<div className="col">
										<div>
											<span className="page-heading"><i className="fa fa-unlock-alt" aria-hidden="true"></i> {Pageheading}</span>
											
										</div>
										<div className='page-heading-bottom'>{Pagesubheading}</div>
									</div>




								</div>



							</div>

						</div>



						<div className="container mobrightpadding0">
							<div className="parent-row parent-rowmob mobbgremove">
								<div className="row w-100  childrowprof">
									<div className="col mobrightpadding0">
										<div className="container setpadding">
											<div className="row">
												<div className="col-md-12 cngpwdandprofpad0">

													<div className="row justify-content-center removebottomspace">
														<div className="col-md-12 mobpadding0admin">
															<span className="anchor" id="formLogin"></span>

															<div className="card card-outline-secondary">
																<div className="card-header">
																	<h5 className="mb-0">Change your password</h5>
																</div>
																<div className="card-body">
																	<form onSubmit={handleSubmitAdminChangePassword}>
																		<div className="mb-3">
																			<label  className="form-label-admin"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Old Password </label>
																			<input name="oldpassword" id="oldpassword" onChange={handlePasswordEdit}  type="password" autoComplete="nope" className="form-control cart-f-control-admin" title="Enter old password" placeholder="Enter old password" aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label-admin"><i className="fa fa-unlock-alt" aria-hidden="true"></i> New Password </label>
																			<input name="newpassword" id="newpassword" onChange={handlePasswordEdit} type="password" autoComplete="nope" className="form-control cart-f-control-admin" title="Enter new password" placeholder="Enter new password" aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label-admin"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Confirm New Password </label>
																			<input name="confirmnewpassword" id="confirmnewpassword" onChange={handlePasswordEdit} type="password" autoComplete="nope" className="form-control cart-f-control-admin" title="Confirm new password" placeholder="Confirm new password" aria-describedby="emailHelp" />

																		</div>
																		<div className='updatebtndiv'>
																		 {
																			loader ? <button type="button" className="btn btn-success btn-update w-100"><span>Please wait... <i className="fa fa-spinner fa-pulse fa-3x fa-fw fa-lg loadersize" ></i></span></button>
																			:
																			<button type="submit" className="btn btn-success btn-update w-100">Update <img src={updateicon} style={{width:'22px'}} /></button>
																		 }
																		 </div>	
																		



																	</form>
																</div>
															</div>
														</div>
													</div>

												</div>
											</div>
										</div>

									</div>




								</div>



							</div>

						</div>



					</div>
				</div>
			</div>


			{ showloader ? Setshowloader(false) : null } 
		</>
	)
}

export default AdminChangepassword