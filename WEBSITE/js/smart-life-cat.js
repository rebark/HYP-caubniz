$(document).ready(ready);

var items; //will store the result of the query


function ready(){
    console.log("I'm ready!");
    var cat = decodeURIComponent(getPameter('cat'));
    console.log("cat = " + cat);

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getSmartLifeCat.php", //Relative or absolute path to file.php file
        data: {cat:cat},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var el = "";

            //write breadcrumb
            var bd = "<li class='active'>Smart Life</a></li>";
            $("#bd").html(bd);

            //write the title
            var title = "<h1>" + items[0].category.replace("&", "&amp;") + "</h1>";
            console.log(title);
            $("category").html(title);

            //build html part for each item
            for(var i = 0; i < items.length; i++){
                el += drawElement(i);
            }


            $("#content-here").html(el);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });


    function drawElement(i){
        var element = "<div class='col-md-6'><div class='thumbnail'>"+
        "<img src='" + items[i].image + "'><div class='caption' style='margin:10px; height:auto;'><h4>"
        + items[i].name + "</h4><p>" + items[i].short_description + "</p>";

        //disable links if they are not implemented
        if (items[i].active == 1 && items[i].subcat == "yes"){
            var tmp = encodeURIComponent(items[i].name);
            element += "<p><a href='smart-life-sub.html?cat="+ tmp +"' class='btn btn-primary' role='button'>View More</a></p></div></div></div>";
        }
        else if (items[i].active == 1){
            element += "<p><a href='smart-life.html?service="+ items[i].id +"' class='btn btn-primary' role='button'>View More</a></p></div></div></div>";
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
