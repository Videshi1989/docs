import React,{useState} from 'react'
import closebtn from './Images/closebtn.png'
import SideBarAdmin from './AdminSideBar'
import Topbar from './AdminTopbar'
import loader from './../components/Images/loader.png'
import './css/admin.scss'

const Product = () => {
	const[showloader,Setshowloader] = useState(true);     //loading effect
	function ShowpopupAddnew()
	{
	  document.getElementById('popupaddnew').style='display:block';
	}
	function ClosepopupAddnew()
	{
	  document.getElementById('popupaddnew').style='display:none';
	}
	function ShowpopupView()
	{
	  document.getElementById('popupview').style='display:block';
	}
	function ClosepopupView()
	{
	  document.getElementById('popupview').style='display:none';
	}
	function ShowpopupEdit()
	{
	  document.getElementById('popupedit').style='display:block';
	}
	function ClosepopupEdit()
	{
	  document.getElementById('popupedit').style='display:none';
	}
	function ShowpopupDelete()
	{
	  document.getElementById('popupdelete').style='display:block';
	}
	function ClosepopupDelete()
	{
	  document.getElementById('popupdelete').style='display:none';
	}
  return (
    <>
      { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null } 
	   <div id="popupview" className="overlayadmin" style={{display:'none'}}>
  <div className="popupview animate-zoom">
    <div className="view-heading"><i className="fa fa-eye" aria-hidden="true"></i> View Deails</div>
    <span onClick={ClosepopupView}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <div className="container-fluid padd_0" >
	 <div className="viewheight viewheightmobile" id="style-scroll2">
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Name:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Rajesh Singh</span>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Email:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Rajesh.Singh@gmail.com</span>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
			</div>
		</div>
		
    </div>
	</div>
  </div>
</div>

    <div id="popupaddnew" className="overlayadmin" style={{display:'none'}}>
  <div className="popupaddnew animate-zoom">
    <div className="view-heading"><i className="fa fa-plus" aria-hidden="true"></i> Add New Record</div>
    <span onClick={ClosepopupAddnew}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <div className="container-fluid padd_0" >
	 <div className="viewheight" id="style-scroll2">
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Name:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<input type="text" className="admin-control" value="" placeholder="Enter your name" />
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Email:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<input type="text" className="admin-control" value="" placeholder="Enter your email" />
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<textarea value="" className="desc-control" placeholder="Type here.. "></textarea>
			</div>
		</div>
			<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<textarea value="" className="desc-control" placeholder="Type here.. "></textarea>
			</div>
		</div>
	
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">State:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<select className="admin-control">
					<option>Select your state</option>
					<option>Madhyapradesh</option>
					<option>chhatisgarh</option>
					<option>Rajsthan</option>
				</select>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Gender:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont"><input type="radio" name="gender" /> Male</span>
				<span className="cont-cont gender"><input type="radio" name="gender" /> Female</span>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Subject:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont"><input type="checkbox"  /> Hindi</span>
				<span className="cont-cont gender"><input type="checkbox"  /> English</span>
				<span className="cont-cont gender"><input type="checkbox"  /> Science</span>
				<span className="cont-cont gender"><input type="checkbox"  /> Math</span>
			</div>
		</div>
		
    </div>
	<div className="row mt-3">
		<div className="col">
			<div className="pull-right bottomeditbtn">
			    <span onClick={ClosepopupAddnew} className="btn btn-dark">Cancel</span>
				<button className="btn btn-success gender">Submit</button>
			</div>
		</div>
	</div>
	</div>
  </div>
</div>

		<div id="popupedit" className="overlayadmin" style={{display:'none'}}>
  <div className="popupedit animate-zoom">
    <div className="view-heading"><i className="fa fa-pencil" aria-hidden="true"></i> Edit Deails</div>
    <span onClick={ClosepopupEdit}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <div className="container-fluid padd_0" >
	 <div className="viewheight" id="style-scroll2">
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Name:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<input type="text" className="admin-control" value="Rajesh Singh" placeholder="Enter your name" />
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Email:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<input type="text" className="admin-control" value="RajeshSingh@gmail.com" placeholder="Enter your email" />
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<textarea value="" className="desc-control" placeholder="Type here.. ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
			</div>
		</div>
			<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<textarea value="" className="desc-control" placeholder="Type here.. ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
			</div>
		</div>
	
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">State:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<select className="admin-control">
					<option>Select your state</option>
					<option>Madhyapradesh</option>
					<option>chhatisgarh</option>
					<option>Rajsthan</option>
				</select>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Gender:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont"><input type="radio" name="gender" /> Male</span>
				<span className="cont-cont gender"><input type="radio" name="gender" /> Female</span>
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Subject:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont"><input type="checkbox"  /> Hindi</span>
				<span className="cont-cont gender"><input type="checkbox"  /> English</span>
				<span className="cont-cont gender"><input type="checkbox"  /> Science</span>
				<span className="cont-cont gender"><input type="checkbox"  /> Math</span>
			</div>
		</div>
		
    </div>
	<div className="row mt-3">
		<div className="col">
			<div className="pull-right bottomeditbtn">
			    <span onClick={ClosepopupEdit} className="btn btn-dark">Cancel</span>
				<button className="btn btn-success gender">Update</button>
			</div>
		</div>
	</div>
	</div>
  </div>
</div>

		<div id="popupdelete" className="overlayadmin" style={{display:'none'}}>
  <div className="popupdelete animate-zoom">
    <div className="view-heading"><i className="fa fa-trash-o" aria-hidden="true"></i> Delete Records</div>
    <span onClick={ClosepopupDelete}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <div className="container-fluid padd_0" >
	 
		<div className="row mt-2">
			<div className="col">
				<span className="delete-heading">Really want to delete this Record ?</span>
				<br/><br/>
			</div>
			
		</div>
		
	
		
   
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <span onClick={ClosepopupDelete} className="btn btn-secondary">Cancel</span>
				<button className="btn btn-danger gender">Delete</button>
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
										<span className="page-heading"><i className="fa fa-product-hunt" aria-hidden="true"></i> Product</span>
										<span onClick={ShowpopupAddnew} className="btn btn-success mt-2 btn-sm pull-right"><i className="fa fa-plus" aria-hidden="true"></i> Add New</span>
									</div>
									<div className='page-heading-bottom'> Home / Product</div>
								 </div>
								
							
								
								
							</div>
							
						
							
							</div>
						
						</div>
						
                
					
						<div className="container ">
							<div className="parent-row parent-rowmob">
							<div className="row w-100 mt-4">
								 <div className="col">
								 <div className='table-responsive'>
								 <table className="table table-dark table-striped mb-0 reg-tbl">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
		<th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
	  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
	  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
	  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
	  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
	  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
	  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
	  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
	  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
		<td><div className='actionadmin'><span className="action-icon"  title="View" onClick={ShowpopupView}><i className="fa fa-eye view-record" aria-hidden="true"></i></span><span title="Edit" className="action-icon edit-record" onClick={ShowpopupEdit}><i className="fa fa-pencil" aria-hidden="true"></i></span><span title="Delete" className="action-icon" onClick={ShowpopupDelete}><i className="fa fa-trash-o delete-record" aria-hidden="true"></i></span></div></td>
      </tr>
   

   
    </tbody>
  									</table>
								 </div>
								 
									<div className="pull-right mt-3">
										<button className="btn btn-secondary btn-sm"><i className="fa fa-angle-double-left" aria-hidden="true"></i> Prev</button><span className="cont-cont"> 1 of 100  </span> <button className="btn btn-secondary btn-sm">Next <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
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

export default Product