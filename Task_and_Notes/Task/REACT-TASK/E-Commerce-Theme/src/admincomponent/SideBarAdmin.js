import React from 'react'
import admin from './Images/admin.png'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

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
          <img loading='lazy'  src={admin} alt="admin" className='adminimg' />
        </div>
        <div className='f-left mt-2'>
          <div className='welcome'>
          <span onClick={Closeadminmenu} className='closesidebaradmin' style={{display:'none'}}><i className="fa fa-times" aria-hidden="true"></i></span>
            <h5>Welcome</h5>
            <span >Amar Deep</span>
          </div>

        </div>
      </div>

      <div className='center white mt-1 brdr-bottom'>
        <h3>20:45:05</h3>
        <h6>01 July 2023</h6>
      </div>


      <div id="style-scroll" className="styleheight">
        <div className="dropdown">
          <NavLink to="/dashboard" exact="true"  className="dropbtn"><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
        </div>
        <div className="dropdown">
          <NavLink to="/registeredusers" exact="true"  className="dropbtn"><i className="fa fa-user" aria-hidden="true"></i> Registered Users</NavLink>
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

        <div className="dropdown" style={{ border: 'none' }}>
          <NavLink to="/" exact="true" className="dropbtn"><i className="fa fa-sign-out" aria-hidden="true"></i> Home</NavLink>
        </div>




      </div>
    </>
  )
}

export default SideBar