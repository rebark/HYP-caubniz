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
            var isCat = (item[0].category == item[0].subcat);

            //write breadcrumb and go back link
            var bd = "<li class='active'>Smart Life</li><li><a href='smart-life-cat.html?cat=";
            if (isCat){
                bd += encodeURIComponent(item[0].subcat) + "'>" + item[0].subcat.replace("&", "&amp;") + "</a></li>";
                back = "<a href='smart-life-cat.html?cat=" + encodeURIComponent(item[0].category) +"'> << all "+ item[0].category +" services</a>";
            }
            else{
                bd += encodeURIComponent(item[0].category) + "'>" + item[0].category.replace("&", "&amp;") + "</a></li>"+
                    "<li><a href='smart-life-sub.html?cat=" + encodeURIComponent(item[0].subcat) + "'>" + item[0].subcat.replace("&", "&amp;") + "</a></li>";
                back = "<a href='smart-life-sub.html?cat=" + encodeURIComponent(item[0].subcat) +"'> << all "+ item[0].subcat +" services</a>";
            }

            $("#bd").html(bd);
            $("back").html(back);
            $("titlepage").html(item[0].name);

            var desc = "<div class='container' style='margin-top:20px;>"
            + item[0].par_1 + "<h3>" + item[0].subtitle + "</h3><div class='row'><div class='col-md-7'><img class='img-responsive center-block' src='"
            + item[0].image_desc + "'></div><div class='col-md-5'><p class='lead side-caption'>"
            + item[0].description + "</p></div></div></div>";

            $("#description").html(desc);

            var act = "<p>"+item[0].activation + "</p><div class='download col-md-6'><h6>download the app</h6>"+
                "<img src='img/SL/android.png'><img src='img/SL/ios.png'></div><div class='col-md-6'>"+
                "<h6>start using " + item[0].name +"</h6><button type='button' class='btn btn-default disabled'>subcribe now!</button></div>" +
                "<a href='compatible-devices.html?service=" + service +"'> compatible devices</a>";

            $("activation").html(act);
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
