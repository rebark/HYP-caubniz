$(document).ready(ready);

var item; //will store the result of the query
//retrieve parameters to see if you have to put an extra link
var url = localStorage.getItem('url');
var origin = localStorage.getItem('origin');

console.log(url);
console.log(origin);

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
            var subscribe = (item[0].subscribe == 1);

            //write breadcrumb and go back link
            var bd = "<li class='active'>Smart Life</li><li><a href='smart-life-cat.html?cat=";
            if (isCat){
                bd += encodeURIComponent(item[0].subcat) + "'>" + item[0].subcat.replace("&", "&amp;") + "</a></li>";
            }
            else{
                bd += encodeURIComponent(item[0].category) + "'>" + item[0].category.replace("&", "&amp;") + "</a></li>"+
                    "<li><a href='smart-life-sub.html?cat=" + encodeURIComponent(item[0].subcat) + "'>" + item[0].subcat.replace("&", "&amp;") + "</a></li>";
            }

            //if origin is not null, put the link to go to previous page, i.e the index arrow of P-IDM
            if ( origin !== null && origin !== 'reset'){
                back = "<a href='" + url +"' class='local'> back to " + origin +"</a>";
                $("back").html(back);
            }

            $("#bd").html(bd);
            $("titlepage").html(item[0].name);

            var desc='';
            //if it's on promo display it
            if(item[0].promo){
                desc +=  "<div class='alert alert-success' role='alert'><h5 style='display:inline;'>promo: </h5>" + item[0].promo + "</div>";
            }

            //if you can subscribe, display button
            var button_1 = "";
            if(subscribe){
                button_1 += "<div class='text-center'><a type='button' class='btn btn-danger text-center' href='subscribe.html'>subcribe now!</a></div>";
            }

            desc += item[0].par_1 + "<h3>" + item[0].subtitle + "</h3><div class='row'><div class='col-md-7'><img class='img-responsive center-block' src='"
            + item[0].image_desc + "'></div><div class='col-md-5'><p class='lead side-caption'>"
            + item[0].description +  button_1 +"</p></div></div><div class='container'" + item[0].add_info +"</div>";

            $("desc").html(desc);

            var act = "<p>"+item[0].activation + "</p><div class='row'><div class='download col-md-6'><h6>download the app</h6>"+
                "<img src='img/SL/android.png'><img src='img/SL/ios.png'></div><div class='col-md-6'><br/>discover all the devices you can use with "
                + item[0].name +"<br/><a href='compatible-devices.html?service=" +
                service +"' type='button' class='btn btn-default'> compatible devices</a></div><br/>";

            $("activation").html(act);
            $("rules").html("<p>"+ item[0].rules + "</p>");

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

$(document).on('click', '.local', function (event) {
        localStorage.setItem('origin', 'reset');

        console.log("saved url: " + localStorage.getItem('url'));
        console.log("saved origin: " + localStorage.getItem('origin'));
    });
