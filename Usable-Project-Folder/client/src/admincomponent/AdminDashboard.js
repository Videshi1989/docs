import React,{useState} from 'react'
import admin from './Images/admin.png'
import './css/admin.scss'
import AdminSideBar from './AdminSideBar'
import AdminTopbar from './AdminTopbar'
import loader from './../components/Images/loader.png'


const AdminDashboard = () => {

	const[showloader,Setshowloader] = useState(true);     //loading effect

  return (
    <>
       { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
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
										<span className="page-heading"><i className="fa fa-home" aria-hidden="true"></i> Dashboard</span>
										<div className='page-heading-bottom'> Home / Dashboard</div>
									</div>
								 </div>
							</div>
							</div>
						</div>
						
						<div className="container">
							<div className="parent-row-dashboard ">
							<div className="row w-100 rowmargin ">
								 <div className="col mobw100inmargin">
									<div className="user bg1 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
								 <div className="col mobw100inmargin">
									<div className="user bg2 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
							 <div className="col mobw100inmargin">
									<div className="user bg3 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
								
								
							</div>
							
							<div className="row w-100 rowmargin">
								 <div className="col mobw100inmargin">
									<div className="user bg4 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
								 <div className="col mobw100inmargin">
									<div className="user bg5 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
							 <div className="col mobw100inmargin">
									<div className="user bg6 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
								
								
							</div>
							
								<div className="row w-100 rowmargin">
								 <div className="col mobw100inmargin">
									<div className="user bg7 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
								 <div className="col mobw100inmargin">
									<div className="user bg8 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
							 <div className="col mobw100inmargin">
									<div className="user bg9 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
								
								
							</div>
								<div className="row w-100 rowmargin">
								 <div className="col mobw100inmargin">
									<div className="user bg10 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
								 <div className="col mobw100inmargin">
									<div className="user bg11 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
									</div>
									
								 </div>
							 <div className="col mobw100inmargin">
									<div className="user bg12 box-shadow">
										<h3>30508</h3>
										<span>Total Registered Users</span>
										<img loading='lazy'  src={admin} alt="img" className='catimg' />
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

export default AdminDashboard