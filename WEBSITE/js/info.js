$(document).ready(ready);

var items;

function ready(){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getInfo.php", //Relative or absolute path to file.php file
        data: {},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var desc = "<h2>"+ items[0].name +"</h2><br/><br/><img class='img-responsive center-block' style='width:50%;'src='" + items[0].image + "'><br/><br/><span style='font-size:18px;'>"+ items[0].description+ "</span>";
            $("desc").html(desc);

            var el = "<div class='col-md-10 col-centered'>";

            for (var i = 1; i < items.length; i++){
                el += "<div class='col-md-6'><div class='thumbnail'><h4 style='text-align:center;'>"+ items[i].name + "</h4><img class='img-circle center-block' style='padding:20px; max-height:300px;' src='"+
                items[i].image +"'><p><div class='caption' style='font-size:18px;'>" + items[i].description + "</p></div></div></div>";
            }

            el += "</div>";

            $("values").html(el);

        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}
/*
for (var i = 1; i < items.length; i++){
    if (i%2 !== 0)
        el +=  "<div class='col-md-8 col-centered'>";

    el += "<div class='col-md-4'><div class='thumbnail'><h4 style='text-align:center;'>"+ items[i].name + "</h4><img class='img-circle center-block' style='padding:20px;' src='"+
    items[i].image +"'><p><div class='caption'>" + items[i].description + "</p></div></div></div>";

    if(i%2 == 0)
        el += "</div>"
        */
