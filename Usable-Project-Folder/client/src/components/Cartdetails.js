import React,{useState} from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import exclamation from "./../components/Images/exclamation.svg";
import closebtn from './Images/closebtn.png'
import loader from './Images/loader.png'
import camera from './Images/camera.jpg'
import checkout from './Images/checkout.png'
import downarrow from './Images/downarrow.png'
import summary from './Images/summary.png'
import product1 from './Images/product1.jpg'
import product2 from './Images/product2.jpg'
import ele1 from './Images/ele1.jpg'



export default function Cartdetails()
{
    const[showloader,Setshowloader] = useState(true);     //loading effect
    const navigate = useNavigate();
   function HistoryBack()
   {
    navigate(-2)
   }
   function RemoveItem()
   {
        document.getElementById('removeitem').style='display:block';
   }
   function CloseRemoveItem()
   {
        document.getElementById('removeitem').style='display:none';
   }
    
    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            

            
		<div id="removeitem" className="overlayritem" style={{display:'none'}}>
  <div className="popupritem animate-zoom">
    {/* <div className="view-headingritem"><i className="fa fa-trash-o" aria-hidden="true"></i> Remove Item</div>
    <span onClick={CloseRemoveItem}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span> */}
    <div className="container-fluid padding0" >
	 
		<div className="row mt-2">
			<div className="col">
            <div className='text-center'>
                    <img src={exclamation} style={{width:'125px'}}/>
                    <div className="view-delete-heading-user">Remove Item ?</div>
                    <span className="remove-heading">Really want to remove this item ?</span>
                </div>
				
				<br/>
				
			</div>
			
		</div>
		
	
		
   
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <span onClick={CloseRemoveItem} className="btn btn-secondary">Cancel</span>
				<button className="btn btn-warning gender">Delete</button>
			</div>
		</div>
	</div>
	</div>
  </div>
</div>

            <Header />

            <div className='cartslidersetup '>
            <div className='container'>
                <div className='row'>
                    <div className='col-8 mobwidth100'>
                     
                       {/* on last div put last-cart-item class and bdr-radius-bottom-div*/}
                      
                       <div className='cart-dtls bdr-radius-top-div'>
                            <h6><i className="fa fa-shopping-cart fa-lg cart-summary-dtl" aria-hidden="true"></i> CART DETAILS <img loading='lazy'  src={downarrow} className='pull-right imgopacity' alt='img' /></h6>
                       </div>
                       <div className='cartdtl-place-order' id='placeorder-scroll'>
                       {/* on first div we will add bdr-radius-top-div claas */}
                       <div className='repeat-cart-item '>
                        <div className='parentdesc'>
                             <div className='description'>
                               
                                    <Link to="/productdetails" target="_blank"><img loading='lazy'  src={camera} alt="img" title="product name"  /></Link>
                                    
                                    <div className='parentprodname'>
                                    <h6><Link to="/productdetails" target="_blank">Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens</Link></h6>
                                       <span className='fprice'>Rs.1000</span>
                                       <div className='tot-qty'>
                                       <i className="fa fa-plus icon-col" aria-hidden="true"></i>
                                       <input type="text" className='proqty' value="25" disabled />
                                       <i className="fa fa-minus icon-col" aria-hidden="true"></i>
                                       </div>
                                       <span onClick={RemoveItem}>
                                       <i title="Delete this item" className="fa fa-trash-o remove" aria-hidden="true"></i>
                                       </span>
                                      
                                    </div>
                                    
                               
                                
                             </div>
                             <div className='total'><span className='tot-price'>Rs.2000</span></div>
                             
                        </div>
                        
                        </div>
                        <div className='repeat-cart-item'>
                        <div className='parentdesc'>
                             <div className='description'>
                               
                                    <Link to="/productdetails" target="_blank"><img loading='lazy'  src={product1} alt="img" title="product name"  /></Link>
                                    
                                    <div className='parentprodname'>
                                    <h6><Link to="/productdetails" target="_blank">Patanjali Divya Coronil kit</Link></h6>
                                       <span className='fprice'>Rs.700</span>
                                       <div className='tot-qty'>
                                       <i className="fa fa-plus icon-col" aria-hidden="true"></i>
                                       <input type="text" className='proqty' value="25" disabled />
                                       <i className="fa fa-minus icon-col" aria-hidden="true"></i>
                                       </div>
                                       <span onClick={RemoveItem}>
                                       <i title="Delete this item" className="fa fa-trash-o remove" aria-hidden="true"></i>
                                       </span>
                                    </div>
                                    
                               
                                
                             </div>
                             <div className='total'><span className='tot-price'>Rs.2000</span></div>
                             
                        </div>
                        
                        </div>
                        <div className='repeat-cart-item'>
                        <div className='parentdesc'>
                             <div className='description'>
                               
                                    <Link to="/productdetails" target="_blank"><img loading='lazy'  src={ele1} alt="img" title="product name"  /></Link>
                                    
                                    <div className='parentprodname'>
                                    <h6><Link to="/productdetails" target="_blank">Havells High Speed Table Fan</Link></h6>
                                       <span className='fprice'>Rs.2500</span>
                                       <div className='tot-qty'>
                                       <i className="fa fa-plus icon-col" aria-hidden="true"></i>
                                       <input type="text" className='proqty' value="25" disabled />
                                       <i className="fa fa-minus icon-col" aria-hidden="true"></i>
                                       </div>
                                       <span onClick={RemoveItem}>
                                       <i title="Delete this item" className="fa fa-trash-o remove" aria-hidden="true"></i>
                                       </span>
                                    </div>
                                    
                               
                                
                             </div>
                             <div className='total'><span className='tot-price'>Rs.2500</span></div>
                             
                        </div>
                        
                        </div>
                        {/* on last div we will add bdr-radius-bottom-div claas */}
                        <div className='repeat-cart-item last-cart-item bdr-radius-bottom-div'>
                        <div className='parentdesc'>
                             <div className='description'>
                               
                                    <Link to="/productdetails" target="_blank"><img loading='lazy'  src={product2} alt="img" title="product name"  /></Link>
                                    
                                    <div className='parentprodname'>
                                    <h6><Link to="/productdetails" target="_blank">Patanjali Divya Cardiogrit Gold</Link></h6>
                                       <span className='fprice'>Rs.500</span>
                                       <div className='tot-qty'>
                                       <i className="fa fa-plus icon-col" aria-hidden="true"></i>
                                       <input type="text" className='proqty' value="25" disabled />
                                       <i className="fa fa-minus icon-col" aria-hidden="true"></i>
                                       </div>
                                       <span onClick={RemoveItem}>
                                       <i title="Delete this item" className="fa fa-trash-o remove" aria-hidden="true"></i>
                                       </span>
                                    </div>
                                    
                               
                                
                             </div>
                             <div className='total'><span className='tot-price'>Rs.1000</span></div>
                             
                        </div>
                        
                        </div>
                      
                        </div>
                        <div className='grand-total'>
                            <h5>Grand Total : Rs.2000</h5>
                        </div>


                    <div className='row clrbth'>
                        <div className='col mobwidth100flxunset'>
                        <div title="Continue Shopping" className='place-order'>
                           
                            
                            <button type="button" onClick={HistoryBack} className="btn btn-success btn-bg w-100">Continue Shopping <i className="fa fa-shopping-cart fa-lg" aria-hidden="true" title="Continue Shopping"></i></button>
                           
                        </div>
                        </div>
                        <div className='col mobwidth100flxunset'>
                        <div title="Check Out" className='place-order'>
                            <Link to="/signin">
                            
                            <button type="button" className="btn btn-success btn-bg w-100">Check Out <img loading='lazy'  src={checkout} alt='img' className='img-fluid imgopacity'/></button>
                            </Link>
                        </div>
                        </div>
                    </div>
                       
                    
                 
                    </div>
                    <div className='col-4 mobwidth100'>
                        <div className='all-sum-dtl'>
                            <div className='summary bdr-radius-top-div'><h6><img loading='lazy' className='imgopacity' src={summary} alt='img' /> Summary <img loading='lazy'  src={downarrow} className='pull-right imgopacity' alt='img' /></h6></div>
                            <div className='subtotal-div'>
                                <ul>
                                    <li><span>Sub Total</span> <span className='subtot-placeorder'>Rs.1,20,000</span></li>
                                    <li><span>Delivery Charges</span> <span className='subtot-placeorder'>Free</span></li>
                                    <li><span>Tax</span> <span className='subtot-placeorder'>Rs.100</span></li>
                                </ul>
                            </div>
                            <div className='total-div'>
                                <h6>TOTAL <span className='pull-right'>Rs.1,22,000</span></h6>
                            </div>
                        </div>
                        <div title="Check Out" className='place-order-summary checkoutmar'>
                            <Link to="/signin">
                            <button type="button" className="btn btn-success btn-bg w-100">Check Out <img loading='lazy'  src={checkout} alt='img' className='img-fluid imgopacity'/></button>
                            </Link>
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