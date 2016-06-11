$(document).ready(ready);

var item; //will store the result of the query

function ready(){
    console.log("I'm ready!");
    var service = getPameter('service');
    console.log("service = " + service);

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getSmartLife.php", //Relative or absolute path to file.php file
        data: {service:service},

        success: function(response) {
            console.log(JSON.parse(response));
            item = JSON.parse(response);
            var desc = "";
            var back = "";
            var isSub = (item[0].category == item[0].subcat);

            //write breadcrumb and go back link
            var bd = "<li class='active'>Smart Life</a></li><li class='active'>";
            if (isSub){
                bd += item[0].subcat.replace("&", "&amp;") + "</a></li>";
                back = "<a href='smart-life-cat.html?cat=" + encodeURIComponent(item[0].category) +"'> << all "+ item[0].category +" services</a>";
            }
            else{
                bd += item[0].category.replace("&", "&amp;") + "</a></li><li class='active'>" +
                item[0].subcat.replace("&", "&amp;") + "</a></li>";
                back = "<a href='smart-life-sub.html?cat=" + encodeURIComponent(item[0].subcat) +"'> << all "+ item[0].subcat +" services</a>";
            }

            $("#bd").html(bd);
            $("back").html(back);
            $("titlepage").html(item[0].name);

            $("#description").html("<h3>" + item[0].subtitle +"</h3><img src='" + item[0].image_desc +"'>" + item[0].description );

            $("activation").html(item[0].activation + "<a href='compatible-devices.html?service=" + service +"'> compatible devices </a>");
            $("rules").html(item[0].rules);

        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });


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
