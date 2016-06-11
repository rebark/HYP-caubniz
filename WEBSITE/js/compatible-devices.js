$(document).ready(ready);

var items; //will store the result of the query

function ready(){
    console.log("I'm ready!");
    var service = getPameter('service');
    console.log("service = " + service);

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getCompatibleDevices.php", //Relative or absolute path to file.php file
        data: {service:service},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var el = "";

            //write breadcrumb and go back link
            var bd = "<li class='active'>Smart Life</a></li>";

            $("#bd").html(bd);

            //build html part for each item
            for(var i = 0; i < items.length; i++){
                el += drawElement(i);
            }

            $("#items-here").html(el);

        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

    function drawElement(i){
        var element = "<div class='col-lg-3 col-md-4 col-xs-6'><div class='thumbnail'>"+
        "<img src='" + items[i].FrontImage + "'><div class='caption'><h4>"
        + items[i].Name + "</h4><p></div></div></div>" ;

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
