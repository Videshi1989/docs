import React,{useState} from 'react'
import admin from './Images/admin.png'
import closebtn from './Images/closebtn.png'
import SideBarAdmin from './SideBarAdmin'
import Topbar from './Topbar'
import loader from './../components/Images/loader.png'
import './css/admin.scss'


const Profile = () => {
	const[showloader,Setshowloader] = useState(true);     //loading effect


	function ShowpopupEdit()
	{
	  document.getElementById('popupedit').style='display:block';
	}
	function ClosepopupEdit()
	{
	  document.getElementById('popupedit').style='display:none';
	}


	return (
		<>
		{ showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }


			<div id="popupedit" className="overlayadmin" style={{display:'none'}}>
				<div className="popupview animate-zoom">
					<div className="view-heading"><i className="fa fa-pencil" aria-hidden="true"></i> Edit Deails</div>
					<span onClick={ClosepopupEdit}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close" /></span>
					<div className="container-fluid padd_0" >
						<div className="viewheight" id="style-scroll2">
							<div className="row mt-2">
								<div className="col-2 mobwidth100flxunsetadmin">
									<span className="cont-heading">Name:</span>
								</div>
								<div className="col-10 mobwidth100flxunsetadmin">
									<input type="text" className="admin-control" value="Rajesh Singh" placeholder="Enter your name" />
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-2 mobwidth100flxunsetadmin">
									<span className="cont-heading">Email:</span>
								</div>
								<div className="col-10 mobwidth100flxunsetadmin">
									<input type="text" className="admin-control" value="RajeshSingh@gmail.com" placeholder="Enter your email" />
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-2 mobwidth100flxunsetadmin">
									<span className="cont-heading">Mobile No:</span>
								</div>
								<div className="col-10 mobwidth100flxunsetadmin">
									<input type="text" className="admin-control" value="9826098260" placeholder="Enter your mobile no." />
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-2 mobwidth100flxunsetadmin">
									<span className="cont-heading">Profile Picture:</span>
								</div>
								<div className="col-10 mobwidth100flxunsetadmin">
									<input type="file" className="form-control changepic" />
									<div className='mt-2 center'>
										<img loading='lazy' alt='img' src={admin} className='adminimgchange' />
									</div>
								</div>
							</div>





						</div>
						<div className="row mt-2">
							<div className="col">
								<div className="pull-right pull-mob">
									<span onClick={ClosepopupEdit} className="btn btn-dark">Cancel</span>
									<button className="btn btn-success gender">Update</button>
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
					<SideBarAdmin />
					</div>
					
                </div>

					<div className='col-10 padding_0 mobwidth100admin'>
						<Topbar />

						<div className="container ">
							<div className="parent-row-top">
								<div className="row w-100 mt-2 mb-0">
									<div className="col">
										<div>
											<span className="page-heading"><i className="fa fa-product-hunt" aria-hidden="true"></i> My Profile</span>
											<a style={{ visibility: 'hidden' }} href="#add_new" className="btn btn-success mt-2 btn-sm pull-right"><i className="fa fa-plus" aria-hidden="true"></i> Add New</a>
										</div>
										<div className='page-heading-bottom'> Home / My Profile</div>
									</div>




								</div>



							</div>

						</div>



						<div className="container ">
							<div className="parent-row parent-rowmob">
								<div className="row w-100 mt-4">
									<div className="col">
										<div className="container py-3">
											<div className="row">
												<div className="col-md-12">

													<div className="row justify-content-center">
														<div className="col-md-12 mobpadding0admin">
															<span className="anchor" id="formLogin"></span>

															<div className="card card-outline-secondary">
																<div className="card-header">
																	<h3 className="mb-0">My Profile <span onClick={ShowpopupEdit} title='Edit your information' className='pull-right editinfo'><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></h3>
																</div>
																<div className="card-body">
																	<form>
																		<div className="mb-3">
																			<label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Name </label>
																			<input type="text" autoComplete="nope" className="form-control cart-f-control" title="Enter your name" placeholder="Enter your name" aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
																			<input type="email" autoComplete="nope" className="form-control cart-f-control" title="Enter your email" placeholder="Enter your email" aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
																			<input type="text" autoComplete="nope" className="form-control cart-f-control" title="Enter your mobile no." placeholder="Enter your mobile no." aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label"><i className="fa fa-user" aria-hidden="true"></i> Profile Picture </label>
																			<input type="file" className="form-control f-cont-adminprof" />
																			<div className='mt-4 center'>
																				<img loading='lazy' alt='img' src={admin} className='adminimgchange' />
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

export default Profile