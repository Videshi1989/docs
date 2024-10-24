import React from 'react'
import Header from './Header'
import {Link } from 'react-router-dom'
import Footer from './Footer'
import toparrow from './Images/top_arrow.png'

export default function Contact()
{
    return(
        <>
            <Header />

            
            <section>
            <div className='slidersetup'>
                <div className='container-fluid'>
            
                <div className="row">
                    <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4216267641746!2d77.44172987531886!3d23.19130027905587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c424e9ec09817%3A0x3ec777ec9af2847b!2sInfusAi!5e0!3m2!1sen!2sin!4v1693678178825!5m2!1sen!2sin" title="map" width="100%" height="450" style={{border:'0'}}  loading="lazy" ></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                            <span className='path'>Home / Contact us</span>
                        </div>

                    </div>
                </div>
              
                </div>
            </div>
            </section>

<section>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
                <div className='text-center mt-2 mb-2'>
                    <h2>Contact Us</h2>
                    <span>Get in touch with us at info@infusai.com or fill the form below</span>
                </div>
            </div>
        </div>
    </div>
</section>


            <section>
              <div className='mt-4 mb-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col mobwidth100flxunsetadmin'>
                        
                    
                    <div className="mb-4">
<label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Name </label>
<input type="text" autoComplete="nope"  className="form-control cart-f-control" title="Enter your name"  placeholder="Enter your name" aria-describedby="emailHelp"/>

</div>
                    <div className="mb-4">
<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
<input type="text" autoComplete="nope"  className="form-control cart-f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>

</div>
<div className="mb-3">
<label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No. </label>
<input type="text" autoComplete="nope" className="form-control cart-f-control" title="Enter your mobile no."  placeholder="Enter your mobile no."/>

</div>

                 
                  
                
                        </div>
                        <div className='col mobwidth100flxunsetadmin'>
                        <div className="mb-3">
<label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Message </label>
<textarea autoComplete="nope" className="form-control cart-f-control msgheight" title="Type your message"  placeholder="Type your message"></textarea>

</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='text-center mt-3 mb-2'>
                            
<Link to=''>
<button type="button"  className="btn btn-success btn-bg ">Submit <img loading='lazy'  src={toparrow} alt='img' className="uparrow" /></button>
</Link>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </section>
            

            <Footer />
        </>
    )
}