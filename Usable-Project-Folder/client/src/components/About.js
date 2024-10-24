import React from 'react'
import Header from './Header'
import Footer from './Footer'
import aboutus from './Images/aboutus.jpg'
import owner from './Images/owner.png'
import delivery from './Images/delivery.svg'
import shipping from './Images/delivery.svg'
import returnprod from './Images/easyreturn.svg';

export default function About()
{
    return(
        <>
            <Header />
         <div className='slidersetup'>
            <img loading='lazy'  src={aboutus} className='img-fluid' alt='img'/>
           
         </div>  


    <section>
      <div className="container-fluid">

        <div className="row">
            <div className="col">
            <div>
                <span className='path'>Home / About us</span>
            </div>

         </div>
        </div>
    
        <div className="row mt-4">
            <div className="col-5 mobwidth100">
                <div className='abtdescleft '>
                    <img loading='lazy'  src={owner} alt="img" className='imgabout' />
                </div>
            </div>
            <div className="col-7 mobwidth100">
                <div className='abtdesc '>
                <p>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
                <p>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
                <p>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
                <p>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
                </div>
                <div className='owner'>
                    <h4>Kiran Singh</h4>
                    <h6>- Director</h6>
                </div>
            </div>
        </div><br className='mobdnone'/>
       
        <div className="row sermbtm">
            <div className="col mobwidth100flxunset">
                <div className='abtdesc serdesign'>
                <h5 className='orange'><img loading='lazy'  src={delivery} alt='img' className='abouticon' /> Fast Delivery</h5>
                <hr className='sepaabout' />
                    <p>At its heart, it allows you to write code in the browser, and see the results of it as you build. A useful and liberating online code editor for developers of any skill, and particularly empowering for people learning to code. We focus primarily on front-end languages like HTML, CSS, JavaScript, and preprocessing syntaxes that turn into those things.</p>
                </div>
            </div>
            <div className="col mobwidth100flxunset">
                <div className='abtdesc serdesign'>
                <h5 className='orange'><img loading='lazy'  src={shipping} alt='img' className='abouticon' /> Free Shipping</h5>
                <hr className='sepaabout' />
                    <p>At its heart, it allows you to write code in the browser, and see the results of it as you build. A useful and liberating online code editor for developers of any skill, and particularly empowering for people learning to code. We focus primarily on front-end languages like HTML, CSS, JavaScript, and preprocessing syntaxes that turn into those things.</p>
                </div>
            </div>
            <div className="col mobwidth100flxunset">
                <div className='abtdesc serdesign'>
                <h5 className='orange'><img loading='lazy'  src={returnprod} alt='img' className='abouticon' /> Easy Returns</h5>
                <hr className='sepaabout'/>
                    <p>At its heart, it allows you to write code in the browser, and see the results of it as you build. A useful and liberating online code editor for developers of any skill, and particularly empowering for people learning to code. We focus primarily on front-end languages like HTML, CSS, JavaScript, and preprocessing syntaxes that turn into those things.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
	

            <Footer />
        </>
    )
}