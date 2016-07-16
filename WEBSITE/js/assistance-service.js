$(document).ready(ready);

   var items; //will store the result of the query
   var name;

   var url = localStorage.getItem('url');
   var origin = localStorage.getItem('origin');

   console.log(url);
   console.log(origin);

   function ready(){
       console.log("I'm ready!");
       var service = decodeURIComponent(getParameter('service'));
       console.log("service = " + service);

       $.ajax({
           method: "POST",
           dataType: "json", //type of data
           crossDomain: true, //localhost purposes
           url: "http://caubniz2.altervista.org/php/getAssistanceFaq.php", //Relative or absolute path to file.php file
           data: {service:service},

           success: function(response) {
               console.log(response[0].name);
               items = response;//JSON.parse(response);
               name = items[0].name;
               console.log(name);

               //write breadcrumb
               var bd = "<li class='active'>Assistance Services</li><li><a href='assistance-service-cat.html?category=" +
                        encodeURIComponent(items[0].category) + "'>" + items[0].category.replace("&", "&amp;") + "</a></li>";

			   var back = "";
        		  if (origin !== null && origin !== 'reset'){
                        back = "<a href='" + url +"' class='local'> back to " + origin +"</a>";
                        $("back").html(back);
                    }

               var desc = "";
               if (items[0].active == 1 && items[0].single_link == 1){
                 desc += "<div>" + items[0].description +                            
                            "<br><a href='DEVSpecificDevice.html?cat="+items[0].id_device+"' class='btn btn-default' role='button'>Technical Characteristics</a></div>" +
                         "</div>";
               }
               else if (items[0].active == 1 && items[0].single_link == 0) {
                 desc += "<div>" + items[0].description +
                            "<br><a href='compatible-devices.html?service="+ items[0].id_assistance_service +"&src=assistence' class='btn btn-default' role='button'>Compatible Devices</a></div>" +
                         "</div>";
               }
               else {
                 desc += "<div>" + items[0].description +
                            "<br><button type='button' class='btn btn-default disabled button-margin'>Technical Characteristics</button></div>" +
                         "</div>";
               }

               var faq ="<div class='panel-group' id='accordion'>";
               var i=0;
               var items2 = findDistinctFaqs(items);
               if(items[0].active == 1 && items[0].single_link == 0){
                 for(i = 0; i < items2.length; i++){
                    faq += drawElement (i);
                 }
               }
               else {
                 for(i = 0; i < items.length; i++){
                    faq += drawElement (i);
                 }
               }
               faq += "</div>";
               console.log(faq);

               $("#nextimage").html("<img class='img-responsive' src="+ items[0].image +">");
			   $("#bd").html(bd);
               $("#description").html(desc);
               $("#faq").html(faq);
               $("titlepage").html(items[0].name);
          },
           error: function(request,error){
               console.log(error);
               console.log("Error");
           }
       });

       $.ajax({
           method: "POST",
           dataType: "json", //type of data
           crossDomain: true, //localhost purposes
           url: "http://caubniz2.altervista.org/php/getLandmark.php", //Relative or absolute path to file.php file
           data: {service:service},

           success: function(response) {
               //console.log(response);
               //console.log(JSON.parse(response));
               //alert(response[0]);
               console.log(response[0].name);

               //create the side menu for navigation
               var menu = drawMenu(response);
               $("#menu").html(menu);
          },
           error: function(request,error){
               console.log(error);
               console.log("Error");
           }
       });

       function findDistinctFaqs(response){
         var i, j, dev, present=0;
         var arr = [];
         for(i=0; i<response.length; i++){
            dev=response[i].id_device;
            for(j=0; j<arr.length; j++)
               if(dev==arr[j].id_device)
                 present=1;
            if(present==0)
               arr.push(response[i]);
            else
               present=0;
         }
         return arr;

       }

       //retrieves the parameters from the url
       function drawMenu(response){
           var menu = "";
           for (var i = 0; i < response.length; i++){
               var tmp = response[i].name.replace("&", "&amp;");
               var tmp2 = encodeURIComponent(tmp);
               if (response[i].active_in_dropdown == 1 && response[i].name == service){
                   menu += "<a href='assistance-service.html?service="+ tmp2 +"' class='list-group-item active'>" + tmp + "</a>";
               }
               else if (response[i].active_in_dropdown == 1 && response[i].name != service){
                   menu += "<a href='assistance-service.html?service="+ tmp2 +"' class='list-group-item'>" + tmp + "</a>";
               }
               else
                   menu += "<a href='#' class='list-group-item disabled'>" + tmp + "</a>";
           }

           return menu;
       }


       function getParameter(param) {
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

      function drawElement(i){
        var elem = "<div class='panel panel-default'>" +
          "<div class='panel-heading'>" +
            "<h4 class='panel-title'>" +
              "<a data-toggle='collapse' data-parent=''#accordion' href='#collapse"+i+"'>" +
              items[i].Question +"</a>" +
            "</h4>" +
          "</div>" +
          "<div id='collapse"+i+"' class='panel-collapse collapse'>" + //collapse in invece li lascia tutti aperti all'inizio
            "<div class='panel-body'>" + items[i].Answer + "</div>" +
          "</div>" +
        "</div>";

       return elem;
      }

     }

     $(document).on('click', '.local', function (event) {
        localStorage.setItem('origin', 'reset');

        console.log("saved url: " + localStorage.getItem('url'));
        console.log("saved origin: " + localStorage.getItem('origin'));
    });