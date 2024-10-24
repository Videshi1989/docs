/*===================================== Sending and receiving data in Json format ==============================*/

			function Start()
			{
			    var arr = {message:'what is dress code policy of infusai ?'};
				$.ajax
				({
				url: "http://192.168.200.22:5000/chat",
				type: "POST",
				data: JSON.stringify(arr),
				dataType: 'json',
				async: true,
				contentType: 'application/json; charset=utf-8',
				success: function(msg) 
				{
					//alert(msg);
					console.log(msg);
					$('#showdata').html(msg.message);
					//$('#showdata').append(msg.message);
				}
				});
				
			}

/*==============================================================================================================*/

/*===================================== START FUNCTION =================================*/
function loadOrders_fmcg() 
{  
    
    $('#Showfmcgproductdetail').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

       // $.getJSON('../FMfcgxw2qnkx9/Handlers/Product-list.ashx?p=' + PageIndex + "&s=" + PageSize + "&u="+MemID+ "&frdt="+Fromdt+ "&todt="+Todt+ "&drank="+drank+ "&sts="+sts+ "&Pos="+lvl+ "&Package="+Package,
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?pagesize=6&category=Cat No 5',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                
             $('#Showfmcgproductdetail').html('');             
                //$('#ReffList').html(" <div class='alert  red-skin alert-rounded'><img src='images/close-button.png' width='25' heigth='25' alt=''> Sorry, referral record not found...! <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>x</span> </button> </div>   ");
             $('#Showfmcgproductdetail').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
                //alert("gdg");
                var d = formatOrder_fmcg(Orjson);

                $('#Showfmcgproductdetail').html(d);
                              
            }
        });  
}

function formatOrder_fmcg(Orjson) 
{
    var pp1='';
    for (var i = 0; i < Orjson.length; i++) 
    {
        pp1 = pp1 + "<div class='item item-thumbnail'>";
        pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "' class='item-image'>";
        pp1 = pp1 + "<img src='" + Orjson[i].ImagePath + "' alt='' />";
        pp1 = pp1 + "<div class='discount'>" + Orjson[i].PV + " pv</div></a>";
        pp1 = pp1 + "<div class='item-info'>";
        pp1 = pp1 + "<h4 class='item-title txt-capital'>";
       // pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].NAME + "</a></h4>";
        pp1 = pp1 + "<a style='color:#0066c0;' title='" + Orjson[i].NAME + "' href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].ShotPName + "</a></h4>";
        pp1 = pp1 + "<p class='item-desc'>" + Orjson[i].SubCatName + "</p>";
        pp1 = pp1 + "<div class='item-price'>₹" + Orjson[i].WithoutSaleTaxAmt + "</div>";
        pp1 = pp1 + "<div class='price-lineso'> <span class='item-discount-price'> ₹" + Orjson[i].Amount + "</span><span class='off-line'>" + Orjson[i].BatchNo + "% off</span></div>" ;
        pp1 = pp1 + "</div></div>";

    }

    return pp1;
}

/*===================================== END FUNCTION =================================*/

/*===================================== START FUNCTION =================================*/
function loadOrders_healthcare() 
{  

    $('#Showhealthcareproduct').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

       // $.getJSON('../FMfcgxw2qnkx9/Handlers/Product-list.ashx?p=' + PageIndex + "&s=" + PageSize + "&u="+MemID+ "&frdt="+Fromdt+ "&todt="+Todt+ "&drank="+drank+ "&sts="+sts+ "&Pos="+lvl+ "&Package="+Package,
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?pagesize=6&category=Cat No 7',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                
             $('#Showhealthcareproduct').html('');                
                //$('#ReffList').html(" <div class='alert  red-skin alert-rounded'><img src='images/close-button.png' width='25' heigth='25' alt=''> Sorry, referral record not found...! <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>x</span> </button> </div>   ");
             $('#Showhealthcareproduct').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
                var d = formatOrder_healthcare(Orjson);

                $('#Showhealthcareproduct').html(d);
                              
            }
        });  
}

