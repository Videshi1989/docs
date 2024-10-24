import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
import Categoryslider from "../components/Categoryslider";
import logo from './../components/Images/logo.png'
import closebtn from './../components/Images/closebtn.png'
import imgoil from './../components/Images/imgoil.png'
import emptycart from './../components/Images/emptycart.png'
import './../components/css/index.scss'

 const Headeruser = () => {
 
///////// fixed header
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

/////////showing menu for mobile
  
  function Showmenu()
  {
    document.getElementById('mobdnone').classList.remove('mobdnone');
    document.getElementById('mobdnone').classList.add('mobdblock');
    document.getElementById('showbar').classList.remove('toggle');
    document.getElementById('hidebar').classList.add('toggle');
    document.getElementById('hidebar').classList.remove('toggleclose');
  }

  function Hidemenu()
  {
    document.getElementById('mobdnone').classList.add('mobdnone');
    document.getElementById('showbar').classList.add('toggle');
    document.getElementById('hidebar').classList.remove('toggle');
    document.getElementById('mobdnone').classList.remove('mobdblock');
    document.getElementById('hidebar').classList.add('toggleclose');
  }
  function ShowCartDetails()
  {
    document.getElementById('popupcartdetails').style='display:block';
  }
  function CloseCartDetails()
  {
    document.getElementById('popupcartdetails').style='display:none';
  }

    return(
        <>
     
     <div id="popupcartdetails" className="overlay" style={{display:'none'}}>
        <div className="popup-cart animate-zoom" >
              <span onClick={CloseCartDetails}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
              <div className="container" style={{display:"block"}}>
                <div className="cartheight" id="style-scroll">
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={imgoil} style={{width:"15px"}}/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                          <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={imgoil} style={{width:"15px"}}/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={imgoil} style={{width:"15px"}}/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={imgoil} style={{width:"15px"}}/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={imgoil} style={{width:"15px"}}/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={imgoil} style={{width:"15px"}}/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                 
                  </div>
                  <div className="row">
                    <div className="col">
                    <div className="parentsubtot">
                      <p className="subtot"><span><b>Sub Total : </b></span><span><b>Rs.5000</b></span></p>
                     
                  </div>
                    </div>
                  </div>
                  
             
              </div>

              <div className="container emptycart" >
                  <div className="row">
                      <div className="col">
                          <div className="blankcart" style={{display:"none"}}>
                            <img loading='lazy' alt='img'  src={emptycart} style={{width:"40%"}} />
                            <br/><br/>
                            <h6><b>Your cart is empty!!!</b></h6>
                            <small className="emptytext">Looks like you have not added any thing to you cart. Go ahead & explore top categories.</small>
                            
                          </div>
                      </div>
                  </div>
              </div>


        </div>
      </div>

        <header className={`header ${scrollPosition > 200 ? "fixed slide-in" : ""}`}>
          <div className="header-div">
          <div className="container-fluid">
          <div className="row">
            <div className="col-2 mobwidth100">
                  <div>
                  <Link to="/home" style={{border:"none!important"}}>
                      <img loading='lazy'  src={logo} alt="Logo" className="header-logo" />
                  </Link>
                  <span onClick={Showmenu} id="showbar" className="toggle" style={{display:'none'}}>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                  </span>
                  <span onClick={Hidemenu} id="hidebar" className="toggleclose" style={{display:'none'}}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                  </span>
                  </div>

            </div>
                 <div className="col-7 mobwidth100 padd-0">
                  <div className="search-area">
                         <input type="text" className="form-control search-product f-control f-control-mob" autoComplete="none" placeholder="Search"   />
                         <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                  </div>
                       
                  </div>
                  <div className="col mobwidth100 mobpadding0"> 
                  <div className="mobdnone animate-right mobilook" id="mobdnone" style={{display:'none'}}>
                       <Sidebar />
                  </div>
                     <div  className="cart-div"><span onClick={ShowCartDetails} className="cart-anch"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true" title="Cart Details"></i><span className="cart-span">1</span></span></div>
                     
                  </div>
           

             </div>

             


          </div>
          
         </div>

        <div className="category-parent">                    
        <div className="container-fluid">
        
              <div className="row">
               <Categoryslider  />
            </div>
        </div>  
        </div>

     
              
          </header>
        </>
    )
}

export default Headeruser