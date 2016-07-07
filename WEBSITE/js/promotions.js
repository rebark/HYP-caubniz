$(document).ready(ready);

var items; //will store the result of the query
localStorage.setItem( 'url', window.location.href);
localStorage.setItem( 'origin', 'promotions' );


console.log("saved url: " + localStorage.getItem('url'));
console.log("saved origin: " + localStorage.getItem('origin'));

function ready(){
    console.log("I'm ready!");
    var cat = '1';  //sarà da cambiare anche se così funziona
    console.log("cat = " + cat);

    //Devices
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getPromotionDevice.php", //Relative or absolute path to file.php file
        data: {discount:cat},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var dev='';

            //build html part for each item
            for(var i = 0; i < items.length; i++){
                dev += drawDevice(i);
            }

            $('devices').html(dev);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

    //SL
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getSmartLifePromo.php", //Relative or absolute path to file.php file
        data: {},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var sl = '';

            //build html part for each item
            for(var i = 0; i < items.length; i++){
                sl += drawSL(i);
            }

            $('sl').html(sl);

        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });


        function drawDevice(i){
            var element = "<div class='col-sm-6 col-md-4'><div class='thumbnail' style='min-height:420px;'>"+
            "<img src='" + items[i].FrontImage + "' style='max-height:230px;'><div class='caption'><h5>"
            + items[i].Name + "</h5><h5><s>" + items[i].Price+"&euro;</s></h5><h5 span style='color:red;'>"
            + items[i].Price*items[i].Discount +"&euro;</h5>";

            if (items[i].Active == 1 ){
                var tmp = encodeURIComponent(items[i].ID_Device);
                element += "<p><a href='DEVSpecificDevice.html?cat="+ tmp +"' class='btn btn-primary' role='button'>Details</a></p></div></div></div>";
            }
            else
                element += "<p><a href='#' class='btn btn-primary disabled' role='button'>Details</a></p></div></div></div>";

            return element;
        }

        //SL
        function drawSL(i){
        var element = "<div class='col-sm-6 col-md-4'><div class='thumbnail' style='min-height:420px;'>"+
        "<img src='" + items[i].image + "'style='margin-top:25px; margin-bottom:25px;'>"+
        "<div class='caption'><h4>" + items[i].name + "</h4><p>" + items[i].promo + "</p>";

        //disable links if they are not implemented
        if (items[i].active == 1 ){
            element += "<p><a href='smart-life.html?service=" + items[i].id + "' class='btn btn-primary' role='button'>View More</a></p></div></div></div>";
        }
        else
            element += "<p><a href='#' class='btn btn-primary disabled' role='button'>View More</a></p></div></div></div>";

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
