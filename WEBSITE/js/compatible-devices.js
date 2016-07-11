$(document).ready(ready);

var items; //will store the result of the query
var env;
var name;

//reset local storage
localStorage.setItem('origin', 'reset');

function ready(){
    console.log("I'm ready!");
    var service = getPameter('service');
    console.log("service = " + service);

    // sets up the breadcrumbs, go back link and title page
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getCompatibleDevicesEnv.php", //Relative or absolute path to file.php file
        data: {service:service},

        success: function(response) {
            console.log(JSON.parse(response));
            env = JSON.parse(response);
            name = env[0].name;
            //write breadcrumb
            var bd = "<li class='active'>Smart Life</a></li><li><a href='smart-life-cat.html?cat="+
                encodeURIComponent(env[0].category) + "'>" + env[0].category.replace("&", "&amp;") + "</a></li>";

            if (  env[0].category !== env[0].subcat){
                bd += "<li><a href='smart-life-sub.html?cat="+ encodeURIComponent(env[0].subcat) + "'>" +
                    env[0].subcat.replace("&", "&amp;") + "</a></li>";
            }
            bd += "<li><a href='smart-life.html?service="+ env[0].id +"'>" + name + "</a></li>";

            $("#bd").html(bd);
            $("titlepage").html(name);

        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });


    // list of compatible devices
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
        var element = "<div class='col-md-3 col-xs-6'><div class='thumbnail'>"+
        "<img src='" + items[i].FrontImage + "'><div class='caption' style='height:auto;'><h6>"
        + items[i].Name + "</h6>";

        if(items[i].Active == 1)
            element += "<a href='DEVSpecificDevice.html?cat=" + items[i].ID_Device + "' class='btn btn-primary local' role='button'>Details</a></div></div></div>";
        else
            element += "<a href='#' class='btn btn-primary disabled' role='button'>Details</a></div></div></div>";

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

$(document).on('click', '.local', function (event) {
                localStorage.setItem('url', window.location.href);
                localStorage.setItem('origin', 'compatible devices with ' + name);
        });
