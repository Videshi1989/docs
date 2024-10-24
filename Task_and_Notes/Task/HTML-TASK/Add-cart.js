
function myAlertBottom(){
  $(".myAlert-bottom").show();
  setTimeout(function(){
    $(".myAlert-bottom").hide(); 
  },4000);
}


function MaxcareAddToCart()
{ // on loading  start 
$(".overlay3").fadeIn(300);
// on loading  end 　
      //alert("jkjkj");
     // document.getElementById("SvPInfo").innerHTML="<img src='UserProfileImg/loading2.gif' />";
    //$('#SvPInfo').html("<img src='UserProfileImg/loading2.gif' />");
    var od = new FormData();
    /////
   
    // var order_no =document.getElementById("").value;
    // var product_type = document.getElementById("").value;
    var quantity =document.getElementById("Get_qty").value;
    var mxpro_code =document.getElementById("Get_prod_id").value;
    /////
    // od.append("order_no", OrderNumber);
    od.append("product_code", mxpro_code);
    // od.append("product_type", product_type);
    od.append("quantity", quantity);    
    //alert(quantity);
    /////


        jQuery.ajax({
            url: "FMfcgxw2qnkx9/Handlers/Add-cart.ashx",
            type: "POST",
            contentType: false,
            processData: false,
            data: od,
            dataType: "json",
            success: function (Response) {
                if (Response.Success==true)
               {
               
                    
                   
                    $('#Showcartdiv').css('display','block');
                    $('#cart_msg').html(Response.Message);

                 
	               
	                $('#productdtlcartdetailsdiv').css('display','block');
	                $('#productdtlcartforemty').css('display','none');
	                
	               Showcart_summarydata();  
	               Showheadercartdetails();
	               
	                showcartproduct();
	                 getcartquantity();
                   // showcartsummary();

                   //$('#Showcartmsg').html("<img  class='' src='images/right.png'style='width: 30px;padding-right: 9px;' >"  +   Response.Message);
                    
                    /////Scroll to top of body start
                    $('body,html').animate({
                    scrollTop : 0                      
                    }, 500);
                    ////Scroll to top of body end
                    
                    
                     // stop loading  start 
                    $('.overlay3').fadeOut(10);
                    //stop loading  end 
                }
                else {
                     
                    $('.overlay3').fadeOut(10);
                    //                   alert(Response.Message);
                     myAlertBottom();
                    $('#Showcartmsg').html("<img  class='' src='images/error.png' style='width: 21px;' >" +   Response.Message);
                    // $('#Showcartmsg').html(Response.Message); 
                    // document.getElementById("SvPInfo").innerHTML=Response.Message;                                      
                     
                }
            },
            error: function (err) {
                
              // document.getElementById("SvPInfo").innerHTML=err.statusText;
                
            }
        });
        
        

}

/* ======================================================================================================================================== */
function showcartproduct()
{
var mxprocode = document.getElementById("Get_prod_id").value;



    $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?procode='+ mxprocode,
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
            }
            else 
            {   

                  for (var i = 0; i < Orjson.length; i++)
                  {

                       $('#drop-pro-name').html(Orjson[i].NAME);
                       $('#drop-mrp').html(Orjson[i].Amount);
                       $('#drop-dp-price').html(Orjson[i].WithoutSaleTaxAmt);
                       $('#drop-cat').html(Orjson[i].CatNAME);
                       $('#drop-stock').html(Orjson[i].Stock);
                       $('#drop-pv').html(Orjson[i].PV);
                       $('#drop-off').html(Orjson[i].BatchNo);
                       $('#dropdwnimg').html("<img src='"+Orjson[i].ImagePath+"' alt='' style='width: 32px;'/>");
                       $('#oooo').html("<img src='"+Orjson[i].ImagePath+"' alt='' style='width: 22px;'/>");

                  }
                  
           //       getcartquantity();
                              
            }
        });  
        

}

/* ======================================================================================================================================== */


function showcartproduct_error()
{

       $('#erro-img').html("<img src='UserPanel_Images/Alert-icon.png' alt='' style='width: 42px;'/>");  
       $('#hide-cart-div').css('display','none');
       $('#cart_msg').css('display','none');

}

/*===========================================================================================================================================*/

function getcartquantity()
{
        var mxprocode2 = document.getElementById("Get_prod_id").value;
       // alert(mxprocode2);
      $.getJSON('FMfcgxw2qnkx9/Handlers/Cart-quantity.ashx?prodcode='+ mxprocode2,
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                
//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
//                var d = formatOrder_productdetails(Orjson);

//                $('#Showsingleproductdetails').html(d); <img src="images/product-iphone-6s-plus.png" alt="" />
                  for (var i = 0; i < Orjson.length; i++)
                  {
                       $('#drop-qty').html(Orjson[i].Quantity);
       
                  }
                  
                  
                              
            }
        });  
        
    
}

/*================================================================================================================================================*/
function showcartsummary()
{
     var mxprocode3 = document.getElementById("Get_prod_id").value;
       // alert(mxprocode2);
      $.getJSON('FMfcgxw2qnkx9/Handlers/Cart-summary.ashx?prodcode='+ mxprocode3,
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                
//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
//                var d = formatOrder_productdetails(Orjson);

//                $('#Showsingleproductdetails').html(d); <img src="images/product-iphone-6s-plus.png" alt="" />
                  for (var i = 0; i < Orjson.length; i++)
                  {
                       $('#totalitem').html(Orjson[i].TotPrdcts);
                       $('#totalamount').html(Orjson[i].TotalAmt);
                       $('#totaladdeditem').html(Orjson[i].TotPrdcts);
                       $('#proceedid').html(Orjson[i].TotPrdcts);
                      
                      
       
                  }
                  
                  
                              
            }
        });  


}

