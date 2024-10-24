import React, { useState } from 'react'
import admin from './Images/admin.svg'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth'

const AdminTopbar = () => {

const[profile,setProfile] = useState(false);
const[notification,setNotification] = useState(false);  
const {user} = useAuth();

window.addEventListener('click', function(e){   
  if (document.getElementById('clickprofile').contains(e.target)){
    Showprofile();
  } else{
    Closeprofile();
  }
});

window.addEventListener('click', function(e){   
  if (document.getElementById('clicknotification').contains(e.target)){
    Shownotification();
  } else{
    Closenotification();
  }
});

function Showprofile()
{
	setProfile(true)
}
function Closeprofile()
{
	setProfile(false)
}
function Shownotification()
{
	setNotification(true)
}
function Closenotification()
{
	setNotification(false)
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
                                <li id="clicknotification" title="Notifications" onMouseOver={Shownotification}><i className="fa fa-bell-o" aria-hidden="true"></i><span>10</span></li>
                                <li id="clickprofile" className='adminprofile' onMouseOver={Showprofile} >

                                

                                { user.imagename ?  <img loading='lazy' alt="admin" src={`${process.env.REACT_APP_BACK_END_URL}/uploads/${user.imagename}`}   /> 
											            : 
											            <img loading='lazy'  src={admin}  alt="admin" />
										            }
                                
                                <i style={{display:`${profile === false ? 'unset' : 'none'}`}} className="fa fa-caret-down down" aria-hidden="true"></i><i style={{display:`${profile === true ? 'unset' : 'none'}`}} className="fa fa-caret-up down" aria-hidden="true"></i>
                                
                              
                                
                                </li>
                            </ul>
                            
                            <div onMouseLeave={Closenotification} className="parent-notification animate-zoom" style={{display:`${notification === true ? 'block' : 'none'}`}}>
                                    <ul className="notification">
                                        <li><span><i className="fa fa-user" aria-hidden="true"></i> You have two missed calls </span></li>
                                        <li><span><i className="fa fa-unlock-alt" aria-hidden="true"></i> You have two missed calls</span></li>
                                        <li className='noty_li'><span><i className="fa fa-sign-out" aria-hidden="true"></i> You have two missed calls</span></li>
                                    </ul>
                            </div>
                            
                            <div onMouseLeave={Closeprofile} className="parent-profile animate-zoom" style={{display:`${profile === true ? 'block' : 'none'}`}}>
                                    <ul className="profile">
                                        <li title="My Profile" className={`${ pathsplit[3]==='adminprofile' ? 'active' : '' }`}><NavLink to="/adminprofile"><i className="fa fa-user" aria-hidden="true"></i> My Profile</NavLink></li>
                                        <li title="Change Password" className={`${ pathsplit[3]==='adminchangepassword' ? 'active' : '' }`}><NavLink to="/adminchangepassword"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Change Password</NavLink></li>
                                        <li title="Logout" className='prof_li'><NavLink to="/adminlogout"><span><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</span></NavLink></li>
                                    </ul>
                            </div>
                        
                    </div>


    </>
  )
}

export default AdminTopbar