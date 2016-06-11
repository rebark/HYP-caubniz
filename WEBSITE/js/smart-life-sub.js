$(document).ready(ready);

var items; //will store the result of the query

function ready(){
    console.log("I'm ready!");
    var sub = decodeURIComponent(getPameter('cat'));
    var cat = "TV & Entertainement";

    console.log("sub = " + sub);

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getSmartLifeSub.php", //Relative or absolute path to file.php file
        data: {cat:cat, sub:sub},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var el = "";

            //write breadcrumb
            var bd = "<li class='active'>Smart Life</a></li><li class='active'>" + cat + "</a></li>";
            $("#bd").html(bd);

            //write go back link
            var back = "<a href='smart-life-cat.html?cat=" + encodeURIComponent(cat) +"'> << all "+ cat +" services</a>"
            $("back").html(back);

            //create the side menu for navigation
            var menu = drawMenu();
            $("#menu").html(menu);

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
        var element = "<div class='col-sm-6 col-md-4'><div class='thumbnail'>"+
        "<img src='" + items[i].image + "' alt=''>"+
        "<div class='caption'><h4>" + items[i].name + "</h4><p>" + items[i].short_description + "</p>";

        //disable links if they are not implemented
        if (items[i].active == 1 ){
            element += "<p><a href='smart-life.html?service=" + items[i].id + "' class='btn btn-primary' role='button'>View More</a></p></div></div></div>";
        }
        else
            element += "<p><a href='#' class='btn btn-primary disabled' role='button'>View More</a></p></div></div></div>";

        return element;
    }

    function drawMenu(){
        var menu = "";
        for (var i = 0; i < items.length; i++){
            var tmp = items[i].name.replace("&", "&amp;");
            if (items[i].active == 1){
                var tmp2 = encodeURIComponent(tmp);
                menu += "<a href='smart-life-sub.html?cat=" + tmp2 + "' class='list-group-item active'>" + tmp + "</a>";
            }
            else
                menu += "<a href='#' class='list-group-item disabled'>" + tmp + "</a>";
        }

        return menu;
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
