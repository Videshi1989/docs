import React,{useState} from 'react'
import Header from './Header'
import {Link } from 'react-router-dom'
import Sidebarouter from './Sidebarouter'
import Footer from './Footer'
import loader from './Images/loader.png'
import camera from './Images/camera.jpg'
import product1 from './../components/Images/product1.jpg'
import product2 from './../components/Images/product2.jpg'
import product3 from './../components/Images/product3.jpg'
import ele1 from './../components/Images/ele1.jpg'
import ele2 from './../components/Images/ele2.jpg'
import ele3 from './../components/Images/ele3.jpg'


export default function Allproductview2()
{
    const[showloader,Setshowloader] = useState(true);     //loading effect
    //const[closefilter,Setclosefilter] = useState(false);
    var closefilter = false;


    //for mobile view responsive
    /*var slidecount=4;
    var spaceBetween=20;
    var screenwidth = window.innerWidth;
    if(screenwidth >= 360 && screenwidth <= 767)
    {
        slidecount=3;
        spaceBetween=0;
    }
    else
    {
        slidecount=4;
        spaceBetween=20;
    }*/
    //
    
    
    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            
            <Header />

            <div className='slidersetup'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 mobwidth100'>
                        <Sidebarouter  />
                    </div>
                    <div className='col-9 mobwidth100'>
                        <div className='mt-4 d-none'><span className='lbl-total'><b>Total:</b></span> <span className='lbl-total'>300 Products</span></div>
                 
                     
                        <div className={`parent-product ${closefilter === false ? 'block margin70mob' : 'none'}`}>
                        {/*         for desktop view              */}
                        {/* on every 4th div we will add border-right and bdr-radius-top-right class */}
                        {/* on last row div we will add border-bottom  class */} 
                        {/* on last row first div we will add bdr-radius-bottom-left  class */} 
                        {/* on last  div we will add  bdr-radius-bottom-right class */} 
                        {/* on first div we will add bdr-radius-top-left  class */}

                         {/*         for mobile view              */}
                        {/* on every third div we will add border-rightmob and bdr-radius-top-rightmob class */}
                        {/* on last row div we will add border-bottom-lastrowdivmob class */}
                        
                         
                    <div className='parent-items-div-another repeat-item'>   
                    <div className='items-div-another bdr-radius-top-left'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={product1} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span ">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>

                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={camera} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another border-rightmob bdr-radius-top-rightmob'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={product2} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another border-right bdr-radius-top-right'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={product3} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                <div className='parent-items-div-another repeat-item'>   
                    <div className='items-div-another'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={ele1} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>

                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another border-rightmob'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={ele2} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span ">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another '>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={ele3} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span ">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another border-right'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={camera} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span ">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another border-bottom-lastrowdiv bdr-radius-bottom-left border-rightmob'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={product1} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span ">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another border-bottom-lastrowdiv border-bottom-lastrowdivmob'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={product2} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span ">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another border-bottom-lastrowdiv border-bottom-lastrowdivmob'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={product3} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span ">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
               
                <div className='parent-items-div-another repeat-item'>        
                    <div className='items-div-another border-right border-bottom-lastrowdiv bdr-radius-bottom-right border-rightmob border-bottom-lastrowdivmob'>
                    <Link to="/productdetails" className='mobspace'><img loading='lazy'   alt="img" title="product name" src={ele1} /></Link>
                    <i className="fa fa-heart like" aria-hidden="true" title="Add to wishlist"></i>
                    <Link to="/productdetails"><span className='sp spmobile' title="product name">Kesh King Ayurvedic Anti Hairfall Shampoo| 21 Natural I...</span></Link>
                    <span className='sp spmobile' title="600 ml">600ml</span><br className='spmobile'/>
                    <p className='txtcentermob'><span className="left-span ">Rs.100</span><span className='price right-span spmobile'>Rs.100</span><span className='off-span'>13% off</span></p>
                    {/* <div className='sp spmobile'>3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className='delivery spmobile'>Free delivery by <b>Today</b></div> */}
                </div>
                </div>
                
            </div> 
                    
                        <div className='pagination-div'>
                          
                          <button title="Previous" className='btn btn-secondary btn-sm btn-page'><i className="fa fa-angle-double-left" aria-hidden="true"></i> Prev</button> <small>1 of 50</small>  <button title="Next" className='btn btn-secondary btn-sm btn-page'>Next <i className="fa fa-angle-double-right" aria-hidden="true"></i></button> 
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