/*=================================================================================================================================================*/


/*===================================== START FUNCTION =================================*/
function Showcart_quqntity()
{  
       

            // $('#Showpersonalcareproduct').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

            // $.getJSON('../FMfcgxw2qnkx9/Handlers/Product-list.ashx?p=' + PageIndex + "&s=" + PageSize + "&u="+MemID+ "&frdt="+Fromdt+ "&todt="+Todt+ "&drank="+drank+ "&sts="+sts+ "&Pos="+lvl+ "&Package="+Package,
             //$.getJSON('FMfcgxw2qnkx9/Handlers/Cart-details.ashx?prodcode='+ mxpcode44,
            $.getJSON('FMfcgxw2qnkx9/Handlers/Cart-details.ashx',
            function(Orjson)
            {  
                  
            if(Orjson.length == 0)
            { 
                
             //$('#Showpersonalcareproduct').html('');               
                //$('#ReffList').html(" <div class='alert  red-skin alert-rounded'><img src='images/close-button.png' width='25' heigth='25' alt=''> Sorry, referral record not found...! <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>x</span> </button> </div>   ");
            // $('#Showpersonalcareproduct').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 

            //alert("error");
            
            }
            else 
            {   
           
                var d = formatOrder_cartquantity(Orjson);

               $('#cartdetails-div').html(d);
                              
            }
        });  
}


function formatOrder_cartquantity(Orjson) 
{  
    var pp1='';
    var pasprodcode='';
    pp1 = pp1 + "<table class='table table-cart'><thead><tr><th>Product Name</th><th class='text-center'>Price</th><th class='text-center'>Quantity</th><th class='text-center'>Total</th></tr></thead><tbody>";
   
    
   
   
    for (var i = 0; i < Orjson.length; i++)
    {
        if(Orjson[i].CartStatus=="empty")
        {
              
               $('#cartdetails-div').css('display','none');
               $('#cartdetails-div2').css('display','block');
             
              
        }
        else
        {
        pp1 = pp1 + "<tr><td class='cart-product'><div class='product-img'><a href='product_detail.html?mxpid=" + Orjson[i].PCode + "'><img src='" + Orjson[i].ImageFile + "' alt='' class='cartsumaryimg'/></a></div>";
        pp1 = pp1 + "<div class='product-info'><div class='title'><a style='color:black;' href='product_detail.html?mxpid=" + Orjson[i].PCode + "'>" + Orjson[i].ProductName + "</a></div><div class='desc'><span>Availability:</span><span class='stocksts'>" + Orjson[i].Stock + "</span></div><div class='deletetqtydiv' ><i class='fa fa-trash-o' aria-hidden='true'></i><span class='dltprd' onclick=deletecartproduct('"+ Orjson[i].PCode +"')>Delete</span><span class='vrline'>|</span><span class='dltprdpv'>" + Orjson[i].PV + " PV</span><span class='vrline'>|</span><span class='dltprdbv'>" + Orjson[i].MyCreditPoint + " BV</span></div></div></td>";
      // pp1 = pp1 + "<div class='product-info'><div class='title'>" + Orjson[i].ProductName + "</div><div class='desc'><span>Availability:</span><span class='stocksts'>" + Orjson[i].Stock + "</span></div><div class='deletetqtydiv' onclick=deletecartproduct('"+ Orjson[i].PCode +"')><div class='properdiv'><i class='fa fa-trash-o' aria-hidden='true'></i>Delete</div><div class='properdiv'>" + Orjson[i].PV + " PV</div><div class='properdiv'>" + Orjson[i].MyCreditPoint + " BV</div> </div></div></td>";
        pp1 = pp1 + "<td class='cart-price text-center'> ₹" + Orjson[i].Amount + "</td><td class='cart-qty text-center'><div class='cart-qty-input'>";
        
        pp1 = pp1 + "<a  onclick=decrvalue('" + i + "');increaseproquantity('"+ Orjson[i].PCode +"','qty" + i + "') class='qty-control left disabled decrhovr' data-click='decrease-qty' data-target='#qty" + i + "'><i class='add-down add-action fa fa-minus' aria-hidden='true'></i></a>";
        pp1 = pp1 + "<input type='text'  readonly='readonly' name='qty" + i + "' size='2' value='" + Orjson[i].Quantity + "' class='form-control setqty' id='qty" + i + "' /><a href='#' onclick=increaseproquantity('"+ Orjson[i].PCode +"','qty" + i + "') class='qty-control right disabled' data-click='increase-qty' data-target='#qty" + i + "'><i class='fa fa-plus'></i></a>";
       
  

        pp1 = pp1 + "</div><div class='qty-desc'>1 to max order</div></td>";
        pp1 = pp1 + "<td class='cart-total text-center'> ₹" + Orjson[i].Total + "</td></tr>";
       
        
    }}
     pp1 = pp1 + "<tr><td class='cart-summary' colspan='4'><div class='summary-container' id='belowdivstatus'><div class='summary-row'><div class='field'>Cart Subtotal</div>";
     pp1 = pp1 + "<div class='value'> ₹<span id='cartsubtot'>..</span></div><input type='hidden' id='togetval'/>";
     pp1 = pp1 + "</div><div class='summary-row text-danger'></div><div class='summary-row text-danger'><div class='field'>Total PV</div><div class='value'> <span id='totalpro_pv'>..</span></div></div><div class='summary-row text-danger'><div class='field'>Total BV</div><div class='value'><span id='totalpro_bv'>..</span></div></div>";
     pp1 = pp1 + "<div class='summary-row total'><div class='field'>Total</div><div class='value'> ₹<span id='ttl'>..</span></div></div></div></td></tr></tbody></table>";
     
    return pp1;
    //
  //Showcart_quqntity();
  Showcart_summarydata();
}


 function decrvalue(j)
 {
        var currentVal = parseInt($("#qty" + j).val());
            if (!isNaN(currentVal) && currentVal > 1) 
            {
                $("#qty" + j).val(currentVal - 1);
            }
       
 }


