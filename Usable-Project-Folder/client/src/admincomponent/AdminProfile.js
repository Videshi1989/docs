import React,{useEffect, useState} from 'react'
import admin from './Images/admin.svg'
import closebtn from './Images/closebtn.png'
import AdminSideBar from './AdminSideBar'
import AdminTopbar from './AdminTopbar'
import loader from './../components/Images/loader.png'
import './css/admin.scss'
//import exclamation from "./Images/exclamation.svg";
import success from "./Images/success.svg";
import error from "./Images/error.svg";
import loadergif from "./Images/loader.gif";

import { useAuth } from '../store/auth'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'


const AdminProfile = () => {
	const[showloader,Setshowloader] = useState(true);     //loading effect
	const Pageheading = 'My profile';
	const Pagesubheading = 'Home / My profile';

	const[loader,setLoader] = useState(false);
	const[popupwait,setpopupwait] = useState(false);
	const[popupsuccess,setpopupsuccess] = useState(false);
	const[popuperror,setpopuperror] = useState(false);
	const[responseheading,setresponseheading] = useState('');
	const[responsemsg,setresponsemsg] = useState('');

	const[img,setImg] = useState('');
    const[previewimg,setpreviewimg] = useState('');
	const[displaypreviewimg,setdisplaypreviewimg] = useState(true);

	const {user} = useAuth();
	const userid = user._id;
	const { authorizationToken,ADMINAPI } = useAuth(); 
	const[admindata,setadmindata] = useState({fullname:"",email:"",mobileno:""});
	const navigate = useNavigate();
	//const[editadminprofile,Seteditadminprofile] = useState({fullname:user.fullname, email:user.email, mobileno:user.mobileno});
	//useEffect(()=>{getAdminDetails()},[]);



	const ShowpopupEdit= async () =>
	{
	  document.getElementById('popupedit').style='display:block';
	  //console.log("userid",userid)
	  	try 
		{
			const response = await fetch(`${ADMINAPI}/getadmindetails/${userid}`,{
				method:"GET",
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
			  });
		
			 const data = await response.json();
			 setadmindata(data);
		} 
		catch (error) 
		{
			//console.log("adminerror",error);
		}

	}

	function ClosepopupEdit()
	{
	  setImg('');
	  setpreviewimg('');
	  setdisplaypreviewimg(true);
	  document.getElementById('popupedit').style='display:none';
	}

	///////////// change profile

	 	const handleAdminProfile = (e)=>{        //calling on typing
			//console.log(e);
			let name = e.target.name;
			let value = e.target.value;
	
			setadmindata({
				...admindata,
				[name]:value
			})
	
		};
	 
		const handleSubmitAdminProfile = async (e) =>{      //calling on submit
			
			e.preventDefault();       //to stop page refresh
			setLoader(true);
			
			setpopupwait(true);
			//console.log("useradminprofile",editadminprofile);

		const formdata = new FormData();
    	formdata.append("image",img); 
		const imgresponse = await fetch(`${ADMINAPI}/singleproductimage`,
						  	{
								method:"POST",
								body:formdata
						  	});
		const imgfeedback = await imgresponse.json();
		//console.log("imagefeedback",imgfeedback);
		const admindatawithimgstatus = {...admindata,...imgfeedback}
				
			try
			{
			  const response = await fetch(`${ADMINAPI}/geteditadminprofile/${userid}`,{
				  method:"PATCH",
				  headers:{
					  'Content-Type': 'application/json',
					  Authorization : authorizationToken 
	
				  },
				  body:JSON.stringify(admindatawithimgstatus)
			  });
	
			  const res_data = await response.json();
			  //console.log("response data",res_data.user.fullname);
	
			  if(response.ok)
			  { 
				user.fullname = res_data.user.fullname;
				user.email = res_data.user.email;
				user.mobileno = res_data.user.mobileno;
				user.imagesrc = res_data.user.imagesrc;
				user.imagename = res_data.user.imagename;
				setadmindata({ 
					fullname:"",
					email:"",
					mobileno:""
				  });
				setImg('');
				setpreviewimg('');
				//toast.success(res_data.msg);
				setLoader(false);
				ClosepopupEdit();
				setpopupsuccess(true);
				setresponseheading(process.env.REACT_APP_SUCCESS_HEADING_UPDATE);
				setresponsemsg(res_data.msg);
				setpopupwait(false);
				//navigate("/dashboard");
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
			//setLoader(false);
			setpopuperror(true);
			setresponseheading(process.env.REACT_APP_ERROR_HEADING)
			setresponsemsg(process.env.REACT_APP_ERROR_MESSAGE)
			setLoader(false);
			setpopupwait(false);
		  }
	
		}

	return (
		<>
		{ showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }


			<div id="popupedit" className="overlayadmin" style={{display:'none'}}>
				<div className="popupview animate-zoom">
					<div className="view-heading"><i className="fa fa-pencil" aria-hidden="true"></i> Edit Deails</div>
					<span onClick={ClosepopupEdit}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close" /></span>
					<form onSubmit={handleSubmitAdminProfile}>
					<div className="container-fluid padd_0" >
						<div className="viewheight" id="style-scroll2">
							<div className="row mt-2">
								<div className="col-2 mobwidth100flxunsetadmin">
									<span className="cont-heading">Name:</span>
								</div>
								<div className="col mobwidth100flxunsetadmin">
									<input type="text" name="fullname" id="fullname" className="admin-control" value={admindata.fullname} onChange={handleAdminProfile} placeholder="Enter your name" />
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-2 mobwidth100flxunsetadmin">
									<span className="cont-heading">Email:</span>
								</div>
								<div className="col-10 mobwidth100flxunsetadmin">
									<input type="text" name="email" id="email" className="admin-control" value={admindata.email} onChange={handleAdminProfile} placeholder="Enter your email" />
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-2 mobwidth100flxunsetadmin">
									<span className="cont-heading">Mobile No:</span>
								</div>
								<div className="col-10 mobwidth100flxunsetadmin">
									<input type="text" name="mobileno" id="mobileno" className="admin-control" value={admindata.mobileno} onChange={handleAdminProfile} placeholder="Enter your mobile no." />
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-2 mobwidth100flxunsetadmin">
									<span className="cont-heading">Profile Picture:</span>
								</div>
								<div className="col-10 mobwidth100flxunsetadmin">
									<input onChange={(e)=>{ setdisplaypreviewimg(false); setImg(e.target.files[0]); setpreviewimg(URL.createObjectURL(e.target.files[0])); }} type="file" accept="image/png,image/jpg,image/jpeg,image/svg+xml,image/gif" name="file" id="file" className="form-control changepic" />
									<div className='mt-2' style={{ display: `${displaypreviewimg === true ? 'block' : 'none'}` }}>
										{/* <img loading='lazy' alt='img' src={admin} className='adminimgchange' /> */}
										{ admindata.imagename ?  <img src={`${process.env.REACT_APP_BACK_END_URL}/uploads/${admindata.imagename}`} style={{width:'150px'}} /> 
											: 
											<img loading='lazy' alt='img' src={admin} className='adminimgchange' />
										} 
									</div>
									
									<div className='mt-2' style={{ display: `${displaypreviewimg === false ? 'block' : 'none'}` }}>
										{ previewimg ?  <img src={previewimg} style={{width:'150px'}} /> : '' }
									</div>
								</div>
							</div>

						</div>
						<div className="row mt-2">
							<div className="col">
								<div className="pull-right pull-mob">
									<span onClick={ClosepopupEdit} className="btn btn-dark">Cancel</span>
									{
										loader ? <button type="button" className="btn btn-success gender"><span>Please wait... <i className="fa fa-spinner fa-pulse fa-3x fa-fw fa-lg loadersize" ></i></span></button>
										:
										<button type="submit" className="btn btn-success gender">Update</button>
									}
									
								</div>
							</div>
						</div>
					</div>
					</form>
				</div>
			</div>

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
	<img src={success} style={{width:'115px'}} />
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
  <div className="popupdelete animate-zoom">
  <div className='text-center'>
	<img src={error} style={{width:'115px'}} />
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
											<span className="page-heading"><i className="fa fa-user" aria-hidden="true"></i> {Pageheading}</span>
											<a style={{ visibility: 'hidden' }} href="#add_new" className="btn btn-success mt-2 btn-sm pull-right"><i className="fa fa-plus" aria-hidden="true"></i> Add New</a>
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

													<div className="row justify-content-center " >
													  

														<div className="col-md-12 mobpadding0admin">
															<span className="anchor" id="formLogin"></span>

															<div className="card card-outline-secondary">
																<div className="card-header">
																	<h5 className="mb-0">Profile information<span onClick={ShowpopupEdit} title='Edit your information' className='pull-right editinfo'><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></h5>
																</div>
																<div className="card-body">
																	<form>
																		<div className="mb-3">
																			<label  className="form-label-admin"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name </label>
																			<input type="text" value={user.fullname} disabled autoComplete="nope" className="form-control cart-f-control-admin notallowed"  placeholder="Enter your full name" aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label-admin"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
																			<input type="email" value={user.email} disabled autoComplete="nope" className="form-control cart-f-control-admin notallowed"  placeholder="Enter your email" aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label-admin"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
																			<input type="text" value={user.mobileno} disabled autoComplete="nope" className="form-control cart-f-control-admin notallowed"  placeholder="Enter your mobile no." aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label-admin"><i className="fa fa-user" aria-hidden="true"></i> Profile Picture </label>
																			{/* <input type="file" disabled className="form-control f-cont-adminprof" /> */}
																			<div className='mt-4'>
																				{/* <img loading='lazy' alt='img' src={admin} className='adminimgchange' /> */}
																				{user.imagename ? <img src={`${process.env.REACT_APP_BACK_END_URL}/uploads/${user.imagename}`} style={{width:'100px'}} /> : <img loading='lazy' alt='img' src={admin} className='adminimgchange' />}
																			</div>

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

export default AdminProfile