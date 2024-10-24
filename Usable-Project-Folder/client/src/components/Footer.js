import React from 'react'
import {Link } from 'react-router-dom'

export default function Footer()
{

    
    return(
        <>

        <footer className='parentoffer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col mobwidth100flxunset'>
                <div><ul className="social-media" style={{float:"unset"}}><li title="Pinterest"><Link  to="https:www.google.com" target="_blank"><i className="fa fa-pinterest fa-lg" aria-hidden="true"></i></Link></li><li title="Youtube"><Link  to="https:www.youtube.com" target="_blank"><i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i></Link></li><li title="Facebook"><Link  to="https:www.facebook.com" target="_blank"><i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i></Link></li><li title="Twitter"><Link  to="https:www.twitter.com" target="_blank"><i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i></Link></li><li title="instagram"><Link  to="https:www.instagram.com" target="_blank"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></Link></li></ul></div>
                </div>
                <div className='col mobwidth100flxunset'>
                    <form>
                        <div className='news'>
                            <input type="text" autoComplete='nope' className='form-control f-news'  placeholder='Enter your email' />
                            <button className='btn btn-success' style={{borderRadius:"5px"}}>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <br/>
            <br/>
            <div className='row'>
                <div className='col mobwidth100flxunset txtcentermob'>
                    <h2>Information </h2>
                    <hr/>
                    <ul>
                        <li><Link to="#">ABOUT US</Link></li>
                        <li><Link to="#">GENERAL TERMS & CONDITIONS</Link></li>
                        <li><Link to="#">SHIPPING POLICY</Link></li>
                        <li><Link to="#">CANCELLATION POLICY</Link></li>
                        <li><Link to="#">RETURN/REFUND POLICY</Link></li>
                        <li><Link to="#">GRIEVANCE REDRESSAL POLICY</Link></li>
                        <li><Link to="#">PRIVACY POLICY</Link></li>
                        <li><Link to="#">CAUTION NOTICE</Link></li>
                        <li><Link to="#">SITE MAP</Link></li>
                        <li><Link to="#">MEDIA</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                    </ul>
                </div>
                <div className='col mobwidth100flxunset txtcentermob mt30mob'>
                    <h2>Categories</h2>
                    <hr/>
                    <ul>
                        <li><Link to="#">NATURAL HEALTH CARE</Link></li>
                        <li><Link to="#">NATURAL FOOD PRODUCTS</Link></li>
                        <li><Link to="#">AYURVEDIC MEDICINE</Link></li>
                        <li><Link to="#">HERBAL HOME CARE</Link></li>
                        <li><Link to="#">NATURAL PERSONAL CARE</Link></li>
                        <li><Link to="#">PATANJALI PUBLICATION</Link></li>
                        <li><Link to="#">SAMRIDHI CARD</Link></li>
                        <li><Link to="#">DAIRY & FROZEN ITEMS</Link></li>
                        <li><Link to="#">COPPERWARE</Link></li>
                        <li><Link to="#">PARIDHAN</Link></li>
                        <li><Link to="#">NUTRACEUTICALS</Link></li>
                    </ul>
                </div>
                <div className='col mobwidth100flxunset txtcentermob mt30mob'>
                    <h2>Get In Touch</h2>
                    <hr/>
                    <ul>
                        <li><span>Email: xyz@gmail.com</span></li><br/>
                        <li>
                            <span>Patanjali Ayurved Limited,
                                Haridwar, Uttarakhand - 249401
                                Helpline number – 1860-1800-180 & 01334-610111 (Monday to Saturday 6 am to 10 pm)
                            </span>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <br/>
            <hr/>
            <div className='row'>
                <div className='col mobwidth100flxunset'>

                </div>
                <div className='col mobwidth100flxunset txtcentermob'>
                  <small>Copyright © 2023 xyz solutions pvt ltd</small><br/>
                  <small>All rights reserved.</small>
                </div>
                <div className='col mobwidth100flxunset'>
                <ul className="bottom-foot">
                        
                        <li> <img loading='lazy'  src="https://www.patanjaliayurved.net/assets/img/phonepe.png" alt="Pay by Phonepe"/></li>
                        <li> <img loading='lazy'  src="https://www.patanjaliayurved.net/assets/img/paytm-logo.png" alt="Pay by Paytm"/></li>
                        <li> <img loading='lazy'  src="https://www.patanjaliayurved.net/assets/img/g-pay.jpg" alt="Pay by Google pay"/></li>
                        <li> <img loading='lazy'  src="https://www.patanjaliayurved.net/assets/img/pay_u.jpg" alt="Pay by Payu"/></li>
                        <li> <img loading='lazy'  src="https://www.patanjaliayurved.net/assets/img/vpayqwik.png" alt="Pay by Vpayqwil"/></li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>

       </>
    )
}