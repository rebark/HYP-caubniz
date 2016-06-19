$(document).ready(ready);

var items;

function ready(){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://caubniz2.altervista.org/php/getProjects.php", //Relative or absolute path to file.php file
        data: {},

        success: function(response) {
            console.log(JSON.parse(response));
            items = JSON.parse(response);
            var el = "";

            for (var i = 0; i < items.length; i++){
                el += drawElement(i);
            }
            el += "<hr class='project-divider'>";

            $("projects").html(el);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

    function drawElement(i){
        var element = "<hr class='project-divider'><div class='row project'>";
        if( i%2 == 0){
            element += "<div class='col-sm-7 col-sm-push-5'><h2 class='project-heading'>"+
            items[i].category + "</h2><h3 style='text-transform:none;'>" + items[i].name +
            "</h3></h2><p class='lead'>" + items[i].short_description +
            "</p><button type='button' class='btn btn-default disabled'><h6>view all projects</h6></button></div><div class='col-sm-5 col-sm-pull-7 pic'>"+
            "<img class='img-responsive center-block'src='"+
            items[i].image +"'></div></div>";
        }
        else{
            element += "<div class='col-sm-7'><h2 class='project-heading'>"+
            items[i].category + "</h2><h3 style='text-transofrm:none;'>" + items[i].name +
            "</h3></h2><p class='lead'>" + items[i].short_description +
            "</p><button type='button' class='btn btn-default disabled'><h6>view all projects</h6></button></div><div class='col-sm-5 pic'>" +
            "<img class='img-responsive center-block' src='"+
            items[i].image +"'></div></div>";
        }


        return element;
    }

}