/*===================================== END FUNCTION =================================*/

function increaseproquantity(changeproid,changeqty)
{

        setTimeout(
                    function() 
                    {
                       
                       
                   /*---------------------------------------*/  
                  $('#overlay2').fadeIn(300);
                       var newqty = $('#'+changeqty).val();
   
           
                                                  
    $.getJSON('FMfcgxw2qnkx9/Handlers/CartQtyChnge.ashx?prodcode='+ changeproid + "&newquantity=" + newqty,
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                
//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
               
               Showcart_quqntity();
               Showcart_summarydata();
                $('#overlay2').fadeOut();
            }
        });  
   
                    
                   /*------------------------------------*/ 
                    
                    
                    }, 500);


}


/*==============================================================================================================================================*/

function Showcart_summarydata()
{  
     
   // $(".overlay3").fadeIn(300);               ///////
      
      setTimeout(
                    function() 
                    {
                       
                       
                   /*---------------------------------------*/
     
     
     
     
     $.getJSON('FMfcgxw2qnkx9/Handlers/Cart-summary.ashx',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
               
               
               // alert("jj");
//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
//                var d = formatOrder_productdetails(Orjson);

//                $('#Showsingleproductdetails').html(d); <img src="images/product-iphone-6s-plus.png" alt="" />
                  for (var i = 0; i < Orjson.length; i++)
                  {
                   
                    
                    
                    $('#cartsubtot').html(Orjson[i].TotalAmt);
                    $('#ttl').html(Orjson[i].TotalAmt);
                    $('#totalamount').html(Orjson[i].TotalAmt);
                    
                    $('#totaladdeditem2').html(Orjson[i].TotPrdcts);         
                    $('#totalpro_pv').html(Orjson[i].TotalPV);
                    $('#totalpro_bv').html(Orjson[i].TotBV);
                    
                    $('#placeitemqty').html(Orjson[i].TotPrdcts);    
                    $('#placetotalpv').html(Orjson[i].TotalPV);
                    $('#placetotalbv').html(Orjson[i].TotBV); 
                    $('#placetotalmrp').html(Orjson[i].TotMRP);
                    $('#placeordertotal').html(Orjson[i].TotalAmt);
                    $('#placetotalsaving').html(Orjson[i].YouSavePer);
                    $('#placetotal_savingamt').html(Orjson[i].YouSaveAmt);
                    
                    
                    
                    $('#indexcart').html(Orjson[i].TotPrdcts);
                    $('#totindxpro').html(Orjson[i].TotPrdcts);
                    $('#ourhistorycart').html(Orjson[i].TotPrdcts);
                    $('#mdmsgcart').html(Orjson[i].TotPrdcts);
                    $('#ceomsgcart').html(Orjson[i].TotPrdcts);
                    $('#visioncart').html(Orjson[i].TotPrdcts);
                    $('#ourteamcart').html(Orjson[i].TotPrdcts);
                    $('#successcart').html(Orjson[i].TotPrdcts);
                    $('#certificatecart').html(Orjson[i].TotPrdcts);
                    $('#gallerycart').html(Orjson[i].TotPrdcts);
                    $('#gvdocart').html(Orjson[i].TotPrdcts);
                    $('#achcart').html(Orjson[i].TotPrdcts);
                    $('#productcart').html(Orjson[i].TotPrdcts);
                    $('#faqcart').html(Orjson[i].TotPrdcts);
                    $('#downcart').html(Orjson[i].TotPrdcts);
                    $('#checkoutkart').html(Orjson[i].TotPrdcts);
                    $('#checkoutpaykart').html(Orjson[i].TotPrdcts);
                    $('#checkoutkartcmp').html(Orjson[i].TotPrdcts);
                    $('#totaladdeditem').html(Orjson[i].TotPrdcts);
                    $('#totalitem').html(Orjson[i].TotPrdcts);
                    $('#proceedid').html(Orjson[i].TotPrdcts);
                    $('#delcentercart').html(Orjson[i].TotPrdcts);  
                    $('#contactcart').html(Orjson[i].TotPrdcts);
                    $('#grivecart').html(Orjson[i].TotPrdcts);
                    $('#termscart').html(Orjson[i].TotPrdcts);
                    $('#helpcart').html(Orjson[i].TotPrdcts);
                    $('#policycart').html(Orjson[i].TotPrdcts);
                    $('#careercart').html(Orjson[i].TotPrdcts);
                    $('#methodcart').html(Orjson[i].TotPrdcts);
                     $('#refundcart').html(Orjson[i].TotPrdcts);
                  }
                  
                 // Showheadercartdetails();
                    
            }
        });  
        
        
         /*------------------------------------*/ 
                    
                    
                    }, 1000);
        
        
        
     //   $('.overlay3').fadeOut();
        
        
        

}

/*================================================================================================================================================*/

function deletecartproduct(changeproid2)
{


        setTimeout(
                    function() 
                    {
                       
                    $('#overlay2').fadeIn(300);   
                   /*---------------------------------------*/  
                  
                     //  var newqty = $('#'+changeqty).val();
   
                                                      
    $.getJSON('FMfcgxw2qnkx9/Handlers/CartProdctDelete.ashx?prodcode='+ changeproid2,
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                
//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
//                var d = formatOrder_productdetails(Orjson);

//                $('#Showsingleproductdetails').html(d); <img src="images/product-iphone-6s-plus.png" alt="" />
//                  for (var i = 0; i < Orjson.length; i++)
//                  {
//                       $('#totalitem').html(Orjson[i].TotPrdcts);
//                       $('#totalamount').html(Orjson[i].TotalAmt);
//                       $('#totaladdeditem').html(Orjson[i].TotPrdcts);
                      
       
 //                 }
                  
           Showcart_quqntity(); 
           Showcart_summarydata();
           //MaxcareAddToCart();
           $('#overlay2').fadeOut(); 
                              
            }
        });  
   
                    
                   /*------------------------------------*/ 
                    
                    
                    }, 500);


}

