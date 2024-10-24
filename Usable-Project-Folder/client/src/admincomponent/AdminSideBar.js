import React, { useEffect, useState } from 'react'
import admin from './Images/admin.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

const AdminSideBar = () => {

  const navigate = useNavigate();
  const {userAuthentication,isLoggedIn} = useAuth();
  const {user} = useAuth();
  
  let time  = new Date().toLocaleTimeString();
  const [ctime,setTime] = useState(time);

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const date = String(today.getDate()).padStart(2, '0');
  const currentdate = `${date}-${month}-${year}`;

  useEffect(()=>{userAuthentication();},[]);
	
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString();
    setTime(time)
  };
  setInterval(UpdateTime);

     if(!isLoggedIn || user.isAdmin === false)
      {
          navigate("/adminlogout");
      }


  const path = window.location.href;
  const pathsplit = path.split("/");
  
  function Closeadminmenu()
  {
    document.getElementById('mobilemenuadmin').classList.add('mobdnoneadmin');
  }
  
  return (
    <>
      <div className='left-side brdr-bottom'> 
        <div className='f-left'>
         
          { user.imagename ?  <NavLink to="/home" target='_blank'><img  loading='lazy' alt="admin" src={`${process.env.REACT_APP_BACK_END_URL}/uploads/${user.imagename}`}  className='adminimg' /> </NavLink>
											: 
											<NavLink to="/home" target='_blank'><img loading='lazy'  src={admin} alt="admin" className='adminimg' /></NavLink>
										}
        </div>
        <div className='f-left mt-2'>
          <div className='welcome'>
          <span onClick={Closeadminmenu} className='closesidebaradmin' style={{display:'none'}}><i className="fa fa-times" aria-hidden="true"></i></span>
            <h5>Welcome</h5>
            <span >{user ? user.fullname : ''}</span>
             
            
           
          </div>

        </div>
      </div>

      <div className='center white mt-1 brdr-bottom'>
        <h3>{ctime}</h3>
        <h6>{currentdate}</h6>
      </div>


      <div id="style-scroll" className="styleheight">
        <div className="dropdown">
          <NavLink to="/admindashboard" exact="true"  className="dropbtn"><i className="fa fa-home" aria-hidden="true"></i> Dashboard</NavLink>
        </div>
        <div className="dropdown">
          <NavLink to="/adminregisteredusers" exact="true"  className="dropbtn"><i className="fa fa-user" aria-hidden="true"></i> Registered-Users</NavLink>
        </div>
        <div className="dropdown">
          <NavLink to="/admincontactus" exact="true"  className="dropbtn"><i className="fa fa-user" aria-hidden="true"></i> Contact-Us</NavLink>
        </div>
        <div className="dropdown">
          <NavLink to="/adminsubadminlist" exact="true"  className="dropbtn"><i className="fa fa-user" aria-hidden="true"></i> Subadmin-List</NavLink>
        </div>
        <div className="dropdown">
          <NavLink to="/admincategory" exact="true"  className="dropbtn"><i className="fa fa-user" aria-hidden="true"></i> Category</NavLink>
        </div>
        <div className="dropdown">
          <NavLink to="/adminsubcategory" exact="true"  className="dropbtn"><i className="fa fa-user" aria-hidden="true"></i> Sub-Category</NavLink>
        </div>
        <div className="dropdown">
          <NavLink to="/adminchildcategory" exact="true"  className="dropbtn"><i className="fa fa-user" aria-hidden="true"></i> Child-Category</NavLink>
        </div>
        <div className="dropdown">
          <NavLink to="/adminsubchildcategory" exact="true"  className="dropbtn"><i className="fa fa-user" aria-hidden="true"></i> Subchild-Category</NavLink>
        </div>
        

        <div className="dropdown">
          <button className={`dropbtn ${ pathsplit[3]==='product' || pathsplit[3]==='fashion' || pathsplit[3]==='offer' ? 'active' : '' }`}><i className="fa fa-product-hunt" aria-hidden="true"></i> Product <i className="fa fa-caret-down down-triangle hide-icon" aria-hidden="true"></i><i className="fa fa-caret-up down-triangle show-icon" style={{ display: 'none' }} aria-hidden="true"></i></button>
          <div className="dropdown-content">
            <NavLink to="/product" exact="true"  className={`${ pathsplit[3]==='product' ? 'activesubmenu' : '' }`}><i className="fa fa-bandcamp" aria-hidden="true"></i> Product <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
            <NavLink to="/fashion"  exact="true" className={`${ pathsplit[3]==='fashion' ? 'activesubmenu' : '' }`}><i className="fa fa-snowflake-o" aria-hidden="true"></i> Fashion <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
            <NavLink to="/" exact="true" className={`${ pathsplit[3]==='offer' ? 'activesubmenu' : '' }`}><i className="fa fa-power-off" aria-hidden="true"></i> Offer <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
          </div>
        </div>

        <div className="dropdown">
          <NavLink to="/" exact="true" className="dropbtn"><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><i className="fa fa-product-hunt" aria-hidden="true"></i> Product <i className="fa fa-caret-down down-triangle hide-icon" aria-hidden="true"></i><i className="fa fa-caret-up down-triangle show-icon" style={{ display: 'none' }} aria-hidden="true"></i></button>
          <div className="dropdown-content">
            <NavLink to="/" ><i className="fa fa-bandcamp" aria-hidden="true"></i> Grocery <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
            <NavLink to="/"><i className="fa fa-snowflake-o" aria-hidden="true"></i> Fashion <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
            <NavLink to="/"><i className="fa fa-power-off" aria-hidden="true"></i> Offer <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
          </div>
        </div>
      


        <div className="dropdown">
          <NavLink to="/" exact="true" className="dropbtn"><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><i className="fa fa-product-hunt" aria-hidden="true"></i> Product <i className="fa fa-caret-down down-triangle hide-icon" aria-hidden="true"></i><i className="fa fa-caret-up down-triangle show-icon" style={{ display: 'none' }} aria-hidden="true"></i></button>
          <div className="dropdown-content">
            <NavLink to="/"><i className="fa fa-bandcamp" aria-hidden="true"></i> Grocery <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
            <NavLink to="/"><i className="fa fa-snowflake-o" aria-hidden="true"></i> Fashion <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
            <NavLink to="/"><i className="fa fa-power-off" aria-hidden="true"></i> Offer <i className="fa fa-caret-right side-icon" aria-hidden="true"></i></NavLink>
          </div>
        </div>
        <div className="dropdown">
          <NavLink to="/" exact="true" className="dropbtn"><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
        </div>

      

      </div>
    </>
  )
}

export default AdminSideBar