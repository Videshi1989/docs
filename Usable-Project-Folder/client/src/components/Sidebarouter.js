import React,{useState} from 'react'
import loader from './Images/loader.png'


const Sidebarouter = () => {

    const[showloader,Setshowloader] = useState(true);     //loading effect
    const[brand,Setbrand] = useState(false);
    const[rating,Setrating] = useState(false);
    const[discount,Setdiscount] = useState(false);
    const[size,Setsize] = useState(false);
    const[availability,Setavailability] = useState(false);
    const[closefilter,Setclosefilter] = useState(false);
    
    function Showbrand()
    {
        brand ? Setbrand(false) : Setbrand(true)
    }
    function Showrating()
    {
        rating ? Setrating(false) : Setrating(true)
    }
    function Showdiscount()
    {
        discount ? Setdiscount(false) : Setdiscount(true)
    }
    function Showsize()
    {
        size ? Setsize(false) : Setsize(true)
    }
    function Showavailability()
    {
        availability ? Setavailability(false) : Setavailability(true)
    }
    function CloseFilter()
    {
        document.getElementById('filter-side').classList.add('mobdnone');
        closefilter ? Setclosefilter(false) : Setclosefilter(true)
    }
    function Showfilter()
    {
        document.getElementById('filter-side').classList.remove('mobdnone');
        closefilter ? Setclosefilter(false) : Setclosefilter(true);
    }



  return (
    <>
      { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }
          <div  className='filterpro mobdblock' style={{display:'none'}}><i onClick={Showfilter} style={{ display: `${closefilter === false ? 'block' : 'none'}` }} className="fa fa-filter fa-lg mobflt" aria-hidden="true"></i><i style={{ display: `${closefilter === false ? 'none' : 'block'}` }} onClick={CloseFilter}  className="fa fa-times fa-lg mobflt" aria-hidden="true"></i>
                    </div>
                     <div className='filter-side animate-right mobdnone' id='filter-side'>
                        <div>
                            <button title="Apply filter" className='btn btn-secondary btn-sm btn-filter mobdnone'><i className="fa fa-filter" aria-hidden="true"></i> Filter</button>
                            <button title="Clear all filter" className='btn btn-secondary btn-sm btn-clear'>Clear All</button>
                            <button title="Apply filter" style={{display:'none'}} className='btn btn-danger btn-sm btn-apply mobdblock'>Apply</button>
                        </div>
                        <br/>
                        <div>
                            <h6>Category</h6>
                            <small>Bags <i className="fa fa-angle-double-right" aria-hidden="true"></i> Cloth bag</small>
                        </div>
                        <hr className='sepaabout' />
                        <div >
                            <h6>Price</h6>
                            <input className="w-100 price-range" type="range" min="500" max="5000"  />
                            <div>
                                <div className='mprice'><small className='min-max-font'>Min Price </small></div><div><span><i className="fa fa-plus-circle icon-col" aria-hidden="true"></i> <input type="text" value="100" className='minprice'  /> <i className="fa fa-minus-circle icon-col" aria-hidden="true"></i></span></div>
                                <br/>
                                <div className='mprice'><small className='min-max-font'>Max Price </small></div><div><span><i className="fa fa-plus-circle icon-col" aria-hidden="true"></i> <input type="text" value="1000" className='minprice'  /> <i className="fa fa-minus-circle icon-col" aria-hidden="true"></i></span></div>
                            </div>
                        </div>
                        <hr className='sepaabout'/>
                        <div>
                            <h6 onClick={Showbrand} className='lbl-brand'>Brand {brand ? <i className="fa fa-caret-up pull-right icon-col" aria-hidden="true"></i> : <i className="fa fa-caret-down pull-right icon-col" aria-hidden="true"></i>}</h6>
                            
                            {brand ?    
                                <div className='parent-s-brand' >
                                    <span  className='pull-right clear'>Clear All</span>
                                <i className="fa fa-search s-brand" aria-hidden="true"></i>
                                <input type="text" placeholder='Search Brand' className='brandtext-search' />
                                <div className='scroll-brand' id="style-scroll">
                                <div><input type="checkbox" /> <small className="brandname">Tata</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Bata</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Dell</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Hp</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Asus</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Milton</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Cello</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Sony</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Nokia</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Redme</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Vivo</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Oppo</small></div>
                                <div><input type="checkbox" /> <small className="brandname">Samsung</small></div>
                                </div>
                            </div> : null}
                         
                        </div>
                        <hr className='sepaabout'/>
                        <div>
                            <h6 onClick={Showrating} className='lbl-brand'>Rating {rating ? <i className="fa fa-caret-up pull-right icon-col" aria-hidden="true"></i> : <i className="fa fa-caret-down pull-right icon-col" aria-hidden="true"></i>}</h6>
                            {rating ?    
                            <div className='parent-s-brand' >
                            <span  className='pull-right clear'>Clear All</span>
                            <input type="text" placeholder='Select Rating' className='brandtext' />
                                <div className='scroll-brand' id="style-scroll">
                                <div><input type="checkbox" /> <small className="brandname">4* & Above</small></div>
                                <div><input type="checkbox" /> <small className="brandname">3* & Above</small></div>
                               
                                
                                </div>
                            </div> : null}
                         
                        </div>
                        <hr className='sepaabout'/>
                        <div>
                            <h6 onClick={Showdiscount} className='lbl-brand'>Discount {discount ? <i className="fa fa-caret-up pull-right icon-col" aria-hidden="true"></i> : <i className="fa fa-caret-down pull-right icon-col" aria-hidden="true"></i>}</h6>
                            {discount ?    
                            <div className='parent-s-brand' >
                            <span  className='pull-right clear'>Clear All</span>
                            <input type="text" placeholder='Select Discount' className='brandtext' />
                                <div className='scroll-brand' id="style-scroll">
                                <div><input type="checkbox" /> <small className="brandname">60% or More</small></div>
                                <div><input type="checkbox" /> <small className="brandname">30% or More</small></div>
                               
                                
                                </div>
                            </div> : null}
                         
                        </div>
                        <hr className='sepaabout'/>
                        <div>
                            <h6 onClick={Showsize} className='lbl-brand'>Screensize {size ? <i className="fa fa-caret-up pull-right icon-col" aria-hidden="true"></i> : <i className="fa fa-caret-down pull-right icon-col" aria-hidden="true"></i>}</h6>
                            {size ?    
                            <div className='parent-s-brand' >
                            <span  className='pull-right clear'>Clear All</span>
                            <input type="text" placeholder='Select Size' className='brandtext' />
                                <div className='scroll-brand' id="style-scroll">
                                <div><input type="checkbox" /> <small className="brandname">14inch to 15inch</small></div>
                                <div><input type="checkbox" /> <small className="brandname">12inch to 14inch</small></div>
                               
                                
                                </div>
                            </div> : null}
                         
                        </div>
                        <hr className='sepaabout'/>
                        <div className='mb-4'>
                            <h6 onClick={Showavailability} className='lbl-brand'>Availability {availability ? <i className="fa fa-caret-up pull-right icon-col" aria-hidden="true"></i> : <i className="fa fa-caret-down pull-right icon-col" aria-hidden="true"></i>}</h6>
                            {availability ?    
                            <div className='parent-s-brand' >
                            <span  className='pull-right clear'>Clear All</span>
                            <input type="text" placeholder='Select availability' className='brandtext' />
                                <div className='scroll-brand' id="style-scroll">
                                <div><input type="checkbox" /> <small className="brandname">Include out of stock</small></div>
                               
                                
                                </div>
                            </div> : null}
                         
                        </div>
                      </div>
        { showloader ? Setshowloader(false) : null } 
    </>
  )
}

export default Sidebarouter