/*==================================================================================================================================================*/

function SavecartuserInfo() {


   $('.overlay3').fadeIn(300);
   // $('#SvPInfo').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");
    var od = new FormData();
    
    var FirstName = $("#edit_firstname").val();
    var Number = $("#edit_number").val();
    var Address1 = $("#address1").val();
    var user_city = $("#edit_city").val();
    var Pin = $("#city_pin").val();
    var State = $("#state").val();
        
    od.append("FirstName", FirstName);
    od.append("Number", Number);    
    od.append("Address1", Address1);
    od.append("user_city", user_city);
    od.append("Pin", Pin);
    od.append("State", State);    
   
    $.ajax({
        url: "FMfcgxw2qnkx9/Handlers/Account-Settings.ashx?SaveTp=PercartuserInfo",
        type: "POST",
        contentType: false,
        processData: false,
        data: od,
        dataType: "json",
        success: function (Response) {
            if (Response.Success) {
                //$.messager.alert("Success", Response.Message, 'info');
                
                
                 myAlertBottom();
                
                 $('#carterrormsg').html("<img  class='' src='images/success.png' style='width: 21px;' >" +   Response.Message);
                 $('body,html').animate({scrollTop : 0}, 500);
                
               // $('#carterrormsg').html("<div class='alert alert-success border-success'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong></strong>" + Response.Message + "</div>");
            
           var disnone = function(){$('#editform').css('display','none');};
           setTimeout(disnone, 1000);
           $('.overlay3').fadeOut(); 
            }
            else {
                //$.messager.alert("Warning", Response.Message, 'warning');
              //  $('#carterrormsg').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong></strong>" + Response.Message + "</div>");
            
             
            }
        },
        error: function (err) {
            //$.messager.alert("Failed", err.statusText, 'error');
           // $('#SvPInfo').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong></strong>" + err.statusText + "</div>");
        
        
        }
    });
}






/*===================================== START FUNCTION =================================*/
function Showheadercartdetails()
{  
       
    
       
            // $('#Showpersonalcareproduct').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

            // $.getJSON('../FMfcgxw2qnkx9/Handlers/Product-list.ashx?p=' + PageIndex + "&s=" + PageSize + "&u="+MemID+ "&frdt="+Fromdt+ "&todt="+Todt+ "&drank="+drank+ "&sts="+sts+ "&Pos="+lvl+ "&Package="+Package,
             //$.getJSON('FMfcgxw2qnkx9/Handlers/Cart-details.ashx?prodcode='+ mxpcode44,
            $.getJSON('FMfcgxw2qnkx9/Handlers/Cart-details.ashx',
            function(Orjson)
            {  
                  
            if(Orjson.length == 0)
            { 
                
             //$('#Showpersonalcareproduct').html('');               
                //$('#ReffList').html(" <div class='alert  red-skin alert-rounded'><img src='images/close-button.png' width='25' heigth='25' alt=''> Sorry, referral record not found...! <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>x</span> </button> </div>   ");
            // $('#Showpersonalcareproduct').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 

            //alert("error");
            
            }
            else 
            {     
           
                var d = formatOrder_Showheadercartdetails(Orjson); 

               $('#indexcartdetailsdiv').html(d);
               $('#ourhistorycartdetailsdiv').html(d);
               $('#mdmsgcartdetailsdiv').html(d);
               $('#ceomsgcartdetailsdiv').html(d);
               $('#visioncartdetailsdiv').html(d);
               $('#ourteamcartdetailsdiv').html(d);
               $('#successcartdetailsdiv').html(d);
               $('#certificatecartdetailsdiv').html(d);
               $('#gallerycartdetailsdiv').html(d);
               $('#gvdocartdetailsdiv').html(d);
               $('#achcartdetailsdiv').html(d);
               $('#productcartdetailsdiv').html(d);
               $('#faqcartdetailsdiv').html(d);
               $('#downcartdetailsdiv').html(d);
               $('#checkoutcartdetailsdiv').html(d);
               $('#checkoutinfocartdetailsdiv').html(d);
               $('#checkoutpaycartdetailsdiv').html(d);
               $('#checkoutcmpcartdetailsdiv').html(d);
               $('#productdtlcartdetailsdiv').html(d);
               $('#delcentercartdetailsdiv').html(d);
               $('#contactcartdetailsdiv').html(d);
               $('#grivecartdetailsdiv').html(d);
               $('#termscartdetailsdiv').html(d);
               $('#helpcartdetailsdiv').html(d);
               $('#policycartdetailsdiv').html(d);
               $('#careercartdetailsdiv').html(d);
               $('#methodcartdetailsdiv').html(d);
               $('#refundcartdetailsdiv').html(d);
                              
            }
        });  
        
        
        
        
       
        
        
}


