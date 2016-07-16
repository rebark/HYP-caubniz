$(document).ready(ready);
var items; //will store the result of the query
var link;
var name;

var url = localStorage.getItem('url');
var origin = localStorage.getItem('origin');

function ready(){
    
    var cat = decodeURIComponent(getPameter('cat'));
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getSpecDevice.php", //Relative or absolute path to file.php file
        data: {iddev:cat},

        success: function(response) {
            
            items = JSON.parse(response);
            link = items[0].Type;
            name = items[0].Name;
            var el = "";


            //write breadcrumb			
           var bd = "<li class='active'>Devices</li><li><a href='DEVTypeDevice.html?Type="+link+"'>"+items[0].Type;
           if(items[0].Type=='Smartphone'){
           bd +=" & Telephone";
           }else{
           if(items[0].Type=='Modem'){
           bd +=" & Networking";}
           }
           bd +="</a></li>";
           $("#bd").html(bd);


            
            //write the title
            var title = "<h1>" + items[0].Name + "</h1>";
          
            $("category").html(title);
            //build html part for each item
            el += drawElement(0);
            //if origin is not null, put the link to go to previous page, i.e the index arrow of P-IDM.
            if ( origin !== null && origin !== 'reset'){
                back = "<a href='" + url +"'> back to " + origin +"</a>";
                $("back").html(back);
            }
            
      
            $("#content-here").html(el);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });


        function drawElement(i){  //function for drawing element in the page
            var element ="<p><br></p><div class='row'><div class='col-md-6'><img src='"+ items[i].FrontImage + "'><br /><br /><br /><p>";
            //verifies if some SL service is related to this device
            if (items[i].SL_Service > 0 ){
            	element +="<h6>Smart life services available for this device:<br></h6>"
            	for(var j=0; j< items[0].SL_Service ; j++){
            	var sl = encodeURIComponent(items[j].SL_id);                   
                var slname = items[j].name;                        
            //insert a button under the device for each sl services related to this device
                element += "<a href='smart-life.html?service="+ sl +"' class='btn btn-primary' role='button' id='local'>"+slname+"</a>";
          	 }}
             //verifies if some Assistance service is related to this device
            if (items[i].Assistance > 0 ){
            	element +="<h6>Assistance service for this device and its associated services:<br></h6>"
            for(var j=0; j< items[0].Assistance ; j++){
            	var ass = encodeURIComponent(items[j].assname);                     
                var assname=items[j].assistance_name;
                var assid=items[j].id_assistance_service;
               
             	 //insert a button under the device for each assistance services related to this device
                if(items[j].single_link == 1){
                element += "<a href='assistance-service.html?service="+ ass +"' class='btn btn-primary' id='local3' role='button'>"+assname+"</a>";}
                else{ element += "<a href='assistance-service.html?service="+ ass +"' class='btn btn-primary' id='local' role='button'>"+assname+"</a>";}
          	 }}																																			
			element +="</p></div><div class='col-md-6'><div class='thumbnail'><div class='caption2'><h4>Features</h4><p>"+ items[i].Features +
            "</p> </div> <hr  align='right' ><div class='col-xs-8'> ";
            if(items[i].Discount == 1)
                {element += "<h4>" + items[i].Price*items[i].Discount + " &euro;</h5></div>";}
                else
                {element += "<h4 span style='color:red;'>"+ items[i].Price*items[i].Discount +"&euro;</h4></div>";}
            element +="<a href='#' class='btn btn-primary disabled' role='button'>Buy Now</a><hr align='right' ></div></div></div></div><div class='row'><br /><br /><br />"+
            
            //panel technical characteristic
            
            "<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'>Technical Characteristic</h4></div>"+
            "<div class='panel-body'><div class=row><div class='col-xs-4'>"+ items[i].DescArg1 +"</div><div class='col-xs-8'>"+ items[i].Description1 +"</div></div><br>"+
            "<div class=row><div class='col-xs-4'>"+ items[i].DescArg2 +"</div><div class='col-xs-8'>"+ items[i].Description2 +"</div></div><br>"+
            "<div class=row><div class='col-xs-4'>"+ items[i].DescArg3 +"</div><div class='col-xs-8'>"+ items[i].Description3 +"</div></div><br>"+
            "<div class=row><div class='col-xs-4'>"+ items[i].DescArg4 +"</div><div class='col-xs-8'>"+ items[i].Description4 +"</div></div><br>"+
            "<div class=row><div class='col-xs-4'>"+ items[i].DescArg5 +"</div><div class='col-xs-8'>"+ items[i].Description5 +"</div></div><br>"+
            "<div class=row><div class='col-xs-4'>"+ items[i].DescArg6 +"</div><div class='col-xs-8'>"+ items[i].Description6 +"</div></div></div><br>";

		  return element;
        }


        //retrieves the parameters from the url
        function getPameter(param) {
        	var vars = {};
        	window.location.href.replace(
        		/[?&]+([^=&]+)=?([^&]*)/gi, // regexp
        		function( m, key, value ) { // callback
        			vars[key] = value !== undefined ? value : '';
        		}
            );

        	if ( param ) {
        		return vars[param] ? vars[param] : null;
        	}

            return vars;
        }
    }
    
    $(document).on('click', '#local', function (event) {
            localStorage.setItem('url', window.location.href);
            localStorage.setItem('origin', name);
        });
	$(document).on('click', '#local3', function (event) {
            localStorage.setItem('origin', 'reset');
        });