function formatOrder_healthcare(Orjson) 
{
    var pp1='';
    for (var i = 0; i < Orjson.length; i++) 
    {
        pp1 = pp1 + "<div class='item item-thumbnail'>";
        pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "' class='item-image'>";
        pp1 = pp1 + "<img src='" + Orjson[i].ImagePath + "' alt='' />";
        pp1 = pp1 + "<div class='discount'>" + Orjson[i].PV + " pv</div></a>";
        pp1 = pp1 + "<div class='item-info'>";
        pp1 = pp1 + "<h4 class='item-title txt-capital'>";
        //pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].NAME + "</a></h4>";
        pp1 = pp1 + "<a style='color:#0066c0;' title='" + Orjson[i].NAME + "' href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].ShotPName + "</a></h4>";
        pp1 = pp1 + "<p class='item-desc'>" + Orjson[i].SubCatName + "</p>";
        pp1 = pp1 + "<div class='item-price'>₹" + Orjson[i].WithoutSaleTaxAmt + "</div>";
        pp1 = pp1 + "<div class='price-lineso'> <span class='item-discount-price'> ₹" + Orjson[i].Amount + "</span><span class='off-line'>" + Orjson[i].BatchNo + "% off</span></div>" ;
        pp1 = pp1 + "</div></div>";

    }

    return pp1;
}

/*===================================== END FUNCTION =================================*/

/*===================================== START FUNCTION =================================*/
function loadOrders_personalcare()
{  

    $('#Showpersonalcareproduct').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

       // $.getJSON('../FMfcgxw2qnkx9/Handlers/Product-list.ashx?p=' + PageIndex + "&s=" + PageSize + "&u="+MemID+ "&frdt="+Fromdt+ "&todt="+Todt+ "&drank="+drank+ "&sts="+sts+ "&Pos="+lvl+ "&Package="+Package,
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?pagesize=6&category=Cat No 3',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                
             $('#Showpersonalcareproduct').html('');               
                //$('#ReffList').html(" <div class='alert  red-skin alert-rounded'><img src='images/close-button.png' width='25' heigth='25' alt=''> Sorry, referral record not found...! <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>x</span> </button> </div>   ");
             $('#Showpersonalcareproduct').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
                var d = formatOrder_personalcare(Orjson);

                $('#Showpersonalcareproduct').html(d);
                              
            }
        });  
}

function formatOrder_personalcare(Orjson) 
{
    var pp1='';
    pp1 = pp1 + "<div class='row row-space-10'>";
    for (var i = 0; i < Orjson.length; i++)
    {
        pp1 = pp1 + "<div class='col-lg-2 col-md-4'>";
        pp1 = pp1 + "<div class='item item-thumbnail pro-height'>";
        pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "' class='item-image'>";
        pp1 = pp1 + "<img src='" + Orjson[i].ImagePath + "' alt='' />";
        pp1 = pp1 + "<div class='discount'>" + Orjson[i].PV + " pv</div></a>";
        pp1 = pp1 + "<div class='item-info'>";
        pp1 = pp1 + "<h4 class='item-title txt-capital'>";
        pp1 = pp1 + "<a style='color:#0066c0;' title='" + Orjson[i].NAME + "' href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].NAME + "</a></h4>";
        pp1 = pp1 + "<p class='item-desc'>" + Orjson[i].SubCatName + "</p>";
        pp1 = pp1 + "<div class='item-price'>₹" + Orjson[i].WithoutSaleTaxAmt + "</div>" ;
        pp1 = pp1 + "<div class='price-line'><span class='item-discount-price'> ₹" + Orjson[i].Amount + "</span><span class='off-line'>" + Orjson[i].BatchNo + "% off</span></div>";
        pp1 = pp1 + "</div></div></div>";
    }
    pp1 = pp1 + "</div>";
    return pp1;
   
}

/*===================================== END FUNCTION =================================*/