function formatOrder_Showheadercartdetails(Orjson) 
{ 
    var pp1='';
    var pasprodcode='';
    pp1 = pp1 + "<div  class='dropdown-menu dropdown-menu-cart p-0 '><div class='cart-header'><h4 class='cart-title'>Shopping Bag (<span id='totindxpro'>0</span>) </h4></div>";
    pp1 = pp1 + "<div class='cart-body cartheight ' id='style-scroll'><ul class='cart-item'>";
   
    for (var i = 0; i < Orjson.length; i++)
    {
        
         //if(Orjson[i].pagename == 'checkout_cart.html')
        if(Orjson[i].CartStatus=="empty")
        {
            //alert(Orjson[i].pagename);
  
             $('#indexcartdetailsdiv').css('display','none');
            $('#indxcartforemty').css('display','block');
             
             $('#ourhistorycartdetailsdiv').css('display','none');
             $('#ourhistoryforemty').css('display','block');
             
              $('#mdmsgcartdetailsdiv').css('display','none');
             $('#mdmsgcartforemty').css('display','block');
             
             $('#ceomsgcartdetailsdiv').css('display','none'); 
             $('#ceomsgcartforemty').css('display','block');
             
             $('#visioncartdetailsdiv').css('display','none');
             $('#visioncartforemty').css('display','block');
             
              $('#ourteamcartdetailsdiv').css('display','none');
             $('#ourteamcartforemty').css('display','block');
             
             $('#successcartdetailsdiv').css('display','none');
             $('#successcartforemty').css('display','block');
             
             $('#certificatecartdetailsdiv').css('display','none');
             $('#certificatecartforemty').css('display','block');
             
             $('#gallerycartdetailsdiv').css('display','none');
             $('#gallerycartforemty').css('display','block');
             
             $('#gvdocartdetailsdiv').css('display','none');
             $('#gvdocartforemty').css('display','block');
             
              $('#achcartdetailsdiv').css('display','none');
             $('#achcartforemty').css('display','block');
             
              $('#productcartdetailsdiv').css('display','none');
             $('#productcartforemty').css('display','block');
             
             $('#faqcartdetailsdiv').css('display','none');
             $('#faqcartforemty').css('display','block');
             
              $('#downcartdetailsdiv').css('display','none');
             $('#downcartforemty').css('display','block');
              
              $('#checkoutcartdetailsdiv').css('display','none');  
              $('#checkoutcartforemty').css('display','block');
              
               $('#checkoutinfocartdetailsdiv').css('display','none');
            $('#checkoutinfocartforemty').css('display','block');
            
            $('#checkoutpaycartdetailsdiv').css('display','none');
            $('#checkoutpaycartforemty').css('display','block');
            
              $('#checkoutcmpcartdetailsdiv').css('display','none');
            $('#checkoutcmpcartforemty').css('display','block');
            
            $('#productdtlcartdetailsdiv').css('display','none');
            $('#productdtlcartforemty').css('display','block');
            
              $('#delcentercartdetailsdiv').css('display','none');
            $('#delcentercartforemty').css('display','block');
            
              $('#contactcartdetailsdiv').css('display','none');
            $('#contactcartforemty').css('display','block');
            
            $('#grivecartdetailsdiv').css('display','none');
            $('#grivecartforemty').css('display','block');
            
              $('#termscartdetailsdiv').css('display','none');
            $('#termscartforemty').css('display','block');
            
              $('#helpcartdetailsdiv').css('display','none');
            $('#helpcartforemty').css('display','block');
            
             $('#policycartdetailsdiv').css('display','none');
            $('#policycartforemty').css('display','block');
            
             $('#careercartdetailsdiv').css('display','none');
            $('#careercartforemty').css('display','block');
            
              $('#methodcartdetailsdiv').css('display','none');
            $('#methodcartforemty').css('display','block');
            
             $('#refundcartdetailsdiv').css('display','none');     
            $('#refundcartforemty').css('display','block');
            
            
           // $('#cartdetails-div').css('display','none');
           // $('#checkoutcartforemty').css('display','block');
           //$('#cartdetails-div2').css('display','block');
         
        }
        else if(Orjson[i].pagename == 'checkout_cart.html')
        {
             
              $('#indexcartdetailsdiv').css('display','none');
            $('#indxcartforemty').css('display','block');
             
             $('#ourhistorycartdetailsdiv').css('display','none');
             $('#ourhistoryforemty').css('display','block');
             
              $('#mdmsgcartdetailsdiv').css('display','none');
             $('#mdmsgcartforemty').css('display','block');
             
             $('#ceomsgcartdetailsdiv').css('display','none'); 
             $('#ceomsgcartforemty').css('display','block');
             
             $('#visioncartdetailsdiv').css('display','none');
             $('#visioncartforemty').css('display','block');
             
              $('#ourteamcartdetailsdiv').css('display','none');
             $('#ourteamcartforemty').css('display','block');
             
             $('#successcartdetailsdiv').css('display','none');
             $('#successcartforemty').css('display','block');
             
             $('#certificatecartdetailsdiv').css('display','none');
             $('#certificatecartforemty').css('display','block');
             
             $('#gallerycartdetailsdiv').css('display','none');
             $('#gallerycartforemty').css('display','block');
             
             $('#gvdocartdetailsdiv').css('display','none');
             $('#gvdocartforemty').css('display','block');
             
              $('#achcartdetailsdiv').css('display','none');
             $('#achcartforemty').css('display','block');
             
              $('#productcartdetailsdiv').css('display','none');
             $('#productcartforemty').css('display','block');
             
             $('#faqcartdetailsdiv').css('display','none');
             $('#faqcartforemty').css('display','block');
             
              $('#downcartdetailsdiv').css('display','none');
             $('#downcartforemty').css('display','block');
              
              $('#checkoutcartdetailsdiv').css('display','none');  
              $('#checkoutcartforemty').css('display','block');
              
               $('#checkoutinfocartdetailsdiv').css('display','none');
            $('#checkoutinfocartforemty').css('display','block');
            
            $('#checkoutpaycartdetailsdiv').css('display','none');
            $('#checkoutpaycartforemty').css('display','block');
            
              $('#checkoutcmpcartdetailsdiv').css('display','none');
            $('#checkoutcmpcartforemty').css('display','block');
            
            $('#productdtlcartdetailsdiv').css('display','none');
            $('#productdtlcartforemty').css('display','block');
            
              $('#delcentercartdetailsdiv').css('display','none');
            $('#delcentercartforemty').css('display','block');
            
              $('#contactcartdetailsdiv').css('display','none');
            $('#contactcartforemty').css('display','block');
            
            $('#grivecartdetailsdiv').css('display','none');
            $('#grivecartforemty').css('display','block');
            
              $('#termscartdetailsdiv').css('display','none');
            $('#termscartforemty').css('display','block');
            
              $('#helpcartdetailsdiv').css('display','none');
            $('#helpcartforemty').css('display','block');
            
             $('#policycartdetailsdiv').css('display','none');
            $('#policycartforemty').css('display','block');
            
             $('#careercartdetailsdiv').css('display','none');
            $('#careercartforemty').css('display','block');
            
              $('#methodcartdetailsdiv').css('display','none');
            $('#methodcartforemty').css('display','block');
            
             $('#refundcartdetailsdiv').css('display','none');     
            $('#refundcartforemty').css('display','block');
             
             
            
            
           
           
           
           
           
           
           
           $('#cartdetails-div').css('display','none');
            $('#checkoutcartdetailsdiv').css('display','none');
            $('#checkoutcartforemty').css('display','block');
           $('#cartdetails-div2').css('display','block');
            
        
        
        }
        else
        {
         //alert("hello");
        pp1 = pp1 + "<li><div class='cart-item-image '><a href='product_detail.html?mxpid=" + Orjson[i].PCode + "'><img src='" + Orjson[i].ImageFile + "' alt='' /></a></div><div class='cart-item-info'>";
        pp1 = pp1 + "<h4><a href='product_detail.html?mxpid=" + Orjson[i].PCode + "'>" + Orjson[i].ProductName + "</a></h4><p class='price'>₹" + Orjson[i].Total + "</p></div>";
        pp1 = pp1 + "<div class='cart-item-close'><a class='rmvbtn' onclick=deleteheadercartproduct('"+ Orjson[i].PCode +"') data-toggle='tooltip' title='Remove'>&times;</a></div></li>";
            // calling function after removing product
            Showcart_quqntity(); 
           Showcart_summarydata();
          
           //loadOrders_product_details();
       }
     }
    
    var pp1 = pp1 + "</ul></div><div class='cart-footer'><div class='row row-space-10'><div class='col-6'>";
    var pp1 = pp1 + "<a href='checkout_cart.html' class='btn btn-default btn-theme btn-block' title='View Cart' >View Cart</a></div><div class='col-6'>";
    var pp1 = pp1 + "<a href='checkout_info.html' class='btn btn-inverse btn-theme btn-block' title='Checkout' >Checkout</a></div></div></div></div>";
    
    return pp1;
  
}



