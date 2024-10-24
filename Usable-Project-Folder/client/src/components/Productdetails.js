import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import ReactImageMagnify from "image-magnify";
import Header from './Header'
import Footer from './Footer'
import loader from './Images/loader.png'
import prodimage from './Images/laptop3.jpg'
import smallimg1 from './Images/small-img-1.jpg'
import smallimg2 from './Images/small-img-2.jpg'
import smallimg3 from './Images/small-img-3.jpg'
import smallimg4 from './Images/small-img-4.jpg'
import smallimg5 from './Images/small-img-5.jpg'
import Relatedproducts from './Relatedproducts';


export default function Productdetails()
{
    const[showloader,Setshowloader] = useState(true);     //loading effect
    
    return(
        <>
        { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
            
            <Header />
           

           <div className='cartslidersetup mb-4'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 mobwidth100'>
                            <div className='small-img-div mobwidth100'>
                                <div className='small-img'><img loading='lazy'  src={smallimg1} alt="img"/></div>
                                <div className='small-img'><img loading='lazy'  src={smallimg2} alt="img"/></div>
                                <div className='small-img'><img loading='lazy'  src={smallimg3} alt="img"/></div>
                                <div className='small-img'><img loading='lazy'  src={smallimg4} alt="img"/></div>
                                <div className='small-img'><img loading='lazy'  src={smallimg5} alt="img"/></div>
                            </div>
                            <div className='big-img-div mobwidth100'>
                            
                                <div>
                                    <ReactImageMagnify className="magnify-img"
                                        {...{
                                        smallImage: {
                                        alt: "image",
                                        isFluidWidth: true,
                                        src: `${prodimage}`
                                        },
                                        largeImage: {
                                        alt: "",
                                        src: `${prodimage}`,
                                        width: 1200,
                                        height: 1800
                                        
                                        },
                                        isHintEnabled: true
                                    }}
                                    />
                                </div>
                                <div className='parent-shopping mt-5'>
                                    <div className='shopping-buy'><i className="fa fa-shopping-cart fa-lg" aria-hidden="true" title="ADD TO CART"></i> ADD TO CART</div>
                                    <div className='shopping-buy'><i className="fa fa-bolt" aria-hidden="true" title='BUY NOW'></i> BUY NOW</div>
                                </div>
                           
                            </div>
                    </div>
                    <div className='col-6 mobwidth100'>
                    <div className='all-dtl-div'>
			<h5><Link to="/productdetails" title="Product Name" className="productname">Dell Laptop 1500D 24.1 Digital SLR (Silver) with i9 Processor </Link></h5>
			<div className="sp-view1">3.7 <i className="fa fa-star" aria-hidden="true"></i></div>
			<div><span>580 ratings &amp; 79 Reviews</span></div><br/>
            <div className="price-div product-feature">
            <span className="spec-price">Special Price</span>
	        <h5>Rs.79,990
	        <span className="price dis-price">Rs.89,990 </span> <span className="dis-price">12% off</span><br/>
            </h5>
            </div>
			<hr className='sepaabout'/>
            <div className='product-feature'>
            <span className="spec-price">Delivery</span>
			<div className='parent-search'>
                <i className="fa fa-map-marker map" aria-hidden="true"></i>
                <input type="text" placeholder='Enter delivery pin code' className='pincodetext'/>
                <button className='btn-search'>Search</button>
            </div>
            </div>
            <br/>
            <div className='product-feature'>
            <span className="spec-price">Specification</span>
			<ul className="par-circle">
				<li><span className='prod-head'>Brand :</span> <span className='prod-feature'>Dell</span></li>
                <li><span className='prod-head'>Model Number :</span> <span className='prod-feature'>DL-123-E5</span></li>
				<li><span className='prod-head'>Type :</span> <span className='prod-feature'>Auto</span></li>
                <li><span className='prod-head'>Body Material :</span> <span className='prod-feature'>Metal</span></li>
                <li><span className='prod-head'>Color :</span> <span className='prod-feature'>Silver</span></li>
            </ul>
            </div>
            <hr className='sepaabout'/>
            <div className='product-feature'>
            <span className="spec-price">Available Offers</span>
			<ul className="par-circle">
				<li>15% Off</li>
                <li>17% Off on HDFC Credit Card</li>
				<li>18% Off on HSBC Credit Card</li>
                <li>Free Home Delivery</li>
			</ul>
            </div>
            <hr className='sepaabout'/>
            <div className='product-feature'>
            <span className="spec-price">Warranty</span>
			<ul className="par-circle">
				<li>1 Year Brand Warranty</li>
			</ul>
            </div>
		</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                    
                    </div>
                </div>
            </div>

            <Relatedproducts />

            </div>
            <Footer />
           

        { showloader ? Setshowloader(false) : null } 
        </>
    )
}