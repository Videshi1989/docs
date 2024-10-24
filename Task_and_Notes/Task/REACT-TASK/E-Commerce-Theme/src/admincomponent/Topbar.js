import React, { useState } from 'react'
import admin from './Images/admin.png'
import { NavLink } from 'react-router-dom';
const Topbar = () => {

const[profile,setProfile] = useState(false);
const[notification,setNotification] = useState(false);

function Showprofile()
{
	profile ? setProfile(false) : setProfile(true)
}
function Shownotification()
{
	notification ? setNotification(false) : setNotification(true)
}
function ShowAdminmenu()
{
  document.getElementById('mobilemenuadmin').classList.remove('mobdnoneadmin');
}

const path = window.location.href;
const pathsplit = path.split("/");
  return (
    <>
         <div className="top_bar">
							
                            <i onClick={ShowAdminmenu} style={{display:'none'}} className="fa fa-bars pull-left mobdblockadmin barsize" aria-hidden="true"></i>
                            
                            <ul className="admin pull-right">
                                <li title="Notifications" onClick={Shownotification}><i className="fa fa-bell-o" aria-hidden="true"></i><span>10</span></li>
                                <li className='adminprofile' onClick={Showprofile}><img loading='lazy'  src={admin}  alt="admin" /><i style={{display:`${profile === false ? 'unset' : 'none'}`}} className="fa fa-caret-down down" aria-hidden="true"></i><i style={{display:`${profile === true ? 'unset' : 'none'}`}} className="fa fa-caret-up down" aria-hidden="true"></i></li>
                            </ul>
                            
                            <div className="parent-notification animate-zoom" style={{display:`${notification === true ? 'block' : 'none'}`}}>
                                    <ul className="notification">
                                        <li><span><i className="fa fa-user" aria-hidden="true"></i> You have two missed calls </span></li>
                                        <li><span><i className="fa fa-unlock-alt" aria-hidden="true"></i> You have two missed calls</span></li>
                                        <li><span><i className="fa fa-sign-out" aria-hidden="true"></i> You have two missed calls</span></li>
                                    </ul>
                            </div>
                            
                            <div className="parent-profile animate-zoom" style={{display:`${profile === true ? 'block' : 'none'}`}}>
                                    <ul className="profile">
                                        <li title="My Profile" className={`${ pathsplit[3]==='profile' ? 'active' : '' }`}><NavLink to="/profile"><i className="fa fa-user" aria-hidden="true"></i> My Profile</NavLink></li>
                                        <li title="Change Password" className={`${ pathsplit[3]==='changepasswordadmin' ? 'active' : '' }`}><NavLink to="/changepasswordadmin"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Change Password</NavLink></li>
                                        <li title="Logout"><span><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</span></li>
                                    </ul>
                            </div>
                        
                    </div>
    </>
  )
}

export default Topbar