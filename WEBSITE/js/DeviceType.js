$(document).ready(ready);
localStorage.setItem('origin', 'reset');
var items; //will store the result of the query


function ready(){
    
    var cat = decodeURIComponent(getPameter('Type'));
    var brand = [];
    var os = [];
    
    $(':checkbox:checked').each(function(){
        switch($(this).parent().children().text()){
        	case 'Brand':
            	brand.push($(this).attr('value'));
                break;
            case 'Operative System':
            	os.push($(this).attr('value'));
                break;
        	default:
            	break;
        }
     });
    var priceopt = '';
    
    $(':radio:checked').each(function(){
        priceopt = $(this).attr('value');
     });
     
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getTypeDevice.php", //Relative or absolute path to file.php file
        data: {type:cat},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var el = "";
          
            

            //write breadcrumb
            var bd = "<li class='active'>Devices</li>";
            $("#bd").html(bd);			

            //build html part for each item
            for(var i = 0; i < items.length; i++){
                el += drawElement(i);
            }
			if (el == ""){el += "<div class='alert alert-danger'><strong>No device found!<br></strong>We are sorry, no device has the selected features </div>"}

            $("#content-here").html(el);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });


        function drawElement(i){     //function for drawing element in the page
			
            if(!((brand.indexOf(items[i].Brand)<0 && brand.length>0) || (os.indexOf(items[i].os)<0 && os.length>0) || (items[i].Price*items[i].Discount>priceopt && priceopt !=''))){ 

                var element = "<div class='col-sm-4'><div class='thumbnail'>"+   
                "<img src='" + items[i].FrontImage + "'><div class='caption'><h5>"
                + items[i].Name + "</h5>";
                if(items[i].Discount == 1)
                	{element += "<div class='caption'><h5>" + items[i].Price*items[i].Discount + " &euro;</h5><br>";}
               	 else
               		 {element += "<div class='caption'><h5><s>" + items[i].Price+"&euro;</s></h5><h5 span style='color:red;'>"+ items[i].Price*items[i].Discount +"&euro;</h5>"}
                                                                     
                //disable links if they are not implemented
                //active is in the database, if active=1 the link is active 
                if (items[i].Active == 1 ){
                    var tmp = encodeURIComponent(items[i].ID_Device);                    //link inserted in the button
                    //insert a button "Details" under every device
                    element += "<p><a href='DEVSpecificDevice.html?cat="+ tmp +"' class='btn btn-primary' role='button'>Details</a></p></div></div></div></div>";
                }
                 else
                    element += "<p><a href='#' class='btn btn-primary disabled' role='button'>Details</a></p></div></div></div></div>";


                return element;} 
            else return "";
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

$( ":input" ).click(function() {
  ready();
});