function deleteheadercartproduct(changeproid2)
{


        setTimeout(
                    function() 
                    {
                       
                    $('.overlay3').fadeIn(300); 
                   // $('#overlay4').fadeIn(300); 
                   /*---------------------------------------*/  
                  
                     //  var newqty = $('#'+changeqty).val();
   
                                                      
    $.getJSON('FMfcgxw2qnkx9/Handlers/CartProdctDelete.ashx?prodcode='+ changeproid2,
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
            }
            else 
            {
             
            Showcart_summarydata();  
            Showheadercartdetails();
           $('.overlay3').fadeOut(); 
           //$('#overlay4').fadeOut(); 
                              
            }
        });  
   
                    
                   /*------------------------------------*/ 
                    
                    
                    }, 500);


}



/*===================================== END FUNCTION =================================*/

function CheckLogin()
{
     $.getJSON('FMfcgxw2qnkx9/Handlers/get-Profile-Details.ashx',
        function(Orjson)
        {  
              
            if(Orjson.length == 0)
            { 

//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
                  for (var i = 0; i < Orjson.length; i++)
                  {
                       $('.logininformation').val(Orjson[i].mname);
                       var chekinfo = $('.logininformation').val();
                       // alert(chekinfo);
                       if(chekinfo == 'NotLogin786')
                       {
                            $('.notlogintag').css('display','block');
                            $('.logintag').css('display','none');
                            
                       }
                       else
                       {    //alert(chekinfo);
                            $('.notlogintag').css('display','none');
                            $('.logintag').css('display','block');
                            $('.userprofpic').html("<img src='"+Orjson[i].MemPic+"' class='user-img' alt='' />");
                       }   
                  
                  }
       
            }
                    
            
        });  

}

/*=============================================================================================================================================   */

function CartuserLogin() {
  
    var od = new FormData();
    var txtPasswordSU= $("#txtPasswordSU").val();
    var txtUserID= $("#txtUserID").val();
    
     var txtCity=$("#txtCity").val();
    var txtCountry=$("#txtCountry").val();
    var txtRegion=$("#txtRegion").val();
    var txtLoginip=$("#txtLoginip").val();
    
    if (txtUserID!='' & txtPasswordSU !='')
{
    $('#Msgs').html('<img src="UserProfileImg/loading2.gif" />'); 
    od.append("txtPasswordSU", txtPasswordSU);
    od.append("txtUserID",txtUserID);
    ////
    //
    od.append("txtCity",txtCity);
    od.append("txtCountry",txtCountry);
    od.append("txtRegion",txtRegion);
    od.append("txtLoginip",txtLoginip);
    //
         $.ajax({
            url: "FMfcgxw2qnkx9/Handlers/Account-Login.ashx",
            type: "POST",
            contentType: false,
            processData: false,
            data: od,
            dataType: "json",
            success: function (Response) {
                if (Response.Success) 
                {
                //$('form').attr('action',Response.Message);
                window.location.href="checkout_info.html";
              
                
                //window.location.href=Response.Message; 
                self.undelegateEvents();
                delete self;
                }
                else 
                {
                //$('#Msgs').html(Response.Message);
                 $('#Msgs').html('');
                 
                 $("#Msgs").html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Ooops! </strong>" + Response.Message + "</div>");

                }
            },
            error: function (err) {
            //$('#Msgs').html(err.statusText);
            $('#Msgs').html('');
              
            $("#Msgs").html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Ooops! </strong>" + err.statusText + "</div>");

            }
        });
   }
}


