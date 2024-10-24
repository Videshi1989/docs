import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import Header from './Header'
import Sidebarouter from './Sidebarouter'
import Footer from './Footer'
import loader from './Images/loader.png'
import camera from './Images/camera.jpg'
import product1 from './../components/Images/product1.jpg'
import product2 from './../components/Images/product2.jpg'
import product3 from './../components/Images/product3.jpg'
import ele1 from './../components/Images/ele1.jpg'
import ele2 from './../components/Images/ele2.jpg'



export default function Allproductview1()
{
     const[showloader,Setshowloader] = useState(true);     //loading effect
   
        
    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            
            <Header />

           <div className='slidersetup'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 mobwidth100'>
                    <Sidebarouter />
                  
                    </div>
                    <div className='col-9 mobwidth100'>
                        <div className='mt-4 d-none'><span className='lbl-total'><b>Total:</b></span> <span className='lbl-total'>300 Products</span></div>
                    <div className='parent-repeat-div margin40mob' id="style-scroll">
                     
                   
                     <div className='repeat-prod'>
                        <div className='row'>             
                            <div className='col-3 mobwidth50'>
                               <div className='parent-prod'>
                               <Link to="/productdetails">
                                    <img loading='lazy'  title="Product Name" src={camera} alt="Product Name" className='view1img' />
                                    </Link>
                                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                               </div>
                               <div className='price-div showmob mobdblock'>
                                    <h5>Rs.1,990</h5>
                                    <span className='price right-span mobdnone'>Rs.29,990 </span> <br className='mobdnone' /> <span className='right-span'>12% off</span><br/>
                                    <span className='right-span mobdnone'>Free Delivery</span>
                                </div>
                            </div>
                            <div className='col-6 mobdnone'>
                             <div>   
                            <h5><Link to="/productdetails" title="Product Name" className='productname'>Patanjali Divya Coronil Kit</Link></h5>
                            <div className="sp-view1">3.7 <i className="fa fa-star" aria-hidden="true"></i>
                            
                            </div>
                            <div>
                            <span>580 ratings & 79 Reviews</span>
                            </div>
                            <br/>
                            <ul className='par-circle'>
                            <li>Dual Pixel CMOS AF - AF is possible over an area of approx. </li>
                                <li>80% Vertical x 80% Horizontal of the frame or 100% vertical x 88% horizontal, depending on lens used.</li>
                                <li>Peripheral Cross type AF points will not function as a cross type AF points with the following lenses.</li>
                                <li>Maximum number of AF frame is dependent on selected image aspect ratio.</li>
                                
                            </ul>
                            </div>
                            </div>
                            <div className='col-3 mobwidth50'>
                                <div className='parent-prod showmob mobdblock'>
                               <Link to="/productdetails">
                                    <img loading='lazy'  title="Product Name" src={camera} alt="Product Name" className='view1img' />
                                    </Link>
                                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                               </div>
                                <div className='price-div'>
                                    <h5>Rs.1,990</h5>
                                    <span className='price right-span mobdnone'>Rs.29,990 </span> <br className='mobdnone' /> <span className='right-span'>12% off</span><br/>
                                    <span className='right-span mobdnone'>Free Delivery</span>
                                </div>
                            </div>
                        </div>
                     </div>
                     <hr className='sepaabout'/>
                     <div className='repeat-prod'>
                        <div className='row'>             
                            <div className='col-3 mobwidth50'>
                               <div className='parent-prod'>
                               <Link to="/productdetails">
                                    <img loading='lazy'  title="Product Name" src={product1} alt="Product Name" className='view1img' />
                                    </Link>
                                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                               </div>
                               <div className='price-div showmob mobdblock'>
                                    <h5>Rs.1,990</h5>
                                    <span className='price right-span mobdnone'>Rs.29,990 </span> <br className='mobdnone' /> <span className='right-span'>12% off</span><br/>
                                    <span className='right-span mobdnone'>Free Delivery</span>
                                </div>
                            </div>
                            <div className='col-6 mobdnone'>
                             <div>   
                            <h5><Link to="/productdetails" title="Product Name" className='productname'>Patanjali Divya Coronil Kit</Link></h5>
                            <div className="sp-view1">3.7 <i className="fa fa-star" aria-hidden="true"></i>
                            
                            </div>
                            <div>
                            <span>580 ratings & 79 Reviews</span>
                            </div>
                            <br/>
                            <ul className='par-circle'>
                            <li>Dual Pixel CMOS AF - AF is possible over an area of approx. </li>
                                <li>80% Vertical x 80% Horizontal of the frame or 100% vertical x 88% horizontal, depending on lens used.</li>
                                <li>Peripheral Cross type AF points will not function as a cross type AF points with the following lenses.</li>
                                <li>Maximum number of AF frame is dependent on selected image aspect ratio.</li>
                                
                            </ul>
                            </div>
                            </div>
                            <div className='col-3 mobwidth50'>
                                <div className='parent-prod showmob mobdblock'>
                               <Link to="/productdetails">
                                    <img loading='lazy'  title="Product Name" src={product2} alt="Product Name" className='view1img' />
                                    </Link>
                                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                               </div>
                                <div className='price-div'>
                                    <h5>Rs.1,990</h5>
                                    <span className='price right-span mobdnone'>Rs.29,990 </span> <br className='mobdnone' /> <span className='right-span'>12% off</span><br/>
                                    <span className='right-span mobdnone'>Free Delivery</span>
                                </div>
                            </div>
                        </div>
                     </div>
                     <hr className='sepaabout'/>
                     <div className='repeat-prod'>
                        <div className='row'>             
                            <div className='col-3 mobwidth50'>
                               <div className='parent-prod'>
                               <Link to="/productdetails">
                                    <img loading='lazy'  title="Product Name" src={product3} alt="Product Name" className='view1img' />
                                    </Link>
                                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                               </div>
                               <div className='price-div showmob mobdblock'>
                                    <h5>Rs.1,990</h5>
                                    <span className='price right-span mobdnone'>Rs.29,990 </span> <br className='mobdnone' /> <span className='right-span'>12% off</span><br/>
                                    <span className='right-span mobdnone'>Free Delivery</span>
                                </div>
                            </div>
                            <div className='col-6 mobdnone'>
                             <div>   
                            <h5><Link to="/productdetails" title="Product Name" className='productname'>Patanjali Divya Coronil Kit</Link></h5>
                            <div className="sp-view1">3.7 <i className="fa fa-star" aria-hidden="true"></i>
                            
                            </div>
                            <div>
                            <span>580 ratings & 79 Reviews</span>
                            </div>
                            <br/>
                            <ul className='par-circle'>
                            <li>Dual Pixel CMOS AF - AF is possible over an area of approx. </li>
                                <li>80% Vertical x 80% Horizontal of the frame or 100% vertical x 88% horizontal, depending on lens used.</li>
                                <li>Peripheral Cross type AF points will not function as a cross type AF points with the following lenses.</li>
                                <li>Maximum number of AF frame is dependent on selected image aspect ratio.</li>
                                
                            </ul>
                            </div>
                            </div>
                            <div className='col-3 mobwidth50'>
                                <div className='parent-prod showmob mobdblock'>
                               <Link to="/productdetails">
                                    <img loading='lazy'  title="Product Name" src={ele2} alt="Product Name" className='view1img' />
                                    </Link>
                                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                               </div>
                                <div className='price-div'>
                                    <h5>Rs.1,990</h5>
                                    <span className='price right-span mobdnone'>Rs.29,990 </span> <br className='mobdnone' /> <span className='right-span'>12% off</span><br/>
                                    <span className='right-span mobdnone'>Free Delivery</span>
                                </div>
                            </div>
                        </div>
                     </div>
                   
                     </div>

                    </div>
                </div>
            </div>
            </div>
            <Footer />
           

        { showloader ? Setshowloader(false) : null } 
        </>
    )
}