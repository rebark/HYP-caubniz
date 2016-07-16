$(document).ready(ready);

   var items,i; //will store the result of the query

   function ready(){
       console.log("I'm ready!");
       var category = decodeURIComponent(getParameter('category'));
       console.log("category = " + category);

       $.ajax({
           method: "POST",
           dataType: "json", //type of data
           crossDomain: true, //localhost purposes
           url: "http://caubniz2.altervista.org/php/getASSubcategoryList.php", //Relative or absolute path to file.php file
           data: {category:category},

           success: function(response) {
               console.log(response);
               //console.log(JSON.parse(response));
               items = findDistinctSubcat(response);
               console.log(items);

               //write breadcrumb
               var bd = "<li class='active'>Assistance Services</a></li>";
               $("#bd").html(bd);

               //write the title
               var title = "<h1>" + response[0].category.replace("&", "&amp;") + "</h1>";
               console.log(title);
               $("category").html(title);

               var element=" ";
               for(i = 0; i < items.length; i++){// in items there's an array with the name of the 6 subcategories of the category that you want, for example modem & networking
                 element += drawElement(i, items, response);
               }
			   
               $("#content-here").html(element);                           
               
               var j=0;
               for(i=0; i< items.length; i++){
                 for(j=0; j<response.length; j++){
                    if(response[j].subcategory==items[i].subcategory){
                        if(response[j].active_in_dropdown == 1 && response[j].Active == 1)
                           $("#dropdown"+i+"Ass ul").append('<li><a href="assistance-service.html?service='+ response[j].name + '">'+ response[j].name +'</a></li>');
                        else if(response[j].active_in_dropdown == 0 && response[j].Active == 1)
                           $("#dropdown"+i+"Ass ul").append('<li class="disabled"><a href="#">'+ response[j].name +'</a></li>');
                    }  
                 }
              }


           },
           error: function(request,error){
               console.log(error);
               console.log("Error");
           }
       });


     function findDistinctSubcat(response){
       var i, j, sub, present=0;
       var arr = [];
       console.log(response.length);
       for(i=0; i<response.length; i++){
          sub=response[i].subcategory;
          for(j=0; j<arr.length; j++){
             if(sub==arr[j].subcategory){
               present=1;              
             }  
          }     
          if(present==0){
             arr.push(response[i]);
          }   
          else
             present=0;
       }
       for(j=0;j<arr.length;j++)
          console.log(arr[j].subcategory);
       return arr;

     }

     function drawElement(i, item, response){
        var elem = "<div class='col-md-4 top-buffer bottom-buffer'>" +
            "<h3>" + item[i].subcategory.replace('&', '&amp;') + "</h3>" +
            "<img src='"+ item[i].Image +"' class='top-buffer bottom-buffer img-responsive'>" +
            "<p class='top-buffer bottom-buffer width=80%'>"+ item[i].Short_Description +"</p>";

        if(item[i].Active == 1){
          elem += "<div class='dropdown' id='dropdown"+i+"Ass'>" + //id dropdowns: dropdown1Ass, dropdown2Ass... id of buttons related: button1Ass, button2Ass
                    "<button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true' id='button"+i+"Ass'>"+"View Assistance Services"+
                    "<span class='caret'></span></button>" +
                    "<ul class='dropdown-menu'>" +
                    "</ul>" +
                  "</div>" +
                  "</div>";
        }
        else {
          elem += "<div>" +
                    "<button class='btn btn-primary disabled' type='button'>"+"View Assistance Services"+
                    "<span class='caret'></span></button>" +
                  "</div>" +
                  "</div>";          
        }

      return elem;
    }

       
       //retrieves the parameters from the url
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
        
     }
