$(document).ready(ready);

var items; //will store the result of the query
var env;
var name;
var src;
var bd;

//reset local storage
localStorage.setItem('origin', 'reset');

function ready(){
    console.log("I'm ready!");
    var parameters = getPameter();
    var service = parameters['service'];
    src = parameters['src'];

    src = getPameter('src');
    if (src == 'sl'){
        var url1 = "http://caubniz2.altervista.org/php/getCompatibleDevicesEnv.php";
        var url2 = "http://caubniz2.altervista.org/php/getCompatibleDevices.php";
    }else {
        var url1 = "http://caubniz2.altervista.org/php/getCompatibleDevicesEnvAS.php";
        var url2 = "http://caubniz2.altervista.org/php/getCompatibleDevicesAs.php";
    }

    // sets up the breadcrumbs, go back link and title page
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: url1, //Relative or absolute path to file.php file
        data: {service:service},

        success: function(response) {
            console.log(JSON.parse(response));
            env = JSON.parse(response);
            name = env[0].name;
            var bd;

            if (src == 'sl')
                bd = envSL();
            else
                bd = envASS();

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
        url: url2, //Relative or absolute path to file.php file
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

    function envSL(){
        bd = "<li class='active'>Smart Life</a></li><li><a href='smart-life-cat.html?cat="+
            encodeURIComponent(env[0].category) + "'>" + env[0].category.replace("&", "&amp;") + "</a></li>";

        if (  env[0].category !== env[0].subcat){
            bd += "<li><a href='smart-life-sub.html?cat="+ encodeURIComponent(env[0].subcat) + "'>" +
                env[0].subcat.replace("&", "&amp;") + "</a></li>";
        }
        bd += "<li><a href='smart-life.html?service="+ env[0].id +"'>" + name + "</a></li>";

        return bd;
    }

    function envASS(){
        bd = "<li class='active'>Assistance Services</a></li><li><a href='assistance-service-cat.html?category="+
               encodeURIComponent(env[0].category) + "'>" + env[0].category.replace("&", "&amp;") + "</a></li>";

        bd += "<li><a href='assistance-service.html?service="+ env[0].name +"'>" + env[0].name + "</a></li>";

        return bd;
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