/*===================================== START FUNCTION =================================*/

    function loadOrders_product_details() 
    {
        var mxpcode = document.getElementById("Get_prod_id").value;
       
        
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?procode='+ mxpcode,
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
                        $('#off').html(Orjson[i].BatchNo);
                        $('#product_name').html(Orjson[i].NAME);
                        $('#mrp').html(Orjson[i].Amount);
                        $('#dp_price').html(Orjson[i].WithoutSaleTaxAmt);
                        $('#category').html(Orjson[i].CatNAME);
                        $('#subcategory').html(Orjson[i].SubCatName);
                        $('#pro_name').html(Orjson[i].NAME);
                        $('#pro_cat').html(Orjson[i].CatNAME);
                        $('#pro_subcat').html(Orjson[i].SubCatName);
                        $('#p_code').html(Orjson[i].Pcode);
                        $('#Show_pv').html(Orjson[i].PV);
                        $('#Show_bv').html(Orjson[i].BV);
                        $('#get_off').html(Orjson[i].BatchNo);
                       
                        
                       // $('#pro_descrition').html(Orjson[i].PrdctDesc);
                        $('#availability').html(Orjson[i].Stock);
                        $('#large-image').html("<img  class='large-img' src='"+Orjson[i].ImagePath+"' >");
                        $('#small_image').html("<img  class='small_img' src='"+Orjson[i].ImagePath+"' >");
                  }
                              
            }
        });  
        
       
    }
    


/*===================================== END FUNCTION =================================*/



/*===================================== START FUNCTION =================================*/
function Get_selected_product(get_pro_cat,cat_name)
{
    $('#show_cat').html(cat_name);
    $('#show_cat2').html(cat_name);
    //alert(cat_name);
    $('#Showproduct').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

       // $.getJSON('../FMfcgxw2qnkx9/Handlers/Product-list.ashx?p=' + PageIndex + "&s=" + PageSize + "&u="+MemID+ "&frdt="+Fromdt+ "&todt="+Todt+ "&drank="+drank+ "&sts="+sts+ "&Pos="+lvl+ "&Package="+Package,
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?pagesize=100&category='+ get_pro_cat,
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                
             $('#Showproduct').html('');             
                //$('#ReffList').html(" <div class='alert  red-skin alert-rounded'><img src='images/close-button.png' width='25' heigth='25' alt=''> Sorry, referral record not found...! <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>x</span> </button> </div>   ");
             $('#Showproduct').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
                //alert("gdg");
                var d = formatOrder_selected_product(Orjson);

                $('#Showproduct').html(d);
                              
            }
        });  
}

function formatOrder_selected_product(Orjson) 
{
    var pp1='';
    var pp1= pp1 + "<div class='row'>";
    for (var i = 0; i < Orjson.length; i++)
    {
       
        pp1 = pp1 + "<div class='item item-thumbnail'>";
        pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "' class='item-image'>";
        pp1 = pp1 + "<img src='" + Orjson[i].ImagePath + "' alt='' />";
        pp1 = pp1 + "<div class='discount'>" + Orjson[i].PV + " pv</div></a>";
        pp1 = pp1 + "<div class='item-info'>";
        pp1 = pp1 + "<h4 class='item-title txt-capital'>";
       // pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].NAME + "</a></h4>";
        pp1 = pp1 + "<a style='color:#0066c0;' title='" + Orjson[i].NAME + "' href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].ShotPName + "</a></h4>";
        pp1 = pp1 + "<p class='item-desc'>" + Orjson[i].SubCatName + "</p>";
        pp1 = pp1 + "<div class='item-price'>₹" + Orjson[i].WithoutSaleTaxAmt + "</div>";
        pp1 = pp1 + "<div class='price-lineso'> <span class='item-discount-price'> ₹" + Orjson[i].Amount + "</span><span class='off-line'>" + Orjson[i].BatchNo + "% off</span></div>" ;
        pp1 = pp1 + "</div></div>";

    }
     var pp1 = pp1 + "</div>";
    
     return pp1;
     
}

/*===================================== END FUNCTION =================================*/