/*===================================== START FUNCTION =================================*/
function Show_checkoutpayment()
{  

       

            // $('#Showpersonalcareproduct').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

            // $.getJSON('../FMfcgxw2qnkx9/Handlers/Product-list.ashx?p=' + PageIndex + "&s=" + PageSize + "&u="+MemID+ "&frdt="+Fromdt+ "&todt="+Todt+ "&drank="+drank+ "&sts="+sts+ "&Pos="+lvl+ "&Package="+Package,
             //$.getJSON('FMfcgxw2qnkx9/Handlers/Cart-details.ashx?prodcode='+ mxpcode44,
            $.getJSON('FMfcgxw2qnkx9/Handlers/Cart-details.ashx',
            function(Orjson)
            {  
                  
            if(Orjson.length == 0)
            { 
                
             //$('#Showpersonalcareproduct').html('');               
                //$('#ReffList').html(" <div class='alert  red-skin alert-rounded'><img src='images/close-button.png' width='25' heigth='25' alt=''> Sorry, referral record not found...! <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>x</span> </button> </div>   ");
            // $('#Showpersonalcareproduct').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 

            //alert("error");
            
            }
            else 
            {   
           
                var d = formatOrder_checkoutpayment(Orjson);

               $('#checkout-payment-div').html(d);
                              
            }
        });  
}



function formatOrder_checkoutpayment(Orjson)
{  
    var pp1='';
   
    for (var i = 0; i < Orjson.length; i++)
    {
        if(Orjson[i].CartStatus=="empty")
        {
              
             //  $('#cartdetails-div').css('display','none');
             // $('#cartdetails-div2').css('display','block');
             
              
        }
        
        else if(Orjson[i].pagename=='checkout_cart.html')
        {
        
                location.href="checkout_cart.html";
        }
        
        
        else
        {
        
          
        
        pp1 = pp1 + "<div class='border-setion under-place product-section'><div class='product-section1'><div class='left-section pro-paka'>";
        pp1 = pp1 + "<div class='form-group row'><div class='col-md-12'><div class='left-section'><div class='row'><div class='col-md-12'>";
        pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].PCode + "'><img src='" + Orjson[i].ImageFile + "' class='size-product'></a></div></div></div><div class='right-section'><div class='row'>";
        pp1 = pp1 + "<div class='col-md-12'><div class='item1 item-thumbnail1'><a href='product_detail.html?mxpid=FMBM200' class='item-image'></a>";
        pp1 = pp1 + "<div class='item-info'><h4 class='item-title txt-capital'><a style='color:#0066c0;' title='" + Orjson[i].ProductName + "' href='product_detail.html?mxpid=" + Orjson[i].PCode + "'>" + Orjson[i].ProductName + "</a></h4>";
        pp1 = pp1 + "<div class='one'><div class='item-price1'><span class='item-price'>₹" + Orjson[i].Rate + "</span><span class='item-discount-price'> ₹" + Orjson[i].Amount + "</span></div>";
        pp1 = pp1 + "<div class='price-lineso'><span class='discount'>" + Orjson[i].PV + " pv</span> <span class='bv-site'>" + Orjson[i].TotMyCreditPoint + " bv</span></div></div>";
        pp1 = pp1 + "<div class='off-line'><span>Your Save: </span><span class='rate-off'>(" + Orjson[i].Discount + "% off)</span></div>";
        pp1 = pp1 + "<div class='color-green'>" + Orjson[i].Stock + "<span class='color-line'>|</span><span class='color-black'><span class='dark'>Quantity:</span> " + Orjson[i].Quantity + "<a href='checkout_cart.html' style='font-size: 12px;'>Changes</a></span>";
        pp1 = pp1 + "</div></div></div></div></div></div></div></div></div>";
        pp1 = pp1 + "<div class='right-section Get-Order'> <div class='row'><div class='col-md-12'><h4 class='checkout-title title-d Payment-method'>Product delivery :</h4>";
        pp1 = pp1 + "<p class='title-p'><span class='color-green'><a href='Delivery-Center.html'>Get Order Products  from  Delivery  Nearby Center</a> </span></p>";
        pp1 = pp1 + "<div class='color-black'><span class='dark'>Sold by:</span> <span class='max'>Maxcare Retails Pvt. Ltd.</span></div>";
        pp1 = pp1 + "</div></div></div></div></div>";
        
        }
        
    }
    
   return pp1;
}

/*=============================================================END FUNCTION=========================================================================*/


function GetPlaceOrder()
{  


        
        
        $('.overlay3').fadeIn(300);
        jQuery.ajax
        ({
            url: "FMfcgxw2qnkx9/Handlers/Proceed.ashx",
            type: "POST",
            contentType: false,
            processData: false,
            dataType: "json",
            success: function (Response) {
                if (Response.Success==true)
               {
                  myAlertBottom();
                
                 $('#proceedinfo').html("<img  class='' src='images/success.png' style='width: 21px;' >" +   Response.Message);
                 $('body,html').animate({scrollTop : 0}, 500); 
               
                 $('.overlay3').fadeOut();
                
                
                
                location.href="checkout_complete.html"; 
                
                
                }
                else {
                    myAlertBottom();
                
                 $('#proceedinfo').html("<img  class='' src='images/success.png' style='width: 21px;' >" +   Response.Message);
                 $('body,html').animate({scrollTop : 0}, 500); 
                    
                     $('.overlay3').fadeOut(); 
                     location.reload(); 
                }
            },
            error: function (err) {}
        });
        
        
        
        

}

