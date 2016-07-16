$(document).ready(ready);

var items; //will store the result of the query

console.log("saved url: " + localStorage.getItem('url'));
console.log("saved origin: " + localStorage.getItem('origin'));

function ready(){
    console.log("I'm ready!");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getHighlights.php", //Relative or absolute path to file.php file

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var el = "";

            //write the title
            var title = "<h1>Highlights</h1>";
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
        "<img src='" + items[i].image + "' class='img-responsive'><div class='caption'><h4>"
        + items[i].name + "</h4><p>" + items[i].highlight_description + "</p>";

        if (items[i].active_in_dropdown == 1){
            element += "<p><a href='assistance-service.html?service="+ items[i].name +"' class='btn btn-primary local' role='button'>View More</a></p></div></div></div>";
        }
        else
            element += "<p><a href='#' class='btn btn-primary disabled' role='button'>View More</a></p></div></div></div>";

        return element;
    }

}

    $(document).on('click', '.local', function (event) {
        localStorage.setItem('url', window.location.href);
        localStorage.setItem('origin', 'highlights');

        console.log("saved url: " + localStorage.getItem('url'));
        console.log("saved origin: " + localStorage.getItem('origin'));
    });
