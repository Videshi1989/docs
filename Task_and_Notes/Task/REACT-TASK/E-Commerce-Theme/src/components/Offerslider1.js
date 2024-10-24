import React from 'react'
import { Link } from 'react-router-dom';
import laptop1 from './../components/Images/laptop1.jpg'
import laptop2 from './../components/Images/laptop2.jpg'
import laptop3 from './../components/Images/laptop3.jpg'
import laptop4 from './../components/Images/laptop4.jpg'
import offer from './../components/Images/offer.jpg'

const Offerslider1 = () => {
  return (
    <>
      <div className='parentoffer'>
          <div className='container-fluid'>
            <div className='row'>
                <div className='col mobwidth100flxunset'>
                   <div>
                        <span className='prod-heading'><Link to="/allproductview2">Offer Zone</Link></span>
                  </div>
                </div>
            </div>
            <div className='row'>
                <div className='col mobwidth100flxunset'>
                   <div >
                   <img loading='lazy'  alt="img" className='offerimg adtoffer' title="product name" src={offer}  />
                    </div>
                </div>
                <div className='col mobwidth100flxunset'>
                <div className='offerdiv brdrleft brdrtop brdrrightmob'>
                   <div className='text-center'><img loading='lazy'  alt="img" className='offerimgsecond' title="product name" src={laptop1} /></div>
                   <div className='offerproname'>HP Laptop</div>
                   <span>15% off</span>
                </div>
                <div className='offerdiv brdrleft brdrtop brdrright'>
                <div className='text-center'><img loading='lazy'  alt="img" className='offerimgsecond' title="product name" src={laptop2} /></div>
                   <div className='offerproname'>Dell Laptop</div>
                   <span>12% off</span>
                </div>
                <div className='offerdiv brdrleft brdrtop brdrbottom brdrrightmob'>
                <div className='text-center'><img loading='lazy'  alt="img" className='offerimgsecond' title="product name" src={laptop3} /></div>
                   <div className='offerproname'>Dell Laptop</div>
                   <span>13% off</span>
                </div>
                <div className='offerdiv brdrleft brdrtop brdrbottom brdrright'>
                <div className='text-center'><img loading='lazy'  alt="img" className='offerimgsecond' title="product name" src={laptop4} /></div>
                   <div className='offerproname'>Dell Laptop</div>
                   <span>18% off</span>
                </div>
      
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Offerslider1