/*===================================== START FUNCTION =================================*/

    function Gettotalnoof_personalcare_pro() 
    {
       
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?category=Cat No 3&pagesize=100',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                

            }
            else 
            {   

                  for (var i = 0; i < Orjson.length; i++)
                  {
                    // $('#show_cat').html(Orjson[i].CatNAME);
                  }
                  $('#tot_pro_per').html(i);

                //  $('#tot_no').html(i);
                 
                  
                              
            }
        });  
        
       
    }
    


/*===================================== END FUNCTION =================================*/

/*===================================== START FUNCTION =================================*/

    function Gettotalnoof_fmcg_pro() 
    {
       
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?category=Cat No 5&pagesize=100',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                

            }
            else 
            {   

                  for (var i = 0; i < Orjson.length; i++)
                  {
                     
                  }
                   $('#tot_pro_fmcg').html(i);
                              
            }
        });  
        
       
    }
    


/*===================================== END FUNCTION =================================*/

/*===================================== START FUNCTION =================================*/

    function Gettotalnoof_health_pro() 
    {
       
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?category=Cat No 7&pagesize=100',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                

            }
            else 
            {   

                  for (var i = 0; i < Orjson.length; i++)
                  {
                      
                  }
                   $('#tot_pro_health').html(i);
                              
            }
        });  
        
       
    }
    


/*===================================== END FUNCTION =================================*/

/*===================================== START FUNCTION =================================*/

    function Gettotalnoof_home_pro() 
    {
       
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?category=Cat No 6&pagesize=100',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                

            }
            else 
            {   

                  for (var i = 0; i < Orjson.length; i++)
                  {
                      
                  }
                   $('#tot_pro_home').html(i);
                              
            }
        });  
        
       
    }
    


/*===================================== END FUNCTION =================================*/
/*===================================== START FUNCTION =================================*/

    function Gettotalnoof_agricul_pro() 
    {
       
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?category=Cat No 4&pagesize=100',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                

            }
            else 
            {   

                  for (var i = 0; i < Orjson.length; i++)
                  {
                      
                  }
                   $('#tot_pro_agri').html(i);
                              
            }
        });  
        
       
    }
    


/*===================================== END FUNCTION =================================*/




    function Get_totproduct(gettot)
    {

        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx?pagesize=100&category=' + gettot,
       function (Orjson) {

           if (Orjson.length == 0) {


           }
           else {

               for (var i = 0; i < Orjson.length; i++) {
                   // $('#show_cat').html(Orjson[i].CatNAME);
               }
               $('#tot_no').html(i);

             



           }
       });

    }
    
    
   /*===================================== START FUNCTION =================================*/

    function Get_all_product_qty() 
    {
       
        $.getJSON('FMfcgxw2qnkx9/Handlers/Product-list1.ashx',
        function(Orjson)
        {  
                
            if(Orjson.length == 0)
            { 
                

            }
            else 
            {   

                  for (var i = 0; i < Orjson.length; i++)
                  {
                      
                  }
                   $('#tot_no').html(i);
                              
            }
        });  
        
       
    }
    


/*===================================== END FUNCTION =================================*/
 
 
 /*===================================== START FUNCTION =================================*/
function Search_product()
{
   var searchproname = $('#seacrhpro').val();
  
    $('#Showproduct').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

       
        $.getJSON('FMfcgxw2qnkx9/Handlers/Search-Product.ashx?keyname='+ searchproname,
        function(Orjson)
        {  
               
            if(Orjson.length == 0)
            { 
                
             $('#Showproduct').html('');             
                
             $('#Showproduct').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
               // alert("ff");
                var d = formatOrder_Searchproduct(Orjson);

               $('#Showproduct').html(d);
               // $('#Showproduct').load("FMfcgxw2qnkx9/Handlers/Product-list.ashx");
                              
            }
        });  
}

