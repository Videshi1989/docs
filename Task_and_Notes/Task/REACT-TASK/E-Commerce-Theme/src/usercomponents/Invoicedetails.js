import React from 'react';



import logo from './../components/Images/logo.png'

const Invoicedetails = () => {

    
return (
    <>
         <div className='container-fluid'>
        <div className='row' >
        <div className='col'>
        <div id='invoice'>
            <table style={{width:'100%'}}>
                <tr>
                  <td>
                      <table style={{width:'97%',margin:'0 auto'}}>
                          <tr className='d-print-none' style={{borderBottom:'1px solid rgba(13, 10, 95, 0.07)'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{float:'right',paddingTop:'20px',paddingBottom:'20px'}}><span title='Download' style={{marginRight:'45px',cursor:'pointer'}}><i className="fa fa-download fa-lg" aria-hidden="true"></i></span><span  title='Print' style={{cursor:'pointer'}}><i className="fa fa-print fa-lg" aria-hidden="true"></i></span></td>
                          </tr>
                          <tr style={{borderBottom:'1px solid rgba(13, 10, 95, 0.07)'}}>
                              <td style={{fontSize:'17px',width:'19%',padding: '25px 0 25px 20px'}}><h5>Tax  Invoice</h5></td>
                              <td style={{fontSize:'14px',width:'27%',padding: '25px 0 25px 20px'}}>
                                  Order Id: <b>OD3289034824723441100</b><br/>
                                  Order Date: 16-08-2023, 03:21 PM 
                              </td>
                              <td style={{fontSize:'14px',width:'27%',padding: '25px 0 25px 20px'}}>
                                  Invoice No: <b>FACSF22400016244</b><br/>
                                  Invoice Date: 16-08-2023, 03:22 PM 
                              </td>
                              <td style={{fontSize:'14px',width:'27%',padding: '25px 0 25px 20px'}}>
                                  GSTIN: FACSF22400016244<br/>
                                  PAN: AAGCV5953J 
                              </td>
                            
                          </tr>
                      </table>
                  </td>
                </tr>
                <tr>
                  <td>
                  <table style={{width:'100%'}}>
                          <tr>
                               <td style={{fontSize:'14px',width:'33.3%',padding: '25px 25px 0px 20px'}}>
                                  <b>Sold By</b><br/>
                                  VLADO SKY ENTERPRISES PVT. LTD. <br/>survey no. 303/2/1
                                  min-1 Plot no 75, sk-2 compound, Near SS Infinitus lasudiya mori, Indore, M.P. - 462010<br/>
                                  <b>GST: 23AAGCV5953JIZ0</b> 
                              </td>
                              <td style={{fontSize:'14px',width:'33.3%',padding: '25px 25px 0px 20px'}}>
                                  <b>Shipping Address</b><br/>
                                  Videshi Muduli,<br/>
                                  Flat no. G1, Jamna Saraswati Heights, Patel Nagar, Raison Road, Near HP Petrol Pump, Bhopal, M.P.-462022
                              </td>
                              <td style={{fontSize:'14px',width:'33.3%',padding: '25px 25px 0px 20px'}}>
                                  <b>Billing Address</b><br/>
                                  Videshi Muduli,<br/>
                                  Flat no. G1, Jamna Saraswati Heights, Patel Nagar, Raison Road, Near HP Petrol Pump, Bhopal, M.P.-462022
                              </td>
                            
                          </tr>
                      </table>
                  </td>
                </tr>
                <tr>
                  <td style={{padding: '25px 25px 25px 20px'}}>
                      <table style={{width:'100%',fontSize:'14px',textAlign:'center',borderBottom: '1px solid rgba(13, 10, 95, 0.07)',borderLeft: '1px solid rgba(13, 10, 95, 0.07)',borderRight: '1px solid rgba(13, 10, 95, 0.07)'}}>
                          
                              <tr style={{borderBottom: '1px solid rgba(13, 10, 95, 0.07)',borderTop: '1px solid rgba(13, 10, 95, 0.07)'}}>
                                  <td style={{width:'24%'}}><b>Product</b></td>
                                  <td style={{width:'24%'}}><b>Description</b></td>
                                  <td style={{width:'7%'}}><b>Qty</b></td>
                                  <td style={{width:'6%'}}><b>Gross Amount</b></td>
                                  <td style={{width:'6%'}}><b>Discount</b></td>
                                  <td style={{width:'6%'}}><b>Taxable Value</b></td>
                                  <td style={{width:'6%'}}><b>CGST</b></td>
                                  <td style={{width:'8%'}}><b>SGST/UTGST</b></td>
                                  <td style={{width:'13%'}}><b>Total</b></td>
                              </tr>
                          
                          
                            <tr>
                                <td style={{padding: '15px 0 15px 20px'}}>Himalayan Organics Plant Based Eye Care Supplement-60 Tablets | HO_EyeCare_Tablets | Not eligible for return | IMEI/Sr No.:</td>
                                <td>HSN: 21069099 | CGST: 9% | SGST: 9%</td>
                                <td>1</td>
                                <td>799.00</td>
                                <td>0.00</td>
                                <td>677.12</td>
                                <td>60.94</td>
                                <td>60.94</td>
                                <td>799.00</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid rgba(13, 10, 95, 0.07)'}}>
                                <td></td>
                                <td style={{padding: '15px 0 15px 20px'}}><b>Shipping and Handling Charges</b></td>
                                <td>1</td>
                                <td>1</td>
                                <td>5.00</td>
                                <td>0</td>
                                <td>4.24</td>
                                <td>0.38</td>
                                <td>5.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{padding: '15px 0 15px 20px'}}><b>Total Price:</b></td>
                                <td><b>804.00</b></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>All values are in INR</td>
                            </tr>
                          
                      </table>
                  </td>
                </tr>
                <tr>
                  <td>
                      <table style={{width:'100%'}}>
                          <tr>
                              <td style={{padding: '50px 30px 20px 20px'}}><img src={logo} alt='img' loading='lazy' style={{maxHeight:'50px'}} /></td>
                              <td style={{fontSize:'14px',float:'right',padding: '50px 30px 20px 20px',textAlign:'center'}}><b>VLADOSKY ENTERPRISE PVT LTD</b><br/>Authorized Signature</td>
                          </tr>
                          
                      </table>
                  </td>
                </tr>
                <tr>
                  <td>

                  </td>
                </tr>
            </table>
         </div>   
        </div>
    </div>
        </div>
    </>
  )
}

export default Invoicedetails




