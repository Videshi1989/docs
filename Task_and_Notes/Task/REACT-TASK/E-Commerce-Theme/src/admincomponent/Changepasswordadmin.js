import React,{useState} from 'react'
import SideBarAdmin from './SideBarAdmin'
import Topbar from './Topbar'
import loader from './../components/Images/loader.png'
import './css/admin.scss'


const Changepasswordadmin = () => {
	const[showloader,Setshowloader] = useState(true);     //loading effect
	return (
		<>
		 { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy' src={loader} alt="loader" /></div></div> : null }
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
											<span className="page-heading"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Change Your Password</span>
											
										</div>
										<div className='page-heading-bottom'> Home / Change Your Password</div>
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
																	<h3 className="mb-0">Change Your Password</h3>
																</div>
																<div className="card-body">
																	<form>
																		<div className="mb-3">
																			<label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Old Password </label>
																			<input type="password" autoComplete="nope" className="form-control cart-f-control" title="Enter your name" placeholder="Enter your old password" aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> New Password </label>
																			<input type="password" autoComplete="nope" className="form-control cart-f-control" title="Enter your email" placeholder="Enter your new password" aria-describedby="emailHelp" />

																		</div>
																		<div className="mb-3">
																			<label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Confirm New Password </label>
																			<input type="password" autoComplete="nope" className="form-control cart-f-control" title="Enter your mobile no." placeholder="Confirm your new password" aria-describedby="emailHelp" />

																		</div>
																		
																			<button type="button" className="btn btn-success btn-bg w-100">Update </button>
																		



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

export default Changepasswordadmin