function formatOrder_Searchproduct(Orjson) 
{
    var pp1='';
    var pp1= pp1 + "<div class='row'>";
    for (var i = 0; i < Orjson.length; i++)
    {
       
        pp1 = pp1 + "<div class='item item-thumbnail'>";
        pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "' class='item-image'>";
        pp1 = pp1 + "<img src='" + Orjson[i].ImagePath + "' alt='' />";
        pp1 = pp1 + "<div class='discount'>" + Orjson[i].PV + " pv</div></a>";
        pp1 = pp1 + "<div class='item-info'>";
        pp1 = pp1 + "<h4 class='item-title txt-capital'>";
      
        pp1 = pp1 + "<a style='color:#0066c0;' title='" + Orjson[i].NAME + "' href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].ShotPName + "</a></h4>";
        pp1 = pp1 + "<p class='item-desc'>" + Orjson[i].SubCatName + "</p>";
        pp1 = pp1 + "<div class='item-price'>₹" + Orjson[i].WithoutSaleTaxAmt + "</div>";
        pp1 = pp1 + "<div class='price-lineso'> <span class='item-discount-price'> ₹" + Orjson[i].Amount + "</span><span class='off-line'>" + Orjson[i].BatchNo + "% off</span></div>" ;
        pp1 = pp1 + "</div></div>";

    }
     var pp1 = pp1 + "</div>";
    
     return pp1;
     
}

/*===================================== END FUNCTION =================================*/


/*===================================== START FUNCTION =================================*/
function StartFilter()
{
   var searchprice = $('#price_to').val();
  
    $('#Showproduct').html("<div class='preloader3 loader-block'><div class='circ1 loader-warning'></div> <div class='circ2 loader-warning'></div><div class='circ3 loader-warning'></div><div class='circ4 loader-warning'></div></div>");

       
        $.getJSON('FMfcgxw2qnkx9/Handlers/Search-Product.ashx?keyname='+ searchprice,
        function(Orjson)
        {  
               
            if(Orjson.length == 0)
            { 
                
             $('#Showproduct').html('');             
                
             $('#Showproduct').html("<div class='alert alert-warning border-warning'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><i class='icofont icofont-close-line-circled'></i></button><strong>Sorry,</strong>records not found...! </div>  "); 
            }
            else 
            {   
               // alert("ff");
                var d = formatOrder_StartFilter(Orjson);

               $('#Showproduct').html(d);
               // $('#Showproduct').load("FMfcgxw2qnkx9/Handlers/Product-list.ashx");
                              
            }
        });  
}

function formatOrder_StartFilter(Orjson) 
{
    var pp1='';
    var pp1= pp1 + "<div class='row'>";
    for (var i = 0; i < Orjson.length; i++)
    {
       
        pp1 = pp1 + "<div class='item item-thumbnail'>";
        pp1 = pp1 + "<a href='product_detail.html?mxpid=" + Orjson[i].Pcode + "' class='item-image'>";
        pp1 = pp1 + "<img src='" + Orjson[i].ImagePath + "' alt='' />";
        pp1 = pp1 + "<div class='discount'>" + Orjson[i].PV + " pv</div></a>";
        pp1 = pp1 + "<div class='item-info'>";
        pp1 = pp1 + "<h4 class='item-title txt-capital'>";
      
        pp1 = pp1 + "<a style='color:#0066c0;' title='" + Orjson[i].NAME + "' href='product_detail.html?mxpid=" + Orjson[i].Pcode + "'>" + Orjson[i].ShotPName + "</a></h4>";
        pp1 = pp1 + "<p class='item-desc'>" + Orjson[i].SubCatName + "</p>";
        pp1 = pp1 + "<div class='item-price'>₹" + Orjson[i].WithoutSaleTaxAmt + "</div>";
        pp1 = pp1 + "<div class='price-lineso'> <span class='item-discount-price'> ₹" + Orjson[i].Amount + "</span><span class='off-line'>" + Orjson[i].BatchNo + "% off</span></div>" ;
        pp1 = pp1 + "</div></div>";

    }
     var pp1 = pp1 + "</div>";
    
     return pp1;
     
}

/*===================================== END FUNCTION =================================*/