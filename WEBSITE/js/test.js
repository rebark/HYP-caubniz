$(document).ready(ready);

var items; //will store the result of the query
var cat; //category to be retrieved with *magics*

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getFilm&TV.php", //Relative or absolute path to file.php file
        data: {cat},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var el="";
            for(var i = 0; i < items.length; i++){
                el += drawElement(el, i);
            }


            $("#content-here").html(el);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

    function drawElement(element, i){
        element = "<div class='col-sm-6 col-md-4' id='" + toString(items[i].id) + "'><div class='thumbnail'><img src='" + items[i].image + "' alt=''><div class='caption'><h4>" + items[i].name + "</h4><p>" + items[i].shortDescription + "</p>";
        //disable links if they are not implemented
        if (items[i].id == 1)
            element += "<p><a href='"+ "put link here" + "' class='btn btn-primary' role='button'>View More</a><p></div></div></div>"; //fix the link
        else
            element += "<p><a href='#' class='btn btn-primary disabled' role='button'>View More</a><p></div></div></div>";

        return element;
    }


}