/*===================================================================================================================================================*/

function GetplecedOrderDetails()
{//alert("oooooo");
    $('.overlay3').fadeIn(300); 
      
	    setTimeout(
                    function() 
                    {
                       
                    
                   // $('#overlay4').fadeIn(300); 
                   /*---------------------------------------*/   
	    
	    
	    
	    $.getJSON('FMfcgxw2qnkx9/Handlers/PlaceOrder.ashx',
        function(Orjson)
        {  
              
            if(Orjson.length == 0)
            { 

//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
                  for (var i = 0; i < Orjson.length; i++)
                  {
                      
                     // alert(Orjson[i].Msg);
                      if(Orjson[i].pagename=='checkout_cart.html')
                      {
                        location.href="checkout_cart.html";
                        
                      }
                      else
                      {
                      $('#PaymentStatus').html(Orjson[i].PaymentStatus); 
                      $('#finalmsg').html(Orjson[i].Msg);
                      $('#PurchaseDate').html(Orjson[i].PurchaseDate);
                      $('#PurchaseNo').html(Orjson[i].PurchaseNo);
                      $('#TotalAmount').html(Orjson[i].TotalAmount);  
                      $('#TotalPV').html(Orjson[i].TotalPV); 
                      $('#MyCreditPoint').html(Orjson[i].MyCreditPoint);
                      $('#TypeofPayment').html(Orjson[i].TypeofPayment);
                      $('#MemID').html(Orjson[i].MemID);
                      $('#ItemQty').html(Orjson[i].ItemQty);
                      
                      $('.overlay3').fadeOut();
                      
                      }
                      
                      
                  
                  }
       
            }
                    
            
        });
        
        
        
        
        /*------------------------------------*/ 
                    
                    
                    }, 1000);  
        
     

}

/*===============================================================================================================================================*/

function printPageArea(areaID){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

/*=================================================================================================================================================*/

function CheckShoppingcart()
{ 
  
     $.getJSON('FMfcgxw2qnkx9/Handlers/Cart-summary.ashx',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
               // alert("jj");
//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
//                var d = formatOrder_productdetails(Orjson);

//                $('#Showsingleproductdetails').html(d); <img src="images/product-iphone-6s-plus.png" alt="" />
                  for (var i = 0; i < Orjson.length; i++)
                  {
                  
                    if(Orjson[i].TotPrdcts <= "0")
                    {
                    //alert(Orjson[i].TotPrdcts);
                       location.href="checkout_cart.html";
                    }
                    
                    
                  }
                        
            }
        });  

}

/*===============================================================================================================================================*/


/*=================================================================================================================================================*/

function CheckShoppingcart_placeorder()
{ 
  
     $.getJSON('FMfcgxw2qnkx9/Handlers/Cart-summary.ashx',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
               // alert("jj");
//             $('#Showsingleproductdetails').html('');              
//             
//             $('#Showsingleproductdetails').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
//                var d = formatOrder_productdetails(Orjson);

//                $('#Showsingleproductdetails').html(d); <img src="images/product-iphone-6s-plus.png" alt="" />
                  for (var i = 0; i < Orjson.length; i++)
                  {
                  
                    if(Orjson[i].TotPrdcts <= "0")
                    {
                    //alert(Orjson[i].TotPrdcts);
                     //  location.href="checkout_cart.html";
                    }
                    
                    
                  }
                        
            }
        });  

}

/*===============================================================================================================================================*/




function MaxcareBuyNow()
{ // on loading  start 
$("#overlay").fadeIn(300);
// on loading  end 　
      //alert("jkjkj");
     // document.getElementById("SvPInfo").innerHTML="<img src='UserProfileImg/loading2.gif' />";
    //$('#SvPInfo').html("<img src='UserProfileImg/loading2.gif' />");
    var od = new FormData();
    /////
   
    // var order_no =document.getElementById("").value;
    // var product_type = document.getElementById("").value;
    var quantity =document.getElementById("Get_qty").value;
    var mxpro_code =document.getElementById("Get_prod_id").value;
    /////
    // od.append("order_no", OrderNumber);
    od.append("product_code", mxpro_code);
    // od.append("product_type", product_type);
    od.append("quantity", quantity);    
    //alert(quantity);
    /////


        jQuery.ajax({
            url: "FMfcgxw2qnkx9/Handlers/Add-cart.ashx",
            type: "POST",
            contentType: false,
            processData: false,
            data: od,
            dataType: "json",
            success: function (Response) {
                if (Response.Success==true)
               {
                   
              
                    $('#overlay').fadeOut(10);
                   
//                    $('#Showcartdiv').css('display','block');
//                    $('#cart_msg').html(Response.Message);

                    showcartproduct();
                    showcartsummary();
                    
                    Showcart_summarydata();
	                Showheadercartdetails();
	                
	                getcartquantity();

                  
//                    $('body,html').animate({
//                    scrollTop : 0                      
//                    }, 500);
                    location.href="checkout_cart.html";
                   
                }
                else {
                     
                    $('#overlay').fadeOut(10);
                  
//                     myAlertBottom();
//                    $('#Showcartmsg').html("<img  class='' src='images/error.png' style='width: 21px;' >" +   Response.Message);
                       location.href="checkout_cart.html";                             
                     
                }
            },
            error: function (err) {
                
              // document.getElementById("SvPInfo").innerHTML=err.statusText;
                
            }
        });

}

/*============================================================================================================================================*/


