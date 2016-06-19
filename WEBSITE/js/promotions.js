$(document).ready(ready);

var items; //will store the result of the query


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
            var el = "";

            //build html part for each item
            for(var i = 0; i < items.length; i++){
                el += drawDevice(i);
            }


            $("#content-here").html(el);
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
            var el = "";

            //build html part for each item
            for(var i = 0; i < items.length; i++){
                el += drawSL(i);
            }

            $("#content-here").append(el);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });


        function drawDevice(i){     //6/12   md desktop normali in su   lg desktop grandi   xs cellulari  e ce nè una anche per i tablet sm
            var element = "<div class='col-sm-4'><div class='thumbnail'>"+   //crea tanti rettangolini quanti ne ho bisogno
            "<img src='" + items[i].FrontImage + "'><div class='caption'><h5>"
            + items[i].Name + "</h5><div class='caption'><h5>" + items[i].Price*items[i].Discount +"</h5>";
                                                                  //è un'aggiunta questa
            //disable links if they are not implemented
            //active è nel database è un campo che mi dice se il link è attivo o no
            if (items[i].Active == 1 ){
                var tmp = encodeURIComponent(items[i].ID_Device);                    //link messo all'interno del bottone
                //serve per mettere un link a un pulsante  /pulsantino details sotto ogni imagine di smartphone
                element += "<p><a href='DEVSpecificDevice.html?cat="+ tmp +"' class='btn btn-primary' role='button'>Details</a></p></div></div></div></div>";
            }
            else
                element += "<p><a href='#' class='btn btn-primary disabled' role='button'>Details</a></p></div></div></div></div>";

            return element;
        }
        
        //SL
        function drawSL(i){
        var element = "<div class='col-sm-4'><div class='thumbnail'>"+
        "<img src='" + items[i].image + "' alt=''>"+
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
